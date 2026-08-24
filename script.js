// The page and API share the same host. Local and LAN previews only differ by hostname.
const API_BASE = `http://${window.location.hostname}:8000`;
const legacyMessages = {
  'result.summary': '根據你的需求：「{need}」；以下為可進一步了解的服務方向。',
  'result.sourceLink': '查看官網來源 →',
  'result.directionLink': '了解服務方向 →',
  'result.analyzing': '正在分析你的需求：「{need}」...',
  'result.apiError': '目前無法取得建議，請稍後再試；您也可以先選擇上方情境快速瀏覽。',
  'result.sourceTitle': '相關活動',
  'result.sourceCta': '查看活動來源 →',
  'faq.aria': '常見問題分類',
  'faq.loading': '正在載入常見問題⋯⋯',
  'faq.loadError': '目前無法載入常見問題，請稍後再試。',
  'faq.retry': '重新載入',
  'faq.showAll': '查看{category}全部問題',
  'faq.collapse': '收合問題',
  'faq.investment': '投資理財',
  'faq.creditCard': '信用卡',
  'faq.deposit': '存款與開戶',
  'faq.foreignExchange': '外幣服務',
  'faq.digitalAccount': '數位帳戶'
};
const language = () => document.querySelector('#languageSwitch') && window.i18n?.language === 'en' ? 'en' : 'zh';
const t = (key, variables = {}) => {
  if (window.i18n?.t) return window.i18n.t(key, variables);
  return Object.entries(variables).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, value),
    legacyMessages[key] || key
  );
};

const mobileNavToggle = document.querySelector('#mobileNavToggle');
const mobileNav = document.querySelector('#mobileNav');

function setMobileNav(open) {
  if (!mobileNavToggle || !mobileNav) return;
  mobileNavToggle.setAttribute('aria-expanded', String(open));
  mobileNavToggle.classList.toggle('is-open', open);
  mobileNav.hidden = !open;
}

mobileNavToggle?.addEventListener('click', () => {
  setMobileNav(mobileNavToggle.getAttribute('aria-expanded') !== 'true');
});
mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMobileNav(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileNavToggle?.getAttribute('aria-expanded') === 'true') {
    setMobileNav(false);
    mobileNavToggle.focus();
  }
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 820) setMobileNav(false);
});

const scenarioFallbacks = {
  zh: {
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
  },
  en: {
    deposit: {
      label: 'I want to explore foreign-currency and savings options',
      products: [
        ['USD TIME DEPOSIT', '2026 Q3 “Jing You Li” Nine-Month USD Time Deposit', 'A fixed promotional annual rate of 4.0% for a nine-month USD time deposit. The minimum placement is USD 5,000 and qualifying new funds are required. Foreign-currency deposits carry exchange-rate risk.', 'https://www.feib.com.tw/activity?id=4405'],
        ['TWD TIME DEPOSIT', '2026 Q3 “Xin You Li” One-Year TWD Time Deposit', 'A one-year TWD time-deposit offer with a fixed promotional annual rate of 1.80%. The minimum placement is NT$50,000 and qualifying new funds are required.', 'https://www.feib.com.tw/activity?id=4454'],
        ['DEMAND DEPOSIT', 'May 2026 “Xin Huo Li Wang” Offer', 'Eligible registered accounts with qualifying new funds may receive bonus rates on USD and TWD demand deposits. See the offer page for eligibility, limits, and interest calculations.', 'https://www.feib.com.tw/activity?id=4538']
      ]
    },
    travel: {
      label: 'I want to explore spending and lifestyle benefits',
      products: [
        ['EVERYDAY SPENDING', 'Far Eastern Happy Credit Card: Up to 5% Back', 'Promotional rewards are available at selected department stores, supermarkets, online retailers, fashion and beauty merchants, and for LINE Pay purchases. Monthly registration, eligible merchants, and reward caps apply.', 'https://www.feib.com.tw/activity?id=1980'],
        ['MOBILE PAYMENT', 'HAPPY GO Pay: Up to 5× Points at Selected Merchants', 'Link an eligible Far Eastern credit card to HAPPY GO Pay and meet the per-transaction requirement at selected retail, online, telecom, and hotel merchants to earn promotional points.', 'https://www.feib.com.tw/activity?id=1183'],
        ['TRAVEL EXPERIENCES', 'Up to 15% Off KKday with a Far Eastern Credit Card', 'Promotional codes are available for selected Wi-Fi, eSIM, tour, and Japan Rail products, with additional registered spend rewards. Conditions and caps apply.', 'https://www.feib.com.tw/activity?id=4643']
      ]
    },
    wealth: {
      label: 'I want to explore investment and wealth planning',
      products: [
        ['FUNDS', 'Domestic and Offshore Mutual Funds', 'Browse domestic and offshore funds by code or name and review product information, net asset values, and performance. Assess your risk profile and read the prospectus before investing.', 'https://feibbank.moneydj.com/Fund'],
        ['INDEX PRODUCTS', 'Foreign ETFs', 'Explore foreign ETFs that track different markets, sectors, or indices. ETFs provide access to a basket of assets but remain exposed to market, currency, and price volatility.', 'https://feibbank.moneydj.com/ETF'],
        ['FIXED INCOME', 'Foreign Bonds', 'Explore government and corporate bonds across currencies, maturities, and yield profiles. Credit, interest-rate, liquidity, and exchange-rate risks apply.', 'https://www.feib.com.tw/L2?focusid=type2&id=p30&targetid=p5']
      ]
    }
  }
};

const form = document.querySelector('#needForm');
const input = document.querySelector('#customerNeed');
const resultSection = document.querySelector('#recommendations');
const grid = document.querySelector('#recommendationGrid');
const summary = document.querySelector('#needSummary');
const scenarioButtons = [...document.querySelectorAll('.scenario-card')];
let selectedScenarioKey = '';
let scenarioRequestId = 0;

function showRecommendations(label, products, { scroll = true } = {}) {
  summary.textContent = t('result.summary', { need: label });
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
    link.textContent = t(url ? 'result.sourceLink' : 'result.directionLink');
    if (url) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    card.append(typeLabel, heading, copy, link);
    return card;
  }));
  resultSection.hidden = false;
  if (scroll) resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

let scenarioRecommendationsPromise;

function loadScenarioRecommendations() {
  if (!scenarioRecommendationsPromise) {
    scenarioRecommendationsPromise = fetch('data/scenario-recommendations.json?v=20260815-3').then((response) => {
      if (!response.ok) throw new Error('Unable to load scenario data');
      return response.json();
    });
  }
  return scenarioRecommendationsPromise;
}

async function getScenario(scenarioKey) {
  if (language() === 'en') return scenarioFallbacks.en[scenarioKey];
  try {
    const data = await loadScenarioRecommendations();
    const selected = data[scenarioKey];
    return {
      label: selected.label,
      products: selected.items.map((item) => [item.type, item.title, item.description, item.url])
    };
  } catch (error) {
    console.error('Scenario data error:', error);
    return scenarioFallbacks.zh[scenarioKey];
  }
}

async function selectScenario(button, { scroll = true } = {}) {
  const requestId = ++scenarioRequestId;
  selectedScenarioKey = button.dataset.scenario;
  scenarioButtons.forEach((item) => {
    item.classList.toggle('is-selected', item === button);
    item.classList.remove('is-loading');
    item.removeAttribute('aria-busy');
  });
  button.classList.add('is-loading');
  button.setAttribute('aria-busy', 'true');
  try {
    const scenario = await getScenario(selectedScenarioKey);
    if (requestId !== scenarioRequestId) return;
    input.value = scenario.label;
    showRecommendations(scenario.label, scenario.products, { scroll });
  } finally {
    button.classList.remove('is-loading');
    button.removeAttribute('aria-busy');
  }
}

scenarioButtons.forEach((button) => button.addEventListener('click', () => selectScenario(button)));

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  scenarioRequestId += 1;
  selectedScenarioKey = '';
  scenarioButtons.forEach((button) => button.classList.remove('is-selected'));

  const need = input.value.trim();
  if (!need) return;

  summary.textContent = t('result.analyzing', { need });
  grid.replaceChildren();
  resultSection.hidden = false;
  form.classList.add('is-loading');
  form.setAttribute('aria-busy', 'true');
  resultSection.setAttribute('aria-busy', 'true');
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

  try {
    const response = await fetch(`${API_BASE}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: need })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || 'API request failed');

    summary.textContent = data.answer;
    const sources = Array.isArray(data.sources) ? data.sources : [];
    grid.replaceChildren(...sources.map((source) => {
      const card = document.createElement('article');
      card.className = 'recommendation-card';
      const title = document.createElement('h3');
      title.textContent = source.title || t('result.sourceTitle');
      card.appendChild(title);
      if (source.url) {
        const link = document.createElement('a');
        link.href = source.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = t('result.sourceCta');
        card.appendChild(link);
      }
      return card;
    }));
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch (error) {
    console.error('Chat API error:', error);
    summary.textContent = t('result.apiError');
    grid.replaceChildren();
  } finally {
    form.classList.remove('is-loading');
    form.removeAttribute('aria-busy');
    resultSection.removeAttribute('aria-busy');
    submitButton.disabled = false;
  }
});

document.querySelector('#resetButton').addEventListener('click', () => {
  resultSection.hidden = true;
  input.focus();
});

const faqCategoryOrder = [
  ['contentFinancialManagement', 'faq.investment'],
  ['contentCreditCard', 'faq.creditCard'],
  ['contentDeposit', 'faq.deposit'],
  ['contentForeignExchange', 'faq.foreignExchange'],
  ['contentDigitalDeposit', 'faq.digitalAccount']
];
const faqTabs = document.querySelector('#faqTabs');
const faqList = document.querySelector('#faqList');
const faqMore = document.querySelector('#faqMore');
let faqCategories = [];
let activeFaqCategory = '';
let showAllFaqs = false;
let faqLoadId = 0;
const faqDataPromises = {};

function renderFaqStatus(message, { loading = false, error = false } = {}) {
  const panel = document.createElement('div');
  panel.className = `faq-status${loading ? ' is-loading' : ''}${error ? ' is-error' : ''}`;
  const copy = document.createElement('p');
  copy.textContent = message;
  panel.append(copy);

  if (error) {
    const actions = document.createElement('div');
    actions.className = 'faq-status-actions';
    const retry = document.createElement('button');
    retry.type = 'button';
    retry.textContent = t('faq.retry');
    retry.addEventListener('click', () => initializeFaq({ reload: true }));
    actions.append(retry);
    panel.append(actions);
  }

  faqList.replaceChildren(panel);
  faqList.setAttribute('aria-busy', String(loading));
  faqMore.hidden = true;
}

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
  faqList.setAttribute('aria-busy', 'false');
  faqMore.hidden = category.faqs.length <= 5;
  faqMore.replaceChildren(document.createTextNode(t(showAllFaqs ? 'faq.collapse' : 'faq.showAll', { category: category.name })), document.createTextNode(showAllFaqs ? ' ↑' : ' →'));
}

function loadFaqData(locale) {
  if (!faqDataPromises[locale]) {
    const path = locale === 'en' ? 'assets/faq-en.json?v=20260824-1' : 'data/processed/faq.json?v=20260804-1';
    faqDataPromises[locale] = fetch(path).then((response) => {
      if (!response.ok) throw new Error('Unable to load FAQ data');
      return response.json();
    });
  }
  return faqDataPromises[locale];
}

async function initializeFaq({ reload = false } = {}) {
  if (!faqTabs || !faqList || !faqMore) return;
  const requestId = ++faqLoadId;
  const locale = language();
  if (reload) delete faqDataPromises[locale];
  faqTabs.replaceChildren();
  renderFaqStatus(t('faq.loading'), { loading: true });
  faqTabs.setAttribute('aria-label', t('faq.aria'));

  try {
    const data = await loadFaqData(locale);
    if (requestId !== faqLoadId) return;
    faqCategories = faqCategoryOrder.map(([id, labelKey]) => {
      const source = data.categories.find((category) => category.id === id);
      return source ? { ...source, name: t(labelKey) } : null;
    }).filter(Boolean);
    if (!faqCategories.length) throw new Error('Unexpected FAQ data format');

    const nextActiveCategory = faqCategories.some((category) => category.id === activeFaqCategory)
      ? activeFaqCategory
      : faqCategories[0].id;
    faqTabs.replaceChildren(...faqCategories.map((category) => {
      const button = document.createElement('button');
      button.className = 'faq-tab';
      button.type = 'button';
      button.role = 'tab';
      button.dataset.category = category.id;
      button.textContent = category.name;
      button.addEventListener('click', () => {
        showAllFaqs = false;
        renderFaqCategory(category.id);
      });
      return button;
    }));
    renderFaqCategory(nextActiveCategory);
  } catch (error) {
    if (requestId !== faqLoadId) return;
    console.error('FAQ data error:', error);
    faqTabs.replaceChildren();
    renderFaqStatus(t('faq.loadError'), { error: true });
  }
}

faqMore?.addEventListener('click', () => {
  showAllFaqs = !showAllFaqs;
  renderFaqCategory(activeFaqCategory);
});

window.addEventListener('languagechange', () => {
  showAllFaqs = false;
  initializeFaq();
  if (selectedScenarioKey) {
    const selectedButton = scenarioButtons.find((button) => button.dataset.scenario === selectedScenarioKey);
    if (selectedButton) selectScenario(selectedButton, { scroll: false });
  }
});

initializeFaq();
