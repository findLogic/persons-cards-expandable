import { memo, ReactNode, Suspense, useCallback } from 'react'
import { PathRouteProps, Route, Routes } from 'react-router'
import { routeConfig } from '../config/routeConfig'
import { PageLoader } from '@/widgets/PageLoader'

export const AppRouter = memo(function AppRouter(): ReactNode {
  const renderWithWrapper = useCallback((route: PathRouteProps) => {
    const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>

    return <Route key={route.path} path={route.path} element={element} />
  }, [])

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
})
