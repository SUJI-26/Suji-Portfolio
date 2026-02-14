import { useEffect } from 'react'

const ThemeToggleButton = ({ theme, toggleTheme }) => {
  // Sync button class with theme
  useEffect(() => {
    const btn = document.querySelector('.theme-btn')
    if (btn) {
      if (theme === 'dark') {
        btn.classList.add('sun')
      } else {
        btn.classList.remove('sun')
      }
    }
  }, [theme])

  return (
    <div className="theme-btn" onClick={toggleTheme}>
      <i className="fas fa-moon"></i>
      <i className="fas fa-sun"></i>
    </div>
  )
}

export default ThemeToggleButton