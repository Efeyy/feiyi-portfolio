const CLUSTERS = [
  {
    name: 'ACE Inhibitors',
    color: '#f472b6',
    drugs: 8,
    keywords: ['tongue swelling', 'weakness', 'dizziness', 'dry cough'],
  },
  {
    name: 'Diabetes (Type 2)',
    color: '#4ade80',
    drugs: 5,
    keywords: ['lactic acidosis', 'dizziness', 'nausea', 'muscle pain'],
  },
  {
    name: 'CNS / Neurological',
    color: '#a78bfa',
    drugs: 17,
    keywords: ['aggressive behavior', 'tongue numbness', 'mood changes', 'seizure risk'],
  },
  {
    name: 'Opioid Analgesics',
    color: '#60a5fa',
    drugs: 3,
    keywords: ['clay-colored stools', 'dizziness', 'fever', 'respiratory depression'],
  },
]

export default function ClusterKeywords() {
  return (
    <div className="cluster-keywords-grid">
      {CLUSTERS.map((cl) => (
        <div key={cl.name} className="cluster-keyword-card">
          <div className="cluster-keyword-header">
            <span className="cluster-keyword-dot" style={{ background: cl.color }} />
            <span className="cluster-keyword-name">{cl.name}</span>
            <span className="cluster-keyword-count">{cl.drugs} drugs</span>
          </div>
          <ul className="cluster-keyword-list">
            {cl.keywords.map((kw) => (
              <li key={kw}>{kw}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
