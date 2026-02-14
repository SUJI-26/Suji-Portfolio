const Card = ({ project }) => {
  const { title, tech, image, github, live } = project
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <h4 style={{ color: '#6a59d1', fontSize: '17px', paddingLeft: '20px' }}>
          Tech Stack :
        </h4>
        <span style={{ paddingLeft: '40px' }}>{tech}</span>

        <div className="project-links" style={{ marginTop: '10px' }}>
          <a href={github} className="btn project-btn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Github
          </a>
          <a href={live} className="btn project-btn" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt"></i> Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card