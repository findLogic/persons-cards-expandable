import { AboutPage } from '@/pages/AboutPage'
import { MainPage } from '@/pages/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { AppRoutes } from '@/shared/const/router'
import { PathRouteProps } from 'react-router'

export const routeConfig: Record<AppRoutes, PathRouteProps> = {
  [AppRoutes.MAIN]: {
    path: '/',
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: '/about',
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
}
