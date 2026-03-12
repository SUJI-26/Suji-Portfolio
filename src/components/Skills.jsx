const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Skills</span>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skills-wrapper">
          <div className="skills-content">
            <h3>Education & Skills</h3>
            <div className="skills-grid">
              <div className="education-box">
                <h4 className="skills-title"><span>Education</span></h4>
                <div className="education">
                  <div className="education-item">
                    <span className="year">2021-2026</span>
                    <h5>BE- Electronics and Communication Engineering</h5>
                    <p>Anna University</p>
                    <p className="institution">M.A.M College of Engineering and Technology, Trichy</p>
                  </div>
                  <div className="education-item">
                    <span className="year">2021-2022</span>
                    <h5>Computer Science</h5>
                    <p>State Board</p>
                    <p className="institution">Goverment Higher Secondary School</p>
                  </div>
                </div>
              </div>

              <div className="skills-box">
                <h4 className="skills-title"><span>Technical Skills</span></h4>

                <div className="skills-columns">
                  {/* Column 1 */}
                  <div className="skills-column">
                    <div className="skill-item">
                      <div className="skill-info">
                        <p>HTML</p>
                        <p>90%</p>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress html"></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-info">
                        <p>CSS</p>
                        <p>80%</p>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress css"></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-info">
                        <p>JavaScript</p>
                        <p>70%</p>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress js"></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-info">
                        <p>React</p>
                        <p>50%</p>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress java"></div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="skills-column">
                    <div className="skill-item">
                      <div className="skill-info">
                        <p>Node.js</p>
                        <p>50%</p>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress sql"></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-info">
                        <p>MongoDB</p>
                        <p>50%</p>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress bs"></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-info">
                        <p>Bootstrap</p>
                        <p>60%</p>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress c"></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-info">
                        <p>Git</p>
                        <p>70%</p>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress powerbi"></div>
                      </div>
                    </div>
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