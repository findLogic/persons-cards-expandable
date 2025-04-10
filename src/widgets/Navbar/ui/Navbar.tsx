import { routeConfig } from '@/app/providers/router/config/routeConfig'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { FC, memo } from 'react'
import { useLocation } from 'react-router'
import cls from './Navbar.module.scss'

export const Navbar: FC = memo(function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className={cls.navbar}>
      <div className={cls.links}>
        <AppLink to={routeConfig.main.path!} active={pathname === routeConfig.main.path}>
          Профили
        </AppLink>
        <AppLink to={routeConfig.about.path!} active={pathname === routeConfig.about.path}>
          О проекте
        </AppLink>
      </div>
      <ThemeSwitcher />
    </nav>
  )
})

export default Navbar
