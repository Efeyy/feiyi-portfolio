import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import HeroBackground from '../components/HeroBackground'
import projects from '../data/projects'
import '../styles/home.css'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <HeroBackground />
        <div className="container hero-content">
          <h1>Fei Yi</h1>
          <p className="hero-subtitle">Data Science & AI &middot; Emory University</p>
          <p className="hero-pitch">
            I build data systems that turn messy real-world data into structured, actionable insight.
            Focused on NLP, applied machine learning, and product-oriented data science.
          </p>
          <div className="hero-links">
            <Link to="/resume" className="hero-link hero-link--primary">Resume</Link>
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
          <SectionHeading title="Featured Projects" />
          <div className="project-grid">
            {projects.filter(p => !p.secondary).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          {projects.some(p => p.secondary) && (
            <div className="secondary-projects">
              <h3 className="secondary-projects-title">Other Projects</h3>
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
          <SectionHeading title="Tools & Skills" />
          <div className="skills-grid">
            <div className="skills-category">
              <h3>Languages</h3>
              <div className="skills-list">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">R</span>
                <span className="skill-tag">SQL</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>ML / NLP</h3>
              <div className="skills-list">
                <span className="skill-tag">scikit-learn</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">NLTK</span>
                <span className="skill-tag">TF-IDF</span>
                <span className="skill-tag">LDA</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>Data & Visualization</h3>
              <div className="skills-list">
                <span className="skill-tag">pandas</span>
                <span className="skill-tag">NumPy</span>
                <span className="skill-tag">Matplotlib</span>
                <span className="skill-tag">Seaborn</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>Tools</h3>
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
          <SectionHeading title="About" />
          <div className="about-content">
            <p>
              I'm a Data Science student at Emory University, focused on building
              systems that turn real-world data into usable insight.
            </p>
            <p>
              My experience spans applied machine learning, NLP, and data-driven
              product design &mdash; from forecasting models at Tencent to user
              behavior analysis at Atmosfy.
            </p>
            <p>
              I'm currently working on research in AI agent dynamics and game theory,
              exploring how intelligent systems interact under constraints.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="container">
          <SectionHeading title="Contact" />
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
