export default function ForecastChart() {
  const w = 700
  const h = 260
  const pad = { top: 20, right: 20, bottom: 30, left: 45 }
  const cw = w - pad.left - pad.right
  const ch = h - pad.top - pad.bottom

  // Synthetic monthly data (6 months actual + 2 months forecast)
  const actual = [82, 91, 87, 95, 103, 98]
  const forecast = [null, null, null, null, null, 98, 107, 112]
  const upper = [null, null, null, null, null, 102, 115, 124]
  const lower = [null, null, null, null, null, 94, 99, 100]
  const labels = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
  const allVals = [...actual, 112, 124, 100]
  const maxV = Math.max(...allVals) + 5
  const minV = Math.min(...allVals) - 5

  const x = (i) => pad.left + (i / (labels.length - 1)) * cw
  const y = (v) => pad.top + (1 - (v - minV) / (maxV - minV)) * ch

  // Build SVG path strings
  const actualPath = actual.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i)},${y(v)}`).join(' ')
  const forecastPoints = forecast
    .map((v, i) => v !== null ? { x: x(i), y: y(v) } : null)
    .filter(Boolean)
  const forecastPath = forecastPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ')

  // Confidence band
  const bandUpper = upper.map((v, i) => v !== null ? { x: x(i), y: y(v) } : null).filter(Boolean)
  const bandLower = lower.map((v, i) => v !== null ? { x: x(i), y: y(v) } : null).filter(Boolean)
  const bandPath = [
    ...bandUpper.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`),
    ...bandLower.reverse().map((p, i) => `${i === 0 ? 'L' : 'L'}${p.x},${p.y}`),
    'Z',
  ].join(' ')

  // Grid lines
  const gridLines = 5
  const gridVals = Array.from({ length: gridLines }, (_, i) => minV + ((maxV - minV) / (gridLines - 1)) * i)

  return (
    <div className="forecast-chart-container">
      <div className="dashboard-chart-legend">
        <span><span className="legend-line legend-line--actual" /> Actual</span>
        <span><span className="legend-line legend-line--forecast" /> Forecast</span>
        <span><span className="legend-area" /> Confidence</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', height: 'auto' }}>
        {/* Grid */}
        {gridVals.map((v, i) => (
          <g key={i}>
            <line x1={pad.left} y1={y(v)} x2={w - pad.right} y2={y(v)} stroke="#1a1d24" strokeWidth="1" />
            <text x={pad.left - 8} y={y(v) + 4} textAnchor="end" fill="#4a4f5a" fontSize="10" fontFamily="var(--font-mono)">
              {Math.round(v)}
            </text>
          </g>
        ))}

        {/* X labels */}
        {labels.map((l, i) => (
          <text key={i} x={x(i)} y={h - 6} textAnchor="middle" fill="#4a4f5a" fontSize="10" fontFamily="var(--font-mono)">
            {l}
          </text>
        ))}

        {/* Confidence band */}
        <path d={bandPath} fill="rgba(167, 139, 250, 0.1)" />

        {/* Actual line */}
        <path d={actualPath} fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        {/* Forecast line */}
        <path d={forecastPath} fill="none" stroke="#a78bfa" strokeWidth="2" strokeDasharray="6 4" strokeLinecap="round" strokeLinejoin="round" />

        {/* Data points */}
        {actual.map((v, i) => (
          <circle key={`a${i}`} cx={x(i)} cy={y(v)} r="3" fill="#60a5fa" />
        ))}
        {forecastPoints.map((p, i) => (
          <circle key={`f${i}`} cx={p.x} cy={p.y} r="3" fill="#a78bfa" />
        ))}
      </svg>
    </div>
  )
}
