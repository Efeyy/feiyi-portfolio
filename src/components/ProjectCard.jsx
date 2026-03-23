import { Link } from 'react-router-dom'

export default function ProjectCard({ title, subtitle, description, tags, thumbnail, link, overlay }) {
  return (
    <Link to={link} className="project-card" style={{ textDecoration: 'none' }}>
      <div className="project-card-thumbnail">
        {thumbnail ? (
          <img src={thumbnail} alt={title} />
        ) : (
          <div className="project-card-placeholder" />
        )}
        {overlay === 'cloud-network' && <CloudNetworkOverlay />}
        {overlay === 'embedding-scatter' && <EmbeddingScatterOverlay />}
      </div>
      <div className="project-card-body">
        {subtitle && (
          <span className="project-card-subtitle">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8, flexShrink: 0 }}>
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
            </svg>
            {subtitle}
          </span>
        )}
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <div className="project-card-tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <span className="project-card-cta">
          View Case Study &rarr;
        </span>
      </div>
    </Link>
  )
}

function CloudNetworkOverlay() {
  return (
    <svg
      className="cloud-network-overlay"
      viewBox="0 0 600 200"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="cg1" cx="22%" cy="50%" r="30%">
          <stop offset="0%" stopColor="rgba(96,165,250,0.10)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cg2" cx="78%" cy="50%" r="25%">
          <stop offset="0%" stopColor="rgba(96,165,250,0.07)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* Background grid — spans full banner */}
      {[30, 55, 80, 105, 130, 155, 175].map((y, i) => (
        <line key={`gh${i}`} x1="20" y1={y} x2="580" y2={y}
          stroke="rgba(96,165,250,0.03)" strokeWidth="0.5" />
      ))}
      {[60, 110, 160, 210, 260, 310, 360, 410, 460, 510, 560].map((x, i) => (
        <line key={`gv${i}`} x1={x} y1="15" x2={x} y2="190"
          stroke="rgba(96,165,250,0.025)" strokeWidth="0.5" />
      ))}

      {/* Ambient glows */}
      <rect width="600" height="200" fill="url(#cg1)" />
      <rect width="600" height="200" fill="url(#cg2)" />

      {/* === LEFT: Cloud anchor (centered at ~x:140, y:100) === */}
      <path
        d="M95,112
           Q95,80 125,78
           Q133,62 155,62
           Q177,62 183,78
           Q200,74 205,88
           Q218,88 218,100
           Q218,112 205,114
           L93,114
           Q85,114 85,106
           Q85,98 95,98
           Z"
        fill="rgba(96,165,250,0.05)"
        stroke="rgba(120,170,230,0.2)"
        strokeWidth="1"
      />
      {/* Server nodes inside cloud */}
      <rect x="112" y="90" width="10" height="7" rx="1.5"
        fill="none" stroke="rgba(140,180,230,0.18)" strokeWidth="0.7" />
      <rect x="127" y="90" width="10" height="7" rx="1.5"
        fill="none" stroke="rgba(140,180,230,0.18)" strokeWidth="0.7" />
      <rect x="142" y="90" width="10" height="7" rx="1.5"
        fill="none" stroke="rgba(140,180,230,0.18)" strokeWidth="0.7" />
      <circle cx="115.5" cy="93.5" r="1" fill="rgba(96,165,250,0.3)" />
      <circle cx="130.5" cy="93.5" r="1" fill="rgba(74,222,128,0.28)" />
      <circle cx="145.5" cy="93.5" r="1" fill="rgba(96,165,250,0.3)" />
      <text x="158" y="97" fontSize="5.5" fontFamily="monospace"
        fill="rgba(140,180,230,0.16)" fontWeight="600">AI</text>

      {/* === MIDDLE: Data flow (horizontal streams with dots) === */}
      {/* 3 horizontal flow lines from cloud to processing */}
      {[85, 100, 115].map((y, i) => (
        <g key={`flow${i}`}>
          <line x1="218" y1={y} x2="380" y2={y}
            stroke="rgba(96,165,250,0.08)" strokeWidth="0.6"
            strokeDasharray="4 5" />
          {/* Data dots along the stream */}
          {[245, 275, 305, 335, 360].map((x, j) => (
            <circle key={`fd${j}`} cx={x} cy={y}
              r={j === 2 ? 2 : 1.3}
              fill={`rgba(140,180,230,${0.08 + (j === 2 ? 0.12 : 0.04)})`} />
          ))}
        </g>
      ))}

      {/* Processing node in center */}
      <rect x="285" y="72" width="30" height="16" rx="3"
        fill="rgba(96,165,250,0.04)"
        stroke="rgba(120,170,230,0.12)" strokeWidth="0.7" />
      <text x="292" y="83" fontSize="5" fontFamily="monospace"
        fill="rgba(140,180,230,0.18)" fontWeight="500">ETL</text>

      {/* Converge lines from 3 streams into dashboard */}
      <path d="M380,85 Q400,85 410,92" fill="none"
        stroke="rgba(96,165,250,0.08)" strokeWidth="0.6" />
      <path d="M380,100 L410,100" fill="none"
        stroke="rgba(96,165,250,0.1)" strokeWidth="0.6" />
      <path d="M380,115 Q400,115 410,108" fill="none"
        stroke="rgba(96,165,250,0.08)" strokeWidth="0.6" />

      {/* === RIGHT: Dashboard destination === */}
      <rect x="410" y="72" width="100" height="56" rx="4"
        fill="rgba(96,165,250,0.03)"
        stroke="rgba(120,170,230,0.16)" strokeWidth="0.8" />

      {/* Dashboard topbar */}
      <line x1="410" y1="82" x2="510" y2="82"
        stroke="rgba(120,170,230,0.1)" strokeWidth="0.5" />
      <rect x="416" y="75" width="20" height="4" rx="0.5"
        fill="rgba(140,180,230,0.12)" />

      {/* KPI row */}
      <rect x="416" y="86" width="14" height="8" rx="1"
        fill="rgba(96,165,250,0.06)" stroke="rgba(120,170,230,0.08)" strokeWidth="0.5" />
      <rect x="434" y="86" width="14" height="8" rx="1"
        fill="rgba(96,165,250,0.06)" stroke="rgba(120,170,230,0.08)" strokeWidth="0.5" />
      <rect x="452" y="86" width="14" height="8" rx="1"
        fill="rgba(96,165,250,0.06)" stroke="rgba(120,170,230,0.08)" strokeWidth="0.5" />
      {/* KPI values */}
      <text x="419" y="93" fontSize="4" fontFamily="monospace"
        fill="rgba(140,180,230,0.2)">12.4</text>
      <text x="437.5" y="93" fontSize="4" fontFamily="monospace"
        fill="rgba(74,222,128,0.2)">+14%</text>
      <text x="455" y="93" fontSize="4" fontFamily="monospace"
        fill="rgba(140,180,230,0.2)">94.1</text>

      {/* Mini line chart */}
      <polyline points="416,118 425,112 434,114 443,108 452,110 461,104 470,106 479,100 488,103 497,98 504,100"
        fill="none" stroke="rgba(96,165,250,0.22)" strokeWidth="0.8"
        strokeLinejoin="round" />
      {/* Forecast dashed extension */}
      <polyline points="497,98 504,100 510,97 516,94"
        fill="none" stroke="rgba(167,139,250,0.18)" strokeWidth="0.8"
        strokeDasharray="2 2" strokeLinejoin="round" />

      {/* Bottom bar chart */}
      <rect x="416" y="108" width="22" height="3" rx="0.5" fill="rgba(96,165,250,0.15)" />
      <rect x="416" y="113" width="16" height="3" rx="0.5" fill="rgba(96,165,250,0.1)" />
      <rect x="416" y="118" width="28" height="3" rx="0.5" fill="rgba(96,165,250,0.12)" />

      {/* === Scattered ambient dots === */}
      {[
        [40, 60], [55, 140], [30, 100], [70, 170],
        [530, 50], [550, 140], [520, 170], [560, 100],
        [250, 45], [350, 155], [180, 160], [430, 45],
        [300, 165], [500, 55], [150, 45],
      ].map(([x, y], i) => (
        <circle key={`ad${i}`} cx={x} cy={y} r="1"
          fill="rgba(140,180,230,0.06)" />
      ))}
    </svg>
  )
}

function EmbeddingScatterOverlay() {
  // Seeded PRNG for deterministic output
  let seed = 91
  function rng() {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  function gauss() {
    return Math.sqrt(-2 * Math.log(rng() + 0.0001)) * Math.cos(2 * Math.PI * rng())
  }

  const clusters = [
    { cx: 120, cy: 70, rx: 50, ry: 35, n: 35, color: '96,165,250' },
    { cx: 310, cy: 55, rx: 45, ry: 30, n: 28, color: '167,139,250' },
    { cx: 470, cy: 80, rx: 40, ry: 35, n: 25, color: '74,222,128' },
    { cx: 200, cy: 145, rx: 50, ry: 30, n: 30, color: '244,114,182' },
    { cx: 420, cy: 150, rx: 35, ry: 28, n: 18, color: '251,191,36' },
  ]

  const points = []
  clusters.forEach((cl) => {
    for (let i = 0; i < cl.n; i++) {
      points.push({
        x: cl.cx + gauss() * cl.rx * 0.45,
        y: cl.cy + gauss() * cl.ry * 0.45,
        r: 1.2 + rng() * 1.5,
        o: 0.15 + rng() * 0.25,
        c: cl.color,
      })
    }
  })
  // noise
  for (let i = 0; i < 20; i++) {
    points.push({
      x: 20 + rng() * 560,
      y: 10 + rng() * 180,
      r: 0.8 + rng() * 0.8,
      o: 0.06 + rng() * 0.06,
      c: '140,140,160',
    })
  }

  return (
    <svg
      className="cloud-network-overlay"
      viewBox="0 0 600 200"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {clusters.map((cl, i) => (
          <radialGradient key={i} id={`esg${i}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={`rgba(${cl.color},0.06)`} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        ))}
      </defs>

      {/* Cluster glows */}
      {clusters.map((cl, i) => (
        <ellipse key={`eg${i}`} cx={cl.cx} cy={cl.cy}
          rx={cl.rx * 1.4} ry={cl.ry * 1.4}
          fill={`url(#esg${i})`} />
      ))}

      {/* Points */}
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={p.r}
          fill={`rgba(${p.c},${p.o})`} />
      ))}
    </svg>
  )
}
