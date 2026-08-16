const scenarios = {
  deposit: {
    label: '我想了解美元定存',
    products: [
      ['外幣服務', '美元定期存款', '依你的外幣儲蓄目標，先了解適用幣別、存期與換匯時點，再由專人說明正式條件。'],
      ['數位銀行', '外幣帳戶與換匯服務', '可作為外幣資金管理的起點。正式匯率、手續費與服務規範應以銀行公告為準。'],
      ['理財規劃', '資產配置諮詢', '若外幣部位是整體資產規劃的一部分，可預約了解風險承受度與配置方向。']
    ]
  },
  travel: {
    label: '我想了解消費與生活優惠',
    products: [
      ['日常消費', '日常通路刷卡優惠', '可了解購物、服飾、藥妝與行動支付等日常消費回饋。'],
      ['行動支付', '行動支付回饋活動', '可依常用支付方式查詢目前適用的刷卡回饋與活動條件。'],
      ['旅遊消費', '旅遊與交通優惠', '可進一步了解訂房、行程、航空與交通等消費優惠。']
    ]
  },
  wealth: {
    label: '我想規劃閒置資金',
    products: [
      ['資金管理', '短期資金停泊選項', '先釐清預計使用時間、流動性與可承受風險，再了解可能適用的產品類型。'],
      ['理財規劃', '財富管理諮詢', '由專人依財務目標、風險屬性與投資期間說明合適規劃方向。'],
      ['數位銀行', '帳戶資金管理工具', '透過帳戶與數位服務，協助你掌握日常資金配置與交易需求。']
    ]
  }
};

const form = document.querySelector('#needForm');
const input = document.querySelector('#customerNeed');
const resultSection = document.querySelector('#recommendations');
const grid = document.querySelector('#recommendationGrid');
const summary = document.querySelector('#needSummary');
const scenarioButtons = [...document.querySelectorAll('.scenario-card')];

function showRecommendations(label, products) {
  summary.textContent = `根據你的需求：「${label}」；以下為可進一步了解的服務方向。`;
  grid.replaceChildren(...products.map(([type, title, description, url]) => {
    const card = document.createElement('article');
    card.className = 'recommendation-card';
    const typeLabel = document.createElement('span');
    typeLabel.className = 'product-type';
    typeLabel.textContent = type;
    const heading = document.createElement('h3');
    heading.textContent = title;
    const copy = document.createElement('p');
    copy.textContent = description;
    const link = document.createElement('a');
    link.href = url || '#disclaimer';
    link.textContent = url ? '查看官網來源 →' : '了解服務方向 →';
    if (url) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    card.append(typeLabel, heading, copy, link);
    return card;
  }));
  resultSection.hidden = false;
  resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

let scenarioRecommendationsPromise;

function loadScenarioRecommendations() {
  if (!scenarioRecommendationsPromise) {
    scenarioRecommendationsPromise = fetch('data/scenario-recommendations.json?v=20260815-3').then((response) => {
      if (!response.ok) throw new Error('無法載入固定情境資料');
      return response.json();
    });
  }
  return scenarioRecommendationsPromise;
}

scenarioButtons.forEach((button) => button.addEventListener('click', async () => {
  scenarioButtons.forEach((item) => item.classList.toggle('is-selected', item === button));
  const scenario = scenarios[button.dataset.scenario];
  input.value = scenario.label;

  try {
    const fixedRecommendations = await loadScenarioRecommendations();
    const selected = fixedRecommendations[button.dataset.scenario];
    const products = selected.items.map((item) => [item.type, item.title, item.description, item.url]);
    showRecommendations(selected.label, products);
  } catch (error) {
    console.error('Scenario data error:', error);
    showRecommendations(scenario.label, scenario.products);
  }
}));

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const need = input.value.trim();
  if (!need) return;

  summary.textContent = `正在分析你的需求：「${need}」...`;
  grid.replaceChildren();
  resultSection.hidden = false;

  try {
    const response = await fetch('http://127.0.0.1:8000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        question: need
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.detail || 'API request failed');
    }

    summary.textContent = data.answer;

    const sources = Array.isArray(data.sources) ? data.sources : [];

    grid.replaceChildren(...sources.map((source) => {
      const card = document.createElement('article');
      card.className = 'recommendation-card';

      const title = document.createElement('h3');
      title.textContent = source.title || '相關活動';

      card.appendChild(title);

      if (source.url) {
        const link = document.createElement('a');
        link.href = source.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = '查看活動來源 →';
        card.appendChild(link);
      }

      return card;
    }));

    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch (error) {
    console.error('Chat API error:', error);
    summary.textContent = `目前無法取得 AI 回覆：${error.message}`;
    grid.replaceChildren();
  }
});

document.querySelector('#resetButton').addEventListener('click', () => {
  resultSection.hidden = true;
  input.focus();
});

const faqCategoryOrder = [
  ['contentFinancialManagement', '投資理財'],
  ['contentCreditCard', '信用卡'],
  ['contentDeposit', '存款與開戶'],
  ['contentForeignExchange', '外幣服務'],
  ['contentDigitalDeposit', '數位帳戶']
];
const faqTabs = document.querySelector('#faqTabs');
const faqList = document.querySelector('#faqList');
const faqMore = document.querySelector('#faqMore');
let faqCategories = [];
let activeFaqCategory = '';
let showAllFaqs = false;

function createFaqItem(item, index) {
  const article = document.createElement('article');
  article.className = 'faq-item';
  const answerId = `faq-answer-${activeFaqCategory}-${index}`;
  const trigger = document.createElement('button');
  trigger.className = 'faq-question';
  trigger.type = 'button';
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('aria-controls', answerId);

  const number = document.createElement('span');
  number.className = 'faq-number';
  number.textContent = String(index + 1).padStart(2, '0');
  const question = document.createElement('span');
  question.className = 'faq-question-text';
  question.textContent = item.question;
  const icon = document.createElement('span');
  icon.className = 'faq-toggle';
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = '+';
  trigger.append(number, question, icon);

  const answer = document.createElement('div');
  answer.className = 'faq-answer';
  answer.id = answerId;
  answer.hidden = true;
  const copy = document.createElement('p');
  copy.textContent = item.answer_text;
  answer.append(copy);

  trigger.addEventListener('click', () => {
    const willOpen = trigger.getAttribute('aria-expanded') !== 'true';
    faqList.querySelectorAll('.faq-question[aria-expanded="true"]').forEach((openTrigger) => {
      openTrigger.setAttribute('aria-expanded', 'false');
      openTrigger.querySelector('.faq-toggle').textContent = '+';
      document.querySelector(`#${openTrigger.getAttribute('aria-controls')}`).hidden = true;
    });
    trigger.setAttribute('aria-expanded', String(willOpen));
    icon.textContent = willOpen ? '−' : '+';
    answer.hidden = !willOpen;
  });

  article.append(trigger, answer);
  return article;
}

function renderFaqCategory(categoryId) {
  const category = faqCategories.find((item) => item.id === categoryId);
  if (!category) return;
  activeFaqCategory = categoryId;
  const visibleFaqs = showAllFaqs ? category.faqs : category.faqs.slice(0, 5);
  faqTabs.querySelectorAll('.faq-tab').forEach((tab) => {
    const selected = tab.dataset.category === categoryId;
    tab.classList.toggle('is-active', selected);
    tab.setAttribute('aria-selected', String(selected));
  });
  faqList.replaceChildren(...visibleFaqs.map(createFaqItem));
  faqMore.hidden = category.faqs.length <= 5;
  faqMore.innerHTML = showAllFaqs
    ? '收合問題 <span aria-hidden="true">↑</span>'
    : `查看${category.name}全部問題 <span aria-hidden="true">→</span>`;
}

async function initializeFaq() {
  if (!faqTabs || !faqList || !faqMore) return;
  try {
    const response = await fetch('data/processed/faq.json?v=20260804-1');
    if (!response.ok) throw new Error('無法載入常見問題');
    const data = await response.json();
    faqCategories = faqCategoryOrder.map(([id, label]) => {
      const source = data.categories.find((category) => category.id === id);
      return source ? { ...source, name: label } : null;
    }).filter(Boolean);
    if (!faqCategories.length) throw new Error('常見問題資料格式不符');
    faqTabs.replaceChildren(...faqCategories.map((category, index) => {
      const button = document.createElement('button');
      button.className = 'faq-tab';
      button.type = 'button';
      button.role = 'tab';
      button.dataset.category = category.id;
      button.setAttribute('aria-selected', String(index === 0));
      button.textContent = category.name;
      button.addEventListener('click', () => {
        showAllFaqs = false;
        renderFaqCategory(category.id);
      });
      return button;
    }));
    renderFaqCategory(faqCategories[0].id);
  } catch (error) {
    console.error('FAQ data error:', error);
    faqList.innerHTML = '<p class="faq-status">目前無法載入常見問題，請稍後再試或前往官網查詢。</p>';
  }
}

faqMore?.addEventListener('click', () => {
  showAllFaqs = !showAllFaqs;
  renderFaqCategory(activeFaqCategory);
});

initializeFaq();
