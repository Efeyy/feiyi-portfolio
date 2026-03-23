import { useLang } from '../context/LanguageContext'
import content from '../data/content'
import EmbeddingScatter from '../components/EmbeddingScatter'
import ClusterMap from '../components/ClusterMap'
import ClusterKeywords from '../components/ClusterKeywords'
import '../styles/drug-side-effects.css'

const verdictStyles = [
  'approach-verdict--fail',
  'approach-verdict--fail',
  'approach-verdict--fail',
  'approach-verdict--partial',
  'approach-verdict--success',
]
const dotStyles = [
  'approach-dot--fail',
  'approach-dot--fail',
  'approach-dot--fail',
  'approach-dot--fail',
  'approach-dot--success',
]
const statColors = [
  'results-stat-value--accent',
  'results-stat-value--green',
  'results-stat-value--purple',
]

export default function DrugSideEffects() {
  const { lang } = useLang()
  const t = content.drug[lang]

  return (
    <div className="case-study">
      <div className="container">
        {/* Header */}
        <div className="case-study-header">
          <h1>{t.title}</h1>
          <p className="case-study-subtitle">{t.subtitle}</p>
          <div className="case-study-meta">
            {['Python', 'NLP', 'DBSCAN', 'TF-IDF', 'scikit-learn', 'Agglomerative Clustering'].map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="case-study-section">
          <h2>{t.overviewTitle}</h2>
          <p>{t.overviewP}</p>
        </div>

        {/* Core Problem */}
        <div className="case-study-section">
          <h2>{t.problemTitle}</h2>
          <p>{t.problemP1}</p>
          <p>{t.problemP2}</p>
          <p className="case-study-callout">{t.problemCallout}</p>
        </div>

        {/* Iterative Exploration */}
        <div className="case-study-section">
          <h2>{t.iterTitle}</h2>
          <p>{t.iterIntro}</p>

          <div className="approach-timeline">
            {t.attempts.map((a, i) => (
              <div key={i} className="approach-item">
                <div className="approach-marker">
                  <div className={`approach-dot ${dotStyles[i]}`} />
                  {i < t.attempts.length - 1 && <div className="approach-line" />}
                </div>
                <div className="approach-content">
                  <h4>{a.title}</h4>
                  <p>{a.desc}</p>
                  <span className={`approach-verdict ${verdictStyles[i]}`}>{a.verdict}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Breakthrough */}
        <div className="case-study-section">
          <h2>{t.breakTitle}</h2>
          <p>{t.breakP1}</p>
          <p>{t.breakP2}</p>
          <EmbeddingScatter />
          <p className="dashboard-caption">{t.breakCaption}</p>
        </div>

        {/* Results */}
        <div className="case-study-section">
          <h2>{t.resultsTitle}</h2>
          <div className="results-stats">
            {t.resultsStats.map((s, i) => (
              <div key={i} className="results-stat">
                <div className={`results-stat-value ${statColors[i]}`}>{s.value}</div>
                <div className="results-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <p>{t.resultsP}</p>
          <ClusterMap />
          <p className="dashboard-caption">{t.resultsCaption}</p>
        </div>

        {/* Cluster Keywords */}
        <div className="case-study-section">
          <h2>{t.clustersTitle}</h2>
          <p>{t.clustersP}</p>
          <ClusterKeywords />
        </div>

        {/* Key Insight */}
        <div className="case-study-section">
          <h2>{t.insightTitle}</h2>
          <p>{t.insightP1}</p>
          <p>{t.insightP2}</p>
          <p className="case-study-callout">{t.insightCallout}</p>
        </div>

        {/* Reflection */}
        <div className="case-study-section">
          <h2>{t.reflectionTitle}</h2>
          <p>{t.reflectionP1}</p>
          <p>{t.reflectionP2}</p>
        </div>

        {/* Reconstruction Note */}
        <div className="reconstruction-note">
          <p>{t.reconstructionNote}</p>
        </div>
      </div>
    </div>
  )
}
