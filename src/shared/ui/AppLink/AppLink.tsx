import { FC, ReactNode, memo } from 'react'
import { Link, LinkProps } from 'react-router'
import classNames from 'classnames'
import cls from './AppLink.module.scss'

export interface AppLinkProps extends LinkProps {
  children: ReactNode
  active: boolean
}

export const AppLink: FC<AppLinkProps> = memo(function AppLink({
  to,
  active,
  children,
  ...rest
}: AppLinkProps) {
  return (
    <Link to={to} className={classNames(cls.link, { [cls.active]: active })} {...rest}>
      {children}
    </Link>
  )
})
