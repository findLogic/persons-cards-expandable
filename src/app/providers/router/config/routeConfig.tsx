import { AboutPage } from '@/pages/AboutPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { PersonListPage } from '@/pages/PersonsListPage'
import { AppRoutes } from '@/shared/const/router'
import { PathRouteProps } from 'react-router'

export const routeConfig: Record<AppRoutes, PathRouteProps> = {
  [AppRoutes.MAIN]: {
    path: '/',
    element: <PersonListPage />,
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
