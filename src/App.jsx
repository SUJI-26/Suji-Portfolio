import { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Schroll from './components/schroll'
import ThemeToggleButton from './components/ThemeToggleButton'
import ScrollReveal from 'scrollreveal' // if installed via npm, else use global

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  // Theme toggle
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  // Apply theme to body and store
  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : ''
    localStorage.setItem('theme', theme)
  }, [theme])

  // Active nav links on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const handleScroll = () => {
      const scrollY = window.pageYOffset
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 50
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')
        const navLink = document.querySelector(`.nav-link[href*=${sectionId}]`)
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink?.classList.add('active')
        } else {
          navLink?.classList.remove('active')
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ScrollReveal animations
  useEffect(() => {
    // If you installed scrollreveal via npm, import it; otherwise it's global
    if (typeof ScrollReveal !== 'undefined') {
      const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400
      })

      sr.reveal(`.home-content, .section-subtitle, .section-title`)
      sr.reveal(`.home-image`, { delay: 500 })
      sr.reveal(`.home-content h3, .home-content p, .about-content p`, { delay: 600, origin: 'right' })
      sr.reveal(`.home-content .btn-group, .home-content .social-media`, { delay: 700, origin: 'bottom' })
      sr.reveal(`.about-img`, { delay: 600, origin: 'left' })
      sr.reveal(`.about-content h2, .about-content h3, .about-content .btn`, { delay: 700, origin: 'right' })
      sr.reveal(`.skills-content h3`, { delay: 600, origin: 'left' })
      sr.reveal(`.education-box, .skills-box`, { delay: 700, origin: 'bottom', interval: 100 })
      sr.reveal(`.projects-intro`, { delay: 600, origin: 'top' })
      sr.reveal(`.card`, { delay: 700, origin: 'bottom', interval: 100 })
      sr.reveal(`.contact-info`, { delay: 600, origin: 'left' })
      sr.reveal(`.contact-form-container`, { delay: 700, origin: 'right' })
      sr.reveal(`.footer-wrapper, .copyright`, { delay: 600, origin: 'top' })
    }
  }, [])

  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Schroll />
      <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
    </>
  )
}

export default App