/**
 * RBTI 维度体系
 * 针对研究生和研究员的 5模型×3子维度=15维度 架构
 * 每维度 L/M/H 三档
 */

export interface DimensionDef {
  code: string;
  name: string;
  model: string;
  modelName: string;
  levels: {
    L: string;
    M: string;
    H: string;
  };
}

export const rbtiDimensionDefs: DimensionDef[] = [
  // ===== 学术探索模型 (Research) =====
  {
    code: "R1",
    name: "选题倾向",
    model: "R",
    modelName: "学术探索",
    levels: {
      L: "跟着导师做现成的，创新是下一个问题",
      M: "在现有方向上做点小延伸，偶尔有点想法",
      H: "自己开辟新方向，导师听了都沉默",
    },
  },
  {
    code: "R2",
    name: "文献阅读",
    model: "R",
    modelName: "学术探索",
    levels: {
      L: "写论文时才读，谷歌学术首页刷不到我的搜索记录",
      M: "定期读相关领域，但很难坚持",
      H: "每天早晨一杯咖啡+arXiv，比我对象还亲",
    },
  },
  {
    code: "R3",
    name: "理论深度",
    model: "R",
    modelName: "学术探索",
    levels: {
      L: "能跑就行，原理是下一个迭代的事",
      M: "大致理解核心思想，细节随缘",
      H: "每个公式都要手推一遍，不看论文睡不着",
    },
  },

  // ===== 科研管理模型 (Management) =====
  {
    code: "M1",
    name: "时间管理",
    model: "M",
    modelName: "科研管理",
    levels: {
      L: "ddl是第一生产力，前11周在摸鱼",
      M: "大概有计划，但经常被打乱",
      H: "精确到每天每个小时，Excel表格能打印出来",
    },
  },
  {
    code: "M2",
    name: "项目执行",
    model: "M",
    modelName: "科研管理",
    levels: {
      L: "开了无数个坑，没一个填完的",
      M: "主要项目能推进，小坑随时开",
      H: "每个实验都有详细记录，每个坑都有deadline",
    },
  },
  {
    code: "M3",
    name: "论文产出",
    model: "M",
    modelName: "科研管理",
    levels: {
      L: "一年写一篇，还可能被拒",
      M: "稳定输出，偶尔投个顶会碰碰运气",
      H: "论文生产线，审稿人都觉得眼熟",
    },
  },

  // ===== 实验模型 (Experiment) =====
  {
    code: "E1",
    name: "实验态度",
    model: "E",
    modelName: "实验能力",
    levels: {
      L: "跑一次能出图就行，重复性实验？是什么",
      M: "主要实验会跑多次，特殊情况再说",
      H: "每种方法跑10次，统计显著性算到小数点后三位",
    },
  },
  {
    code: "E2",
    name: "Debug能力",
    model: "E",
    modelName: "实验能力",
    levels: {
      L: "报错了？重启一下试试",
      M: "能解决大部分问题，实在不行找师兄师姐",
      H: "StackOverflow刷到凌晨三点也要找到根因",
    },
  },
  {
    code: "E3",
    name: "代码素养",
    model: "E",
    modelName: "实验能力",
    levels: {
      L: "能跑就行，变量名a1 a2 a3是对我的尊重",
      M: "大部分时候注意规范，赶ddl时随缘",
      H: "每次提交都有详细说明，GitHub绿成草原",
    },
  },

  // ===== 协作模型 (Collaboration) =====
  {
    code: "C1",
    name: "导师关系",
    model: "C",
    modelName: "团队协作",
    levels: {
      L: "周会汇报：本周在思考人生",
      M: "正常沟通，偶尔遇到瓶颈会求助",
      H: "每周约饭聊进展，导师都嫌我烦",
    },
  },
  {
    code: "C2",
    name: "同行交流",
    model: "C",
    modelName: "团队协作",
    levels: {
      L: "开会不说话，投完稿就消失",
      M: "该配合的时候会参与，但不主动",
      H: "会议提问专业户，GitHub Issues里到处是我的身影",
    },
  },
  {
    code: "C3",
    name: "学术社交",
    model: "C",
    modelName: "团队协作",
    levels: {
      L: "学术圈不认识我，我也不认识学术圈",
      M: "认识几个同行，偶尔合作",
      H: "每个顶会都能遇到熟人，人形学术百科",
    },
  },

  // ===== 心理模型 (Psychology) =====
  {
    code: "P1",
    name: "抗压能力",
    model: "P",
    modelName: "心理健康",
    levels: {
      L: "拒稿三次心态崩了，考虑转行卖奶茶",
      M: "会受挫但能调整，告诉自己这只是工作",
      H: "拒稿是日常，被拒了反手就投下一个期刊",
    },
  },
  {
    code: "P2",
    name: "自我认同",
    model: "P",
    modelName: "心理健康",
    levels: {
      L: "我是谁？我在哪？我的论文能毕业吗",
      M: "偶尔怀疑人生，但大部分时候还算自信",
      H: "我是天才（或者我正在变成天才的路上）",
    },
  },
  {
    code: "P3",
    name: "工作生活平衡",
    model: "P",
    modelName: "心理健康",
    levels: {
      L: "实验室就是家，宿舍是睡觉的地方",
      M: "偶尔休息，但周末也在看论文",
      H: "严格区分工作生活，下班后不看paper",
    },
  },
];
