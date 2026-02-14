import sujiImage from '../assets/images/Suji image 1.png'
import TypedText from './TypedText'

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="home-wrapper">
          <div className="home-content">
            <h1>Hi,I am SUJI</h1>
            <h3>
              <TypedText /><span className="cursor">|</span>
            </h3>
            <p>
              I create stunning, user-friendly website designs that blend visual
              appeal with the latest design trends.
            </p>
            <div className="btn-group">
              <a href="#contact" className="btn primary-btn">
                Hire Me <i className="fas fa-arrow-right"></i>
              </a>
              <a href="/Suji CV.pdf" className="btn secondary-btn">
                Download CV <i className="fas fa-download"></i>
              </a>
            </div>

            <div className="social-media">
              <a href="https://www.instagram.com/" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/vsuji" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:suji26262@gmail.com" className="social-icon">
                <i className="fa fa-envelope"></i>
              </a>
              <a href="https://github.com/SUJI-26" className="social-icon">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="home-image">
            <div className="img-box">
              <img src={sujiImage} alt="Suji- Front-end Developer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home