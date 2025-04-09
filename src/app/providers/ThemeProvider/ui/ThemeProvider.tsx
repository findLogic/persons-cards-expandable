import { FC, ReactNode, useEffect, useMemo, useState } from 'react'
import { Theme } from '@/shared/const/theme'
import { ThemeContext } from '@/shared/lib/ThemeContext'

const getDefaultTheme = (): Theme => {
  const storedTheme = localStorage.getItem('theme') as Theme | null
  if (storedTheme) return storedTheme

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? Theme.DARK : Theme.LIGHT
}

interface ThemeProviderProps {
  children: ReactNode
  initialTheme?: Theme
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || getDefaultTheme())

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])
  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  )

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
