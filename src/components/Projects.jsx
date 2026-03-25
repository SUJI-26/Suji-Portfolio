import { useState } from "react";
import Card from "./Card";
import { example } from "../data/example";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const handleSeeMore = () => {
    setVisibleProjects(example.length);
  };

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
              JavaScript. Currently I am working on full stack projects in the
              future.
            </p>
          </div>

          <div className="projects-grid">
            {example.slice(0, visibleProjects).map((project, index) => (
              <Card key={index} project={project} />
            ))}
          </div>

          {visibleProjects < example.length && (
            <div className="projects-btn">
              <button id="new-btn" className="btn btn primary" onClick={handleSeeMore}> See More <i className="fas fa-arrow-down"></i></button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;