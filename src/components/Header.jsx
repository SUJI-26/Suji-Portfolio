import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header')
      if (window.scrollY > 100) {
        header.classList.add('sticky')
      } else {
        header.classList.remove('sticky')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <h1 className="logo">SUJI <span>V</span></h1>
          <div className="nav-container">
            <div className={`nav-bar ${isMenuOpen ? 'active' : ''}`}>
              <div className="nav-close-btn" onClick={closeMenu}>
                <i className="fas fa-times"></i>
              </div>
              <nav>
                <ul>
                  <li><a href="#home" className="nav-link active" onClick={closeMenu}><i className="fas fa-home"></i> Home</a></li>
                  <li><a href="#about" className="nav-link" onClick={closeMenu}><i className="fas fa-user"></i> About me</a></li>
                  <li><a href="#skills" className="nav-link" onClick={closeMenu}><i className="fas fa-file-lines"></i> Skills</a></li>
                  <li><a href="#projects" className="nav-link" onClick={closeMenu}><i className="fas fa-image"></i> Projects</a></li>
                  <li><a href="#contact" className="nav-link" onClick={closeMenu}><i className="fas fa-envelope"></i> Contact</a></li>
                </ul>
              </nav>
            </div>
            <div className="menu-btn" onClick={() => setIsMenuOpen(true)}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header