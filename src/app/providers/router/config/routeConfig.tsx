import { AboutPage } from '@/pages/AboutPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { PersonDetailPage } from '@/pages/PersonDetailsPage'
import { PersonListPage } from '@/pages/PersonsListPage'
import {
  AppRoutes,
  getRouteAbout,
  getRouteMain,
  getRouteNotFound,
  getRoutePerson,
} from '@/shared/const/router'
import { PathRouteProps } from 'react-router'

export const routeConfig: Record<AppRoutes, PathRouteProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <PersonListPage />,
  },
  [AppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPage />,
  },
  [AppRoutes.PERSON]: {
    path: getRoutePerson(':id'),
    element: <PersonDetailPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: getRouteNotFound(),
    element: <NotFoundPage />,
  },
}
