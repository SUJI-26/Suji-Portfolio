import { useState, useEffect } from 'react'

const Schroll = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY >= 560)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className={`scrollToTop-btn ${show ? 'active' : ''}`} onClick={scrollToTop}>
      <i className="fas fa-arrow-up"></i>
    </div>
  )
}

export default Schroll