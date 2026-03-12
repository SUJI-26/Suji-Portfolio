const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Let's get in touch</h3>
            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+91 8248018762</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p><a href="mailto:suji2626@gmail.com">suji26262@gmail.com</a></p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>Ariyalur</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <p>
              I'm always open to discussing
              <span> website design work or partnership</span> opportunities.
            </p>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <textarea rows="7" placeholder="Message" required></textarea>
              </div>
              <button type="submit" className="btn primary-btn">
                Send Message <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact