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
    id: 'gridstateformer',
    title: 'GridStateFormer — Electricity Demand Forecasting',
    description:
      'Hybrid PatchTST and state-space model for next-day electricity demand forecasting across 148 EIA regions, outperforming recurrent and convolutional baselines.',
    tags: ['PyTorch', 'Time Series', 'Forecasting', 'EIA', 'State Space'],
    thumbnail: null,
    overlay: 'forecast-grid',
    link: '/projects/gridstateformer',
  },
  {
    id: 'ice-discourse',
    title: 'ICE Social Media Discourse Analysis',
    description:
      'Large-scale political text and time-series analysis of 1.57M federal official posts, modeling event shocks and attention cycles with ECM.',
    tags: ['Python', 'Scraping', 'ECM', 'NLP', 'Time Series'],
    thumbnail: null,
    overlay: 'discourse-network',
    link: '/projects/ice-discourse',
    secondary: true,
  },
]

export default projects
