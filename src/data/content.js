const content = {
  // ===========================
  // Navigation
  // ===========================
  nav: {
    en: { projects: 'Projects', resume: 'Resume', contact: 'Contact' },
    zh: { projects: '项目', resume: '简历', contact: '联系' },
  },

  // ===========================
  // Hero
  // ===========================
  hero: {
    en: {
      title: 'Fei Yi',
      subtitle: 'Data Science & AI \u00b7 Emory University',
      pitch: 'I build data systems that turn messy real-world data into structured, actionable insight. Focused on NLP, applied machine learning, and product-oriented data science.',
      resume: 'Resume',
    },
    zh: {
      title: '易非',
      subtitle: '数据科学与 AI \u00b7 Emory University',
      pitch: '专注于将复杂真实数据转化为可落地的洞察。研究方向涵盖 NLP、应用机器学习与产品导向的数据科学。',
      resume: '简历',
    },
  },

  // ===========================
  // Home Sections
  // ===========================
  home: {
    en: {
      featuredProjects: 'Featured Projects',
      otherProjects: 'Other Projects',
      toolsSkills: 'Tools & Skills',
      about: 'About',
      contact: 'Contact',
      viewCaseStudy: 'View Case Study \u2192',
      aboutP1: "I'm a Data Science student at Emory University, focused on building systems that turn real-world data into usable insight.",
      aboutP2: 'My experience spans applied machine learning, NLP, and data-driven product design \u2014 from forecasting models at Tencent to user behavior analysis at Atmosfy.',
      aboutP3: "I'm currently working on research in AI agent dynamics and game theory, exploring how intelligent systems interact under constraints.",
      skillCategories: {
        languages: 'Languages',
        mlNlp: 'ML / NLP',
        dataViz: 'Data & Visualization',
        tools: 'Tools',
      },
    },
    zh: {
      featuredProjects: '核心项目',
      otherProjects: '其他项目',
      toolsSkills: '技术栈',
      about: '关于',
      contact: '联系方式',
      viewCaseStudy: '查看案例 \u2192',
      aboutP1: 'Emory University 数据科学方向本科生，专注于构建将真实数据转化为可用洞察的系统。',
      aboutP2: '实践经验涵盖应用机器学习、NLP 与数据驱动的产品设计 \u2014 从腾讯云的 forecasting 模型到 Atmosfy 的用户行为分析。',
      aboutP3: '目前正在进行 AI agent 博弈论方向的研究，探索智能系统在约束条件下的交互机制。',
      skillCategories: {
        languages: '编程语言',
        mlNlp: 'ML / NLP',
        dataViz: '数据与可视化',
        tools: '工具',
      },
    },
  },

  // ===========================
  // Project Cards
  // ===========================
  projects: {
    en: {
      'tencent-dashboard': {
        subtitle: 'Tencent Cloud \u00b7 Data Science Intern',
        title: 'Client Demand Forecasting & Sales Decision Dashboard',
        description: 'End-to-end system at Tencent Cloud that predicts client demand signals and delivers them through an interactive dashboard \u2014 turning forecasts into proactive sales decisions.',
      },
      'drug-side-effects': {
        title: 'Drug Side Effects \u2014 NLP Clustering Analysis',
        description: 'Unsupervised clustering on 2,900+ drugs reveals that pharmacological similarity is captured by adverse effect profiles, not names or conditions \u2014 and that representation matters more than algorithm choice.',
      },
      'campus-advisory': {
        title: 'AI-Powered Campus Advisory System',
        description: 'A ChatGPT-based course selection and campus resource platform that transforms fragmented university data into personalized academic guidance.',
      },
    },
    zh: {
      'tencent-dashboard': {
        subtitle: '腾讯云 \u00b7 数据科学实习',
        title: '客户需求预测与销售决策 Dashboard',
        description: '在腾讯云搭建的端到端系统，预测客户需求信号并通过交互式 dashboard 交付 \u2014 将 forecasting 结果转化为主动销售决策。',
      },
      'drug-side-effects': {
        title: '药物副作用 \u2014 NLP Clustering 分析',
        description: '对 2,900+ 种药物进行无监督 clustering，发现药理相似性更多体现在副作用特征而非药名或适应症 \u2014 数据表征比算法选择更重要。',
      },
      'campus-advisory': {
        title: 'AI 驱动的校园咨询系统',
        description: '基于 ChatGPT API 的选课与校园资源平台，将分散的大学数据整合为个性化的学术指导服务。',
      },
    },
  },

  // ===========================
  // Tencent Dashboard Page
  // ===========================
  tencent: {
    en: {
      title: 'Client Demand Forecasting & Sales Decision Dashboard',
      subtitle: 'Data Science Intern \u00b7 Tencent Cloud \u00b7 Summer 2024',
      overviewTitle: 'Overview',
      overviewP: 'Instead of reacting to incoming requests, this system predicts client-level demand signals to guide proactive sales outreach. It connects usage data, time-series forecasting, and an interactive dashboard into a single decision-making workflow.',
      problemTitle: 'The Problem',
      problemP: 'Sales teams had no forward visibility into client demand. Usage data was fragmented across internal systems, and by the time insights reached decision-makers, the window for proactive action had already closed. Teams were reacting to churn signals instead of anticipating growth opportunities.',
      problemCallout: 'This was not a modeling problem \u2014 it was a systems and delivery problem.',
      archTitle: 'System Architecture',
      archP: 'End-to-end pipeline from raw client logs to actionable sales decisions. Each stage runs without manual intervention.',
      dashboardTitle: 'The Dashboard',
      dashboardP: 'The dashboard is where forecasting output becomes usable. It surfaces demand signals, highlights at-risk and high-growth clients, and recommends specific actions \u2014 so a sales lead can open it, see that Client A is trending 22% above baseline, and initiate outreach without requesting a report.',
      dashboardCaption: 'Reconstructed dashboard mockup. Reflects the structure and decision-making context of the original system. All data is synthetic.',
      clientTitle: 'Client-Level View',
      clientP: 'The system generates per-client forecasts that feed directly into prioritization and outreach decisions.',
      clientTh: ['Client', 'Current Usage', 'Forecast Trend', 'Risk Level'],
      clientRows: [
        ['Client A', 'High', 'Increasing', 'High Priority'],
        ['Client B', 'Medium', 'Stable', 'Medium'],
        ['Client C', 'Low', 'Declining', 'Monitor'],
      ],
      pipelineTitle: 'Data Pipeline',
      pipelineItems: [
        'Aggregated historical client usage data from multiple internal databases',
        'Cleaned missing timestamps and inconsistent client IDs across sources',
        'Engineered time-series features: rolling averages, trend indicators, seasonality flags',
        'Structured output schema for direct consumption by the forecasting model',
      ],
      forecastTitle: 'Forecasting Model',
      forecastP: "Time-series forecasting powered by Tencent\u2019s Hunyuan AI framework. The model generates segment-level demand projections with confidence intervals \u2014 one component in the pipeline, not the entire system.",
      impactTitle: 'Impact',
      impactCards: [
        { value: '~15%', label: 'Faster data processing, enabling near real-time decision-making' },
        { value: 'Automated', label: 'Replaced manual weekly reports with an interactive, self-service dashboard' },
        { value: 'Proactive', label: 'Enabled forward-looking sales actions using forecast-driven demand signals' },
      ],
      reflectionTitle: 'Reflection',
      reflectionP: 'This project shifted my perspective from building models to building decision systems \u2014 where the value comes from how insights are delivered and used.',
      reconstructionNote: 'Due to data confidentiality, all data shown here is synthetic but reflects the structure and decision-making context of the original system.',
    },
    zh: {
      title: '客户需求预测与销售决策 Dashboard',
      subtitle: '数据科学实习 \u00b7 腾讯云 \u00b7 2024 夏季',
      overviewTitle: '概述',
      overviewP: '该系统不再依赖被动响应，而是预测客户级需求信号来指导主动销售触达。它将使用数据、时间序列 forecasting 和交互式 dashboard 串联为一体化的决策 workflow。',
      problemTitle: '核心问题',
      problemP: '销售团队对客户需求缺乏前瞻性洞察。使用数据分散在多个内部系统中，当信息传递到决策层时，主动出击的时间窗口已经关闭。团队只能被动应对流失信号，而非提前捕捉增长机会。',
      problemCallout: '这不是一个 modeling 问题 \u2014 而是一个系统交付问题。',
      archTitle: '系统架构',
      archP: '从原始客户日志到可执行销售决策的端到端 pipeline，每个环节无需人工干预。',
      dashboardTitle: 'Dashboard',
      dashboardP: 'Dashboard 是 forecasting 输出转化为行动的界面。它呈现需求信号、标记高风险和高增长客户并推荐具体行动 \u2014 销售负责人打开后即可看到 Client A 趋势高出 baseline 22%，直接发起触达，无需申请报告。',
      dashboardCaption: '重建的 dashboard mockup，反映原系统的结构与决策场景。所有数据为合成数据。',
      clientTitle: '客户级视图',
      clientP: '系统为每个客户生成独立 forecast，直接支撑优先级排序与触达决策。',
      clientTh: ['客户', '当前用量', '预测趋势', '风险等级'],
      clientRows: [
        ['客户 A', '高', '上升中', '高优先级'],
        ['客户 B', '中', '稳定', '中等'],
        ['客户 C', '低', '下降中', '关注'],
      ],
      pipelineTitle: 'Data Pipeline',
      pipelineItems: [
        '从多个内部数据库汇总客户历史使用数据',
        '清洗缺失时间戳与跨系统不一致的客户 ID',
        '构造时间序列特征：滚动均值、趋势指标、季节性标志',
        '输出结构化 schema，直接供 forecasting 模型消费',
      ],
      forecastTitle: 'Forecasting 模型',
      forecastP: '基于腾讯混元 AI 框架的时间序列 forecasting。模型生成分层级的需求预测与置信区间 \u2014 是 pipeline 中的一个组件，不是整个系统。',
      impactTitle: '项目影响',
      impactCards: [
        { value: '~15%', label: '数据处理效率提升，支持近实时决策' },
        { value: '自动化', label: '用交互式 dashboard 取代了人工周报' },
        { value: '前瞻性', label: '通过 forecast 驱动的需求信号实现主动销售决策' },
      ],
      reflectionTitle: '反思',
      reflectionP: '这个项目改变了我的视角 \u2014 从构建模型转向构建决策系统，价值来自于洞察如何被交付和使用。',
      reconstructionNote: '由于数据保密要求，本页所有数据均为合成数据，但反映了原系统的结构和决策场景。',
    },
  },

  // ===========================
  // Drug Side Effects Page
  // ===========================
  drug: {
    en: {
      title: 'Drug Side Effects \u2014 NLP Clustering Analysis',
      subtitle: 'Unsupervised Learning \u00b7 QTM 340 \u00b7 Emory University',
      overviewTitle: 'Overview',
      overviewP: 'Unsupervised clustering on 2,900+ drugs from Drugs.com reveals that pharmacological similarity is not captured by drug names or medical conditions, but by shared side effect patterns. The central finding: clustering performance is driven by representation, not algorithm choice. When drugs are represented by their adverse effect profiles, clear and medically meaningful structure emerges from the data.',
      problemTitle: 'The Core Problem',
      problemP1: 'The dataset contains nearly 3,000 drugs, each associated with a medical condition, a generic name, and a block of free-text side effects. The question is straightforward: can unsupervised clustering surface meaningful drug groupings without any predefined pharmacological labels?',
      problemP2: 'The naive approach is to cluster drugs by name similarity or by which conditions they treat. Both fail \u2014 for different reasons. Name-based similarity captures spelling, not pharmacology. Condition-based features are too coarse: with only 47 unique conditions across a thousand drugs, most distances collapse to near-zero.',
      problemCallout: 'Without a meaningful representation, clustering produces either noise or trivial groupings \u2014 making unsupervised methods appear ineffective when the real issue is feature design.',
      iterTitle: 'Iterative Exploration',
      iterIntro: 'Five approaches were tested sequentially, each shifting the feature space. The failures are as instructive as the final result.',
      attempts: [
        {
          title: 'Name Similarity \u2014 MinHash LSH',
          desc: 'Character n-gram shingling with Jaccard similarity at threshold 0.3. Produces 355 clusters \u2014 almost all noise. Combination drugs with shared ingredient substrings cluster together regardless of therapeutic function. The representation captures spelling, not pharmacology.',
          verdict: '355 clusters \u00b7 noise',
        },
        {
          title: 'Condition Matrix \u2014 Agglomerative Clustering',
          desc: 'Binary drug \u00d7 condition matrix (1,005 \u00d7 47) with cosine distance and average linkage. The feature space is too low-dimensional. Most drugs map to common conditions like \u201cpain\u201d or \u201chypertension,\u201d so the distance space has no resolution between them.',
          verdict: 'k=40 \u00b7 no separation',
        },
        {
          title: 'Combined Features \u2014 Conditions + Side Effects',
          desc: 'Merging conditions and side effects into one feature set, hoping for richer signal. Still dominated by the condition dimension \u2014 Cluster 0 absorbs 875 of 1,005 drugs. The condition features drown out the side effect signal.',
          verdict: '875/1005 in one cluster',
        },
        {
          title: 'Side Effects Only \u2014 Agglomerative, Cosine',
          desc: 'Stripping conditions entirely. Using MultiLabelBinarizer on tokenized side effect sets. This produces interpretable clusters for the first time \u2014 but agglomerative clustering with a fixed distance threshold cannot handle the varying density across drug groups.',
          verdict: 'interpretable but uneven',
        },
        {
          title: 'Side Effects + Conditions \u2014 DBSCAN, Jaccard',
          desc: "Reintroducing conditions as a secondary signal alongside side effects, switching to DBSCAN with Jaccard distance. Jaccard respects the binary, set-like nature of the features. DBSCAN handles variable density and isolates noise drugs that don\u2019t belong anywhere. This is where the structure emerges.",
          verdict: '41 clusters \u00b7 medically coherent',
        },
      ],
      breakTitle: 'The Breakthrough',
      breakP1: 'The turning point was recognizing that side effect profiles encode pharmacological mechanism more faithfully than any other available signal. Drugs that act on the same biological pathways tend to produce the same adverse effects \u2014 even when prescribed for entirely different conditions.',
      breakP2: 'Tokenizing the free-text side effects, binarizing them per drug, and measuring Jaccard similarity captures this directly. DBSCAN succeeds because it does not force every drug into a cluster. Drugs with unique or poorly documented side effect profiles become noise rather than contaminating a real group.',
      breakCaption: 'Synthetic projection of drug similarity in 2D space. Clusters correspond to shared adverse effect profiles, not predefined drug categories.',
      resultsTitle: 'Results',
      resultsStats: [
        { value: '41', label: 'Distinct clusters identified from DBSCAN on combined features' },
        { value: '2,900+', label: 'Drugs analyzed from Drugs.com with side effect text' },
        { value: 'Jaccard', label: 'Distance metric on binarized side effect profiles' },
      ],
      resultsP: 'The 41 clusters are not just statistically tight \u2014 they correspond to recognized drug classes, discovered purely from adverse effect text without any pharmacological labels as input.',
      resultsCaption: 'Cluster separation in projected space. Each group shares a distinct side effect signature. Boundaries are approximate.',
      clustersTitle: 'What the Clusters Reveal',
      clustersP: 'Each cluster carries a distinct side effect fingerprint that maps to a recognized pharmacological category. The clustering recovers drug class structure without ever being told what a drug class is.',
      insightTitle: 'Key Insight',
      insightP1: 'The same dataset can produce either 355 meaningless clusters or 41 interpretable ones \u2014 depending entirely on how the data is represented.',
      insightP2: 'Side effects capture pharmacological similarity better than drug names or condition labels because they reflect mechanism of action. Two drugs prescribed for entirely different conditions can share a side effect profile if they act on the same receptor pathway. This is invisible in condition-based or name-based representations, but it emerges clearly when the feature space is built from adverse effect text.',
      insightCallout: 'In unsupervised learning, the feature space determines whether structure is revealed or obscured.',
      reflectionTitle: 'Reflection',
      reflectionP1: 'This project highlights a recurring pattern in applied machine learning: model choice matters far less than whether the data representation captures the underlying structure.',
      reflectionP2: 'In practice, the most impactful improvement did not come from tuning algorithms, but from redefining what similarity means in the problem space. The order-of-magnitude jump in clustering quality came from changing what the model sees, not how it groups.',
      reconstructionNote: 'Visualizations on this page use synthetic data to illustrate the analysis structure. Cluster compositions and side effect associations reflect patterns from the original analysis on the Drugs.com dataset.',
    },
    zh: {
      title: '药物副作用 \u2014 NLP Clustering 分析',
      subtitle: '无监督学习 \u00b7 QTM 340 \u00b7 Emory University',
      overviewTitle: '概述',
      overviewP: '对 Drugs.com 上 2,900+ 种药物进行无监督 clustering，发现药理相似性并非由药名或适应症决定，而是由共享的副作用模式揭示。核心发现：clustering 性能取决于数据表征，而非算法选择。当药物以副作用 profile 表示时，清晰且具有医学意义的结构自然浮现。',
      problemTitle: '核心问题',
      problemP1: '数据集包含近 3,000 种药物，每种关联一个适应症、通用名和一段自由文本副作用描述。问题很直接：在没有预定义药理标签的情况下，无监督 clustering 能否识别出有意义的药物分组？',
      problemP2: '直觉方法是按药名相似度或适应症进行 clustering，但两者都失败了。药名相似度捕捉的是拼写而非药理机制；适应症特征过于粗粒度 \u2014 1,000 种药物只对应 47 个适应症，大部分距离趋近于零。',
      problemCallout: '缺乏有意义的表征时，clustering 只会产生噪声或无差异分组 \u2014 让无监督方法看似无效，而真正的问题在于特征设计。',
      iterTitle: '迭代探索',
      iterIntro: '先后测试了五种方法，每次调整特征空间。失败与最终结果同样具有指导意义。',
      attempts: [
        {
          title: '药名相似度 \u2014 MinHash LSH',
          desc: '基于字符 n-gram 的 Jaccard 相似度，阈值 0.3。产生 355 个 cluster \u2014 几乎全是噪声。含相同成分子串的复方药被归为一类，与治疗功能无关。表征捕获的是拼写，不是药理。',
          verdict: '355 clusters \u00b7 噪声',
        },
        {
          title: '适应症矩阵 \u2014 Agglomerative Clustering',
          desc: '药物 \u00d7 适应症 binary 矩阵 (1,005 \u00d7 47)，cosine 距离 + average linkage。特征空间维度过低，大部分药物都映射到「疼痛」或「高血压」等常见适应症，距离空间缺乏区分度。',
          verdict: 'k=40 \u00b7 无分离',
        },
        {
          title: '联合特征 \u2014 适应症 + 副作用',
          desc: '合并适应症与副作用构成更丰富的特征集。然而适应症维度仍然主导 \u2014 Cluster 0 吞噬了 1,005 种药物中的 875 种。适应症特征淹没了副作用信号。',
          verdict: '875/1005 归入一个 cluster',
        },
        {
          title: '仅副作用 \u2014 Agglomerative, Cosine',
          desc: '完全去除适应症特征，用 MultiLabelBinarizer 对副作用文本进行 tokenize 和二值化。首次产生可解读的 cluster \u2014 但 agglomerative clustering 使用固定距离阈值，无法适应不同药物组的密度差异。',
          verdict: '可解读但不均匀',
        },
        {
          title: '副作用 + 适应症 \u2014 DBSCAN, Jaccard',
          desc: '将适应症作为辅助信号重新引入，切换到 DBSCAN + Jaccard 距离。Jaccard 适合 binary 集合型特征，DBSCAN 能处理变密度且将噪声药物隔离 \u2014 结构在这里浮现。',
          verdict: '41 clusters \u00b7 医学可解读',
        },
      ],
      breakTitle: '突破点',
      breakP1: '关键转折在于认识到：副作用 profile 比任何其他可用信号更忠实地编码了药理机制。作用于相同生物通路的药物往往产生相同的不良反应 \u2014 即使它们被处方用于完全不同的适应症。',
      breakP2: '对副作用自由文本进行 tokenize、按药物二值化、再用 Jaccard 距离度量 \u2014 直接捕获了这种关系。DBSCAN 成功是因为它不强制每种药物都归入 cluster。副作用文档不完整或独特的药物被识别为噪声，而非污染真实分组。',
      breakCaption: '药物相似性的 2D 合成投影。Cluster 对应共享的副作用 profile，而非预定义药物分类。',
      resultsTitle: '结果',
      resultsStats: [
        { value: '41', label: 'DBSCAN 在联合特征上识别出的 cluster 数' },
        { value: '2,900+', label: '来自 Drugs.com 的含副作用文本药物数' },
        { value: 'Jaccard', label: '基于二值化副作用 profile 的距离度量' },
      ],
      resultsP: '41 个 cluster 不仅统计上紧凑 \u2014 它们对应已知药物分类，完全从副作用文本中发现，未使用任何药理标签作为输入。',
      resultsCaption: '投影空间中的 cluster 分离。每组共享独特的副作用特征。边界为近似值。',
      clustersTitle: 'Cluster 揭示了什么',
      clustersP: '每个 cluster 携带独特的副作用指纹，映射到已知的药理类别。Clustering 在从未被告知「药物分类」的情况下，恢复了药物类别结构。',
      insightTitle: '核心洞察',
      insightP1: '同一数据集可以产生 355 个无意义 cluster 或 41 个可解读 cluster \u2014 区别完全在于数据的表征方式。',
      insightP2: '副作用比药名或适应症更能捕捉药理相似性，因为它们反映了作用机制。两种用于完全不同适应症的药物，如果作用于相同受体通路，可以共享副作用 profile。这在适应症或药名表征中不可见，但在以副作用文本构建特征空间时清晰浮现。',
      insightCallout: '在无监督学习中，特征空间决定了结构是被揭示还是被掩盖。',
      reflectionTitle: '反思',
      reflectionP1: '这个项目验证了应用机器学习中反复出现的规律：模型选择的重要性远不如数据表征是否捕捉了底层结构。',
      reflectionP2: '实践中，最有影响力的改进不是来自调参，而是重新定义了问题空间中「相似性」的含义。Clustering 质量的数量级提升来自于改变模型看到的东西，而非它的分组方式。',
      reconstructionNote: '本页可视化使用合成数据展示分析结构。Cluster 构成和副作用关联反映了基于 Drugs.com 数据集的原始分析结果。',
    },
  },

  // ===========================
  // Footer
  // ===========================
  footer: {
    en: { copyright: 'Fei Yi \u00b7 2026' },
    zh: { copyright: '易非 \u00b7 2026' },
  },

  // ===========================
  // Shared
  // ===========================
  shared: {
    en: { reconstructionBadge: 'Reconstructed for portfolio' },
    zh: { reconstructionBadge: '为作品集重建' },
  },
}

export default content
