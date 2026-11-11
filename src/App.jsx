import { useCallback, useState } from 'react'
import { ArrowRight, ArrowUpRight, Linkedin, Mail, Menu, X } from './components/Icons.jsx'
import ProjectModal from './components/ProjectModal.jsx'
import { experience, links, projects } from './data/content.js'

const navItems = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

function App() {
  const [activeId, setActiveId] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeProject = projects.find((project) => project.id === activeId)
  const closeMenu = () => setMenuOpen(false)
  const closeProject = useCallback(() => setActiveId(null), [])

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Luke Tegan, home">
            LT<span>.</span>
          </a>
          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a
              className="resume-link"
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              onClick={closeMenu}
              target="_blank"
              rel="noreferrer"
            >
              Résumé <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero container">
          <p className="eyebrow">
            <span className="status-dot" /> NYC BASED · OPEN TO OPPORTUNITIES
          </p>
          <h1>
            I turn customer research into <em>better products.</em>
          </h1>
          <p className="hero-copy">
            I’m Luke Tegan, an NYU master’s student with experience in product management, UX
            research, ecommerce, and full-stack development.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#work">
              See my work <ArrowRight size={17} />
            </a>
            <a className="text-button" href="#about">
              About me <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">THE WORK</p>
                <h2>
                  Selected projects<span className="accent">.</span>
                </h2>
              </div>
              <p>Professional product work, technical builds, and immersive experiences.</p>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <button
                  className="project-card"
                  key={project.id}
                  onClick={() => setActiveId(project.id)}
                >
                  <span className={`project-art ${project.tone}`}>
                    <span className="art-number">0{index + 1}</span>
                    {project.cover ? (
                      <img
                        className="art-image"
                        src={`${import.meta.env.BASE_URL}${project.cover.src}`}
                        alt={project.cover.alt}
                        loading="lazy"
                      />
                    ) : (
                      <span className="art-monogram">{project.mark}</span>
                    )}
                    <ArrowUpRight className="art-arrow" size={22} />
                  </span>
                  <span className="project-meta">{project.type}</span>
                  <span className="project-name">{project.name}</span>
                  <span className="project-description">{project.description}</span>
                  <span className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section container" id="experience">
          <div>
            <p className="eyebrow">EXPERIENCE</p>
            <h2>
              Where I’ve worked<span className="accent">.</span>
            </h2>
          </div>
          <div className="experience-list">
            {experience.map((job) => (
              <article key={job.company}>
                <div className="experience-company">
                  <h3>{job.company}</h3>
                  <span>{job.place}</span>
                </div>
                {job.roles.map((role) => (
                  <p className="experience-role" key={role.title}>
                    <span>{role.title}</span>
                    <span>{role.dates}</span>
                  </p>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="container about-inner">
            <div>
              <p className="eyebrow">ABOUT</p>
              <h2>
                Curious by design.
                <br />
                <em>Technical by training.</em>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                I’m pursuing an M.S. in Computing, Entrepreneurship, and Innovation at New York
                University, expected December 2027. I earned a B.A. in Computer Science and a
                B.S.C. in Immersive Media from the University of Miami.
              </p>
              <p>
                I like working out what people need, then turning that into clear requirements and
                something that gets built. My background lets me work across product, design, and
                engineering.
              </p>
              <p>Outside of work, you’ll find me skiing, scuba diving, or at a live show.</p>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="inline-link">
                Connect on LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <p className="eyebrow">CONTACT</p>
            <h2>
              Let’s <em>talk.</em>
            </h2>
            <a className="primary-button" href={`mailto:${links.email}`}>
              Email me <Mail size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="container footer">
        <span>© {new Date().getFullYear()} Luke Tegan</span>
        <div>
          <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={19} />
          </a>
          <a href={`mailto:${links.email}`} aria-label="Email">
            <Mail size={19} />
          </a>
        </div>
      </footer>

      {activeProject && <ProjectModal project={activeProject} onClose={closeProject} />}
    </>
  )
}

export default App
