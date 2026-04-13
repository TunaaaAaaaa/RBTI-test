# RBTI — 研究员行为类型测试

> Researcher Behavior Type Indicator
>
> 一个面向研究生和研究员群体的行为类型测试平台，衍生自程序员行为类型测试 CBTI。

## 项目简介

**RBTI** (Researcher Behavior Type Indicator) 是一个面向研究人员群体的行为类型测试网站。

本项目**灵感来源于 [CBTI](https://cbti.codefather.cn)（程序员行为类型测试）**，CBTI 的灵感则来自 **MBTI** 和 **[SBTI](https://sbti.unun.dev/)**。

RBTI 借鉴了 CBTI 的测试框架和算法设计理念，针对研究生、学者和科研人员群体进行了全面定制。

通过 30 道和科研日常相关的选择题，从 **5 大行为模型、15 个维度** 综合分析，匹配出你的科研人格类型。

共有 **15 种人格 + 1 种隐藏人格**，每种人格都用学术圈都懂的关键词命名（如 `SCHOLAR`、`SLOTH`、`THEORY`、`ARXIV`、`REVIEWER`），配有专属描述和段子化文案。

## 人格类型一览

| 代码 | 名称 | 一句话 |
|------|------|--------|
| SCHOLAR | 学术圣体 | 论文是我的信仰，科研是我的生命 |
| SLOTH | 摸鱼大师 | ddl是第一生产力，前11周都在思考人生 |
| EXPERIMENT | 实验狂魔 | 只要实验跑得够多，总有一个能中 |
| THEORY | 理论神人 | 公式推导是我的生命，实验验证是浪费时间 |
| GHOST | 隐形人 | 我？不在实验室。不在线。不存在 |
| STRESS | 焦虑星人 | 拒稿了，我的人生完蛋了 |
| SOCIAL | 学术交际花 | 论文是第二位的，人脉才是最重要的 |
| PERFECT | 强迫症 | 一个空格都不能错，一个引用都不能漏 |
| HACK | 野生研究员 | 能跑就行，管它什么原理 |
| GRADUATE | 混文凭者 | 只要能毕业，管它什么科研 |
| BOSS | 小导师 | 师兄师姐，帮我跑个实验呗 |
| PIONEER | 开荒者 | 这个方向没人做，正好，我开宗立派 |
| REVIEWER | 审稿人格 | 拒稿的快乐，你不懂 |
| ARXIV | arXiv刷屏者 | 今天的arXiv，你刷了吗？ |
| SUPPORT | 好人师兄 | 师弟师妹，有什么问题随时问我 |
| ☕ COFFEE | 咖啡因驱动研究员 | 隐藏人格 |

## 维度体系

**5 个行为模型 × 3 个子维度 = 15 个评估维度**，每个维度 L/M/H 三档。

| 模型 | 子维度 |
|------|--------|
| 🔭 学术探索 | R1 选题倾向 · R2 文献阅读 · R3 理论深度 |
| 📋 科研管理 | M1 时间管理 · M2 项目执行 · M3 论文产出 |
| 🧪 实验能力 | E1 实验态度 · E2 Debug能力 · E3 代码素养 |
| 🤝 团队协作 | C1 导师关系 · C2 同行交流 · C3 学术社交 |
| 🧠 心理健康 | P1 抗压能力 · P2 自我认同 · P3 工作生活平衡 |

## 匹配算法

1. 每道题 1/2/3 分，每维度 2 题，分值范围 2-6
2. 分数转等级：≤3 → L，4 → M，≥5 → H
3. 15 维度等级转为数值向量（L=0, M=1, H=2）
4. 与 15 种人格的标准向量计算**曼哈顿距离**
5. 距离最小者为匹配人格，同时计算匹配度百分比

## 技术栈

- **框架**：Next.js + TypeScript
- **样式**：Tailwind CSS 4
- **部署**：EdgeOne Pages（静态导出）
- 纯前端计算，无后端依赖，无数据收集

## 项目结构

```
src/
├── app/
│   ├── page.tsx            # 首页
│   ├── rbti-test/page.tsx  # 答题页
│   ├── rbti-result/page.tsx # 结果页
│   ├── types/page.tsx      # 全部人格浏览
│   ├── layout.tsx          # 根布局
│   └── globals.css         # 全局样式
├── components/
│   ├── MountainScene.tsx   # 首页山景背景
│   └── RadarChart.tsx      # 五维雷达图
├── data/
│   ├── rbti-questions.ts   # 30 道题目
│   ├── rbti-personalities.ts # 15+1 种人格定义
│   └── rbti-dimensions.ts  # 15 维度定义
├── lib/
│   └── scoring.ts          # 计分和匹配算法
```

## 本地开发

```bash
npm install
npm run dev        # 启动开发服务器 http://localhost:3000
npm run build      # 构建（静态导出到 out/）
```

## 部署

项目配置了 `output: "export"`，构建后生成纯静态文件，可部署到任意静态托管平台：

```bash
npm run build
# 将 out/ 目录部署到 EdgeOne Pages / Vercel / Netlify / Cloudflare Pages 等
```

## 致谢

- **CBTI**：本项目的核心灵感来源，感谢 [程序员鱼皮](https://space.bilibili.com/12890453) 创作的原始项目
- **SBTI**：行为类型测试的设计参考
- **MBTI**：人格类型理论基础

## 声明

本测试仅供娱乐和科研参考，别拿它当作正式评估的依据。
