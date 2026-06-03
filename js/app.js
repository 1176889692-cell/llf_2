/* ============================================
   FoodTI v2 — 食物人格测试
   24 types · 18 four-option questions · history · share · deep analysis
   ============================================ */

// ═══════════════════════════════════════════════
//  §1  PERSONALITY TYPES  (8 主型 × 3 层级 = 24)
// ═══════════════════════════════════════════════
// 层级由四维度平均得分强度决定：
//   温和 51-65% · 标准 66-80% · 极端 81-100%
// key 格式: {主型key}_{层级}

const TYPES = {
  // ─── APGI 美食探险家 ───
  'APGI_温和': {
    key:'APGI_温和', parent:'APGI', level:'温和',
    name:'好奇尝鲜客', en:'Curious Taster', emoji:'🔍',
    tagline:'偶尔冒个险，尝完就后悔——但下次还是会试',
    descShort:'小试牛刀型 · 偶尔尝鲜 · 风险可控范围内的冒险',
    description:'你骨子里有那么一点好奇心，但只在"安全范围"内冒险。你会在菜单上多看一眼新菜名，但真正下单时还是会选熟悉的。偶尔朋友怂恿你会尝一口没见过的东西，然后给出一句"还行吧"的评价。你的冒险是温和的、有退路的。',
    behavior:['你会在超市拿起新零食端详3秒，然后放回去','朋友说"你尝尝这个"是你尝试新食物的主要动力','你对新餐厅的态度是"先看看评价再说"','你的外卖订单80%是老三样，20%是偶尔换换口味'],
    suggestions:['下次点外卖时，试试从没点过的那家店的招牌菜','去逛一次进口食品区，挑一样包装最奇怪的','约朋友去吃你从没尝试过的菜系'],
    funFact:'你手机里的外卖记录，前5名占了总订单的70%',
    card:{ gradient:'linear-gradient(135deg,#FF9800 0%,#FFB74D 100%)', pattern:'🔍🤔🍜', accent:'#FF9800' }
  },
  'APGI_标准': {
    key:'APGI_标准', parent:'APGI', level:'标准',
    name:'美食探险家', en:'Food Explorer', emoji:'🧭',
    tagline:'世界是你的自助餐——你用味蕾丈量每一座城市',
    descShort:'好奇心驱动 · 味蕾冒险家 · 新奇食材猎人',
    description:'你天生就是为美食而生的冒险家。对你来说，吃不仅是填饱肚子，更是一场感官的探险。你热衷于尝试从未见过的食材、光顾藏在巷子深处的小馆子、甚至在旅行中专门为了某道菜绕路。你的厨房就像一个实验室，你享受烹饪过程中的每一个灵感迸发。',
    behavior:['旅行前你会花2小时研究当地美食攻略','你的收藏夹里有一半是"看起来很好吃的奇怪东西"','你做饭时经常即兴发挥，菜谱只是参考','你至少有过3次"专门为了吃某样东西而出门"的经历'],
    suggestions:['试试报名一个异国料理的烹饪课','记录你的美食探险日记，做成美食地图','组织一次"盲盒美食局"，每人带一道从没做过的菜'],
    funFact:'你可能吃过的奇葩食物比大多数人听过的还多',
    card:{ gradient:'linear-gradient(135deg,#FF6B35 0%,#FFB347 100%)', pattern:'🧭🗺️🌍✈️🎒', accent:'#FF6B35' }
  },
  'APGI_极端': {
    key:'APGI_极端', parent:'APGI', level:'极端',
    name:'暗黑料理王', en:'Dark Cuisine King', emoji:'👑',
    tagline:'别人不敢吃的你都吃——你的味蕾没有禁区',
    descShort:'极限挑战者 · 暗黑料理发明家 · "这个能吃吗"终结者',
    description:'你就是那个在朋友圈里发"今天吃了xxx"配图让大家惊呼的人。你对食物没有恐惧，越奇怪越兴奋。你的冰箱里可能同时出现榴莲、臭豆腐和某种叫不出名字的进口酱料。你享受的不是食物本身的味道，而是"我居然吃了这个"的成就感。',
    behavior:['你看到"限量版""奇葩口味"就走不动路','你做饭的画风经常让室友怀疑人生','你的美食vlog标题永远是"挑战xxx"','别人问你"这能吃吗"你的回答永远是"试试不就知道了"'],
    suggestions:['开一个"暗黑料理实验室"账号，记录你的奇葩创作','挑战一周不吃重复的东西','去参加一次美食猎人团，探索未知食材'],
    funFact:'你的冰箱是室友的噩梦，却是你的宝藏库',
    card:{ gradient:'linear-gradient(135deg,#D32F2F 0%,#FF5722 100%)', pattern:'👑🔥💀🧪😈', accent:'#D32F2F' }
  },

  // ─── SOSA 营养计算器 ───
  'SOSA_温和': {
    key:'SOSA_温和', parent:'SOSA', level:'温和',
    name:'健康关注者', en:'Health Watcher', emoji:'🌿',
    tagline:'偶尔看看配料表，但奶茶还是照喝不误',
    descShort:'间歇性养生 · 选择性健康 · 偶尔看看热量',
    description:'你对健康饮食有一点概念，但不会太较真。你会在点外卖时看看热量标注，偶尔选个沙拉，但朋友约火锅你也会欣然前往。你的养生是"看心情"的——今天心情好就健康饮食，心情不好就来顿快乐碳水。',
    behavior:['你偶尔会看看食品配料表，但看不太懂','你会在吃完大餐后说"明天开始清淡饮食"','你的购物车里健康食品和垃圾食品五五开','你听说过GI值但不确定它代表什么'],
    suggestions:['学做3道既好吃又健康的快手菜','试试用杂粮替代一顿白米饭','买一个食物秤，了解一下你常吃的食物份量'],
    funFact:'你的"明天开始健康饮食"已经说了217遍',
    card:{ gradient:'linear-gradient(135deg,#66BB6A 0%,#A5D6A7 100%)', pattern:'🌿🥗💚🧘', accent:'#66BB6A' }
  },
  'SOSA_标准': {
    key:'SOSA_标准', parent:'SOSA', level:'标准',
    name:'营养计算器', en:'Calorie Counter', emoji:'🧮',
    tagline:'每一口都经过精密计算——健康是你最高的美食信仰',
    descShort:'自律王者 · 营养成分表阅读器 · 蛋白质猎手',
    description:'你是一个理性且自律的饮食者。在你的世界里，食物不仅仅是味觉享受，更是维持身体运转的燃料。你会仔细研究营养成分表，关注蛋白质、碳水和脂肪的配比，对每一餐的热量了然于胸。',
    behavior:['你手机里至少有一个食物热量查询APP','你能在3秒内心算出一顿饭的卡路里','你的冰箱按营养分类摆放','你会为了蛋白质摄入量而调整晚餐菜单'],
    suggestions:['试试meal prep——周日批量做好一周的健康餐','学看食品包装上的NRV百分比','给自己设计一份个性化的营养餐单'],
    funFact:'你手机里至少有一个食物热量查询APP',
    card:{ gradient:'linear-gradient(135deg,#4CAF50 0%,#81C784 100%)', pattern:'🥗🍎📊💪🏃', accent:'#4CAF50' }
  },
  'SOSA_极端': {
    key:'SOSA_极端', parent:'SOSA', level:'极端',
    name:'数据营养师', en:'Data Nutritionist', emoji:'📈',
    tagline:'用Excel管理你的胃——每一餐都是一次精密实验',
    descShort:'Excel饮食管理 · 宏量营养素达人 · 食物即数据',
    description:'你不仅关注热量，你用数据管理饮食。你的手机上有至少3个营养追踪APP，你的Excel里有过去一个月的饮食记录，你能精确说出自己每天需要多少克蛋白质。对你来说，吃饭是一道数学题，而你享受解题的过程。',
    behavior:['你的Excel里有详细的每周饮食计划','你会根据运动量动态调整碳水摄入','你去超市会扫码对比同类产品的营养成分','朋友请你吃饭时你会提前看菜单算热量'],
    suggestions:['尝试用app追踪一周的微量营养素摄入','学做一些既精准控卡又好吃的创意料理','参加一次营养师讲座，系统化你的知识'],
    funFact:'你的饮食数据比公司的财务报表还详细',
    card:{ gradient:'linear-gradient(135deg,#2E7D32 0%,#388E3C 100%)', pattern:'📈💻🧬🔬', accent:'#2E7D32' }
  },

  // ─── AOGA 社交食客 ───
  'AOGA_温和': {
    key:'AOGA_温和', parent:'AOGA', level:'温和',
    name:'约饭爱好者', en:'Meal Planner', emoji:'📱',
    tagline:'偶尔组个局，但一个人吃饭也挺香',
    descShort:'选择性社交 · 约饭看心情 · 偶尔当组局人',
    description:'你喜欢和朋友一起吃饭，但不会强求。周末有约就出去吃，没约就在家点外卖。你偶尔会在群里发起"吃什么"的讨论，但大多数时候你都是那个说"都行，你们定"的人。',
    behavior:['你的朋友圈偶尔发美食照片，但不会每顿都拍','你约饭的频率大概是一周1-2次','你会在聚餐时点自己想吃的，不太迁就别人','你觉得一个人吃饭和一群人吃饭各有各的好'],
    suggestions:['下次聚餐主动推荐一家你收藏的店','试试发起一个"每周一新"的约饭计划','在聚餐时尝试分享你的菜品给朋友尝尝'],
    funFact:'你发"吃什么"到群里后，其实心里已经有答案了',
    card:{ gradient:'linear-gradient(135deg,#F06292 0%,#F48FB1 100%)', pattern:'📱🍽️💬😊', accent:'#F06292' }
  },
  'AOGA_标准': {
    key:'AOGA_标准', parent:'AOGA', level:'标准',
    name:'社交食客', en:'Social Eater', emoji:'🎉',
    tagline:'美食是社交的催化剂——你享受的是围桌而坐的温暖',
    descShort:'饭搭子召集者 · 网红店打卡王 · 朋友圈美食博主',
    description:'对你来说，吃饭从来不是一个人的事。你最喜欢的就是约上三五好友，围坐在餐桌旁边吃边聊。你会为了打卡一家网红餐厅排队两小时，也会在朋友圈分享你的每一次美食体验。',
    behavior:['你的微信群聊记录里"吃什么"出现频率极高','你会为了拍照发朋友圈而精心选择餐厅','你至少有3个固定的饭搭子群','你觉得最好的调味料是陪伴'],
    suggestions:['组织一次主题聚餐（如"儿时味道"）','开一个美食探店的社交账号','试试邀请不同圈子的朋友一起聚餐，创造新的社交连接'],
    funFact:'你的微信群聊记录里，"吃什么"出现的频率比"在吗"还高',
    card:{ gradient:'linear-gradient(135deg,#E91E63 0%,#F48FB1 100%)', pattern:'🎉🍻👥📸❤️', accent:'#E91E63' }
  },
  'AOGA_极端': {
    key:'AOGA_极端', parent:'AOGA', level:'极端',
    name:'派对动物', en:'Party Animal', emoji:'🥳',
    tagline:'没有你组不起来的饭局——你是美食社交的核心',
    descShort:'美食局灵魂人物 · 社交能量炸弹 · "来都来了"本尊',
    description:'你就是那个永远在组织饭局的人。你的日历排满了各种聚餐、探店、美食活动。你认识的人里，有一半是在饭桌上认识的。你觉得人生最大的遗憾就是一个人吃饭——不是因为孤独，而是因为少了一个可以分享的人。',
    behavior:['你同时在5个以上的约饭群里活跃','你的日历上每周至少有3次聚餐安排','你会为了凑人数而拉不太熟的人来吃饭','你手机里存了200+家餐厅的收藏'],
    suggestions:['策划一次大型美食嘉年华活动','尝试做一个美食社交小程序或群','组织一次"美食接力"——每人推荐一家店然后大家轮流去'],
    funFact:'你的社交能量来自餐桌——你就是行走的美食局召集器',
    card:{ gradient:'linear-gradient(135deg,#C2185B 0%,#E91E63 100%)', pattern:'🥳🎊🎈🍾🔥', accent:'#C2185B' }
  },

  // ─── SPSI 慢食享受家 ───
  'SPSI_温和': {
    key:'SPSI_温和', parent:'SPSI', level:'温和',
    name:'偶尔慢食者', en:'Occasional Slowpoke', emoji:'🌸',
    tagline:'偶尔放慢脚步——但大多数时候还是赶时间',
    descShort:'间歇性享受 · 周末慢食模式 · 工作日速战速决',
    description:'你偶尔会想要慢下来享受一顿饭。周末的早午餐、节假日的下午茶，你会认真对待。但工作日嘛……外卖5分钟解决是常态。你的慢食模式是有开关的，只在特定时间打开。',
    behavior:['周末你会花时间做一顿像样的早午餐','你在节假日会特意选一家环境好的餐厅吃饭','工作日的你和周末的你对吃饭的态度截然不同','你偶尔会发一张精致的餐桌照片'],
    suggestions:['每周给自己安排一顿"无手机慢食餐"','学做一道需要慢炖的菜，享受等待的过程','买一套好看的餐具，让日常用餐也有一点仪式感'],
    funFact:'你的周末和工作日，吃的是两种人生',
    card:{ gradient:'linear-gradient(135deg,#BCAAA4 0%,#D7CCC8 100%)', pattern:'🌸🍵🕯️🌿', accent:'#BCAAA4' }
  },
  'SPSI_标准': {
    key:'SPSI_标准', parent:'SPSI', level:'标准',
    name:'慢食享受家', en:'Slow Foodie', emoji:'🍵',
    tagline:'时间是最好的调味师——你信奉细嚼慢咽的生活哲学',
    descShort:'仪式感大师 · 食物品鉴师 · 生活美学家',
    description:'你是美食世界里的禅修者。你坚信，好的食物值得被认真对待。你会花一个下午炖一锅汤，会用最精致的餐具盛放你的料理，会在吃饭时放下手机，专注于每一口的滋味。',
    behavior:['你吃饭的速度是别人的1/3','你会为了一道菜专门买一套新餐具','你享受一个人安静品味食物的时光','你对食物的摆盘有近乎偏执的追求'],
    suggestions:['去学一次茶道或咖啡手冲','尝试用当季食材做一桌完整的慢食晚宴','写一本"味觉日记"，记录每顿让你感动的食物'],
    funFact:'你吃饭的速度是朋友的1/3，但幸福感是他们的3倍',
    card:{ gradient:'linear-gradient(135deg,#795548 0%,#A1887F 100%)', pattern:'🍵🕯️🌿🎻📖', accent:'#795548' }
  },
  'SPSI_极端': {
    key:'SPSI_极端', parent:'SPSI', level:'极端',
    name:'佛系养生派', en:'Zen Master', emoji:'🧘',
    tagline:'保温杯里泡枸杞——你的饮食就是你的修行',
    descShort:'食疗养生家 · 保温杯不离手 · "这个寒性不能吃"',
    description:'你已经把饮食上升到了哲学层面。你了解每种食物的属性，知道什么季节该吃什么，你的保温杯里永远泡着不同的养生茶。你觉得吃饭不仅是满足口腹之欲，更是一种与身体对话的方式。',
    behavior:['你说话经常带"这个性寒""那个上火"','你的厨房里有至少5种不同的养生食材','你会根据节气调整饮食','你拒绝冰饮，觉得对胃不好'],
    suggestions:['学一套四季养生食谱','去中药房逛逛，了解一下药食同源的食材','教朋友做你的养生特饮，传播健康理念'],
    funFact:'你的保温杯温度永远维持在55°C——这是你的人生哲学',
    card:{ gradient:'linear-gradient(135deg,#5D4037 0%,#795548 100%)', pattern:'🧘🍃☕🫖☁️', accent:'#5D4037' }
  },

  // ─── APSA 独行美食家 ───
  'APSA_温和': {
    key:'APSA_温和', parent:'APSA', level:'温和',
    name:'偶尔独食', en:'Solo Sometimes', emoji:'🎭',
    tagline:'有时候一个人吃饭也挺好——安静、自在、不用迁就',
    descShort:'偶尔享受独处 · 不排斥独食 · 安静的用餐者',
    description:'你不抗拒一个人吃饭，但也不会刻意追求。偶尔一个人去吃个饭，刷刷手机，享受一下安静的时光，你觉得挺好的。但大多数时候，你还是更愿意有人陪。',
    behavior:['你偶尔会一个人去吃午餐','你觉得一个人吃饭时刷手机是最大的享受','你不会觉得一个人去餐厅很尴尬','你点菜时不太在意别人的口味'],
    suggestions:['下次一个人吃饭时，试试不看手机，专注于食物本身','找一家适合一个人去的餐厅，享受独处时光','试试一个人去看电影+吃饭的组合'],
    funFact:'你享受独食，但拍完照还是会发给朋友"看看我吃了啥"',
    card:{ gradient:'linear-gradient(135deg,#CE93D8 0%,#E1BEE7 100%)', pattern:'🎭🍝😌📱', accent:'#CE93D8' }
  },
  'APSA_标准': {
    key:'APSA_标准', parent:'APSA', level:'标准',
    name:'独行美食家', en:'Lone Gourmet', emoji:'🦅',
    tagline:'你有独属于自己的美食宇宙——不需要别人的认可',
    descShort:'独立美食评论家 · 口味不随大流 · 米其林编外评审',
    description:'你是一个有主见的美食独行侠。你对食物有自己的判断标准，不会因为某家店很火就跟风去吃，也不会因为别人说难吃就放弃尝试。你享受一个人探索美食的过程。',
    behavior:['你一个人吃火锅的次数比大多数人想象的多','你对美食有自己的评分体系','你不会因为排队人多就觉得好吃','你享受独自品尝然后默默打分的过程'],
    suggestions:['建立你的私人美食评分档案','写一篇你所在城市的"独食者指南"','挑战一周一个人吃不同的餐厅'],
    funFact:'你一个人吃火锅的次数，可能比大多数人一辈子都多',
    card:{ gradient:'linear-gradient(135deg,#9C27B0 0%,#CE93D8 100%)', pattern:'🦅🎭🍷🔮✨', accent:'#9C27B0' }
  },
  'APSA_极端': {
    key:'APSA_极端', parent:'APSA', level:'极端',
    name:'流浪美食家', en:'Wandering Chef', emoji:'🗺️',
    tagline:'你用脚步丈量美食地图——每一站都是一场味觉冒险',
    descShort:'背包客式美食家 · 孤独的美食猎人 · 味觉浪子',
    description:'你的美食之旅没有终点。你可能为了某一道菜飞到另一个城市，也可能在异国他乡的小巷里找到让你泪流满面的味道。你不需要同伴，因为你的味蕾就是你最好的旅伴。你收集的不是纪念品，而是味道。',
    behavior:['你旅行的路线完全由美食决定','你手机相册里80%是各种食物的照片','你能清楚记得3年前在某个小城吃过的那碗面','你的人生清单上有很多"为了吃xxx要去xxx"'],
    suggestions:['策划一次"一个人的美食丝绸之路"','把你的独行美食经历写成一本书或博客','挑战在一座新城市连续7天不重复餐厅'],
    funFact:'你的旅行纪念品是各地餐厅的名片和小票',
    card:{ gradient:'linear-gradient(135deg,#6A1B9A 0%,#9C27B0 100%)', pattern:'🗺️✈️🎒🌍🧳', accent:'#6A1B9A' }
  },

  // ─── SOGI 随缘干饭人 ───
  'SOGI_温和': {
    key:'SOGI_温和', parent:'SOGI', level:'温和',
    name:'不太挑食', en:'Easy Eater', emoji:'😊',
    tagline:'大多数东西都能吃——但偶尔也有自己的小坚持',
    descShort:'基本不挑食 · 有小偏好但不强求 · 好相处的用餐者',
    description:'你是一个好相处的用餐伙伴。大多数食物你都能接受，偶尔有不喜欢的但也不会太抗拒。你点菜时不太纠结，别人推荐什么你都愿意试试。你享受的是轻松愉快的用餐氛围。',
    behavior:['你点菜时经常说"我都可以"','你有不喜欢吃的东西但不会强烈拒绝','你去新餐厅时会让别人先点','你偶尔会突然想吃某样特定的东西'],
    suggestions:['下次点菜时大胆说出你最想吃的','试着给朋友推荐一家你喜欢的店','偶尔挑战一下你不太喜欢的食物，可能会有惊喜'],
    funFact:'你说"我都可以"的频率，是所有朋友里最高的',
    card:{ gradient:'linear-gradient(135deg,#90A4AE 0%,#B0BEC5 100%)', pattern:'😊🍚👍🙂', accent:'#90A4AE' }
  },
  'SOGI_标准': {
    key:'SOGI_标准', parent:'SOGI', level:'标准',
    name:'随缘干饭人', en:'Casual Diner', emoji:'🌾',
    tagline:'人生苦短，先吃饭再说——你的美食哲学就是不纠结',
    descShort:'佛系干饭王 · 不挑食达人 · "都行"代言人',
    description:'你是朋友圈里最容易请吃饭的人。你对食物没有什么执念，不挑食、不纠结，有什么吃什么。你享受的是和大家一起吃饭的轻松氛围，而不是菜品本身。',
    behavior:['你点外卖从不超过3分钟','别人问你吃什么你说"都行"的次数数不清','你去吃自助餐会把每样都拿一点','你对食物最大的评价就是"挺好的"'],
    suggestions:['下次朋友问你吃什么时，给出一个具体答案','试着去发现你真正喜欢的食物是什么','偶尔花点时间认真品味一下食物的味道'],
    funFact:'你点外卖从不超过3分钟，因为你永远选"再来一单"',
    card:{ gradient:'linear-gradient(135deg,#607D8B 0%,#90A4AE 100%)', pattern:'🌾😌🍜💤🤙', accent:'#607D8B' }
  },
  'SOGI_极端': {
    key:'SOGI_极端', parent:'SOGI', level:'极端',
    name:'躺平干饭王', en:'Ultimate Lazy', emoji:'😴',
    tagline:'能躺着绝不坐着吃——食物只是维持生命的燃料',
    descShort:'终极佛系 · 投喂型人格 · "送到嘴边就行"',
    description:'你对食物的要求已经低到了"能吃就行"的程度。你不会主动去研究什么好吃，有人给你带什么你就吃什么。你的人生哲学是：把精力花在比吃饭更重要的事情上。当然，什么是"更重要的事"，那就是躺着。',
    behavior:['你最长连续吃过一周同一种外卖','你买过速食产品直接当正餐','你觉得做饭是浪费时间的行为','你理想中的餐厅是"送到床边"的那种'],
    suggestions:['试试花10分钟做一道最简单的菜，也许会改变你的想法','让朋友带你去吃一次真正的美食，感受一下味觉的觉醒','买一个好看的饭盒，也许会让你对吃饭多一点期待'],
    funFact:'你的理想生活是"有人管饭"——这就是终极幸福',
    card:{ gradient:'linear-gradient(135deg,#455A64 0%,#607D8B 100%)', pattern:'😴🛏️📦💤🥱', accent:'#455A64' }
  },

  // ─── AOSA 即食效率派 ───
  'AOSA_温和': {
    key:'AOSA_温和', parent:'AOSA', level:'温和',
    name:'偶尔凑合', en:'Sometimes Quick', emoji:'⏰',
    tagline:'忙的时候随便吃，闲下来也会认真对待一顿饭',
    descShort:'忙闲切换型 · 工作日效率优先 · 周末偶尔精致',
    description:'你的饮食节奏跟着你的日程走。忙的时候，外卖、便利店、速食轮着来；闲下来的时候，你也会花时间做一顿像样的饭。你不是不在乎食物，只是有时候时间比食物更重要。',
    behavior:['你的外卖订单和工作强度成正比','你会在加班时选择最快的而不是最好吃的','你周末偶尔会心血来潮做一顿大餐','你的冰箱里既有速食也有新鲜食材'],
    suggestions:['提前备好一周的快手食材，效率和营养兼得','学会5道10分钟内能完成的健康快手菜','给自己定个规矩：每周至少认真做一顿饭'],
    funFact:'你的冰箱是速食和新鲜食材的混合体——反映了你矛盾的灵魂',
    card:{ gradient:'linear-gradient(135deg,#FFB74D 0%,#FFE082 100%)', pattern:'⏰🏃💨🍕', accent:'#FFB74D' }
  },
  'AOSA_标准': {
    key:'AOSA_标准', parent:'AOSA', level:'标准',
    name:'即食效率派', en:'Fast Fuel', emoji:'⚡',
    tagline:'时间就是生命——你用最快的速度给身体充电',
    descShort:'效率至上主义 · 外卖重度用户 · 便利店美食家',
    description:'你是效率至上的现代饮食者。在你的价值排序里，时间远比食物重要。你习惯于快速解决一餐，外卖是你最好的朋友，速食和便利店是你的能量补给站。',
    behavior:['你吃饭的平均时间不超过10分钟','你的外卖地址有3个以上（家、公司、健身房）','你对"等位"这件事的容忍度为零','你的手机里外卖APP的使用频率是所有APP里最高的'],
    suggestions:['试试meal prep——周日准备好一周的便当','了解一下哪些便利店食品是真正健康的','偶尔给自己一个"慢慢吃"的午餐时间'],
    funFact:'你的外卖备注栏永远是"不要敲门，放门口"',
    card:{ gradient:'linear-gradient(135deg,#FF9800 0%,#FFB74D 100%)', pattern:'⚡📱🏃💨🔥', accent:'#FF9800' }
  },
  'AOSA_极端': {
    key:'AOSA_极端', parent:'AOSA', level:'极端',
    name:'闪电侠', en:'Speed Eater', emoji:'⚡',
    tagline:'5分钟解决一顿饭——你的时间表里没有"慢慢吃"',
    descShort:'极速干饭人 · 边走边吃大师 · 时间管理带师',
    description:'你吃饭的速度已经快到了让人担心的程度。你可能一边开会一边吃午饭，一边走路一边啃面包。对你来说，吃饭只是给身体充电的必要操作，和给手机充电没什么区别。你最理想的食物是那种一口就能获取所有营养的"完美燃料"。',
    behavior:['你创过3分钟吃完一碗面的个人记录','你有过边走边吃、边开会边吃、边开车边吃的经历','你觉得"细嚼慢咽"是浪费生命的四个字','你最理想的食物形态是能量棒或代餐奶昔'],
    suggestions:['给自己设一个"吃饭不看手机"的小目标','试试用好看的餐具吃饭，也许会不自觉放慢速度','每周至少留出一顿饭的时间，坐下来慢慢吃'],
    funFact:'你吃饭的速度，让旁边的人都替你噎得慌',
    card:{ gradient:'linear-gradient(135deg,#E65100 0%,#FF9800 100%)', pattern:'⚡⚡💨🏃‍♂️⏱️', accent:'#E65100' }
  },

  // ─── SPGI 温暖家常派 ───
  'SPGI_温和': {
    key:'SPGI_温和', parent:'SPGI', level:'温和',
    name:'喜欢家常菜', en:'Home Food Lover', emoji:'🏡',
    tagline:'家里的味道是最好的——但偶尔也想出去吃',
    descShort:'家的味道爱好者 · 偶尔下厨 · 怀旧型食客',
    description:'你对家常菜有一种天然的好感。妈妈做的菜、家乡的味道，总能让你感到安心。你偶尔也会自己下厨，做几道简单的家常菜。但你也不排斥外出就餐，只是吃完总会说一句"还是家里的好吃"。',
    behavior:['你离家后最想念的是某道家里的菜','你偶尔会照着妈妈的菜谱做饭','你点外卖时会优先选择"家常菜"分类','你请朋友来家里吃饭时会特别紧张'],
    suggestions:['学会做你妈妈/爸爸的拿手菜','邀请朋友来家里吃一顿家常便饭','把你家乡的特色菜介绍给身边的朋友'],
    funFact:'你在外面吃的每一顿饭，心里都在和妈妈做的菜做比较',
    card:{ gradient:'linear-gradient(135deg,#FF8A65 0%,#FFAB91 100%)', pattern:'🏡🍚👨‍👩‍👧💛', accent:'#FF8A65' }
  },
  'SPGI_标准': {
    key:'SPGI_标准', parent:'SPGI', level:'标准',
    name:'温暖家常派', en:'Home Cook', emoji:'🏠',
    tagline:'最治愈的味道永远来自自家厨房——你用食物传递爱',
    descShort:'厨房暖男/暖女 · 投喂系人格 · 家的味道守护者',
    description:'你是朋友圈里的"投喂大使"。你最大的快乐就是看到别人吃你做的饭时露出满足的表情。你享受烹饪的每一个步骤——从挑选食材、到在厨房里忙活、到把热腾腾的饭菜端上桌。',
    behavior:['你的冰箱里永远有给别人准备的那份','你安慰朋友的方式是"来，我给你做顿饭"','你收藏的菜谱比你收藏的餐厅多','你觉得做饭是表达爱的最好方式'],
    suggestions:['给朋友策划一次"惊喜便当"','学做一道你从未尝试过的家常菜','把你最拿手的菜写成食谱，分享给更多人'],
    funFact:'你的冰箱里永远有给别人准备的那份',
    card:{ gradient:'linear-gradient(135deg,#FF5722 0%,#FF8A65 100%)', pattern:'🏠🍳❤️🥘🥰', accent:'#FF5722' }
  },
  'SPGI_极端': {
    key:'SPGI_极端', parent:'SPGI', level:'极端',
    name:'围裙天使', en:'Apron Angel', emoji:'👼',
    tagline:'你的厨房就是爱的发电站——给全世界投喂是你的使命',
    descShort:'全天候投喂者 · 便当艺术家 · 厨房里的时间管理大师',
    description:'你已经把"做饭给别人吃"变成了人生的头等大事。你不仅给家人做饭，还给朋友、同事、邻居做饭。你的冰箱里永远备着够10人份的食材，你的朋友圈每天更新的都是你做的各种美食。你最大的恐惧不是没有饭吃，而是别人没饭吃。',
    behavior:['你会给全办公室的人带自制便当','你的朋友圈日更是各种你做的菜','你会在朋友生病时主动送饭上门','你的厨房小家电比客厅的还多'],
    suggestions:['开一个"投喂日记"账号，记录你给每个人做的饭','尝试做一次大型聚餐，挑战10人份的家宴','把你最得意的菜做成食谱集，送给朋友当礼物'],
    funFact:'你的朋友都说，认识你之后再也不用担心饿肚子了',
    card:{ gradient:'linear-gradient(135deg,#BF360C 0%,#E64A19 100%)', pattern:'👼🍳🥘🎁💖', accent:'#BF360C' }
  }
};

// 主型元数据（用于历史记录和对比）
const PARENT_TYPES = {
  'APGI': { name:'美食探险家', emoji:'🧭', color:'#FF6B35' },
  'SOSA': { name:'营养计算器', emoji:'🧮', color:'#4CAF50' },
  'AOGA': { name:'社交食客', emoji:'🎉', color:'#E91E63' },
  'SPSI': { name:'慢食享受家', emoji:'🍵', color:'#795548' },
  'APSA': { name:'独行美食家', emoji:'🦅', color:'#9C27B0' },
  'SOGI': { name:'随缘干饭人', emoji:'🌾', color:'#607D8B' },
  'AOSA': { name:'即食效率派', emoji:'⚡', color:'#FF9800' },
  'SPGI': { name:'温暖家常派', emoji:'🏠', color:'#FF5722' }
};


// ═══════════════════════════════════════════════
//  §2  QUESTIONS  (18 题 × 4 选项)
// ═══════════════════════════════════════════════
// 选项权重: A(+2 左) · B(+1 偏左) · C(-1 偏右) · D(-2 右)
// 维度: AS(冒险/安全) · PO(过程/结果) · SG(独享/共享) · IA(直觉/分析)

const QUESTIONS = [
  // ─── 维度1: 冒险 vs 安全 (5题) ───
  {
    id:1, dim:'AS', emoji:'🗺️',
    text:'周五晚上，你打开外卖APP的那一刻——',
    hint:'说出你内心最真实的声音',
    options:[
      { text:'翻翻有没有新开的店，最好是从没吃过的菜系', weight:2 },
      { text:'看看推荐里有没有新面孔，偶尔换个口味也不错', weight:1 },
      { text:'还是老几家轮流点吧，至少不会踩雷', weight:-1 },
      { text:'直接点"常买"列表第一家，闭眼入', weight:-2 }
    ]
  },
  {
    id:2, dim:'AS', emoji:'✈️',
    text:'到了一个新城市旅行，第一顿饭你会——',
    hint:'你的胃比你的脚更诚实',
    options:[
      { text:'直奔当地菜市场或苍蝇馆子，越本地越兴奋', weight:2 },
      { text:'先找个看起来不错的本地餐厅试试', weight:1 },
      { text:'选一家连锁品牌，至少卫生有保障', weight:-1 },
      { text:'看看大众点评评分，选个4.5分以上的', weight:-2 }
    ]
  },
  {
    id:3, dim:'AS', emoji:'🫣',
    text:'朋友说"这家店有个菜巨好吃但卖相很奇怪"，你会——',
    hint:'你的内心独白是什么？',
    options:[
      { text:'越奇怪越好奇！快告诉我是啥', weight:2 },
      { text:'有意思，让我先看看长什么样', weight:1 },
      { text:'……我还是点个正常的吧', weight:-1 },
      { text:'你先吃给我看看再说', weight:-2 }
    ]
  },
  {
    id:4, dim:'AS', emoji:'🧪',
    text:'冰箱里只剩几种不太搭配的食材，你会——',
    hint:'这是对你创造力的终极考验',
    options:[
      { text:'来个即兴创作！说不定能发明新菜', weight:2 },
      { text:'搜搜这几样能做什么，试试看', weight:1 },
      { text:'还是分开做吧，别浪费食材', weight:-1 },
      { text:'点外卖吧，别折腾了', weight:-2 }
    ]
  },
  {
    id:5, dim:'AS', emoji:'🌿',
    text:'超市出现了一种你从没见过的食物，标签上写着"味道因人而异"——',
    hint:'你的手已经伸出去了还是缩回来了？',
    options:[
      { text:'因人而异？那我必须亲自验证一下', weight:2 },
      { text:'有点好奇，买一个试试', weight:1 },
      { text:'先搜搜大家怎么说', weight:-1 },
      { text:'算了吧，我还是买我认识的', weight:-2 }
    ]
  },

  // ─── 维度2: 过程 vs 结果 (5题) ───
  {
    id:6, dim:'PO', emoji:'👨‍🍳',
    text:'周末心血来潮要做一道菜，你最享受的是——',
    hint:'做菜的灵魂在哪里？',
    options:[
      { text:'整个过程！从洗菜切菜到听着锅里滋滋响，每一步都是享受', weight:2 },
      { text:'调味和烹饪的部分，看着食材慢慢变化很治愈', weight:1 },
      { text:'主要是端上桌那一刻的成就感', weight:-1 },
      { text:'当然是看到别人吃光光的那一刻！', weight:-2 }
    ]
  },
  {
    id:7, dim:'PO', emoji:'📸',
    text:'菜做好了，你端上桌的第一件事是——',
    hint:'承认吧，我们都做过',
    options:[
      { text:'精心摆盘，找好角度，拍个九宫格发朋友圈', weight:2 },
      { text:'先拍一张，记录一下', weight:1 },
      { text:'赶紧吃吧，趁热才好吃', weight:-1 },
      { text:'拍照？不存在的，直接开动', weight:-2 }
    ]
  },
  {
    id:8, dim:'PO', emoji:'⏳',
    text:'需要慢炖很久的一道菜，你会——',
    hint:'时间是敌人还是朋友？',
    options:[
      { text:'享受等待的过程，时不时去厨房看看闻闻，这就是仪式感', weight:2 },
      { text:'等的时候做点别的，但会时不时去看一眼', weight:1 },
      { text:'用高压锅快一点吧，味道差不多的', weight:-1 },
      { text:'直接点外卖吧，等不了', weight:-2 }
    ]
  },
  {
    id:9, dim:'PO', emoji:'🍜',
    text:'同一碗面，不同环境都能做，你更看重——',
    hint:'什么才是吃面的灵魂？',
    options:[
      { text:'环境和体验——灯光、音乐、餐具，全套仪式感拉满', weight:2 },
      { text:'环境好当然加分，但味道也不能差', weight:1 },
      { text:'味道好就行，环境无所谓', weight:-1 },
      { text:'能吃饱就行，我对面没有那么多要求', weight:-2 }
    ]
  },
  {
    id:10, dim:'PO', emoji:'🧹',
    text:'做了一顿丰盛的饭后，面对水槽里堆积如山的碗碟——',
    hint:'这是每个做饭人的噩梦',
    options:[
      { text:'没关系，做饭时的快乐已经值回票价了', weight:2 },
      { text:'有点烦，但下次还是会做', weight:1 },
      { text:'早知道就少做两个菜了', weight:-1 },
      { text:'……我为什么要自己做饭？外卖它不香吗', weight:-2 }
    ]
  },

  // ─── 维度3: 独享 vs 共享 (4题) ───
  {
    id:11, dim:'SG', emoji:'🍰',
    text:'冰箱里只剩最后一块你最爱的甜点，室友正好也在——',
    hint:'你的内心挣扎了多久？',
    options:[
      { text:'假装没看见，等室友走了再偷偷吃掉', weight:2 },
      { text:'犹豫了一下，还是自己吃了', weight:1 },
      { text:'切两半，但把大的那半留给自己', weight:-1 },
      { text:'直接给室友吧，分享更快乐', weight:-2 }
    ]
  },
  {
    id:12, dim:'SG', emoji:'🍲',
    text:'一群人聚餐时，你通常的角色是——',
    hint:'你在餐桌上的定位',
    options:[
      { text:'安静地吃自己想吃的，不太管别人', weight:2 },
      { text:'偶尔帮别人夹菜，但主要是自己吃', weight:1 },
      { text:'主动帮大家点菜、分菜、照顾每个人', weight:-1 },
      { text:'全场投喂大使，确保每个人碗里都是满的', weight:-2 }
    ]
  },
  {
    id:13, dim:'SG', emoji:'🤫',
    text:'你发现了一家超级好吃的宝藏小店，你会——',
    hint:'好东西要分享还是独占？',
    options:[
      { text:'先自己偷偷去吃几次，等我吃够了再告诉你们', weight:2 },
      { text:'先自己去确认一下，好的话再推荐', weight:1 },
      { text:'告诉几个好朋友，但别发到大群里', weight:-1 },
      { text:'立刻拉群喊人！好东西必须第一时间分享', weight:-2 }
    ]
  },
  {
    id:14, dim:'SG', emoji:'🍕',
    text:'和朋友一起吃饭，你更倾向于——',
    hint:'你的用餐哲学',
    options:[
      { text:'各点各的，我今天就想吃这个，不想迁就', weight:2 },
      { text:'自己点自己的，但会问别人要不要尝尝', weight:1 },
      { text:'点几道大家一起分享，这样能吃到更多花样', weight:-1 },
      { text:'我来点菜！保证每个人都有喜欢吃的', weight:-2 }
    ]
  },

  // ─── 维度4: 直觉 vs 分析 (4题) ───
  {
    id:15, dim:'IA', emoji:'🛒',
    text:'逛超市买零食，你的购物车通常是——',
    hint:'你的购物车暴露了你的性格',
    options:[
      { text:'看到什么想吃的就扔进去，结账时才发现买了三包一样的', weight:2 },
      { text:'边逛边拿，但会大概控制一下数量', weight:1 },
      { text:'大部分按清单来，偶尔放纵一下', weight:-1 },
      { text:'提前列好清单，严格按照清单执行', weight:-2 }
    ]
  },
  {
    id:16, dim:'IA', emoji:'⭐',
    text:'选餐厅时你的决策依据是——',
    hint:'你是数据派还是感觉派？',
    options:[
      { text:'走进去的那一刻就知道对不对——靠的是直觉', weight:2 },
      { text:'先看一眼整体感觉，再大概看看评价', weight:1 },
      { text:'主要看评分和评论，感觉只是辅助', weight:-1 },
      { text:'评分、评论数、差评关键词、人均消费……数据不会骗人', weight:-2 }
    ]
  },
  {
    id:17, dim:'IA', emoji:'🧂',
    text:'做饭放调料的时候——',
    hint:'"适量"到底是多少？',
    options:[
      { text:'凭感觉来！"适量"就是手抖到哪算哪', weight:2 },
      { text:'大概凭感觉，但会尝一下再调整', weight:1 },
      { text:'参考菜谱，但不会太精确', weight:-1 },
      { text:'严格按照菜谱来，盐3克、酱油5毫升……', weight:-2 }
    ]
  },
  {
    id:18, dim:'IA', emoji:'🤔',
    text:'今天吃什么？这个世纪难题你的解法是——',
    hint:'全人类共同的烦恼',
    options:[
      { text:'看心情——突然想吃什么是不需要理由的', weight:2 },
      { text:'先想想最近没吃什么，再决定', weight:1 },
      { text:'综合考虑一下预算、距离、时间再决定', weight:-1 },
      { text:'列出3个候选，对比分析后再做决定', weight:-2 }
    ]
  }
];

// 维度标签
const DIM_LABELS = {
  AS: { name:'冒险-安全', left:'🧭 冒险探索', right:'🛡️ 稳妥安全', leftEmoji:'🧭', rightEmoji:'🛡️' },
  PO: { name:'过程-结果', left:'🎨 过程享受', right:'🎯 结果导向', leftEmoji:'🎨', rightEmoji:'🎯' },
  SG: { name:'独享-共享', left:'🦅 独享自在', right:'🤝 共享快乐', leftEmoji:'🦅', rightEmoji:'🤝' },
  IA: { name:'直觉-分析', left:'💫 直觉驱动', right:'📊 分析决策', leftEmoji:'💫', rightEmoji:'📊' }
};

// 8轴子维度标签（用于精细化雷达图）
const SUB_DIM_LABELS = [
  '食材冒险', '场景冒险',    // AS 拆分
  '烹饪仪式', '用餐仪式',    // PO 拆分
  '主动分享', '社交用餐',    // SG 拆分
  '选择直觉', '判断分析'     // IA 拆分
];


// ═══════════════════════════════════════════════
//  §3  SVG AVATARS  (24 unique characters)
// ═══════════════════════════════════════════════

function generateAvatar(typeKey) {
  const avatars = {
    // APGI 系列
    'APGI_温和': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#FFF3E0"/><circle cx="60" cy="52" r="28" fill="#FFCC80"/>
      <circle cx="50" cy="48" r="3" fill="#5D4037"/><circle cx="70" cy="48" r="3" fill="#5D4037"/>
      <path d="M52 58 Q60 65 68 58" stroke="#5D4037" stroke-width="2" fill="none" stroke-linecap="round"/>
      <rect x="38" y="26" width="44" height="16" rx="8" fill="#FF9800"/><rect x="50" y="20" width="20" height="10" rx="5" fill="#FFB74D"/>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#FF9800"/>
      <text x="60" y="42" text-anchor="middle" font-size="10">🤔</text>
      <circle cx="30" cy="90" r="5" fill="#FFE0B2" opacity="0.5"/><circle cx="90" cy="85" r="4" fill="#FFE0B2" opacity="0.5"/>
    </svg>`,

    'APGI_标准': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#FFF3E0"/><circle cx="60" cy="52" r="28" fill="#FFCC80"/>
      <circle cx="50" cy="48" r="3.5" fill="#5D4037"/><circle cx="70" cy="48" r="3.5" fill="#5D4037"/>
      <path d="M50 58 Q60 68 70 58" stroke="#5D4037" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M32 40 Q40 15 60 12 Q80 15 88 40" fill="#FF6B35"/><circle cx="60" cy="12" r="4" fill="#FFD54F"/>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#FF6B35"/>
      <line x1="85" y1="70" x2="95" y2="55" stroke="#8D6E63" stroke-width="3" stroke-linecap="round"/>
      <text x="95" y="52" font-size="12">🧭</text>
      <circle cx="25" cy="95" r="6" fill="#FFE0B2" opacity="0.4"/><circle cx="95" cy="90" r="5" fill="#FFE0B2" opacity="0.4"/>
    </svg>`,

    'APGI_极端': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#FFEBEE"/><circle cx="60" cy="52" r="28" fill="#FFCC80"/>
      <circle cx="48" cy="46" r="4" fill="#B71C1C"/><circle cx="72" cy="46" r="4" fill="#B71C1C"/>
      <path d="M48 60 Q60 72 72 60" stroke="#B71C1C" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M35 30 L60 8 L85 30 Z" fill="#D32F2F"/><circle cx="60" cy="8" r="5" fill="#FFD54F"/>
      <text x="60" y="25" text-anchor="middle" font-size="10">👑</text>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#D32F2F"/>
      <text x="15" y="50" font-size="14">🔥</text><text x="92" y="45" font-size="14">💀</text>
      <text x="20" y="100" font-size="10">🧪</text><text x="88" y="95" font-size="10">😈</text>
    </svg>`,

    // SOSA 系列
    'SOSA_温和': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#E8F5E9"/><circle cx="60" cy="52" r="28" fill="#C8E6C9"/>
      <circle cx="50" cy="48" r="3" fill="#2E7D32"/><circle cx="70" cy="48" r="3" fill="#2E7D32"/>
      <path d="M54 58 Q60 62 66 58" stroke="#2E7D32" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M38 35 Q50 20 70 25 Q82 30 80 40" fill="#66BB6A"/>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#66BB6A"/>
      <text x="90" y="50" font-size="16">🌿</text>
      <circle cx="25" cy="90" r="5" fill="#A5D6A7" opacity="0.5"/>
    </svg>`,

    'SOSA_标准': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#E8F5E9"/><circle cx="60" cy="52" r="28" fill="#A5D6A7"/>
      <circle cx="50" cy="48" r="3" fill="#1B5E20"/><circle cx="70" cy="48" r="3" fill="#1B5E20"/>
      <path d="M52 57 L60 57 L68 57" stroke="#1B5E20" stroke-width="2" stroke-linecap="round"/>
      <rect x="40" y="22" width="40" height="20" rx="4" fill="#4CAF50"/>
      <text x="60" y="36" text-anchor="middle" font-size="9" fill="white">🧮</text>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#4CAF50"/>
      <text x="88" y="55" font-size="12">📊</text>
      <line x1="15" y1="85" x2="25" y2="85" stroke="#81C784" stroke-width="2"/>
      <line x1="15" y1="90" x2="22" y2="90" stroke="#81C784" stroke-width="2"/>
    </svg>`,

    'SOSA_极端': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#E8F5E9"/><circle cx="60" cy="52" r="28" fill="#81C784"/>
      <rect cx="48" cy="46" width="8" height="6" rx="1" fill="#1B5E20"/><rect cx="64" cy="46" width="8" height="6" rx="1" fill="#1B5E20"/>
      <rect x="48" y="58" width="24" height="4" rx="2" fill="#1B5E20"/>
      <rect x="30" y="18" width="60" height="24" rx="4" fill="#2E7D32"/>
      <text x="60" y="35" text-anchor="middle" font-size="9" fill="white">📈 DATA</text>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#2E7D32"/>
      <text x="88" y="50" font-size="14">💻</text><text x="15" y="45" font-size="12">🔬</text>
    </svg>`,

    // AOGA 系列
    'AOGA_温和': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#FCE4EC"/><circle cx="60" cy="52" r="28" fill="#F8BBD0"/>
      <circle cx="50" cy="48" r="3" fill="#880E4F"/><circle cx="70" cy="48" r="3" fill="#880E4F"/>
      <path d="M52 58 Q60 64 68 58" stroke="#880E4F" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M36 38 Q50 22 70 28 Q82 34 80 42" fill="#F06292"/>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#F06292"/>
      <text x="88" y="52" font-size="16">📱</text>
      <circle cx="30" cy="88" r="5" fill="#F8BBD0" opacity="0.5"/>
    </svg>`,

    'AOGA_标准': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#FCE4EC"/><circle cx="60" cy="52" r="28" fill="#F48FB1"/>
      <circle cx="50" cy="48" r="3.5" fill="#880E4F"/><circle cx="70" cy="48" r="3.5" fill="#880E4F"/>
      <path d="M48 58 Q60 70 72 58" stroke="#880E4F" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M35 35 Q50 18 70 22 Q85 28 82 40" fill="#E91E63"/><text x="60" y="32" text-anchor="middle" font-size="12">🎉</text>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#E91E63"/>
      <circle cx="20" cy="70" r="8" fill="#F48FB1" opacity="0.4"/><circle cx="100" cy="65" r="7" fill="#F48FB1" opacity="0.4"/>
      <text x="18" y="73" font-size="8">👤</text><text x="98" y="68" font-size="8">👤</text>
      <text x="85" y="100" font-size="10">📸</text>
    </svg>`,

    'AOGA_极端': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#FCE4EC"/><circle cx="60" cy="52" r="28" fill="#F06292"/>
      <circle cx="48" cy="46" r="4" fill="#880E4F"/><circle cx="72" cy="46" r="4" fill="#880E4F"/>
      <path d="M45 58 Q60 74 75 58" stroke="#880E4F" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M30 35 Q50 10 70 18 Q90 28 85 42" fill="#C2185B"/><text x="58" y="30" text-anchor="middle" font-size="14">🥳</text>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#C2185B"/>
      <text x="10" y="50" font-size="12">🎈</text><text x="98" y="42" font-size="12">🎊</text>
      <text x="12" y="90" font-size="10">🍾</text><text x="92" y="85" font-size="10">🔥</text>
      <circle cx="18" cy="65" r="6" fill="#F48FB1" opacity="0.5"/><circle cx="102" cy="60" r="5" fill="#F48FB1" opacity="0.5"/>
    </svg>`,

    // SPSI 系列
    'SPSI_温和': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#EFEBE9"/><circle cx="60" cy="52" r="28" fill="#D7CCC8"/>
      <circle cx="50" cy="48" r="3" fill="#4E342E"/><circle cx="70" cy="48" r="3" fill="#4E342E"/>
      <path d="M54 58 Q60 62 66 58" stroke="#4E342E" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M38 38 Q50 25 70 30 Q80 35 78 42" fill="#BCAAA4"/>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#BCAAA4"/>
      <text x="88" y="52" font-size="16">🌸</text>
    </svg>`,

    'SPSI_标准': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#EFEBE9"/><circle cx="60" cy="52" r="28" fill="#BCAAA4"/>
      <circle cx="50" cy="48" r="3" fill="#3E2723"/><circle cx="70" cy="48" r="3" fill="#3E2723"/>
      <path d="M52 57 Q60 60 68 57" stroke="#3E2723" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M35 38 Q48 18 72 22 Q85 28 82 40" fill="#795548"/>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#795548"/>
      <text x="85" y="48" font-size="16">🍵</text><text x="15" y="52" font-size="12">🕯️</text>
      <text x="90" y="100" font-size="10">📖</text>
    </svg>`,

    'SPSI_极端': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#EFEBE9"/><circle cx="60" cy="52" r="28" fill="#A1887F"/>
      <circle cx="50" cy="46" r="3" fill="#3E2723"/><circle cx="70" cy="46" r="3" fill="#3E2723"/>
      <path d="M50 56 Q60 58 70 56" stroke="#3E2723" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M30 42 Q45 15 60 12 Q75 15 90 42" fill="#5D4037"/>
      <text x="60" y="28" text-anchor="middle" font-size="14">🧘</text>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#5D4037"/>
      <text x="85" y="52" font-size="16">🍃</text><text x="12" y="48" font-size="14">☕</text>
    </svg>`,

    // APSA 系列
    'APSA_温和': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#F3E5F5"/><circle cx="60" cy="52" r="28" fill="#E1BEE7"/>
      <circle cx="50" cy="48" r="3" fill="#4A148C"/><circle cx="70" cy="48" r="3" fill="#4A148C"/>
      <path d="M54 58 Q60 62 66 58" stroke="#4A148C" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M38 38 Q50 25 70 30 Q80 35 78 42" fill="#CE93D8"/>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#CE93D8"/>
      <text x="88" y="52" font-size="16">🎭</text>
    </svg>`,

    'APSA_标准': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#F3E5F5"/><circle cx="60" cy="52" r="28" fill="#CE93D8"/>
      <circle cx="50" cy="48" r="3.5" fill="#4A148C"/><circle cx="70" cy="48" r="3.5" fill="#4A148C"/>
      <path d="M52 56 Q60 60 68 56" stroke="#4A148C" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M35 35 Q50 18 70 22 Q85 28 82 40" fill="#9C27B0"/>
      <text x="60" y="30" text-anchor="middle" font-size="14">🦅</text>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#9C27B0"/>
      <text x="85" y="50" font-size="14">🔮</text><text x="15" y="55" font-size="12">🍷</text>
    </svg>`,

    'APSA_极端': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#F3E5F5"/><circle cx="60" cy="52" r="28" fill="#BA68C8"/>
      <circle cx="48" cy="46" r="4" fill="#4A148C"/><circle cx="72" cy="46" r="4" fill="#4A148C"/>
      <path d="M48 58 Q60 66 72 58" stroke="#4A148C" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M30 38 Q48 12 60 10 Q72 12 90 38" fill="#6A1B9A"/>
      <text x="60" y="28" text-anchor="middle" font-size="14">🗺️</text>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#6A1B9A"/>
      <text x="85" y="48" font-size="14">✈️</text><text x="12" y="50" font-size="12">🎒</text>
      <text x="88" y="100" font-size="10">🧳</text><text x="12" y="95" font-size="10">🌍</text>
    </svg>`,

    // SOGI 系列
    'SOGI_温和': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#ECEFF1"/><circle cx="60" cy="52" r="28" fill="#CFD8DC"/>
      <circle cx="50" cy="48" r="3" fill="#37474F"/><circle cx="70" cy="48" r="3" fill="#37474F"/>
      <path d="M54 58 Q60 62 66 58" stroke="#37474F" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M38 38 Q50 25 70 30 Q80 35 78 42" fill="#90A4AE"/>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#90A4AE"/>
      <text x="88" y="52" font-size="16">😊</text>
    </svg>`,

    'SOGI_标准': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#ECEFF1"/><circle cx="60" cy="52" r="28" fill="#B0BEC5"/>
      <circle cx="50" cy="48" r="3" fill="#263238"/><circle cx="70" cy="48" r="3" fill="#263238"/>
      <path d="M50 57 Q60 60 70 57" stroke="#263238" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M35 38 Q50 22 70 28 Q82 34 80 42" fill="#607D8B"/>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#607D8B"/>
      <text x="88" y="52" font-size="16">🌾</text><text x="15" y="50" font-size="12">🤙</text>
    </svg>`,

    'SOGI_极端': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#ECEFF1"/><circle cx="60" cy="52" r="28" fill="#90A4AE"/>
      <line x1="46" y1="46" x2="54" y2="46" stroke="#263238" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="66" y1="46" x2="74" y2="46" stroke="#263238" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M50 60 Q60 62 70 60" stroke="#263238" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M35 38 Q50 22 70 28 Q82 34 80 42" fill="#455A64"/>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#455A64"/>
      <text x="85" y="52" font-size="16">😴</text><text x="12" y="48" font-size="12">🛏️</text>
      <text x="88" y="100" font-size="10">📦</text>
    </svg>`,

    // AOSA 系列
    'AOSA_温和': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#FFF8E1"/><circle cx="60" cy="52" r="28" fill="#FFE082"/>
      <circle cx="50" cy="48" r="3" fill="#E65100"/><circle cx="70" cy="48" r="3" fill="#E65100"/>
      <path d="M54 58 Q60 62 66 58" stroke="#E65100" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M38 38 Q50 25 70 30 Q80 35 78 42" fill="#FFB74D"/>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#FFB74D"/>
      <text x="88" y="52" font-size="16">⏰</text>
    </svg>`,

    'AOSA_标准': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#FFF8E1"/><circle cx="60" cy="52" r="28" fill="#FFD54F"/>
      <circle cx="50" cy="48" r="3" fill="#E65100"/><circle cx="70" cy="48" r="3" fill="#E65100"/>
      <path d="M52 56 L60 56 L68 56" stroke="#E65100" stroke-width="2" stroke-linecap="round"/>
      <path d="M35 35 Q50 18 70 22 Q85 28 82 40" fill="#FF9800"/>
      <text x="60" y="30" text-anchor="middle" font-size="14">⚡</text>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#FF9800"/>
      <text x="85" y="52" font-size="14">📱</text><text x="15" y="50" font-size="12">🏃</text>
    </svg>`,

    'AOSA_极端': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#FFF8E1"/><circle cx="60" cy="52" r="28" fill="#FFB74D"/>
      <line x1="46" y1="46" x2="54" y2="46" stroke="#BF360C" stroke-width="3" stroke-linecap="round"/>
      <line x1="66" y1="46" x2="74" y2="46" stroke="#BF360C" stroke-width="3" stroke-linecap="round"/>
      <path d="M50 58 L70 58" stroke="#BF360C" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M30 38 Q48 12 60 10 Q72 12 90 38" fill="#E65100"/>
      <text x="60" y="28" text-anchor="middle" font-size="16">⚡</text>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#E65100"/>
      <text x="82" y="48" font-size="12">💨</text><text x="12" y="48" font-size="12">🏃‍♂️</text>
      <text x="85" y="100" font-size="10">⏱️</text>
    </svg>`,

    // SPGI 系列
    'SPGI_温和': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#FBE9E7"/><circle cx="60" cy="52" r="28" fill="#FFAB91"/>
      <circle cx="50" cy="48" r="3" fill="#BF360C"/><circle cx="70" cy="48" r="3" fill="#BF360C"/>
      <path d="M52 58 Q60 64 68 58" stroke="#BF360C" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M38 38 Q50 25 70 30 Q80 35 78 42" fill="#FF8A65"/>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#FF8A65"/>
      <text x="88" y="52" font-size="16">🏡</text>
    </svg>`,

    'SPGI_标准': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#FBE9E7"/><circle cx="60" cy="52" r="28" fill="#FF8A65"/>
      <circle cx="50" cy="48" r="3.5" fill="#BF360C"/><circle cx="70" cy="48" r="3.5" fill="#BF360C"/>
      <path d="M48 58 Q60 70 72 58" stroke="#BF360C" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M35 35 Q50 18 70 22 Q85 28 82 40" fill="#FF5722"/>
      <text x="60" y="30" text-anchor="middle" font-size="14">🏠</text>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#FF5722"/>
      <text x="85" y="48" font-size="16">🍳</text><text x="12" y="52" font-size="12">❤️</text>
    </svg>`,

    'SPGI_极端': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#FBE9E7"/><circle cx="60" cy="52" r="28" fill="#FF7043"/>
      <circle cx="48" cy="46" r="4" fill="#BF360C"/><circle cx="72" cy="46" r="4" fill="#BF360C"/>
      <path d="M45 58 Q60 74 75 58" stroke="#BF360C" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M30 35 Q48 10 60 8 Q72 10 90 35" fill="#E64A19"/>
      <text x="60" y="26" text-anchor="middle" font-size="14">👼</text>
      <rect x="35" y="80" width="50" height="30" rx="10" fill="#E64A19"/>
      <text x="82" y="48" font-size="14">🍳</text><text x="12" y="48" font-size="12">🥘</text>
      <text x="85" y="100" font-size="10">🎁</text><text x="12" y="95" font-size="10">💖</text>
    </svg>`
  };

  return avatars[typeKey] || avatars['APGI_标准'];
}


// ═══════════════════════════════════════════════
//  §4  STATE
// ═══════════════════════════════════════════════
let currentQuestion = 0;
let answers = new Array(QUESTIONS.length).fill(null);
let chartInstance = null;
let trendChartInstance = null;
let currentResult = null; // stores the last computed result

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const STORAGE_KEY = 'foodti_history';


// ═══════════════════════════════════════════════
//  §5  INIT
// ═══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Check URL params for shared result
  const params = new URLSearchParams(window.location.search);
  if (params.has('r')) {
    const result = decodeShareParams(params);
    if (result) {
      currentResult = result;
      showPage('result');
      renderResult(result);
      return;
    }
  }
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


// ═══════════════════════════════════════════════
//  §6  QUIZ FLOW
// ═══════════════════════════════════════════════
function startQuiz() {
  currentQuestion = 0;
  answers = new Array(QUESTIONS.length).fill(null);
  showPage('quiz');
  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[currentQuestion];
  const total = QUESTIONS.length;
  const progress = (currentQuestion / total) * 100;

  $('#progress-fill').style.width = `${progress}%`;
  $('#progress-text').textContent = `${currentQuestion + 1} / ${total}`;
  $('#progress-dim').textContent = DIM_LABELS[q.dim].name;

  const container = $('#question-container');
  container.innerHTML = `
    <div class="question-emoji">${q.emoji}</div>
    <div class="question-text">${q.text}</div>
    <div class="question-hint">${q.hint || '选择最符合你的一项'}</div>
    <div class="options options-4">
      ${q.options.map((opt, idx) => `
        <button class="option-btn ${answers[currentQuestion] === idx ? 'selected' : ''}"
                onclick="selectOption(${idx}, this)">
          <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
          <span class="option-text">${opt.text}</span>
        </button>
      `).join('')}
    </div>
  `;

  $('#btn-back').classList.toggle('hidden', currentQuestion === 0);
  const nextBtn = $('#btn-next');
  nextBtn.disabled = answers[currentQuestion] === null;
  nextBtn.textContent = currentQuestion === total - 1 ? '查看结果 🎉' : '下一题 →';
}

function selectOption(idx, btn) {
  answers[currentQuestion] = idx;
  $$('.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  $('#btn-next').disabled = false;
  setTimeout(() => goNext(), 450);
}

function goBack() {
  if (currentQuestion > 0) { currentQuestion--; renderQuestion(); }
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


// ═══════════════════════════════════════════════
//  §7  SCORING
// ═══════════════════════════════════════════════
function calculateResult() {
  const dimRaw = { AS: 0, PO: 0, SG: 0, IA: 0 }; // sum of weights
  const dimMax = { AS: 0, PO: 0, SG: 0, IA: 0 };  // max possible absolute sum
  const subDimRaw = [0,0,0,0,0,0,0,0]; // 8 sub-dimensions

  QUESTIONS.forEach((q, idx) => {
    const ansIdx = answers[idx];
    if (ansIdx === null || ansIdx === undefined) return;
    const w = q.options[ansIdx].weight;
    dimRaw[q.dim] += w;
    dimMax[q.dim] += 2; // max weight per question

    // Sub-dimensions: distribute each question to one of two sub-dims
    const subIdx = getSubDimIndex(q.id);
    subDimRaw[subIdx] += w;
  });

  // Normalize to 0-1 (0=right pole, 1=left pole)
  const dimScores = {};
  for (const dim of ['AS','PO','SG','IA']) {
    const total = QUESTIONS.filter(q => q.dim === dim).length * 2;
    dimScores[dim] = (dimRaw[dim] + total) / (2 * total); // 0 to 1
  }

  // Sub-dim scores (normalize to 0-100)
  const subDimScores = subDimRaw.map((v, i) => {
    const count = QUESTIONS.filter((q, qi) => getSubDimIndex(q.id) === i).length;
    return Math.round(((v / count) + 1) * 50); // 0 to 100
  });

  // Determine parent type
  const d1 = dimScores.AS >= 0.5 ? 'A' : 'S';
  const d2 = dimScores.PO >= 0.5 ? 'P' : 'O';
  const d3 = dimScores.SG >= 0.5 ? 'G' : 'S';
  const d4 = dimScores.IA >= 0.5 ? 'I' : 'A';
  const parentKey = d1 + d2 + d3 + d4;

  // Determine level based on average dimension strength
  const avgStrength = Object.values(dimScores).reduce((s, v) => {
    return s + Math.abs(v - 0.5);
  }, 0) / 4;

  let level;
  if (avgStrength < 0.10) level = '温和';      // 51-60% range
  else if (avgStrength < 0.20) level = '标准';   // 61-80% range
  else level = '极端';                            // 81-100% range

  const typeKey = `${parentKey}_${level}`;
  const type = TYPES[typeKey] || TYPES[`${parentKey}_标准`];

  return {
    typeKey,
    parentKey,
    level,
    type,
    dimScores,
    subDimScores,
    answers: [...answers],
    timestamp: Date.now()
  };
}

function getSubDimIndex(qId) {
  // Maps question ID to sub-dimension index (0-7)
  const map = { 1:0, 2:1, 3:0, 4:1, 5:0,   // AS -> 0,1
                6:2, 7:3, 8:2, 9:3, 10:2,   // PO -> 2,3
                11:4, 12:5, 13:4, 14:5,      // SG -> 4,5
                15:6, 17:6, 16:7, 18:7 };    // IA -> 6,7
  return map[qId] || 0;
}


// ═══════════════════════════════════════════════
//  §8  SHOW RESULT
// ═══════════════════════════════════════════════
function showResult() {
  try {
    const result = calculateResult();
    currentResult = result;

    // Save to history
    saveToHistory(result);

    // Update URL
    const params = encodeShareParams(result);
    window.history.pushState(null, '', `?${params}`);

    $('#progress-fill').style.width = '100%';
    showPage('result');
    renderResult(result);
    launchConfetti();
  } catch (e) {
    console.error('showResult error:', e);
    alert('计算结果时出错: ' + e.message);
  }
}

function renderResult(result) {
  const type = result.type;

  try { renderAvatar(type); } catch(e) { console.error('avatar', e); }
  try { renderPersonalityCard(type); } catch(e) { console.error('pcard', e); }

  $('#result-emoji').textContent = type.emoji;
  $('#result-name').textContent = type.name;
  $('#result-en').textContent = type.en;
  $('#result-tagline').textContent = type.tagline;

  try { renderRadarChart(result.subDimScores); } catch(e) { console.error('radar', e); }
  try { renderDimensionBars(result.dimScores); } catch(e) { console.error('dimbars', e); }
  try { renderBehaviorProfile(type); } catch(e) { console.error('behavior', e); }
  try { renderDescription(type); } catch(e) { console.error('desc', e); }
  try { renderSimilarTypes(result.parentKey, result.dimScores); } catch(e) { console.error('similar', e); }
  try { renderSuggestions(type); } catch(e) { console.error('suggest', e); }
  try { renderTypeGrid(result.typeKey); } catch(e) { console.error('grid', e); }
}


// ═══════════════════════════════════════════════
//  §9  RESULT RENDERERS
// ═══════════════════════════════════════════════

function renderAvatar(type) {
  const container = $('#avatar-container');
  container.innerHTML = `<div class="avatar-wrapper">${generateAvatar(type.key)}</div>`;
}

function renderPersonalityCard(type) {
  const card = $('#personality-card');
  const c = type.card;
  const patterns = c.pattern.match(/[\p{Emoji}]/gu) || [];
  card.innerHTML = `
    <div class="pcard-inner" style="background:${c.gradient}">
      <div class="pcard-pattern">${patterns.map(e => `<span>${e}</span>`).join('')}</div>
      <div class="pcard-bg-emoji">${type.emoji}</div>
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
        <span>v2.0</span>
      </div>
    </div>`;
}

function renderRadarChart(subDimScores) {
  const ctx = $('#radar-chart').getContext('2d');
  if (chartInstance) chartInstance.destroy();

  // Generate gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, 'rgba(255, 107, 53, 0.25)');
  gradient.addColorStop(1, 'rgba(255, 179, 71, 0.05)');

  chartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: SUB_DIM_LABELS,
      datasets: [{
        label: '你的美食DNA',
        data: subDimScores,
        backgroundColor: gradient,
        borderColor: '#FF6B35',
        borderWidth: 2.5,
        pointBackgroundColor: '#FF6B35',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: { stepSize: 25, display: false },
          grid: { color: 'rgba(255,107,53,0.08)', circular: true },
          angleLines: { color: 'rgba(255,107,53,0.08)' },
          pointLabels: {
            font: { size: 12, family: "'Noto Sans SC',sans-serif", weight: '600' },
            color: '#5D3A2E',
            padding: 8
          }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#2D1810',
          titleFont: { family: "'Noto Sans SC',sans-serif" },
          bodyFont: { family: "'Noto Sans SC',sans-serif" },
          callbacks: { label: ctx => `${ctx.label}: ${ctx.raw}%` }
        }
      },
      animation: { duration: 1200, easing: 'easeOutQuart' }
    }
  });
}

function renderDimensionBars(dimScores) {
  const container = $('#dimension-bars');
  const dims = [
    { key:'AS', score: dimScores.AS },
    { key:'PO', score: dimScores.PO },
    { key:'SG', score: dimScores.SG },
    { key:'IA', score: dimScores.IA }
  ];
  const gradients = {
    AS: 'linear-gradient(90deg,#FF6B35,#FF8F5E)',
    PO: 'linear-gradient(90deg,#FFB347,#FFD700)',
    SG: 'linear-gradient(90deg,#E91E63,#FF5722)',
    IA: 'linear-gradient(90deg,#9C27B0,#E040FB)'
  };

  container.innerHTML = dims.map(d => {
    const label = DIM_LABELS[d.key];
    const pct = Math.round(d.score * 100);
    const isLeft = d.score >= 0.5;
    const displayLabel = isLeft ? label.left : label.right;
    const displayPct = isLeft ? pct : (100 - pct);
    return `
      <div class="dim-bar-item">
        <div class="dim-bar-header">
          <span class="dim-bar-label">${displayLabel}</span>
          <span class="dim-bar-value">${displayPct}%</span>
        </div>
        <div class="dim-bar-track">
          <div class="dim-bar-fill" style="width:${pct}%;background:${gradients[d.key]}"></div>
        </div>
        <div class="dim-bar-poles">
          <span>${label.leftEmoji} ${Math.round(d.score*100)}%</span>
          <span>${Math.round((1-d.score)*100)}% ${label.rightEmoji}</span>
        </div>
      </div>`;
  }).join('');
}

function renderBehaviorProfile(type) {
  const container = $('#behavior-profile');
  if (!type.behavior) { container.innerHTML = ''; return; }
  const emojis = ['🎯','💡','📊','🔮','🎪','🌟'];
  container.innerHTML = `
    <div class="result-card-title">🔍 行为画像</div>
    <div class="behavior-list">
      ${type.behavior.map((b, i) => `
        <div class="behavior-item">
          <span class="behavior-emoji">${emojis[i] || '•'}</span>
          <span class="behavior-text">${b}</span>
        </div>
      `).join('')}
    </div>`;
}

function renderDescription(type) {
  const container = $('#result-description');
  container.innerHTML = `
    <p>${type.description}</p>
    <div class="fun-fact">
      <span class="fun-fact-icon">💡</span>
      <span class="fun-fact-text">冷知识：${type.funFact}</span>
    </div>`;
}

function renderSimilarTypes(parentKey, dimScores) {
  const container = $('#similar-types');
  // Calculate distance to all other parent types
  const distances = Object.keys(PARENT_TYPES)
    .filter(k => k !== parentKey)
    .map(k => {
      const t = TYPES[k + '_标准'];
      const d = TYPES[k + '_温和'];
      if (!t) return null;
      const otherScores = {
        AS: k[0] === 'A' ? 0.75 : 0.25,
        PO: k[1] === 'P' ? 0.75 : 0.25,
        SG: k[2] === 'G' ? 0.75 : 0.25,
        IA: k[3] === 'I' ? 0.75 : 0.25
      };
      const dist = Math.sqrt(
        Math.pow(dimScores.AS - otherScores.AS, 2) +
        Math.pow(dimScores.PO - otherScores.PO, 2) +
        Math.pow(dimScores.SG - otherScores.SG, 2) +
        Math.pow(dimScores.IA - otherScores.IA, 2)
      );
      return { key: k, type: t, distance: dist, similarity: Math.round((1 - dist / 2) * 100) };
    })
    .filter(Boolean)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 2);

  container.innerHTML = `
    <div class="result-card-title">🤝 相似类型</div>
    <div class="similar-list">
      ${distances.map(d => `
        <div class="similar-item">
          <span class="similar-emoji">${d.type.emoji}</span>
          <div class="similar-info">
            <span class="similar-name">${d.type.name}</span>
            <span class="similar-pct">相似度 ${d.similarity}%</span>
          </div>
        </div>
      `).join('')}
    </div>`;
}

function renderSuggestions(type) {
  const container = $('#suggestions');
  if (!type.suggestions) { container.innerHTML = ''; return; }
  container.innerHTML = `
    <div class="result-card-title">💡 给你的美食建议</div>
    <div class="suggestion-list">
      ${type.suggestions.map((s, i) => `
        <div class="suggestion-item">
          <span class="suggestion-num">${i + 1}</span>
          <span class="suggestion-text">${s}</span>
        </div>
      `).join('')}
    </div>`;
}

function renderTypeGrid(currentKey) {
  const grid = $('#type-grid');
  grid.innerHTML = Object.entries(PARENT_TYPES).map(([key, t]) => `
    <div class="type-chip ${key === currentKey.split('_')[0] ? 'current' : ''}">
      <span class="type-chip-emoji">${t.emoji}</span>
      <span>${t.name}</span>
    </div>
  `).join('');
}


// ═══════════════════════════════════════════════
//  §10  HISTORY
// ═══════════════════════════════════════════════
function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch { return []; }
}

function saveToHistory(result) {
  const records = getHistory();
  records.unshift({
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    timestamp: result.timestamp,
    typeKey: result.typeKey,
    parentKey: result.parentKey,
    level: result.level,
    typeName: result.type.name,
    typeEmoji: result.type.emoji,
    dimScores: result.dimScores,
    answers: result.answers
  });
  // Keep max 50 records
  if (records.length > 50) records.length = 50;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

function deleteHistoryRecord(id) {
  const records = getHistory().filter(r => r.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  renderHistoryPage();
}

function clearAllHistory() {
  if (confirm('确定要清空所有历史记录吗？')) {
    localStorage.removeItem(STORAGE_KEY);
    renderHistoryPage();
  }
}

function showHistory() {
  showPage('history');
  renderHistoryPage();
}

function renderHistoryPage() {
  const records = getHistory();
  const container = $('#history-list');

  if (records.length === 0) {
    container.innerHTML = `
      <div class="history-empty">
        <div class="history-empty-emoji">📭</div>
        <div class="history-empty-text">还没有测试记录</div>
        <button class="start-btn small" onclick="startQuiz()">去测一测 →</button>
      </div>`;
    $('#history-stats').innerHTML = '';
    $('#history-trend').innerHTML = '';
    return;
  }

  // Stats
  const totalCount = records.length;
  const typeCounts = {};
  records.forEach(r => { typeCounts[r.typeName] = (typeCounts[r.typeName] || 0) + 1; });
  const mostCommon = Object.entries(typeCounts).sort((a, b) => b[1] - a[1])[0];

  $('#history-stats').innerHTML = `
    <div class="stat-item">
      <div class="stat-num">${totalCount}</div>
      <div class="stat-label">测试次数</div>
    </div>
    <div class="stat-item">
      <div class="stat-num">${Object.keys(typeCounts).length}</div>
      <div class="stat-label">不同结果</div>
    </div>
    <div class="stat-item">
      <div class="stat-num">${mostCommon[0]}</div>
      <div class="stat-label">最多结果</div>
    </div>`;

  // Trend chart (last 5 records)
  renderHistoryTrend(records.slice(0, 5).reverse());

  // Record list
  container.innerHTML = `
    <div class="history-list-header">
      <span>测试记录</span>
      <button class="clear-btn" onclick="clearAllHistory()">清空</button>
    </div>
    ${records.map(r => {
      const date = new Date(r.timestamp);
      const dateStr = `${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${String(date.getMinutes()).padStart(2,'0')}`;
      return `
        <div class="history-item" onclick="showHistoryDetail('${r.id}')">
          <div class="history-item-left">
            <span class="history-emoji">${r.typeEmoji}</span>
            <div class="history-info">
              <span class="history-name">${r.typeName}</span>
              <span class="history-date">${dateStr}</span>
            </div>
          </div>
          <div class="history-item-right">
            <span class="history-level">${r.level}</span>
            <button class="delete-btn" onclick="event.stopPropagation();deleteHistoryRecord('${r.id}')">✕</button>
          </div>
        </div>`;
    }).join('')}`;
}

function renderHistoryTrend(records) {
  const container = $('#history-trend');
  if (records.length < 2) { container.innerHTML = ''; return; }

  const canvas = document.createElement('canvas');
  canvas.id = 'trend-canvas';
  canvas.height = 200;
  container.innerHTML = '<div class="result-card-title">📈 变化趋势（最近5次）</div>';
  container.appendChild(canvas);

  if (trendChartInstance) trendChartInstance.destroy();

  const labels = records.map((r, i) => {
    const d = new Date(r.timestamp);
    return `${d.getMonth()+1}/${d.getDate()}`;
  });

  trendChartInstance = new Chart(canvas.getContext('2d'), {
    type: 'line',
    data: {
      labels,
      datasets: [
        { label:'冒险度', data: records.map(r => Math.round(r.dimScores.AS*100)), borderColor:'#FF6B35', backgroundColor:'rgba(255,107,53,0.1)', tension:0.4, fill:true, pointRadius:4 },
        { label:'过程导向', data: records.map(r => Math.round(r.dimScores.PO*100)), borderColor:'#FFB347', backgroundColor:'rgba(255,179,71,0.1)', tension:0.4, fill:true, pointRadius:4 },
        { label:'共享倾向', data: records.map(r => Math.round(r.dimScores.SG*100)), borderColor:'#E91E63', backgroundColor:'rgba(233,30,99,0.1)', tension:0.4, fill:true, pointRadius:4 },
        { label:'直觉力', data: records.map(r => Math.round(r.dimScores.IA*100)), borderColor:'#9C27B0', backgroundColor:'rgba(156,39,176,0.1)', tension:0.4, fill:true, pointRadius:4 }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position:'bottom', labels: { font:{ size:11, family:"'Noto Sans SC',sans-serif" }, padding:12 } },
        tooltip: { callbacks: { label: ctx => `${ctx.dataset.label}: ${ctx.raw}%` } }
      },
      scales: {
        y: { min:0, max:100, ticks: { callback: v => v + '%' } }
      }
    }
  });
}

function showHistoryDetail(id) {
  const records = getHistory();
  const record = records.find(r => r.id === id);
  if (!record) return;

  // Reconstruct result object
  const type = TYPES[record.typeKey] || TYPES[`${record.parentKey}_标准`];
  currentResult = {
    typeKey: record.typeKey,
    parentKey: record.parentKey,
    level: record.level,
    type,
    dimScores: record.dimScores,
    subDimScores: estimateSubDimScores(record.dimScores),
    answers: record.answers,
    timestamp: record.timestamp
  };

  showPage('result');
  renderResult(currentResult);
}

function estimateSubDimScores(dimScores) {
  // Approximate sub-dim scores from parent dim scores with some variation
  const base = [
    Math.round(dimScores.AS * 100), Math.round(dimScores.AS * 95),
    Math.round(dimScores.PO * 100), Math.round(dimScores.PO * 95),
    Math.round(dimScores.SG * 100), Math.round(dimScores.SG * 95),
    Math.round(dimScores.IA * 100), Math.round(dimScores.IA * 95)
  ];
  return base;
}


// ═══════════════════════════════════════════════
//  §11  SHARE
// ═══════════════════════════════════════════════
function encodeShareParams(result) {
  const d = [
    Math.round(result.dimScores.AS * 100),
    Math.round(result.dimScores.PO * 100),
    Math.round(result.dimScores.SG * 100),
    Math.round(result.dimScores.IA * 100)
  ];
  return `r=${result.parentKey}&l=${encodeURIComponent(result.level)}&d=${d.join(',')}`;
}

function decodeShareParams(params) {
  const parentKey = params.get('r');
  const level = params.get('l') || '标准';
  const dStr = params.get('d');

  if (!parentKey || !PARENT_TYPES[parentKey]) return null;

  const typeKey = `${parentKey}_${level}`;
  const type = TYPES[typeKey] || TYPES[`${parentKey}_标准`];
  if (!type) return null;

  let dimScores = { AS:0.5, PO:0.5, SG:0.5, IA:0.5 };
  if (dStr) {
    const d = dStr.split(',').map(Number);
    if (d.length === 4 && d.every(v => !isNaN(v) && v >= 0 && v <= 100)) {
      dimScores = { AS: d[0]/100, PO: d[1]/100, SG: d[2]/100, IA: d[3]/100 };
    }
  }

  return {
    typeKey, parentKey, level, type, dimScores,
    subDimScores: estimateSubDimScores(dimScores),
    answers: null,
    timestamp: Date.now()
  };
}

function shareResult() {
  if (!currentResult) return;
  const type = currentResult.type;
  const url = window.location.href.split('?')[0] + '?' + encodeShareParams(currentResult);
  const text = `我的食物人格是「${type.emoji} ${type.name}」！${type.tagline}\n\n来测测你的食物人格吧 👉 ${url}`;

  if (navigator.share) {
    navigator.share({ title:`FoodTI - 我是${type.name}`, text, url }).catch(() => {});
  } else {
    copyToClipboard(text);
    showToast('结果已复制到剪贴板，快去分享吧！');
  }
}

function copyLink() {
  if (!currentResult) return;
  const url = window.location.href.split('?')[0] + '?' + encodeShareParams(currentResult);
  copyToClipboard(url);
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
  ta.value = text; ta.style.position = 'fixed'; ta.style.left = '-9999px';
  document.body.appendChild(ta); ta.select(); document.execCommand('copy');
  document.body.removeChild(ta);
}

function showToast(msg) {
  const toast = $('#toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}


// ═══════════════════════════════════════════════
//  §12  CONFETTI
// ═══════════════════════════════════════════════
function launchConfetti() {
  const canvas = $('#confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#FF6B35','#FFB347','#FFD700','#E91E63','#4CAF50','#9C27B0','#FF5722'];
  const particles = Array.from({length:80}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    vx: (Math.random() - 0.5) * 4,
    vy: Math.random() * 3 + 2,
    size: Math.random() * 8 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 10,
    shape: Math.random() > 0.5 ? 'rect' : 'circle'
  }));

  let frame = 0;
  const maxFrames = 180;
  function animate() {
    if (frame > maxFrames) { ctx.clearRect(0,0,canvas.width,canvas.height); return; }
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => {
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color; ctx.globalAlpha = Math.max(0, 1 - frame / maxFrames);
      if (p.shape === 'rect') ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size*0.6);
      else { ctx.beginPath(); ctx.arc(0,0,p.size/2,0,Math.PI*2); ctx.fill(); }
      ctx.restore();
      p.x += p.vx; p.y += p.vy; p.vy += 0.08; p.rotation += p.rotationSpeed;
    });
    frame++; requestAnimationFrame(animate);
  }
  animate();
}


// ═══════════════════════════════════════════════
//  §13  NAVIGATION
// ═══════════════════════════════════════════════
function restart() {
  if (chartInstance) { chartInstance.destroy(); chartInstance = null; }
  if (trendChartInstance) { trendChartInstance.destroy(); trendChartInstance = null; }
  window.history.pushState(null, '', window.location.pathname);
  showPage('landing');
}
