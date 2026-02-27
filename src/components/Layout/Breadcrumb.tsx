import React, { useMemo } from 'react'
import { Breadcrumb } from 'antd'
import type { BreadcrumbProps } from 'antd'
import { useNavigate } from 'react-router-dom'
import type { RouteItem } from '@/global.d.ts'
import './layout.scss'

interface AppBreadcrumbProps {
  routes: RouteItem[]
  currentPath: string
  style?: React.CSSProperties
  className?: string
}

const AppBreadcrumb: React.FC<AppBreadcrumbProps> = ({ routes, currentPath, style, className }) => {
  const navigate = useNavigate()

  const breadcrumbItems = useMemo(() => {
    if (!currentPath || currentPath === '/') {
      return [
        {
          title: '首页',
          href: '/',
        },
      ]
    }

    const items: BreadcrumbProps['items'] = []
    // 添加首页

    // 解析当前路径，生成面包屑
    const pathSegments = currentPath.split('/').filter(Boolean)
    let currentPathSegment = ''

    pathSegments.forEach((segment, index) => {
      currentPathSegment += `/${segment}`

      // 查找对应的路由名称
      let routeName = segment

      const findRouteName = (routes: RouteItem[], path: string): string | undefined => {
        for (const route of routes) {
          if (route.path === path) {
            return route.name
          }
          if (route.children) {
            const name = findRouteName(route.children, path)
            if (name) {
              return name
            }
          }
        }
        return undefined
      }

      const foundName = findRouteName(routes, currentPathSegment)
      if (foundName) {
        routeName = foundName
      }

      items.push({
        title:
          index === pathSegments.length - 1 ? (
            routeName
          ) : (
            <a
              href={currentPathSegment}
              onClick={(e) => {
                e.preventDefault()
                navigate(currentPathSegment)
              }}
            >
              {routeName}
            </a>
          ),
      })
    })

    return items
  }, [currentPath, routes, navigate])

  return <Breadcrumb items={breadcrumbItems} className={`breadcrumb ${className || ''}`} style={{ ...style }} />
}

export default AppBreadcrumb
