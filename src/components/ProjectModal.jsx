import { useEffect, useRef } from 'react'
import { X } from './Icons.jsx'

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`

export default function ProjectModal({ project, onClose }) {
  const closeButton = useRef(null)
  const dialog = useRef(null)

  useEffect(() => {
    const opener = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButton.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab') return
      // Keep keyboard focus inside the pop-up while it's open.
      const focusable = dialog.current.querySelectorAll('a[href], button, video[controls]')
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      opener?.focus?.()
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section
        className="modal"
        ref={dialog}
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" ref={closeButton} onClick={onClose} aria-label="Close">
          <X size={22} />
        </button>
        <p className="modal-type">{project.type}</p>
        <h2>{project.name}</h2>
        <p className="modal-summary">{project.description}</p>

        {project.video && (
          <video
            className="modal-video"
            controls
            muted
            playsInline
            preload="metadata"
            poster={assetUrl(project.video.poster)}
            aria-label={project.video.label}
          >
            <source src={assetUrl(project.video.src)} type="video/mp4" />
          </video>
        )}
        {project.video?.caption && <p className="modal-video-caption">{project.video.caption}</p>}

        <dl className="modal-facts">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Timeline</dt>
            <dd>{project.timeline}</dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>{project.tools}</dd>
          </div>
        </dl>

        {project.overview && (
          <>
            <h3>Overview</h3>
            <p className="modal-text">{project.overview}</p>
          </>
        )}

        {project.audience && (
          <>
            <h3>Audience</h3>
            <p className="modal-text">{project.audience}</p>
          </>
        )}

        {project.goals && (
          <>
            <h3>Experience goals</h3>
            <ul>
              {project.goals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {project.results && (
          <>
            <h3>Results</h3>
            <ul>
              {project.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}

        <h3>{project.workTitle ?? 'What I did'}</h3>
        <ul>
          {project.work.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {project.learned && (
          <>
            <h3>What I learned</h3>
            <p className="modal-text">{project.learned}</p>
          </>
        )}

        {project.gallery && (
          <div className="modal-gallery">
            {project.gallery.map((image) => (
              <figure key={image.src} className={image.wide ? 'wide' : undefined}>
                <img src={assetUrl(image.src)} alt={image.alt} loading="lazy" />
                {image.caption && <figcaption>{image.caption}</figcaption>}
              </figure>
            ))}
          </div>
        )}

        {project.note && <p className="modal-note">{project.note}</p>}
      </section>
    </div>
  )
}
