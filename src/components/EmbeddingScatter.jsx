import { useMemo } from 'react'

// Seeded PRNG for deterministic scatter
function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// Gaussian-ish distribution via Box-Muller
function gaussRand(rng) {
  const u1 = rng()
  const u2 = rng()
  return Math.sqrt(-2 * Math.log(u1 + 0.0001)) * Math.cos(2 * Math.PI * u2)
}

const CLUSTERS = [
  { cx: 140, cy: 120, rx: 55, ry: 45, count: 70, color: 'rgba(96,165,250,0.55)', label: 'Pain / Analgesics' },
  { cx: 380, cy: 90,  rx: 50, ry: 40, count: 55, color: 'rgba(167,139,250,0.55)', label: 'CNS / Neurological' },
  { cx: 520, cy: 160, rx: 45, ry: 50, count: 50, color: 'rgba(74,222,128,0.45)',  label: 'Diabetes' },
  { cx: 260, cy: 240, rx: 60, ry: 40, count: 65, color: 'rgba(244,114,182,0.45)', label: 'Cardiovascular' },
  { cx: 480, cy: 280, rx: 40, ry: 35, count: 35, color: 'rgba(251,191,36,0.40)',  label: 'Antibiotics' },
]

export default function EmbeddingScatter() {
  const points = useMemo(() => {
    const rng = mulberry32(42)
    const pts = []

    CLUSTERS.forEach((cl, ci) => {
      for (let i = 0; i < cl.count; i++) {
        const x = cl.cx + gaussRand(rng) * cl.rx * 0.45
        const y = cl.cy + gaussRand(rng) * cl.ry * 0.45
        const r = 1.5 + rng() * 2
        const opacity = 0.3 + rng() * 0.5
        pts.push({ x, y, r, opacity, cluster: ci })
      }
    })

    // Scattered noise points
    for (let i = 0; i < 40; i++) {
      pts.push({
        x: 30 + rng() * 580,
        y: 20 + rng() * 310,
        r: 1 + rng() * 1.2,
        opacity: 0.1 + rng() * 0.12,
        cluster: -1,
      })
    }

    return pts
  }, [])

  return (
    <div className="scatter-container">
      <svg viewBox="0 0 640 340" preserveAspectRatio="xMidYMid meet">
        <defs>
          {CLUSTERS.map((cl, i) => (
            <radialGradient key={`cg${i}`} id={`cluster-glow-${i}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={cl.color.replace(/[\d.]+\)$/, '0.08)')} />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          ))}
        </defs>

        {/* Cluster glow backgrounds */}
        {CLUSTERS.map((cl, i) => (
          <ellipse
            key={`glow${i}`}
            cx={cl.cx}
            cy={cl.cy}
            rx={cl.rx * 1.6}
            ry={cl.ry * 1.6}
            fill={`url(#cluster-glow-${i})`}
          />
        ))}

        {/* Data points */}
        {points.map((pt, i) => (
          <circle
            key={i}
            cx={pt.x}
            cy={pt.y}
            r={pt.r}
            fill={pt.cluster >= 0 ? CLUSTERS[pt.cluster].color : 'rgba(140,140,160,0.2)'}
            opacity={pt.opacity}
          />
        ))}

        {/* Cluster labels */}
        {CLUSTERS.map((cl, i) => (
          <text
            key={`label${i}`}
            x={cl.cx}
            y={cl.cy - cl.ry - 12}
            textAnchor="middle"
            fontSize="9"
            fontFamily="var(--font-mono)"
            fill="rgba(180,180,200,0.35)"
            fontWeight="500"
          >
            {cl.label}
          </text>
        ))}
      </svg>
    </div>
  )
}
