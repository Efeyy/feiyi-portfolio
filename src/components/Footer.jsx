import { useLang } from '../context/LanguageContext'
import content from '../data/content'

export default function Footer() {
  const { lang } = useLang()
  const t = content.footer[lang]

  return (
    <footer className="footer">
      <div className="container">
        <span className="footer-text">{t.copyright}</span>
        <ul className="footer-links">
          <li><a href="mailto:fei.yi@emory.edu">Email</a></li>
          <li><a href="https://linkedin.com/in/fei-yi/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </div>
    </footer>
  )
}
