import ReconstructionBadge from '../components/ReconstructionBadge'
import ArchitectureDiagram from '../components/ArchitectureDiagram'
import DashboardMockup from '../components/DashboardMockup'
import ForecastChart from '../components/ForecastChart'
import '../styles/tencent.css'

export default function TencentDashboard() {
  return (
    <div className="case-study">
      <div className="container">
        {/* Header */}
        <div className="case-study-header">
          <h1>Client Demand Forecasting & Sales Decision Dashboard</h1>
          <p className="case-study-subtitle">
            Data Science Intern &middot; Tencent Cloud &middot; Summer 2024
          </p>
          <div className="case-study-meta">
            {['Python', 'SQL', 'Time Series', 'Forecasting', 'Dashboard', 'Product'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
            <ReconstructionBadge />
          </div>
        </div>

        {/* Overview */}
        <div className="case-study-section">
          <h2>Overview</h2>
          <p>
            Instead of reacting to incoming requests, this system predicts client-level
            demand signals to guide proactive sales outreach. It connects usage data,
            time-series forecasting, and an interactive dashboard into a single
            decision-making workflow.
          </p>
        </div>

        {/* Problem */}
        <div className="case-study-section">
          <h2>The Problem</h2>
          <p>
            Sales teams had no forward visibility into client demand. Usage data was
            fragmented across internal systems, and by the time insights reached
            decision-makers, the window for proactive action had already closed.
            Teams were reacting to churn signals instead of anticipating growth opportunities.
          </p>
          <p className="case-study-callout">
            This was not a modeling problem &mdash; it was a systems and delivery problem.
          </p>
        </div>

        {/* Architecture */}
        <div className="case-study-section">
          <h2>System Architecture</h2>
          <p>
            End-to-end pipeline from raw client logs to actionable sales decisions.
            Each stage runs without manual intervention.
          </p>
          <ArchitectureDiagram />
        </div>

        {/* Dashboard — centerpiece */}
        <div className="case-study-section">
          <h2>The Dashboard</h2>
          <p>
            The dashboard is where forecasting output becomes usable. It surfaces
            demand signals, highlights at-risk and high-growth clients, and recommends
            specific actions &mdash; so a sales lead can open it, see that Client A is
            trending 22% above baseline, and initiate outreach without requesting a report.
          </p>
          <DashboardMockup />
          <p className="dashboard-caption">
            Reconstructed dashboard mockup. Reflects the structure and decision-making
            context of the original system. All data is synthetic.
          </p>
        </div>

        {/* Client Table */}
        <div className="case-study-section">
          <h2>Client-Level View</h2>
          <p>
            The system generates per-client forecasts that feed directly into
            prioritization and outreach decisions.
          </p>
          <div className="client-table-wrapper">
            <table className="client-table">
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Current Usage</th>
                  <th>Forecast Trend</th>
                  <th>Risk Level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Client A</td>
                  <td>High</td>
                  <td className="trend-up">Increasing</td>
                  <td><span className="risk-badge risk-badge--high">High Priority</span></td>
                </tr>
                <tr>
                  <td>Client B</td>
                  <td>Medium</td>
                  <td className="trend-stable">Stable</td>
                  <td><span className="risk-badge risk-badge--medium">Medium</span></td>
                </tr>
                <tr>
                  <td>Client C</td>
                  <td>Low</td>
                  <td className="trend-down">Declining</td>
                  <td><span className="risk-badge risk-badge--low">Monitor</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Data Pipeline */}
        <div className="case-study-section">
          <h2>Data Pipeline</h2>
          <ul className="pipeline-list">
            <li>Aggregated historical client usage data from multiple internal databases</li>
            <li>Cleaned missing timestamps and inconsistent client IDs across sources</li>
            <li>Engineered time-series features: rolling averages, trend indicators, seasonality flags</li>
            <li>Structured output schema for direct consumption by the forecasting model</li>
          </ul>
        </div>

        {/* Forecasting Model */}
        <div className="case-study-section">
          <h2>Forecasting Model</h2>
          <p>
            Time-series forecasting powered by Tencent's Hunyuan AI framework. The model
            generates segment-level demand projections with confidence intervals &mdash;
            one component in the pipeline, not the entire system.
          </p>
          <ForecastChart />
        </div>

        {/* Impact */}
        <div className="case-study-section">
          <h2>Impact</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-card-value">~15%</div>
              <div className="impact-card-label">
                Faster data processing, enabling near real-time decision-making
              </div>
            </div>
            <div className="impact-card">
              <div className="impact-card-value">Automated</div>
              <div className="impact-card-label">
                Replaced manual weekly reports with an interactive, self-service dashboard
              </div>
            </div>
            <div className="impact-card">
              <div className="impact-card-value">Proactive</div>
              <div className="impact-card-label">
                Enabled forward-looking sales actions using forecast-driven demand signals
              </div>
            </div>
          </div>
        </div>

        {/* Reflection */}
        <div className="case-study-section">
          <h2>Reflection</h2>
          <p>
            This project shifted my perspective from building models to building decision
            systems &mdash; where the value comes from how insights are delivered and used.
          </p>
        </div>

        {/* Reconstruction Note */}
        <div className="reconstruction-note">
          <p>
            Due to data confidentiality, all data shown here is synthetic but reflects
            the structure and decision-making context of the original system.
          </p>
        </div>
      </div>
    </div>
  )
}
