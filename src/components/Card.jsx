import { useState } from "react";

const Card = ({ project }) => {
  const [flip, setFlip] = useState(false);

  return (
    <div className="project-card" onClick={() => setFlip(!flip)}>
      <div className={`project-inner ${flip ? "flip" : ""}`}>

        {/* FRONT */}
        <div className="project-front">
          <img src={project.image} alt={project.title} />

          <div className="project-title">
            <h3>{project.title}</h3>
          </div>
        </div>

        {/* BACK */}
        <div className="project-back">

          <h3>{project.title}</h3>

          <p className="tech">{project.tech}</p>

          <div className="project-links">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e)=>e.stopPropagation()}
            >
              Live Preview
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e)=>e.stopPropagation()}
            >
              GitHub
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Card;