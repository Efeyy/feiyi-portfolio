import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import content from '../data/content'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import HeroBackground from '../components/HeroBackground'
import projects from '../data/projects'
import '../styles/home.css'

export default function Home() {
  const { lang } = useLang()
  const h = content.hero[lang]
  const t = content.home[lang]

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <HeroBackground />
        <div className="container hero-content">
          <h1>{h.title}</h1>
          <p className="hero-subtitle">{h.subtitle}</p>
          <p className="hero-pitch">{h.pitch}</p>
          <div className="hero-links">
            <Link to="/resume" className="hero-link hero-link--primary">{h.resume}</Link>
            <a
              href="https://linkedin.com/in/fei-yi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
        <div className="container">
          <SectionHeading title={t.featuredProjects} />
          <div className="project-grid">
            {projects.filter(p => !p.secondary).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          {projects.some(p => p.secondary) && (
            <div className="secondary-projects">
              <h3 className="secondary-projects-title">{t.otherProjects}</h3>
              <div className="project-grid">
                {projects.filter(p => p.secondary).map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Skills */}
      <section className="section" id="skills">
        <div className="container">
          <SectionHeading title={t.toolsSkills} />
          <div className="skills-grid">
            <div className="skills-category">
              <h3>{t.skillCategories.languages}</h3>
              <div className="skills-list">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">R</span>
                <span className="skill-tag">SQL</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>{t.skillCategories.mlNlp}</h3>
              <div className="skills-list">
                <span className="skill-tag">scikit-learn</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">NLTK</span>
                <span className="skill-tag">TF-IDF</span>
                <span className="skill-tag">LDA</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>{t.skillCategories.dataViz}</h3>
              <div className="skills-list">
                <span className="skill-tag">pandas</span>
                <span className="skill-tag">NumPy</span>
                <span className="skill-tag">Matplotlib</span>
                <span className="skill-tag">Seaborn</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>{t.skillCategories.tools}</h3>
              <div className="skills-list">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Jupyter</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Google Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <div className="container">
          <SectionHeading title={t.about} />
          <div className="about-content">
            <p>{t.aboutP1}</p>
            <p>{t.aboutP2}</p>
            <p>{t.aboutP3}</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="container">
          <SectionHeading title={t.contact} />
          <div className="contact-links">
            <a href="mailto:fei.yi@emory.edu" className="contact-link">fei.yi@emory.edu</a>
            <a
              href="https://linkedin.com/in/fei-yi/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
