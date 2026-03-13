const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">

        <div className="section-header">
          <span className="section-subtitle">My Skills</span>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skills-wrapper">
          <div className="skills-grid">
            <h1 className="skill-center">Education & Skills</h1>

            {/* Education */}
            <div className="education-box">
              <h4 className="skills-title"><span>Education</span></h4>

              <div className="education-item">
                <span className="year">2022-2026</span>
                <h5>BE - Electronics and Communication Engineering</h5>
                <p>Anna University</p>
                <p>M.A.M College of Engineering and Technology, Trichy</p>
              </div>

              <div className="education-item">
                <span className="year">2021-2022</span>
                <h5>Computer Science</h5>
                <p>State Board</p>
                <p>Government Higher Secondary School</p>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="skills-box">

              <h4 className="skills-title"><span>Technical Skills</span></h4>

              <div className="skills-cards">

                {/* Frontend */}
                <div className="skills-card">
                  <h5>Frontend</h5>
                  <div className="skills-items">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>Bootstrap</span>
                    <span>Tailwind CSS</span>
                  </div>
                </div>

                {/* Backend */}
                <div className="skills-card">
                  <h5>Backend</h5>
                  <div className="skills-items">
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>MongoDB</span>
                  </div>
                </div>

                {/* Tools */}
                <div className="skills-card">
                  <h5>Tools</h5>
                  <div className="skills-items">
                    <span>Git</span>
                    <span>GitHub</span>
                    <span>VS Code</span>
                    <span>Postman</span>
                    <span>Figma</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills