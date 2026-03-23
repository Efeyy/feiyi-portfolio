import { useMemo } from 'react'

function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const GROUPS = [
  { cx: 110, cy: 100, r: 65, count: 28, color: '#60a5fa', label: 'Pain / Analgesics', drugs: '8 drugs' },
  { cx: 300, cy: 80,  r: 55, count: 22, color: '#a78bfa', label: 'CNS / Neurological', drugs: '17 drugs' },
  { cx: 490, cy: 110, r: 58, count: 24, color: '#4ade80', label: 'Diabetes', drugs: '5 drugs' },
  { cx: 190, cy: 240, r: 60, count: 26, color: '#f472b6', label: 'ACE Inhibitors', drugs: '8 drugs' },
  { cx: 400, cy: 250, r: 50, count: 18, color: '#fbbf24', label: 'Antibiotics', drugs: '5 drugs' },
  { cx: 540, cy: 260, r: 40, count: 12, color: '#38bdf8', label: 'Immunosuppressants', drugs: '2 drugs' },
]

export default function ClusterMap() {
  const dots = useMemo(() => {
    const rng = mulberry32(77)
    const all = []

    GROUPS.forEach((g, gi) => {
      for (let i = 0; i < g.count; i++) {
        // distribute in disc
        const angle = rng() * Math.PI * 2
        const dist = Math.sqrt(rng()) * g.r * 0.6
        const x = g.cx + Math.cos(angle) * dist
        const y = g.cy + Math.sin(angle) * dist
        all.push({ x, y, gi, r: 2 + rng() * 1.5 })
      }
    })

    return all
  }, [])

  return (
    <div className="scatter-container">
      <svg viewBox="0 0 640 340" preserveAspectRatio="xMidYMid meet">
        <defs>
          {GROUPS.map((g, i) => (
            <radialGradient key={i} id={`cmap-g${i}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={g.color} stopOpacity="0.06" />
              <stop offset="70%" stopColor={g.color} stopOpacity="0.02" />
              <stop offset="100%" stopColor={g.color} stopOpacity="0" />
            </radialGradient>
          ))}
        </defs>

        {/* Cluster boundary blobs */}
        {GROUPS.map((g, i) => (
          <g key={`boundary${i}`}>
            <circle cx={g.cx} cy={g.cy} r={g.r * 1.2} fill={`url(#cmap-g${i})`} />
            <circle
              cx={g.cx} cy={g.cy} r={g.r}
              fill="none"
              stroke={g.color}
              strokeWidth="0.8"
              strokeDasharray="3 4"
              opacity="0.2"
            />
          </g>
        ))}

        {/* Dots */}
        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.x} cy={d.y} r={d.r}
            fill={GROUPS[d.gi].color}
            opacity={0.4 + Math.random() * 0.1}
          />
        ))}

        {/* Labels */}
        {GROUPS.map((g, i) => (
          <g key={`lbl${i}`}>
            <text
              x={g.cx} y={g.cy - g.r - 10}
              textAnchor="middle"
              fontSize="9.5"
              fontWeight="600"
              fill={g.color}
              opacity="0.6"
              fontFamily="var(--font-sans)"
            >
              {g.label}
            </text>
            <text
              x={g.cx} y={g.cy - g.r + 2}
              textAnchor="middle"
              fontSize="7.5"
              fill="rgba(160,160,180,0.35)"
              fontFamily="var(--font-mono)"
            >
              {g.drugs}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
