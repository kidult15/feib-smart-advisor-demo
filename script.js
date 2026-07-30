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
    label: '近期要去日本旅遊',
    products: [
      ['旅遊金融', '日圓換匯與外幣帳戶', '可先比較換匯方式與持有外幣的需求，安排旅途前的資金準備。'],
      ['信用卡服務', '海外消費支付方案', '出發前可了解海外消費、回饋與交易安全等相關服務資訊。'],
      ['旅遊服務', '旅遊保障資訊', '可進一步查詢出國前常見的保障與緊急支援服務。']
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
  grid.replaceChildren(...products.map(([type, title, description]) => {
    const card = document.createElement('article');
    card.className = 'recommendation-card';
    card.innerHTML = `<span class="product-type">${type}</span><h3>${title}</h3><p>${description}</p><a href="#disclaimer">了解服務方向 →</a>`;
    return card;
  }));
  resultSection.hidden = false;
  resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

scenarioButtons.forEach((button) => button.addEventListener('click', () => {
  scenarioButtons.forEach((item) => item.classList.toggle('is-selected', item === button));
  const scenario = scenarios[button.dataset.scenario];
  input.value = scenario.label;
  showRecommendations(scenario.label, scenario.products);
}));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const need = input.value.trim();
  if (!need) return;
  const matchedScenario = /美元|外幣|定存/.test(need) ? scenarios.deposit : /日本|旅遊|日圓|出國/.test(need) ? scenarios.travel : scenarios.wealth;
  showRecommendations(need, matchedScenario.products);
});

document.querySelector('#resetButton').addEventListener('click', () => {
  resultSection.hidden = true;
  input.focus();
});
