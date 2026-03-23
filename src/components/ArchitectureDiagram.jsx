const nodes = [
  { icon: '\u{1F4CA}', label: 'Client Usage\nLogs', style: 'data' },
  { icon: '\u{2699}\uFE0F', label: 'SQL Extraction\n& Cleaning', style: 'process' },
  { icon: '\u{1F9EA}', label: 'Python\nProcessing', style: 'process' },
  { icon: '\u{1F916}', label: 'Forecast\nModel', style: 'ai' },
  { icon: '\u{1F4C8}', label: 'Dashboard', style: 'dashboard' },
  { icon: '\u{1F3AF}', label: 'Sales\nAction', style: 'user' },
]

export default function ArchitectureDiagram() {
  return (
    <div className="arch-diagram">
      {nodes.map((node, i) => (
        <div key={i} style={{ display: 'contents' }}>
          <div className="arch-node">
            <div className={`arch-node-icon arch-node-icon--${node.style}`}>
              {node.icon}
            </div>
            <span className="arch-node-label">
              {node.label.split('\n').map((line, j) => (
                <span key={j}>{line}{j === 0 && <br />}</span>
              ))}
            </span>
          </div>
          {i < nodes.length - 1 && (
            <div className="arch-arrow">&rarr;</div>
          )}
        </div>
      ))}
    </div>
  )
}
