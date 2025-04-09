import { Theme } from '@/shared/const/theme'
import { ThemeContext } from '@/shared/lib/ThemeContext'
import { useCallback, useContext } from 'react'
import SunIcon from '@/shared/assets/icons/sun.svg?react'
import MoonIcon from '@/shared/assets/icons/moon.svg?react'

export const ThemeSwitcher = function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext)
  const toggleTheme = useCallback(() => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    document.body.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
    if (setTheme) {
      setTheme(newTheme)
    }
  }, [theme, setTheme])

  return (
    <div
      className="theme-toggle"
      data-theme={theme === Theme.LIGHT ? Theme.LIGHT : Theme.DARK}
      onClick={toggleTheme}
    >
      <div className="theme-toggle-switch"></div>
      <span className="theme-toggle-icon">
        {theme === Theme.LIGHT ? <MoonIcon /> : <SunIcon />}
      </span>
    </div>
  )
}
