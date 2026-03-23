import { useLang } from '../context/LanguageContext'
import content from '../data/content'
import ReconstructionBadge from '../components/ReconstructionBadge'
import ArchitectureDiagram from '../components/ArchitectureDiagram'
import DashboardMockup from '../components/DashboardMockup'
import ForecastChart from '../components/ForecastChart'
import '../styles/tencent.css'

const trendClasses = ['trend-up', 'trend-stable', 'trend-down']
const riskClasses = ['risk-badge risk-badge--high', 'risk-badge risk-badge--medium', 'risk-badge risk-badge--low']

export default function TencentDashboard() {
  const { lang } = useLang()
  const t = content.tencent[lang]

  return (
    <div className="case-study">
      <div className="container">
        {/* Header */}
        <div className="case-study-header">
          <h1>{t.title}</h1>
          <p className="case-study-subtitle">{t.subtitle}</p>
          <div className="case-study-meta">
            {['Python', 'SQL', 'Time Series', 'Forecasting', 'Dashboard', 'Product'].map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
            <ReconstructionBadge />
          </div>
        </div>

        {/* Overview */}
        <div className="case-study-section">
          <h2>{t.overviewTitle}</h2>
          <p>{t.overviewP}</p>
        </div>

        {/* Problem */}
        <div className="case-study-section">
          <h2>{t.problemTitle}</h2>
          <p>{t.problemP}</p>
          <p className="case-study-callout">{t.problemCallout}</p>
        </div>

        {/* Architecture */}
        <div className="case-study-section">
          <h2>{t.archTitle}</h2>
          <p>{t.archP}</p>
          <ArchitectureDiagram />
        </div>

        {/* Dashboard */}
        <div className="case-study-section">
          <h2>{t.dashboardTitle}</h2>
          <p>{t.dashboardP}</p>
          <DashboardMockup />
          <p className="dashboard-caption">{t.dashboardCaption}</p>
        </div>

        {/* Client Table */}
        <div className="case-study-section">
          <h2>{t.clientTitle}</h2>
          <p>{t.clientP}</p>
          <div className="client-table-wrapper">
            <table className="client-table">
              <thead>
                <tr>
                  {t.clientTh.map(h => <th key={h}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {t.clientRows.map((row, i) => (
                  <tr key={i}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td className={trendClasses[i]}>{row[2]}</td>
                    <td><span className={riskClasses[i]}>{row[3]}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Data Pipeline */}
        <div className="case-study-section">
          <h2>{t.pipelineTitle}</h2>
          <ul className="pipeline-list">
            {t.pipelineItems.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        {/* Forecasting Model */}
        <div className="case-study-section">
          <h2>{t.forecastTitle}</h2>
          <p>{t.forecastP}</p>
          <ForecastChart />
        </div>

        {/* Impact */}
        <div className="case-study-section">
          <h2>{t.impactTitle}</h2>
          <div className="impact-grid">
            {t.impactCards.map((card, i) => (
              <div key={i} className="impact-card">
                <div className="impact-card-value">{card.value}</div>
                <div className="impact-card-label">{card.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Reflection */}
        <div className="case-study-section">
          <h2>{t.reflectionTitle}</h2>
          <p>{t.reflectionP}</p>
        </div>

        {/* Reconstruction Note */}
        <div className="reconstruction-note">
          <p>{t.reconstructionNote}</p>
        </div>
      </div>
    </div>
  )
}
