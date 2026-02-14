const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-info">
            <h2>SUJI V</h2>
            <p>Web Developer</p>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </div>

          <div className="footer-socials">
            <a href="https://www.instagram.com/" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/vsuji" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            <a href="mailto:suji26262@gmail.com" className="social-icon"><i className="fa fa-envelope"></i></a>
          </div>
        </div>

        <div className="copyright">
          <p><i className="far fa-copyright"></i> 2025 by SUJI V. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer