export default function DashboardMockup() {
  return (
    <div className="dashboard-mockup">
      {/* Top bar */}
      <div className="dashboard-topbar">
        <span className="dashboard-topbar-title">Client Demand & Sales Performance</span>
        <span className="dashboard-topbar-period">Q2 2024 &middot; Real-time</span>
      </div>

      {/* KPI row */}
      <div className="dashboard-kpis">
        <KPI label="Revenue" value="$12.4M" delta="+8.3% MoM" up />
        <KPI label="Growth" value="+14.2%" delta="vs. Q1 target" up />
        <KPI label="Forecast Accuracy" value="94.1%" delta="30-day window" />
        <KPI label="Pipeline" value="2.1M" delta="rows / day" />
      </div>

      {/* Main chart */}
      <div className="dashboard-charts">
        <div className="dashboard-chart-panel">
          <div className="dashboard-chart-title">Demand Trend & Forecast</div>
          <div className="dashboard-chart-legend">
            <span><span className="legend-line legend-line--actual" /> Actual</span>
            <span><span className="legend-line legend-line--forecast" /> Forecast</span>
            <span><span className="legend-area" /> Confidence Band</span>
          </div>
          <MainChart />
        </div>
      </div>

      {/* Bottom panels */}
      <div className="dashboard-bottom">
        <div className="dashboard-chart-panel">
          <div className="dashboard-chart-title">Performance by Category</div>
          <CategoryBars />
        </div>
        <div className="dashboard-chart-panel">
          <div className="dashboard-chart-title">Client Segments</div>
          <SegmentBars />
        </div>
      </div>

      {/* Recommended Actions */}
      <div className="dashboard-actions">
        <div className="dashboard-chart-title">Recommended Actions</div>
        <div className="actions-list">
          <ActionRow
            status="high"
            client="Client A"
            action="Proactive outreach — demand trending 22% above baseline"
          />
          <ActionRow
            status="medium"
            client="Client B"
            action="Upsell opportunity — usage approaching current tier limit"
          />
          <ActionRow
            status="low"
            client="Client C"
            action="Monitor — usage declining, potential churn signal"
          />
        </div>
      </div>
    </div>
  )
}

function KPI({ label, value, delta, up }) {
  return (
    <div className="dashboard-kpi">
      <div className="dashboard-kpi-label">{label}</div>
      <div className="dashboard-kpi-value">{value}</div>
      <div className={`dashboard-kpi-delta ${up ? 'dashboard-kpi-delta--up' : 'dashboard-kpi-delta--neutral'}`}>
        {delta}
      </div>
    </div>
  )
}

function ActionRow({ status, client, action }) {
  const colors = { high: '#4ade80', medium: '#fbbf24', low: '#f87171' }
  return (
    <div className="action-row">
      <span className="action-dot" style={{ background: colors[status] }} />
      <span className="action-client">{client}</span>
      <span className="action-text">{action}</span>
    </div>
  )
}

function MainChart() {
  const w = 640
  const h = 200
  const pad = { top: 10, right: 15, bottom: 25, left: 40 }
  const cw = w - pad.left - pad.right
  const ch = h - pad.top - pad.bottom

  const actual = [6.8, 7.2, 7.0, 8.1, 8.9, 9.4, 10.2, 10.8, 11.3, 11.9, 12.1, 12.4]
  const forecast = Array(10).fill(null).concat([12.1, 12.4, 13.1, 13.8])
  const upper = Array(10).fill(null).concat([12.4, 12.9, 14.0, 15.0])
  const lower = Array(10).fill(null).concat([11.8, 11.9, 12.2, 12.6])
  const labels = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
  const total = labels.length
  const allV = [...actual, 15.0, 12.6]
  const maxV = Math.max(...allV) + 0.5
  const minV = Math.min(...allV) - 0.5

  const xp = (i) => pad.left + (i / (total - 1)) * cw
  const yp = (v) => pad.top + (1 - (v - minV) / (maxV - minV)) * ch

  const aPath = actual.map((v, i) => `${i === 0 ? 'M' : 'L'}${xp(i)},${yp(v)}`).join(' ')
  const fPts = forecast.map((v, i) => v !== null ? { x: xp(i), y: yp(v) } : null).filter(Boolean)
  const fPath = fPts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ')

  const uPts = upper.map((v, i) => v !== null ? { x: xp(i), y: yp(v) } : null).filter(Boolean)
  const lPts = lower.map((v, i) => v !== null ? { x: xp(i), y: yp(v) } : null).filter(Boolean)
  const bandPath = [
    ...uPts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`),
    ...[...lPts].reverse().map((p) => `L${p.x},${p.y}`),
    'Z',
  ].join(' ')

  const gridCount = 5
  const gridVals = Array.from({ length: gridCount }, (_, i) => minV + ((maxV - minV) / (gridCount - 1)) * i)

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', height: 'auto' }}>
      {gridVals.map((v, i) => (
        <g key={i}>
          <line x1={pad.left} y1={yp(v)} x2={w - pad.right} y2={yp(v)} stroke="#141820" strokeWidth="1" />
          <text x={pad.left - 6} y={yp(v) + 3} textAnchor="end" fill="#3a3f4a" fontSize="9" fontFamily="monospace">{v.toFixed(1)}</text>
        </g>
      ))}
      {labels.filter((_, i) => i % 2 === 0).map((l, idx) => {
        const i = idx * 2
        return <text key={i} x={xp(i)} y={h - 5} textAnchor="middle" fill="#3a3f4a" fontSize="9" fontFamily="monospace">{l}</text>
      })}
      <path d={bandPath} fill="rgba(167, 139, 250, 0.08)" />
      <path d={aPath} fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinejoin="round" />
      <path d={fPath} fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="5 3" strokeLinejoin="round" />
    </svg>
  )
}

function CategoryBars() {
  const data = [
    { label: 'Category A', value: 85 },
    { label: 'Category B', value: 72 },
    { label: 'Category C', value: 64 },
    { label: 'Category D', value: 48 },
    { label: 'Category E', value: 35 },
  ]
  const max = Math.max(...data.map(d => d.value))

  return (
    <div className="bar-chart">
      {data.map((d, i) => (
        <div key={i} className="bar-row">
          <span className="bar-label">{d.label}</span>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: `${(d.value / max) * 100}%` }} />
          </div>
          <span className="bar-value">{d.value}%</span>
        </div>
      ))}
    </div>
  )
}

function SegmentBars() {
  const data = [
    { label: 'Enterprise', value: 4.2 },
    { label: 'Mid-Market', value: 3.1 },
    { label: 'SMB', value: 2.8 },
    { label: 'Startup', value: 1.6 },
    { label: 'Government', value: 0.7 },
  ]
  const max = Math.max(...data.map(d => d.value))

  return (
    <div className="bar-chart">
      {data.map((d, i) => (
        <div key={i} className="bar-row">
          <span className="bar-label">{d.label}</span>
          <div className="bar-track">
            <div className="bar-fill" style={{
              width: `${(d.value / max) * 100}%`,
              background: 'linear-gradient(90deg, #7c3aed, #a78bfa)',
            }} />
          </div>
          <span className="bar-value">${d.value}M</span>
        </div>
      ))}
    </div>
  )
}
