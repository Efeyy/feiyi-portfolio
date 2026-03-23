export default function Resume() {
  const basePath = import.meta.env.BASE_URL
  return (
    <div className="container section">
      <h1 style={{ marginBottom: '24px' }}>Resume</h1>
      <div style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        overflow: 'hidden',
      }}>
        <iframe
          src={`${basePath}Fei_Yi_Resume.pdf`}
          title="Fei Yi Resume"
          style={{
            width: '100%',
            height: 'calc(100vh - 200px)',
            border: 'none',
          }}
        />
      </div>
      <p style={{ marginTop: '16px', fontSize: '0.9rem' }}>
        <a href={`${basePath}Fei_Yi_Resume.pdf`} download>
          Download PDF &darr;
        </a>
      </p>
    </div>
  )
}
