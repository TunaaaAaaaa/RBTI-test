export interface Question {
  id: number;
  dimension: string;
  text: string;
  options: { value: number; label: string }[];
}

export const rbtiQuestions: Question[] = [
  // ===== R1 选题倾向 =====
  { id: 1, dimension: "R1", text: "导师让你选研究方向，你的反应是？", options: [
    { value: 1, label: "导师指哪我打哪，省心" },
    { value: 2, label: "在导师给的方向里选个自己感兴趣的" },
    { value: 3, label: "我已经看了50篇论文，有个新想法想试试" },
  ]},
  { id: 2, dimension: "R1", text: "看到一篇超有潜力的论文，你会？", options: [
    { value: 1, label: "收藏夹里躺着，永远不会打开" },
    { value: 2, label: "仔细读一遍，看看能不能用到自己的研究里" },
    { value: 3, label: "连夜复现，然后思考如何改进它" },
  ]},

  // ===== R2 文献阅读 =====
  { id: 3, dimension: "R2", text: "你的arXiv访问频率是？", options: [
    { value: 1, label: "写论文时才上去看看" },
    { value: 2, label: "每周刷一次，看看有没有新进展" },
    { value: 3, label: "每天早晨第一件事，比吃早餐还重要" },
  ]},
  { id: 4, dimension: "R2", text: "读论文时你会？", options: [
    { value: 1, label: "只看摘要和结论，公式跳过" },
    { value: 2, label: "重点读方法部分，推导大概扫一眼" },
    { value: 3, label: "逐字逐句读，推导自己手推一遍" },
  ]},

  // ===== R3 理论深度 =====
  { id: 5, dimension: "R3", text: "遇到一个复杂的公式，你会？", options: [
    { value: 1, label: "跳过，反正能跑就行" },
    { value: 2, label: "大概理解含义，细节不深究" },
    { value: 3, label: "从头推导一遍，不搞懂睡不着" },
  ]},
  { id: 6, dimension: "R3", text: "一个方法效果好，你关心原理吗？", options: [
    { value: 1, label: "不重要，结果好就行" },
    { value: 2, label: "大概知道原理，细节随缘" },
    { value: 3, label: "必须搞懂，否则心里不踏实" },
  ]},

  // ===== M1 时间管理 =====
  { id: 7, dimension: "M1", text: "你的毕业论文进度？", options: [
    { value: 1, label: "前11周摸鱼，最后两周通宵" },
    { value: 2, label: "大致有计划，但经常调整" },
    { value: 3, label: "精确到每天每周，Excel表格打印出来" },
  ]},
  { id: 8, dimension: "M1", text: "一天的时间安排？", options: [
    { value: 1, label: "起床了再想今天干嘛" },
    { value: 2, label: "有个大致计划，但灵活执行" },
    { value: 3, label: "每小时都有安排，严格打卡" },
  ]},

  // ===== M2 项目执行 =====
  { id: 9, dimension: "M2", text: "你同时开的项目数量？", options: [
    { value: 1, label: "无数个，没一个完成的" },
    { value: 2, label: "两三个并行，主要精力在核心项目" },
    { value: 3, label: "专注一个项目，完成再开下一个" },
  ]},
  { id: 10, dimension: "M2", text: "实验记录的习惯？", options: [
    { value: 1, label: "能跑出结果就行，没空记" },
    { value: 2, label: "重要实验会记录，简单的就算了" },
    { value: 3, label: "每个实验都有详细记录，参数步骤不能漏" },
  ]},

  // ===== M3 论文产出 =====
  { id: 11, dimension: "M3", text: "你一年能写几篇论文？", options: [
    { value: 1, label: "一篇，还不一定能中" },
    { value: 2, label: "两三篇，稳定输出" },
    { value: 3, label: "五篇以上，论文生产线" },
  ]},
  { id: 12, dimension: "M3", text: "写论文的流程是？", options: [
    { value: 1, label: "拖到ddl前两周开始狂写" },
    { value: 2, label: "有个大致计划，按部就班完成" },
    { value: 3, label: "论文有模板，每周固定时间写" },
  ]},

  // ===== E1 实验态度 =====
  { id: 13, dimension: "E1", text: "一个实验跑出好结果，你会？", options: [
    { value: 1, label: "能出图就行，跑一次够了" },
    { value: 2, label: "再跑几次确认一下" },
    { value: 3, label: "重复10次以上，计算统计显著性" },
  ]},
  { id: 14, dimension: "E1", text: "Baseline实验怎么做？", options: [
    { value: 1, label: "跑个主要的就行" },
    { value: 2, label: "主要方法都跑，特殊情况再说" },
    { value: 3, label: "所有相关方法都跑，严格控制实验条件" },
  ]},

  // ===== E2 Debug能力 =====
  { id: 15, dimension: "E2", text: "实验报错了，你的第一反应？", options: [
    { value: 1, label: "重启试试，或者随便改改参数" },
    { value: 2, label: "看看报错信息，搜一下" },
    { value: 3, label: "逐步调试，定位到具体问题" },
  ]},
  { id: 16, dimension: "E2", text: "Debug两小时没解决，你会？", options: [
    { value: 1, label: "换个方向，这个方法可能不行" },
    { value: 2, label: "找师兄师姐帮忙看看" },
    { value: 3, label: "继续查，直到找到根本原因" },
  ]},

  // ===== E3 代码素养 =====
  { id: 17, dimension: "E3", text: "你的实验代码命名？", options: [
    { value: 1, label: "test1.py, test2.py, test_final_final.py" },
    { value: 2, label: "大部分时候注意命名，赶ddl时随缘" },
    { value: 3, label: "每个文件变量都见名知意，有注释" },
  ]},
  { id: 18, dimension: "E3", text: "GitHub上的项目？", options: [
    { value: 1, label: "没有，代码都在本地" },
    { value: 2, label: "有项目，但不常更新" },
    { value: 3, label: "GitHub绿成草原，每个实验都有记录" },
  ]},

  // ===== C1 导师关系 =====
  { id: 19, dimension: "C1", text: "周会汇报时你？", options: [
    { value: 1, label: "本周在思考人生（其实摸鱼了）" },
    { value: 2, label: "正常汇报进展，有问题就提" },
    { value: 3, label: "准备充分，PPT做好，每个问题都有回答" },
  ]},
  { id: 20, dimension: "C1", text: "遇到科研瓶颈，你会？", options: [
    { value: 1, label: "自己死磕，不说" },
    { value: 2, label: "实在不行再找导师聊" },
    { value: 3, label: "主动约导师讨论，寻求建议" },
  ]},

  // ===== C2 同行交流 =====
  { id: 21, dimension: "C2", text: "参加学术会议，你的状态？", options: [
    { value: 1, label: "找个角落坐下，听完就撤" },
    { value: 2, label: "该鼓掌鼓掌，该提问看情况" },
    { value: 3, label: "积极提问，会后找大佬交流" },
  ]},
  { id: 22, dimension: "C2", text: "看到同行的工作有问题，你会？", options: [
    { value: 1, label: "不关我事，不说话" },
    { value: 2, label: "私下跟朋友聊聊" },
    { value: 3, label: "在会议上或GitHub上礼貌提出" },
  ]},

  // ===== C3 学术社交 =====
  { id: 23, dimension: "C3", text: "你的学术社交圈？", options: [
    { value: 1, label: "只有实验室的人" },
    { value: 2, label: "认识一些同行，偶尔合作" },
    { value: 3, label: "人脉很广，每个顶会都能遇到熟人" },
  ]},
  { id: 24, dimension: "C3", text: "你会主动联系其他研究者吗？", options: [
    { value: 1, label: "不会，社恐" },
    { value: 2, label: "有具体问题才联系" },
    { value: 3, label: "定期交流，讨论最新进展" },
  ]},

  // ===== P1 抗压能力 =====
  { id: 25, dimension: "P1", text: "论文被拒，你的反应？", options: [
    { value: 1, label: "心态崩了，怀疑人生，考虑转行" },
    { value: 2, label: "有点难受，但调整后继续改" },
    { value: 3, label: "正常，反手就投下一个期刊" },
  ]},
  { id: 26, dimension: "P1", text: "科研遇到瓶颈期，你会？", options: [
    { value: 1, label: "陷入焦虑，不知道该怎么办" },
    { value: 2, label: "放松几天，换个思路" },
    { value: 3, label: "分析原因，制定突破计划" },
  ]},

  // ===== P2 自我认同 =====
  { id: 27, dimension: "P2", text: "对自己的科研能力？", options: [
    { value: 1, label: "我是谁，我在哪，我能毕业吗" },
    { value: 2, label: "还行，有进步空间" },
    { value: 3, label: "我超棒，我能做出好研究" },
  ]},
  { id: 28, dimension: "P2", text: "看到别人的好工作，你？", options: [
    { value: 1, label: "我不行，差距太大了" },
    { value: 2, label: "厉害，看看能不能借鉴" },
    { value: 3, label: "不错，但我也做得不差" },
  ]},

  // ===== P3 工作生活平衡 =====
  { id: 29, dimension: "P3", text: "周末你通常在？", options: [
    { value: 1, label: "实验室，论文还没写完" },
    { value: 2, label: "休息，但偶尔看看论文" },
    { value: 3, label: "完全不看论文，专心休息" },
  ]},
  { id: 30, dimension: "P3", text: "你会把工作带回家吗？", options: [
    { value: 1, label: "会，家就是第二个实验室" },
    { value: 2, label: "偶尔紧急情况会" },
    { value: 3, label: "不会，工作与生活严格分开" },
  ]},
];

export const rbtiHiddenQuestions = [
  {
    id: 31,
    text: "答完啦！最后一个不计分的：你现在喝的是什么？",
    options: [
      { value: "water", label: "白开水" },
      { value: "coffee", label: "咖啡" },
      { value: "tea", label: "茶" },
      { value: "energy", label: "能量饮料" },
    ],
  },
  {
    id: 32,
    text: "一天喝几杯咖啡？",
    triggerPrev: "coffee",
    options: [
      { value: "casual", label: "一杯就够" },
      { value: "addict", label: "三杯起步，没咖啡写不出论文" },
    ],
  },
];
