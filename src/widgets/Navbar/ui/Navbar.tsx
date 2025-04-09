import { routeConfig } from '@/app/providers/router/config/routeConfig'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { FC, memo } from 'react'
import { useLocation } from 'react-router'

export const Navbar: FC = memo(function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <AppLink to={routeConfig.main.path!} active={pathname === routeConfig.main.path}>
          Profiles
        </AppLink>
        <AppLink to={routeConfig.about.path!} active={pathname === routeConfig.about.path}>
          About Us
        </AppLink>
      </div>
      <ThemeSwitcher />
    </nav>
  )
})

export default Navbar
