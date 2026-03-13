import sujiImg2 from "../assets/images/Suji img2.jpg";

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
            <h3>
              <span>Full Stack Developer</span>
            </h3>
            <p>
              Hi, I'm Suji, an aspiring MERN Stack Developer currently pursuing
              a degree in Electronics and Communication Engineering at M.A.M
              College of Engineering and Technology, Trichy. Although my
              academic background is in ECE, I am deeply passionate about web
              development and building modern, responsive, and user-friendly web
              applications. I have experience with HTML, CSS, Bootstrap, and
              JavaScript, and I am currently expanding my skills in the MERN
              stack — MongoDB, Express.js, React.js, and Node.js — to become a
              full-stack developer.
            </p>
            <p>
              I am actively seeking internship opportunities where I can apply
              my skills, gain real-world experience, and contribute to building
              impactful digital products. My long-term goal is to grow into a
              skilled Full Stack and Application Developer capable of developing
              scalable and efficient applications.
            </p>
            <a href="SUJI-Front.pdf" className="btn primary-btn">
              Download CV <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
