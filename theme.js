(() => {
  const financialStyles = {
    heritage: {
      image: 'assets/hero-heritage-library.png?v=20260906-1',
      imageWebp: 'assets/hero-heritage-library.webp?v=20260906-1',
      imageMobileWebp: 'assets/hero-heritage-library-mobile.webp?v=20260906-1',
      zh: {
        title: '傳承規劃者', short: '長期與信任',
        description: '你傾向先理解全貌，再做審慎而長遠的安排。沉穩、完整且值得信賴的資訊，最能幫助你做出決定。',
        heroTitle: ['每一個打算，', '都值得更好的下一步。'],
        heroCopy: ['不論是資金安排、旅行計畫，或還沒想清楚的選擇，', '從你的需求出發，找到適合自己的方向。'],
        alt: '深木藏書室中的皮革帳冊與經典銀行燈，象徵審慎而長遠的財務規劃'
      },
      en: {
        title: 'Heritage Planner', short: 'Long-term & trusted',
        description: 'You prefer to understand the full picture before making careful, long-term plans. Calm, complete, and trustworthy information helps you decide with confidence.',
        heroTitle: ['Every plan deserves', 'a better next step.'],
        heroCopy: ['Whether you are arranging funds, planning a trip, or still weighing your options,', 'start with what you need and find a direction that feels right.'],
        alt: 'A leather ledger and classic banker lamp in a dark wood library, representing careful long-term financial planning'
      }
    },
    precision: {
      image: 'assets/hero-precision.png?v=20260906-1',
      imageWebp: 'assets/hero-precision.webp?v=20260906-1',
      imageMobileWebp: 'assets/hero-precision-mobile.webp?v=20260906-1',
      zh: {
        title: '精準行動派', short: '清楚與效率',
        description: '你習慣釐清選項、比較差異，再果斷採取下一步。結構清楚、重點明確的資訊，最符合你的決策節奏。',
        heroTitle: ['釐清現在，', '決定下一步。'],
        heroCopy: ['將需求、時間與資金條件放在一起思考，', '找到清楚、合適，也能開始行動的方向。'],
        alt: '黃銅圓頂檯燈下的高級木質西洋棋盤與對弈中的棋子，象徵思考布局與精準決策'
      },
      en: {
        title: 'Precision Strategist', short: 'Clear & efficient',
        description: 'You like to clarify the options, compare the differences, and then act decisively. Structured, focused information matches the way you make decisions.',
        heroTitle: ['Clarity for today.', 'Confidence for what’s next.'],
        heroCopy: ['Bring your needs, timing, and financial conditions into one clear view,', 'then find a practical direction you can act on.'],
        alt: 'An inlaid wooden chessboard with a game in progress under a brass dome lamp, representing thoughtful strategy and precise decisions'
      }
    },
    lifestyle: {
      image: 'assets/hero-lifestyle.png?v=20260906-1',
      imageWebp: 'assets/hero-lifestyle.webp?v=20260906-1',
      imageMobileWebp: 'assets/hero-lifestyle-mobile.webp?v=20260906-1',
      zh: {
        title: '從容生活家', short: '生活與彈性',
        description: '你會先從生活目標出發，再安排資金如何配合。溫暖、具體而保有彈性的建議，最能讓你安心前進。',
        heroTitle: ['把想過的生活，', '一步一步安排好。'],
        heroCopy: ['旅行、家庭，或還在形成中的計畫，', '從生活出發，找到舒服而適合自己的節奏。'],
        alt: '自然光下的胡桃木黑膠唱盤、砂色陶瓶與尤加利枝葉，象徵從容而有品味的生活規劃'
      },
      en: {
        title: 'Life-first Planner', short: 'Flexible & human',
        description: 'You begin with the life you want, then decide how your finances can support it. Warm, practical, and flexible guidance helps you move forward comfortably.',
        heroTitle: ['Plan for the life you want,', 'one step at a time.'],
        heroCopy: ['For travel, family, or plans that are still taking shape,', 'begin with life and find a pace that feels natural to you.'],
        alt: 'A walnut record player, sand-colored ceramic vase, and eucalyptus in natural light, representing relaxed and thoughtful life planning'
      }
    }
  };

  const quizQuestions = {
    zh: [
      ['面對一筆暫時不用的資金，你通常會？', [['heritage', '先保留，確認長期安排'], ['precision', '比較數字後，盡快做決定'], ['lifestyle', '先想近期有哪些生活計畫']]],
      ['規劃一件重要事情時，你最需要什麼？', [['heritage', '完整背景與可信賴的專業意見'], ['precision', '清楚選項、差異與下一步'], ['lifestyle', '從我的生活需求開始討論']]],
      ['查看金融資訊時，你偏好的方式是？', [['heritage', '沉穩、詳盡，而且有脈絡'], ['precision', '簡潔、結構化，容易比較'], ['lifestyle', '親切、具體，用生活情境說明']]],
      ['你通常如何看待未來？', [['heritage', '提前安排，為長期留下餘裕'], ['precision', '設定目標，逐步完成'], ['lifestyle', '保持彈性，讓選擇配合生活']]],
      ['哪一句話最接近你？', [['heritage', '好的安排，經得起時間'], ['precision', '清楚之後，我就會行動'], ['lifestyle', '財務應該讓生活更從容']]]
    ],
    en: [
      ['When you have money you will not need for a while, what do you usually do?', [['heritage', 'Hold on to it while I review my long-term plan'], ['precision', 'Compare the numbers and decide promptly'], ['lifestyle', 'Think about the life plans coming up soon']]],
      ['When planning something important, what helps you most?', [['heritage', 'Full context and trusted professional guidance'], ['precision', 'Clear options, differences, and next steps'], ['lifestyle', 'A conversation that starts with my lifestyle needs']]],
      ['How do you prefer financial information to be presented?', [['heritage', 'Calm, detailed, and well contextualised'], ['precision', 'Concise, structured, and easy to compare'], ['lifestyle', 'Friendly, practical, and grounded in real life']]],
      ['How do you usually think about the future?', [['heritage', 'Plan ahead and leave room for the long term'], ['precision', 'Set a target and complete it step by step'], ['lifestyle', 'Stay flexible and let choices support my life']]],
      ['Which statement sounds most like you?', [['heritage', 'A good plan stands the test of time'], ['precision', 'Once it is clear, I am ready to act'], ['lifestyle', 'Finances should make life feel more at ease']]]
    ]
  };

  const quizDialog = document.querySelector('#styleQuiz');
  const quizIntro = document.querySelector('#quizIntro');
  const quizQuestion = document.querySelector('#quizQuestion');
  const quizResult = document.querySelector('#quizResult');
  const quizOptions = document.querySelector('#quizOptions');
  const questionText = document.querySelector('#quizQuestionText');
  const stepLabel = document.querySelector('#quizStep');
  const progressBar = document.querySelector('#quizProgressBar');
  const styleChoices = document.querySelector('#styleChoices');
  const heroThemeImage = document.querySelector('#heroThemeImage');
  const heroThemeSource = document.querySelector('#heroThemeSource');
  const heroThemeSourceMobile = document.querySelector('#heroThemeSourceMobile');
  const heroVisual = document.querySelector('.hero-visual');
  const currentStyleLabel = document.querySelector('#currentStyleLabel');

  if (!quizDialog || !heroThemeImage || !heroThemeSource || !heroThemeSourceMobile || !heroVisual || !currentStyleLabel || !document.querySelector('#quizLaunch')) return;

  let quizIndex = 0;
  let quizAnswers = [];
  let pendingStyle = 'heritage';
  let resultRequiresConfirmation = false;

  const language = () => window.i18n?.language === 'en' ? 'en' : 'zh';
  const translatedStyle = (styleKey) => {
    const style = financialStyles[styleKey] || financialStyles.heritage;
    return { ...style, ...style[language()] };
  };

  function setQuizView(view) {
    quizIntro.hidden = view !== 'intro';
    quizQuestion.hidden = view !== 'question';
    quizResult.hidden = view !== 'result';
  }

  function applyFinancialStyle(styleKey, save = true) {
    const style = translatedStyle(styleKey);
    document.body.dataset.theme = styleKey;
    document.querySelector('#heroTitleLead').textContent = style.heroTitle[0];
    document.querySelector('#heroTitleAccent').textContent = style.heroTitle[1];
    document.querySelector('#heroCopyLead').textContent = style.heroCopy[0];
    document.querySelector('#heroCopyClose').textContent = style.heroCopy[1];
    heroVisual.classList.add('is-changing');

    window.setTimeout(() => {
      heroThemeSource.srcset = style.imageWebp;
      heroThemeSourceMobile.srcset = style.imageMobileWebp;
      heroThemeImage.src = style.image;
      heroThemeImage.alt = style.alt;
      if (heroThemeImage.complete) heroVisual.classList.remove('is-changing');
    }, 160);

    if (save) localStorage.setItem('financialStyle', styleKey);
  }

  heroThemeImage.addEventListener('load', () => heroVisual.classList.remove('is-changing'));

  function renderQuestion() {
    const questions = quizQuestions[language()];
    const [question, options] = questions[quizIndex];
    stepLabel.textContent = `${String(quizIndex + 1).padStart(2, '0')} / ${String(questions.length).padStart(2, '0')}`;
    progressBar.style.width = `${((quizIndex + 1) / questions.length) * 100}%`;
    questionText.textContent = question;
    document.querySelector('#quizBack').hidden = quizIndex === 0;

    quizOptions.replaceChildren(...options.map(([styleKey, label], optionIndex) => {
      const button = document.createElement('button');
      button.className = 'quiz-option';
      button.type = 'button';
      button.innerHTML = `<b>${String.fromCharCode(65 + optionIndex)}</b><span>${label}</span>`;
      button.addEventListener('click', () => {
        quizAnswers[quizIndex] = styleKey;
        if (quizIndex < questions.length - 1) {
          quizIndex += 1;
          renderQuestion();
        } else {
          showQuizResult(calculateStyle(), true);
        }
      });
      return button;
    }));
  }

  function calculateStyle() {
    const scores = { heritage: 0, precision: 0, lifestyle: 0 };
    quizAnswers.forEach((answer) => { scores[answer] += 1; });
    const highest = Math.max(...Object.values(scores));
    const tied = Object.keys(scores).filter((key) => scores[key] === highest);
    return tied.includes(quizAnswers[quizAnswers.length - 1]) ? quizAnswers[quizAnswers.length - 1] : tied[0];
  }

  function showQuizResult(styleKey = calculateStyle(), isRecommendation = false) {
    pendingStyle = styleKey;
    resultRequiresConfirmation = isRecommendation;
    const style = translatedStyle(styleKey);
    document.querySelector('#resultMark').dataset.style = styleKey;
    document.querySelector('#resultStyleLabel').textContent = window.i18n.t(isRecommendation ? 'quiz.recommendedLabel' : 'quiz.currentLabel');
    document.querySelector('#quizResultTitle').textContent = style.title;
    document.querySelector('#quizResultDescription').textContent = style.description;
    const allStyleButtons = [...styleChoices.querySelectorAll('.style-choice')];
    const selectedButton = allStyleButtons.find((button) => button.dataset.style === styleKey);
    const otherButtons = allStyleButtons.filter((button) => button !== selectedButton);
    if (selectedButton && otherButtons.length === 2) styleChoices.replaceChildren(otherButtons[0], selectedButton, otherButtons[1]);
    allStyleButtons.forEach((button) => {
      button.classList.toggle('is-active', button.dataset.style === styleKey);
      button.classList.toggle('is-recommended', isRecommendation && button.dataset.style === styleKey);
    });
    document.querySelector('#quizConfirm').hidden = !isRecommendation;
    setQuizView('result');
  }

  function finishStyleSelection(styleKey) {
    resultRequiresConfirmation = false;
    applyFinancialStyle(styleKey);
    localStorage.setItem('financialStyleQuizCompleted', 'true');
    quizDialog.close();
    if (window.location.hash) window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  function buildStyleChoices() {
    styleChoices.replaceChildren(...Object.keys(financialStyles).map((styleKey) => {
      const style = translatedStyle(styleKey);
      const button = document.createElement('button');
      button.className = 'style-choice';
      button.type = 'button';
      button.dataset.style = styleKey;
      button.innerHTML = `<span class="style-preview" style="background-image:url('${style.imageMobileWebp}')"></span><b>${style.title}</b><small>${style.short}</small>`;
      button.addEventListener('click', () => resultRequiresConfirmation ? showQuizResult(styleKey, true) : finishStyleSelection(styleKey));
      return button;
    }));
  }

  document.querySelector('#quizLaunch').addEventListener('click', () => {
    const completed = localStorage.getItem('financialStyleQuizCompleted') === 'true';
    const currentStyle = localStorage.getItem('financialStyle');
    if (completed && financialStyles[currentStyle]) showQuizResult(currentStyle);
    else setQuizView('intro');
    quizDialog.showModal();
  });

  document.querySelector('#quizClose').addEventListener('click', () => quizDialog.close());
  quizDialog.addEventListener('click', (event) => { if (event.target === quizDialog) quizDialog.close(); });

  function startQuiz() {
    quizIndex = 0;
    quizAnswers = [];
    setQuizView('question');
    renderQuestion();
  }

  document.querySelector('#quizStart').addEventListener('click', startQuiz);
  document.querySelector('#quizRetake').addEventListener('click', startQuiz);
  document.querySelector('#quizConfirm').addEventListener('click', () => finishStyleSelection(pendingStyle));
  document.querySelector('#quizBack').addEventListener('click', () => {
    if (quizIndex === 0) return;
    quizIndex -= 1;
    quizAnswers.length = quizIndex + 1;
    renderQuestion();
  });

  window.addEventListener('languagechange', () => {
    const currentStyle = document.body.dataset.theme || 'heritage';
    applyFinancialStyle(currentStyle, false);
    buildStyleChoices();
    if (!quizQuestion.hidden) renderQuestion();
    if (!quizResult.hidden) showQuizResult(pendingStyle, resultRequiresConfirmation);
  });

  buildStyleChoices();
  const savedFinancialStyle = localStorage.getItem('financialStyle');
  applyFinancialStyle(financialStyles[savedFinancialStyle] ? savedFinancialStyle : 'heritage', false);
})();
