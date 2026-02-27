import React, { lazy, useMemo } from 'react'
import { createBrowserRouter, RouterProvider, RouteObject, Navigate } from 'react-router-dom'
import { Spin, Alert } from 'antd'
import { useGetRoutesQuery } from '@/features/api'
import type { RouteItem } from '@/global.d.ts'
import AppLayout from '@/components/Layout/Layout'
import Login from '@/pages/Login'

const lazyLoadComponent = (componentName: string) => {
  switch (componentName) {
    case 'Home':
      return import('@/pages/Home')
    case 'Components':
      return import('@/pages/Components')
    case 'ButtonDemo':
      return import('@/pages/ButtonDemo')
    case 'InputDemo':
      return import('@/pages/InputDemo')
    case 'FormDemo':
      return import('@/pages/FormDemo')
    case 'About':
      return import('@/pages/About')
    default:
      return import('@/pages/Home')
  }
}

const flattenRoutes = (routes: RouteItem[]): RouteItem[] => {
  const result: RouteItem[] = []

  const flatten = (routes: RouteItem[]) => {
    routes.forEach((route) => {
      if (!route.children || route.children.length === 0) {
        result.push(route)
      } else {
        flatten(route.children)
      }
    })
  }

  flatten(routes)
  return result
}

const buildRouteConfig = (routes: RouteItem[]): RouteObject[] => {
  const flatRoutes = flattenRoutes(routes)

  const routeConfigs: RouteObject[] = [
    {
      path: '/',
      element: <Navigate to="/login" replace />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]

  flatRoutes.forEach((route: RouteItem) => {
    routeConfigs.push({
      path: route.path,
      element: React.createElement(AppLayout, {}, React.createElement(lazy(() => lazyLoadComponent(route.component!)))),
    })
  })

  return routeConfigs
}

const AppRouter = () => {
  const { data: routes = [], isLoading, error } = useGetRoutesQuery()

  const routeConfig = useMemo(() => {
    return routes.length > 0 ? buildRouteConfig(routes) : []
  }, [routes])

  const router = useMemo(() => {
    if (routes.length === 0 || routeConfig.length === 0) {
      return null
    }

    try {
      return createBrowserRouter(routeConfig)
    } catch (err) {
      console.error('Failed to create router:', err)
      return null
    }
  }, [routes, routeConfig])

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Spin size="large" />
      </div>
    )
  }

  if (error || !router) {
    console.log(error)
    const errorMessage = '路由加载错误'
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Alert title="加载失败" description={errorMessage} type="error" showIcon />
      </div>
    )
  }

  return (
    <React.Suspense
      fallback={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Spin size="large" />
        </div>
      }
    >
      <RouterProvider router={router} />
    </React.Suspense>
  )
}

export default AppRouter
