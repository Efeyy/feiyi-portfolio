import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/components.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

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
        <Link to="/" className="navbar-brand">Fei Yi</Link>

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
              <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
            ) : (
              <Link to="/#projects" onClick={() => setOpen(false)}>Projects</Link>
            )}
          </li>
          <li>
            <Link to="/resume" onClick={() => setOpen(false)}>Resume</Link>
          </li>
          <li>
            {isHome ? (
              <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
            ) : (
              <Link to="/#contact" onClick={() => setOpen(false)}>Contact</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}
