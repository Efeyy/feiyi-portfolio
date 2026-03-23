import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import content from '../data/content'
import '../styles/components.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { lang, toggle } = useLang()
  const t = content.nav[lang]

  const isHome = location.pathname === '/'

  const scrollToSection = (id) => {
    setOpen(false)
    if (!isHome) return
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {lang === 'zh' ? '易非' : 'Fei Yi'}
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? '\u2715' : '\u2630'}
        </button>

        <ul className={`navbar-links${open ? ' open' : ''}`}>
          <li>
            {isHome ? (
              <a href="#projects" onClick={() => scrollToSection('projects')}>{t.projects}</a>
            ) : (
              <Link to="/#projects" onClick={() => setOpen(false)}>{t.projects}</Link>
            )}
          </li>
          <li>
            <Link to="/resume" onClick={() => setOpen(false)}>{t.resume}</Link>
          </li>
          <li>
            {isHome ? (
              <a href="#contact" onClick={() => scrollToSection('contact')}>{t.contact}</a>
            ) : (
              <Link to="/#contact" onClick={() => setOpen(false)}>{t.contact}</Link>
            )}
          </li>
          <li>
            <button className="lang-toggle" onClick={toggle}>
              <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
              <span className="lang-sep">|</span>
              <span className={lang === 'zh' ? 'lang-active' : ''}>中文</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
