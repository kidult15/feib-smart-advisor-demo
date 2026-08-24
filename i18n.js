(() => {
  const messages = {
    zh: {
      'meta.title': '智慧金融推薦助理',
      'meta.description': '智慧金融推薦助理介面示範。',
      brand: '智慧金融推薦助理',
      'header.homeAria': '智慧金融推薦助理首頁',
      'header.navAria': '主要導覽',
      'header.services': '服務介紹',
      'header.faq': '常見問題',
      'header.contact': '聯絡專員',
      'header.quizKicker': '60 秒探索',
      'header.styleLabel': '瀏覽風格',
      'header.menuAria': '開啟行動版選單',
      'language.aria': '語言選擇',
      'hero.eyebrow': 'FROM YOUR PLANS · TO WHAT COMES NEXT',
      'hero.cta': '開始規劃',
      'advisor.eyebrow': 'FROM YOUR LIFE PLAN',
      'advisor.title': '從您的生活計畫開始',
      'advisor.scenarioDeposit': '外幣與儲蓄',
      'advisor.scenarioTravel': '消費與生活優惠',
      'advisor.scenarioWealth': '投資與理財規劃',
      'advisor.scenariosAria': '需求情境',
      'advisor.inputLabel': '或直接輸入你的需求',
      'advisor.placeholder': '例如：三個月後要去日本，希望先準備日圓',
      'advisor.submit': '取得建議',
      'advisor.submitAria': '取得推薦',
      'advisor.privacy': '請勿輸入身分證字號、帳號、密碼或其他個人敏感資訊。',
      'result.eyebrow': 'PERSONALISED RESULT · MOCK',
      'result.title': '你可能想進一步了解',
      'result.reset': '重新探索',
      'result.summary': '根據你的需求：「{need}」；以下為可進一步了解的服務方向。',
      'result.sourceLink': '查看官網來源 →',
      'result.directionLink': '了解服務方向 →',
      'result.analyzing': '正在分析你的需求：「{need}」...',
      'result.apiError': '目前無法取得建議，請稍後再試；您也可以先選擇上方情境快速瀏覽。',
      'result.sourceTitle': '相關活動',
      'result.sourceCta': '查看活動來源 →',
      'result.disclaimer': '本頁為 PoC 展示，內容僅供介面與功能測試，不構成金融商品招攬、要約、投資或交易建議。',
      'faq.eyebrow': 'CLIENT SUPPORT · FAQ',
      'faq.title': '常見問題',
      'faq.intro': '從最常遇到的問題開始，快速找到需要的資訊。',
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
      'faq.digitalAccount': '數位帳戶',
      'footer.prototype': '前端 PoC 展示 · 2026',
      'footer.disclaimer': '本頁內容僅供功能與介面測試，不構成金融建議。',
      'quiz.introKicker': 'FINANCIAL STYLE DISCOVERY',
      'quiz.closeAria': '關閉財務風格探索',
      'quiz.styleChoicesAria': '直接切換瀏覽風格',
      'quiz.introTitle': '你的財務習慣，<br />適合哪一種規劃方式？',
      'quiz.introCopy': '用 5 個簡單選擇，找出最適合你的瀏覽風格。約 60 秒完成。',
      'quiz.start': '開始探索',
      'quiz.note': '此測驗僅調整網站呈現方式，不構成投資風險評估或金融建議。',
      'quiz.questionKicker': 'YOUR FINANCIAL HABITS',
      'quiz.back': '← 上一題',
      'quiz.resultKicker': 'YOUR FINANCIAL STYLE',
      'quiz.recommendedLabel': '推薦你的財務風格',
      'quiz.currentLabel': '目前瀏覽風格',
      'quiz.confirm': '確認風格',
      'quiz.retake': '重新測驗'
    },
    en: {
      'meta.title': 'Smart Financial Advisor',
      'meta.description': 'A smart financial advisor interface prototype.',
      brand: 'Smart Financial Advisor',
      'header.homeAria': 'Smart Financial Advisor home',
      'header.navAria': 'Primary navigation',
      'header.services': 'Services',
      'header.faq': 'FAQ',
      'header.contact': 'Contact an Advisor',
      'header.quizKicker': '60-sec discovery',
      'header.styleLabel': 'Browsing Style',
      'header.menuAria': 'Open mobile navigation',
      'language.aria': 'Choose language',
      'hero.eyebrow': 'FROM YOUR PLANS · TO WHAT COMES NEXT',
      'hero.cta': 'Start planning',
      'advisor.eyebrow': 'FROM YOUR LIFE PLAN',
      'advisor.title': 'Start with what matters to you',
      'advisor.scenarioDeposit': 'Foreign Currency & Savings',
      'advisor.scenarioTravel': 'Spending & Lifestyle Benefits',
      'advisor.scenarioWealth': 'Investment & Wealth Planning',
      'advisor.scenariosAria': 'Planning scenarios',
      'advisor.inputLabel': 'Or tell us what you need',
      'advisor.placeholder': 'For example: I am visiting Japan in three months and want to prepare yen',
      'advisor.submit': 'Get suggestions',
      'advisor.submitAria': 'Get recommendations',
      'advisor.privacy': 'Please do not enter an ID number, account number, password, or other sensitive personal information.',
      'result.eyebrow': 'PERSONALISED RESULT · MOCK',
      'result.title': 'You may want to explore',
      'result.reset': 'Start over',
      'result.summary': 'Based on your need — “{need}” — here are a few services you may want to explore.',
      'result.sourceLink': 'View official source →',
      'result.directionLink': 'Explore this direction →',
      'result.analyzing': 'Analysing your request — “{need}”...',
      'result.apiError': 'Suggestions are currently unavailable. Please try again later, or choose one of the scenarios above to explore.',
      'result.sourceTitle': 'Related offer',
      'result.sourceCta': 'View offer source →',
      'result.disclaimer': 'This PoC is for interface and feature testing only. It is not a solicitation, offer, investment recommendation, or transaction advice.',
      'faq.eyebrow': 'CLIENT SUPPORT · FAQ',
      'faq.title': 'Frequently Asked Questions',
      'faq.intro': 'Start with the questions customers ask most often. English translations are provided for convenience; the latest official Chinese information prevails.',
      'faq.aria': 'FAQ categories',
      'faq.loading': 'Loading frequently asked questions…',
      'faq.loadError': 'Frequently asked questions are unavailable right now. Please try again later.',
      'faq.retry': 'Try again',
      'faq.showAll': 'View all {category} questions',
      'faq.collapse': 'Show fewer questions',
      'faq.investment': 'Investing',
      'faq.creditCard': 'Credit Cards',
      'faq.deposit': 'Deposits & Accounts',
      'faq.foreignExchange': 'Foreign Exchange',
      'faq.digitalAccount': 'Digital Accounts',
      'footer.prototype': 'Frontend PoC · 2026',
      'footer.disclaimer': 'This page is for interface and feature testing only. It is not financial advice.',
      'quiz.introKicker': 'FINANCIAL STYLE DISCOVERY',
      'quiz.closeAria': 'Close financial style discovery',
      'quiz.styleChoicesAria': 'Switch browsing style directly',
      'quiz.introTitle': 'Which planning style<br />fits your financial habits?',
      'quiz.introCopy': 'Make five simple choices to find the browsing style that suits you best. It takes about 60 seconds.',
      'quiz.start': 'Start discovery',
      'quiz.note': 'This quiz only changes how the website is presented. It is not an investment risk assessment or financial advice.',
      'quiz.questionKicker': 'YOUR FINANCIAL HABITS',
      'quiz.back': '← Previous question',
      'quiz.resultKicker': 'YOUR FINANCIAL STYLE',
      'quiz.recommendedLabel': 'Your recommended financial style',
      'quiz.currentLabel': 'Current browsing style',
      'quiz.confirm': 'Use this style',
      'quiz.retake': 'Retake quiz'
    }
  };

  let currentLanguage;
  try {
    currentLanguage = localStorage.getItem('siteLanguage') === 'en' ? 'en' : 'zh';
  } catch (error) {
    currentLanguage = 'zh';
  }

  function t(key, variables = {}) {
    const template = messages[currentLanguage][key] ?? messages.zh[key] ?? key;
    return Object.entries(variables).reduce(
      (text, [name, value]) => text.replaceAll(`{${name}}`, value),
      template
    );
  }

  function translateDocument() {
    document.documentElement.lang = currentLanguage === 'en' ? 'en' : 'zh-Hant';
    document.body.dataset.language = currentLanguage;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      element.innerHTML = t(element.dataset.i18nHtml);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      element.placeholder = t(element.dataset.i18nPlaceholder);
    });
    document.querySelectorAll('[data-i18n-content]').forEach((element) => {
      element.content = t(element.dataset.i18nContent);
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
      element.setAttribute('aria-label', t(element.dataset.i18nAriaLabel));
    });
    document.querySelectorAll('[data-language]').forEach((button) => {
      const selected = button.dataset.language === currentLanguage;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
  }

  function setLanguage(language, notify = true) {
    const nextLanguage = language === 'en' ? 'en' : 'zh';
    if (nextLanguage === currentLanguage && notify) return;
    currentLanguage = nextLanguage;
    try {
      localStorage.setItem('siteLanguage', currentLanguage);
    } catch (error) {
      console.warn('Language preference could not be saved.', error);
    }
    translateDocument();
    if (notify) {
      window.dispatchEvent(new CustomEvent('languagechange', { detail: { language: currentLanguage } }));
    }
  }

  window.i18n = {
    get language() { return currentLanguage; },
    setLanguage,
    t,
    translateDocument
  };

  document.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });

  translateDocument();
})();
