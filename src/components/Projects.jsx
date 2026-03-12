import Card from './Card'
import { example} from '../data/example'

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Work</span>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="projects-wrapper">
          <div className="projects-intro">
            <p>
              I have completed some basic projects using HTML, CSS, and
              JavaScript. Currently i am working on full Stack projects in the
              future.
            </p>
          </div>

          <div className="projects-grid">
            {example.map((project, index) => (
              <Card key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects