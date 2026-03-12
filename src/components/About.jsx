import sujiImg2 from '../assets/images/Suji img2.jpg'

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">About Me</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-wrapper">
          <div className="about-img">
            <img src={sujiImg2} alt="Photo of suji" />
          </div>
          <div className="about-content">
            <h2>I'm SUJI</h2>
            <h3><span>Full Stack Developer</span></h3>
            <p>
              Hi, I'm Suji I'm currently pursuing a degree in Electronics and
              Communication Engineering at M.A.M College of Engineering and
              Technology, Trichy. Though my academic background is in ECE, my
              true passion lies in web development. I'm an aspiring MERN Stack
              Developer with a strong interest in building modern, responsive,
              and user-friendly web applications. My skill set includes HTML,
              CSS, Bootstrap, and I am actively learning JavaScript, along with
              MongoDB, Express.js, React.js, and Node.js to become a full-stack
              developer.
            </p>
            <p>
              Currently, I’m seeking internship opportunities to gain practical
              experience. My goal is to become a Full Stack and App Developer,
              creating impactful and efficient applications.
            </p>
            <a href="/Suji CV.pdf" className="btn primary-btn">
              Download CV <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About