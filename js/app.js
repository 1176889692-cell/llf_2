/* ============================================
   FoodTI - 食物人格测试
   Quiz logic, scoring, result display
   ============================================ */

// ─── Personality Types ───
// Each type has: name, en, emoji, tagline, description, card (visual styling)
const TYPES = {
  'APGI': {
    key: 'APGI',
    name: '美食探险家',
    en: 'Food Explorer',
    emoji: '🧭',
    tagline: '世界是你的自助餐——你用味蕾丈量每一座城市',
    descShort: '好奇心驱动 · 味蕾冒险家 · 新奇食材猎人',
    description: '你天生就是为美食而生的冒险家。对你来说，吃不仅是填饱肚子，更是一场感官的探险。你热衷于尝试从未见过的食材、光顾藏在巷子深处的小馆子、甚至在旅行中专门为了某道菜绕路。你的厨房就像一个实验室，你享受烹饪过程中的每一个灵感迸发，也乐意把你的美食发现分享给身边每一个人。你的直觉告诉你：好吃的东西，往往藏在意想不到的地方。',
    funFact: '你可能吃过的奇葩食物比大多数人听过的还多',
    card: {
      gradient: 'linear-gradient(135deg, #FF6B35 0%, #FF8F5E 40%, #FFB347 100%)',
      pattern: '🧭🗺️🌍✈️🎒',
      bgEmoji: '🧭',
      accent: '#FF6B35'
    }
  },
  'SOSA': {
    key: 'SOSA',
    name: '营养计算器',
    en: 'Calorie Counter',
    emoji: '🧮',
    tagline: '每一口都经过精密计算——健康是你最高的美食信仰',
    descShort: '自律王者 · 营养成分表阅读器 · 蛋白质猎手',
    description: '你是一个理性且自律的饮食者。在你的世界里，食物不仅仅是味觉享受，更是维持身体运转的燃料。你会仔细研究营养成分表，关注蛋白质、碳水和脂肪的配比，对每一餐的热量了然于胸。你更喜欢选择熟悉、安全的食材和菜式，因为你已经验证过它们的营养价值。对你来说，吃得对比吃得好更重要。',
    funFact: '你手机里至少有一个食物热量查询APP',
    card: {
      gradient: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 40%, #81C784 100%)',
      pattern: '🥗🍎📊💪🏃',
      bgEmoji: '🥗',
      accent: '#4CAF50'
    }
  },
  'AOGA': {
    key: 'AOGA',
    name: '社交食客',
    en: 'Social Eater',
    emoji: '🎉',
    tagline: '美食是社交的催化剂——你享受的是围桌而坐的温暖',
    descShort: '饭搭子召集者 · 网红店打卡王 · 朋友圈美食博主',
    description: '对你来说，吃饭从来不是一个人的事。你最喜欢的就是约上三五好友，围坐在火锅旁、烧烤架前，边吃边聊。你会为了打卡一家网红餐厅排队两小时，也会在朋友圈分享你的每一次美食体验。你乐于尝试新餐厅，但你更看重的是和谁一起吃。你觉得，最好的调味料是陪伴，最棒的餐厅是氛围好的那一家。',
    funFact: '你的微信群聊记录里，"吃什么"出现的频率比"在吗"还高',
    card: {
      gradient: 'linear-gradient(135deg, #E91E63 0%, #F06292 40%, #F48FB1 100%)',
      pattern: '🎉🍻👥📸❤️',
      bgEmoji: '🎉',
      accent: '#E91E63'
    }
  },
  'SPSI': {
    key: 'SPSI',
    name: '慢食享受家',
    en: 'Slow Foodie',
    emoji: '🍵',
    tagline: '时间是最好的调味师——你信奉细嚼慢咽的生活哲学',
    descShort: '仪式感大师 · 食物品鉴师 · 生活美学家',
    description: '你是美食世界里的禅修者。你坚信，好的食物值得被认真对待。你会花一个下午炖一锅汤，会用最精致的餐具盛放你的料理，会在吃饭时放下手机，专注于每一口的滋味。你不太在意别人怎么吃，你有自己的节奏和标准。你享受独自品味一块芝士、一杯红酒的时光，在安静中感受食物最本真的味道。',
    funFact: '你吃饭的速度是朋友的1/3，但幸福感是他们的3倍',
    card: {
      gradient: 'linear-gradient(135deg, #795548 0%, #8D6E63 40%, #A1887F 100%)',
      pattern: '🍵🕯️🌿🎻📖',
      bgEmoji: '🍵',
      accent: '#795548'
    }
  },
  'APSA': {
    key: 'APSA',
    name: '独行美食家',
    en: 'Lone Gourmet',
    emoji: '🦅',
    tagline: '你有独属于自己的美食宇宙——不需要别人的认可',
    descShort: '独立美食评论家 · 口味不随大流 · 米其林编外评审',
    description: '你是一个有主见的美食独行侠。你对食物有自己的判断标准，不会因为某家店很火就跟风去吃，也不会因为别人说难吃就放弃尝试。你享受一个人探索美食的过程——独自走进一家陌生的餐厅，安静地点菜、品尝、做出自己的评价。你在烹饪时也追求极致，但那纯粹是为了取悦自己。你的美食世界，只属于你自己。',
    funFact: '你一个人吃火锅的次数，可能比大多数人一辈子都多',
    card: {
      gradient: 'linear-gradient(135deg, #9C27B0 0%, #AB47BC 40%, #CE93D8 100%)',
      pattern: '🦅🎭🍷🔮✨',
      bgEmoji: '🦅',
      accent: '#9C27B0'
    }
  },
  'SOGI': {
    key: 'SOGI',
    name: '随缘干饭人',
    en: 'Casual Diner',
    emoji: '🌾',
    tagline: '人生苦短，先吃饭再说——你的美食哲学就是不纠结',
    descShort: '佛系干饭王 · 不挑食达人 · "都行"代言人',
    description: '你是朋友圈里最容易请吃饭的人。你对食物没有什么执念，不挑食、不纠结，有什么吃什么，别人点什么你都觉得挺好的。你享受的是和大家一起吃饭的轻松氛围，而不是菜品本身。你对新奇的食物保持着温和的好奇心，但也不会专门去追求。你觉得，能吃饱就是幸福，能和朋友一起吃就更幸福了。',
    funFact: '你点外卖从不超过3分钟，因为你永远选"再来一单"',
    card: {
      gradient: 'linear-gradient(135deg, #607D8B 0%, #78909C 40%, #90A4AE 100%)',
      pattern: '🌾😌🍜💤🤙',
      bgEmoji: '🌾',
      accent: '#607D8B'
    }
  },
  'AOSA': {
    key: 'AOSA',
    name: '即食效率派',
    en: 'Fast Fuel',
    emoji: '⚡',
    tagline: '时间就是生命——你用最快的速度给身体充电',
    descShort: '效率至上主义 · 外卖重度用户 · 便利店美食家',
    description: '你是效率至上的现代饮食者。在你的价值排序里，时间远比食物重要。你习惯于快速解决一餐，外卖是你最好的朋友，速食和便利店是你的能量补给站。你偶尔也想尝尝新东西，但前提是你不需要为此花太多时间。你吃饭的方式就像你的性格一样——果断、高效、不拖泥带水。吃完这顿，还有更重要的事情等着你。',
    funFact: '你的外卖备注栏永远是"不要敲门，放门口"',
    card: {
      gradient: 'linear-gradient(135deg, #FF9800 0%, #FFA726 40%, #FFB74D 100%)',
      pattern: '⚡📱🏃💨🔥',
      bgEmoji: '⚡',
      accent: '#FF9800'
    }
  },
  'SPGI': {
    key: 'SPGI',
    name: '温暖家常派',
    en: 'Home Cook',
    emoji: '🏠',
    tagline: '最治愈的味道永远来自自家厨房——你用食物传递爱',
    descShort: '厨房暖男/暖女 · 投喂系人格 · 家的味道守护者',
    description: '你是朋友圈里的"投喂大使"。你最大的快乐就是看到别人吃你做的饭时露出满足的表情。你享受烹饪的每一个步骤——从挑选食材、到在厨房里忙活、到把热腾腾的饭菜端上桌。你最喜欢的是家常菜的味道，那种带着记忆和温度的味道。你愿意和所有人分享你的美食，因为在你看来，食物是表达爱的最好方式。',
    funFact: '你的冰箱里永远有给别人准备的那份',
    card: {
      gradient: 'linear-gradient(135deg, #FF5722 0%, #FF7043 40%, #FF8A65 100%)',
      pattern: '🏠🍳❤️🥘🥰',
      bgEmoji: '🏠',
      accent: '#FF5722'
    }
  }
};

// ─── Questions ───
// Answer values are dimension-specific to avoid scoring collisions:
//   dim1 (A vs S): values 'A1' and 'S1'
//   dim2 (P vs O): values 'P2' and 'O2'
//   dim3 (S vs G): values 'S3' and 'G3'
//   dim4 (I vs A): values 'I4' and 'A4'
const QUESTIONS = [
  // === Dimension 1: 冒险度 vs 安全感 (A vs S) — 5 questions ===
  {
    id: 1, dim: 'AS', emoji: '🍽️',
    text: '周五晚上，你打开外卖APP的那一刻——',
    hint: '说出你内心最真实的声音',
    options: [
      { text: '翻翻有没有新开的店，最好是从没吃过的菜系', value: 'A1' },
      { text: '直接点"常买"列表第一家，闭眼入', value: 'S1' }
    ]
  },
  {
    id: 2, dim: 'AS', emoji: '✈️',
    text: '到了一个新城市旅行，第一顿饭你会——',
    hint: '你的胃比你的脚更诚实',
    options: [
      { text: '直奔当地菜市场或苍蝇馆子，越本地越兴奋', value: 'A1' },
      { text: '先看看大众点评评分，选个4.5分以上的', value: 'S1' }
    ]
  },
  {
    id: 3, dim: 'AS', emoji: '🫣',
    text: '朋友说"这家店有个菜巨好吃但长得很奇怪"，你会——',
    hint: '你的内心独白是什么？',
    options: [
      { text: '越奇怪越好奇！快告诉我是啥', value: 'A1' },
      { text: '……先给我看看图片再说', value: 'S1' }
    ]
  },
  {
    id: 4, dim: 'AS', emoji: '🧪',
    text: '冰箱里只剩鸡蛋、老干妈和一根香蕉，你会——',
    hint: '这是对你创造力的终极考验',
    options: [
      { text: '来个香蕉鸡蛋饼配老干妈，说不定是黑暗料理界的天花板', value: 'A1' },
      { text: '还是老老实实炒个蛋吧，香蕉留着当饭后水果', value: 'S1' }
    ]
  },
  {
    id: 5, dim: 'AS', emoji: '🌿',
    text: '超市出现了一种你从没见过的异国水果，标签上写着"味道因人而异"——',
    hint: '你的手已经伸出去了还是缩回来了？',
    options: [
      { text: '因人而异？那我必须亲自验证一下', value: 'A1' },
      { text: '先搜搜小红书，看看大家怎么说', value: 'S1' }
    ]
  },

  // === Dimension 2: 过程型 vs 结果型 (P vs O) — 5 questions ===
  {
    id: 6, dim: 'PO', emoji: '👨‍🍳',
    text: '周末心血来潮要做一道大菜，你最享受的是——',
    hint: '做菜的灵魂在哪里？',
    options: [
      { text: '整个过程！从洗菜切菜到听着锅里滋滋响，每一步都是享受', value: 'P2' },
      { text: '当然是端上桌那一刻——看着别人惊讶的表情，值了！', value: 'O2' }
    ]
  },
  {
    id: 7, dim: 'PO', emoji: '📸',
    text: '菜做好了，你端上桌的第一件事是——',
    hint: '承认吧，我们都做过',
    options: [
      { text: '精心摆盘，找好角度，拍个九宫格发朋友圈', value: 'P2' },
      { text: '拍照？不存在的，趁热赶紧吃才是正经事', value: 'O2' }
    ]
  },
  {
    id: 8, dim: 'PO', emoji: '⏳',
    text: '需要炖3小时的红烧肉，你会——',
    hint: '时间是敌人还是朋友？',
    options: [
      { text: '享受等待的过程，时不时去厨房看看闻闻，这就是生活的仪式感', value: 'P2' },
      { text: '3小时？？直接高压锅20分钟搞定，味道差不多的', value: 'O2' }
    ]
  },
  {
    id: 9, dim: 'PO', emoji: '🍜',
    text: '同一碗面，路边摊和精致餐厅都能做，你更看重——',
    hint: '什么才是吃面的灵魂？',
    options: [
      { text: '环境和体验——灯光、音乐、餐具，全套仪式感拉满', value: 'P2' },
      { text: '面好不好吃——路边摊味道好我一样坐小马扎吃', value: 'O2' }
    ]
  },
  {
    id: 10, dim: 'PO', emoji: '🧹',
    text: '做了一顿丰盛的大餐后，面对水槽里堆积如山的碗碟——',
    hint: '这是每个做饭人的噩梦',
    options: [
      { text: '没关系，做饭时的快乐已经值回票价了', value: 'P2' },
      { text: '……我为什么要自己做饭？外卖它不香吗', value: 'O2' }
    ]
  },

  // === Dimension 3: 独享型 vs 共享型 (S vs G) — 4 questions ===
  {
    id: 11, dim: 'SG', emoji: '🍰',
    text: '冰箱里只剩最后一块你最爱的蛋糕，室友正好也在——',
    hint: '你的内心挣扎了多久？',
    options: [
      { text: '假装没看见，等室友走了再偷偷吃掉', value: 'S3' },
      { text: '切两半一起吃，虽然心疼但分享更快乐', value: 'G3' }
    ]
  },
  {
    id: 12, dim: 'SG', emoji: '🍲',
    text: '吃火锅时你的涮菜方式是——',
    hint: '你在火锅桌上的角色是？',
    options: [
      { text: '自己涮自己的，精确掌控每一筷的火候', value: 'S3' },
      { text: '主动当"涮菜官"，帮大家下菜捞菜分菜一条龙', value: 'G3' }
    ]
  },
  {
    id: 13, dim: 'SG', emoji: '🤫',
    text: '你发现了一家超级好吃的宝藏小店，你会——',
    hint: '好东西要分享还是独占？',
    options: [
      { text: '先自己偷偷去吃几次，等我吃够了再告诉你们', value: 'S3' },
      { text: '立刻拉群喊人！好东西必须第一时间分享', value: 'G3' }
    ]
  },
  {
    id: 14, dim: 'SG', emoji: '🍕',
    text: '和朋友一起点外卖，你更倾向于——',
    hint: '你的点餐哲学',
    options: [
      { text: '各点各的，我今天就想吃这个，不想迁就', value: 'S3' },
      { text: '点一堆大家一起share，这样能吃到更多花样', value: 'G3' }
    ]
  },

  // === Dimension 4: 直觉型 vs 分析型 (I vs A) — 4 questions ===
  {
    id: 15, dim: 'IA', emoji: '🛒',
    text: '逛超市买零食，你的购物车通常是——',
    hint: '你的购物车暴露了你的性格',
    options: [
      { text: '看到什么想吃的就扔进去，结账时才发现买了三包薯片', value: 'I4' },
      { text: '提前想好要买什么，严格按照清单执行，绝不冲动消费', value: 'A4' }
    ]
  },
  {
    id: 16, dim: 'IA', emoji: '⭐',
    text: '选餐厅时你的决策依据是——',
    hint: '你是数据派还是感觉派？',
    options: [
      { text: '走进去的那一刻就知道对不对——靠的是直觉和氛围感应', value: 'I4' },
      { text: '评分、评论数、差评关键词、人均消费……数据不会骗人', value: 'A4' }
    ]
  },
  {
    id: 17, dim: 'IA', emoji: '🧂',
    text: '做饭放调料的时候——',
    hint: '"适量"到底是多少？',
    options: [
      { text: '凭感觉来！"适量"就是手抖到哪算哪', value: 'I4' },
      { text: '严格按照菜谱来，盐3克、酱油5毫升、糖2克……', value: 'A4' }
    ]
  },
  {
    id: 18, dim: 'IA', emoji: '🤔',
    text: '今天吃什么？这个世纪难题你的解法是——',
    hint: '全人类共同的烦恼',
    options: [
      { text: '看心情——突然想吃什么是不需要理由的', value: 'I4' },
      { text: '综合考虑昨天吃了什么、冰箱还有什么、今天运动了没……', value: 'A4' }
    ]
  }
];

// Dimension labels for display
const DIM_LABELS = {
  'AS': { name: '冒险-安全维度', left: '🧭 冒险', right: '🛡️ 安全', leftKey: 'A', rightKey: 'S' },
  'PO': { name: '过程-结果维度', left: '🎨 过程', right: '🎯 结果', leftKey: 'P', rightKey: 'O' },
  'SG': { name: '独享-共享维度', left: '🦅 独享', right: '🤝 共享', leftKey: 'S', rightKey: 'G' },
  'IA': { name: '直觉-分析维度', left: '💫 直觉', right: '📊 分析', leftKey: 'I', rightKey: 'A' }
};

// ─── State ───
let currentQuestion = 0;
let answers = new Array(QUESTIONS.length).fill(null);
let chartInstance = null;

// ─── DOM Elements ───
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ─── Initialize ───
document.addEventListener('DOMContentLoaded', () => {
  showPage('landing');
});

function showPage(pageId) {
  $$('.page').forEach(p => p.classList.remove('active'));
  const page = $(`#${pageId}`);
  if (page) {
    page.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ─── Start Quiz ───
function startQuiz() {
  currentQuestion = 0;
  answers = new Array(QUESTIONS.length).fill(null);
  showPage('quiz');
  renderQuestion();
}

// ─── Render Question ───
function renderQuestion() {
  const q = QUESTIONS[currentQuestion];
  const total = QUESTIONS.length;
  const progress = ((currentQuestion) / total) * 100;

  $('#progress-fill').style.width = `${progress}%`;
  $('#progress-text').textContent = `${currentQuestion + 1} / ${total}`;
  $('#progress-dim').textContent = DIM_LABELS[q.dim].name;

  const container = $('#question-container');
  container.innerHTML = `
    <div class="question-emoji">${q.emoji}</div>
    <div class="question-text">${q.text}</div>
    <div class="question-hint">${q.hint || '选择最符合你的一项'}</div>
    <div class="options">
      ${q.options.map((opt, idx) => `
        <button class="option-btn ${answers[currentQuestion] === opt.value ? 'selected' : ''}"
                onclick="selectOption('${opt.value}', this)" data-idx="${idx}">
          <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
          <span class="option-text">${opt.text}</span>
        </button>
      `).join('')}
    </div>
  `;

  // Navigation
  const backBtn = $('#btn-back');
  const nextBtn = $('#btn-next');

  backBtn.classList.toggle('hidden', currentQuestion === 0);
  nextBtn.disabled = answers[currentQuestion] === null;
  nextBtn.textContent = currentQuestion === total - 1 ? '查看结果 →' : '下一题 →';
}

// ─── Select Option ───
function selectOption(value, btn) {
  answers[currentQuestion] = value;

  $$('.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');

  $('#btn-next').disabled = false;

  // Auto-advance after short delay
  setTimeout(() => {
    goNext();
  }, 400);
}

// ─── Navigation ───
function goBack() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}

function goNext() {
  if (answers[currentQuestion] === null) return;

  if (currentQuestion < QUESTIONS.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResult();
  }
}

// ─── Calculate Result ───
function calculateResult() {
  // Per-dimension scoring
  const dim1 = { A: 0, S: 0 }; // 冒险 vs 安全
  const dim2 = { P: 0, O: 0 }; // 过程 vs 结果
  const dim3 = { S: 0, G: 0 }; // 独享 vs 共享
  const dim4 = { I: 0, A: 0 }; // 直觉 vs 分析

  QUESTIONS.forEach((q, idx) => {
    const ans = answers[idx];
    if (!ans) return;
    switch (ans) {
      case 'A1': dim1.A++; break;
      case 'S1': dim1.S++; break;
      case 'P2': dim2.P++; break;
      case 'O2': dim2.O++; break;
      case 'S3': dim3.S++; break;
      case 'G3': dim3.G++; break;
      case 'I4': dim4.I++; break;
      case 'A4': dim4.A++; break;
    }
  });

  // Determine dominant pole per dimension
  const d1 = dim1.A >= dim1.S ? 'A' : 'S';
  const d2 = dim2.P >= dim2.O ? 'P' : 'O';
  const d3 = dim3.S >= dim3.G ? 'S' : 'G';
  const d4 = dim4.I >= dim4.A ? 'I' : 'A';

  const typeKey = d1 + d2 + d3 + d4;

  // Calculate 0–1 percentages for radar chart
  const dimScores = {
    AS: dim1.A / (dim1.A + dim1.S || 1),
    PO: dim2.P / (dim2.P + dim2.O || 1),
    SG: dim3.G / (dim3.S + dim3.G || 1),
    IA: dim4.I / (dim4.I + dim4.A || 1)
  };

  const scores = { dim1, dim2, dim3, dim4 };
  return { typeKey, scores, dimScores };
}

// ─── Show Result ───
function showResult() {
  const result = calculateResult();
  const type = TYPES[result.typeKey] || TYPES['SPGI'];

  // Progress bar to 100%
  $('#progress-fill').style.width = '100%';

  showPage('result');

  // Render personality card
  renderPersonalityCard(type);

  // Populate result header
  $('#result-emoji').textContent = type.emoji;
  $('#result-name').textContent = type.name;
  $('#result-en').textContent = type.en;
  $('#result-tagline').textContent = type.tagline;

  // Radar chart
  renderRadarChart(result.dimScores);

  // Dimension bars
  renderDimensionBars(result.dimScores);

  // Description + fun fact
  $('#result-description').innerHTML = `
    <p>${type.description}</p>
    <div class="fun-fact">
      <span class="fun-fact-icon">💡</span>
      <span class="fun-fact-text">冷知识：${type.funFact}</span>
    </div>
  `;

  // Type comparison
  renderTypeComparison(result.typeKey);

  // Confetti!
  launchConfetti();
}

// ─── Personality Card ───
function renderPersonalityCard(type) {
  const card = $('#personality-card');
  const c = type.card;
  const patterns = c.pattern.split('');

  card.innerHTML = `
    <div class="pcard-inner" style="background: ${c.gradient};">
      <div class="pcard-pattern">${patterns.map(e => `<span>${e}</span>`).join('')}</div>
      <div class="pcard-bg-emoji">${c.bgEmoji}</div>
      <div class="pcard-content">
        <div class="pcard-badge">我的食物人格</div>
        <div class="pcard-emoji">${type.emoji}</div>
        <div class="pcard-name">${type.name}</div>
        <div class="pcard-en">${type.en}</div>
        <div class="pcard-divider"></div>
        <div class="pcard-tagline">${type.tagline}</div>
        <div class="pcard-traits">${type.descShort}</div>
      </div>
      <div class="pcard-footer">
        <span>FoodTI 食物人格测试</span>
        <span>foodti.com</span>
      </div>
    </div>
  `;
}

// ─── Radar Chart ───
function renderRadarChart(dimScores) {
  const ctx = $('#radar-chart').getContext('2d');

  if (chartInstance) {
    chartInstance.destroy();
  }

  const data = {
    labels: ['冒险度', '过程导向', '共享倾向', '直觉力'],
    datasets: [{
      label: '你的美食DNA',
      data: [
        dimScores.AS * 100,
        dimScores.PO * 100,
        dimScores.SG * 100,
        dimScores.IA * 100
      ],
      backgroundColor: 'rgba(255, 107, 53, 0.15)',
      borderColor: '#FF6B35',
      borderWidth: 2.5,
      pointBackgroundColor: '#FF6B35',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 7
    }]
  };

  chartInstance = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: { stepSize: 25, display: false },
          grid: { color: 'rgba(255, 107, 53, 0.1)', circular: true },
          angleLines: { color: 'rgba(255, 107, 53, 0.1)' },
          pointLabels: {
            font: { size: 13, family: "'Noto Sans SC', sans-serif", weight: '600' },
            color: '#5D3A2E'
          }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#2D1810',
          titleFont: { family: "'Noto Sans SC', sans-serif" },
          bodyFont: { family: "'Noto Sans SC', sans-serif" },
          callbacks: { label: (ctx) => `${ctx.label}: ${Math.round(ctx.raw)}%` }
        }
      },
      animation: { duration: 1200, easing: 'easeOutQuart' }
    }
  });
}

// ─── Dimension Bars ───
function renderDimensionBars(dimScores) {
  const container = $('#dimension-bars');
  const dims = [
    { key: 'AS', score: dimScores.AS },
    { key: 'PO', score: dimScores.PO },
    { key: 'SG', score: dimScores.SG },
    { key: 'IA', score: dimScores.IA }
  ];

  container.innerHTML = dims.map(d => {
    const label = DIM_LABELS[d.key];
    const pct = Math.round(d.score * 100);
    const isLeft = d.score >= 0.5;
    const displayLabel = isLeft ? label.left : label.right;
    const displayPct = isLeft ? pct : (100 - pct);
    const gradient = d.key === 'AS' ? 'linear-gradient(90deg, #FF6B35, #FF8F5E)' :
                     d.key === 'PO' ? 'linear-gradient(90deg, #FFB347, #FFD700)' :
                     d.key === 'SG' ? 'linear-gradient(90deg, #E91E63, #FF5722)' :
                     'linear-gradient(90deg, #9C27B0, #E040FB)';

    return `
      <div class="dim-bar-item">
        <div class="dim-bar-header">
          <span class="dim-bar-label">${displayLabel}</span>
          <span class="dim-bar-value">${displayPct}%</span>
        </div>
        <div class="dim-bar-track">
          <div class="dim-bar-fill" style="width: ${pct}%; background: ${gradient};"></div>
        </div>
        <div class="dim-bar-poles">
          <span>${label.left}</span>
          <span>${label.right}</span>
        </div>
      </div>
    `;
  }).join('');
}

// ─── Type Comparison Grid ───
function renderTypeComparison(currentKey) {
  const grid = $('#type-grid');
  grid.innerHTML = Object.values(TYPES).map(t => `
    <div class="type-chip ${t.key === currentKey ? 'current' : ''}">
      <span class="type-chip-emoji">${t.emoji}</span>
      <span>${t.name}</span>
    </div>
  `).join('');
}

// ─── Share ───
function shareResult() {
  const result = calculateResult();
  const type = TYPES[result.typeKey] || TYPES['SPGI'];

  const text = `我的食物人格是「${type.emoji} ${type.name}」！${type.tagline}\n\n来测测你的食物人格吧 👉 ${window.location.href}`;

  if (navigator.share) {
    navigator.share({
      title: `FoodTI - 我是${type.name}`,
      text: text,
      url: window.location.href
    }).catch(() => {});
  } else {
    copyToClipboard(text);
    showToast('结果已复制到剪贴板，快去分享吧！');
  }
}

function copyLink() {
  copyToClipboard(window.location.href);
  showToast('链接已复制！');
}

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
}

function showToast(msg) {
  const toast = $('#toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ─── Confetti ───
function launchConfetti() {
  const canvas = $('#confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#FF6B35', '#FFB347', '#FFD700', '#E91E63', '#4CAF50', '#9C27B0', '#FF5722'];

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      shape: Math.random() > 0.5 ? 'rect' : 'circle'
    });
  }

  let frame = 0;
  const maxFrames = 180;

  function animate() {
    if (frame > maxFrames) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, 1 - frame / maxFrames);

      if (p.shape === 'rect') {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.08;
      p.rotation += p.rotationSpeed;
    });

    frame++;
    requestAnimationFrame(animate);
  }

  animate();
}

// ─── Restart ───
function restart() {
  if (chartInstance) {
    chartInstance.destroy();
    chartInstance = null;
  }
  showPage('landing');
}
