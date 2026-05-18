import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import '../styles/resume.css'

const resumeFiles = {
  en: 'Fei_Yi_Resume.pdf',
  zh: 'Fei_Yi_Resume_CN.pdf',
}

export default function Resume() {
  const basePath = import.meta.env.BASE_URL
  const { lang } = useLang()
  const [active, setActive] = useState(lang)
  const isZh = active === 'zh'
  const title = lang === 'zh' ? '简历' : 'Resume'
  const helper = lang === 'zh'
    ? '在线预览英文或中文版本，并下载适合投递场景的 PDF。'
    : 'Preview either version online and download the PDF that fits the application context.'

  return (
    <div className="container section resume-page">
      <div className="resume-header">
        <div>
          <h1>{title}</h1>
          <p>{helper}</p>
        </div>

        <div className="resume-switch" aria-label="Resume language">
          <button
            type="button"
            className={active === 'en' ? 'active' : ''}
            onClick={() => setActive('en')}
          >
            English
          </button>
          <button
            type="button"
            className={active === 'zh' ? 'active' : ''}
            onClick={() => setActive('zh')}
          >
            中文
          </button>
        </div>
      </div>

      <div className="resume-frame">
        <iframe
          src={`${basePath}${resumeFiles[active]}`}
          title={isZh ? '易非中文简历' : 'Fei Yi Resume'}
        />
      </div>

      <div className="resume-actions">
        <a href={`${basePath}Fei_Yi_Resume.pdf`} download>
          Download English PDF
        </a>
        <a href={`${basePath}Fei_Yi_Resume_CN.pdf`} download>
          下载中文 PDF
        </a>
      </div>
    </div>
  )
}
