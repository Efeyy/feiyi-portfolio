const projects = [
  {
    id: 'tencent-dashboard',
    subtitle: 'Tencent Cloud \u00b7 Data Science Intern',
    title: 'Client Demand Forecasting & Sales Decision Dashboard',
    description:
      'End-to-end system at Tencent Cloud that predicts client demand signals and delivers them through an interactive dashboard — turning forecasts into proactive sales decisions.',
    tags: ['Python', 'SQL', 'Time Series', 'Forecasting', 'Dashboard'],
    thumbnail: null,
    overlay: 'cloud-network',
    link: '/projects/tencent-dashboard',
  },
  {
    id: 'drug-side-effects',
    title: 'Drug Side Effects — NLP Clustering Analysis',
    description:
      'Unsupervised clustering on 2,900+ drugs reveals that pharmacological similarity is captured by adverse effect profiles, not names or conditions — and that representation matters more than algorithm choice.',
    tags: ['Python', 'NLP', 'DBSCAN', 'scikit-learn', 'Clustering'],
    thumbnail: null,
    overlay: 'embedding-scatter',
    link: '/projects/drug-side-effects',
  },
  {
    id: 'campus-advisory',
    title: 'AI-Powered Campus Advisory System',
    description:
      'A ChatGPT-based course selection and campus resource platform that transforms fragmented university data into personalized academic guidance.',
    tags: ['Python', 'ChatGPT API', 'Data Pipeline', 'Product Design'],
    thumbnail: null,
    link: '/projects/campus-advisory',
    secondary: true,
  },
]

export default projects
