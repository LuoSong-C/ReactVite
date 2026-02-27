import React, { useState } from 'react'
import { Layout, Menu, Spin } from 'antd'
import type { MenuProps } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router-dom'
import { useGetRoutesQuery } from '@/features/api'
import type { RouteItem } from '@/global.d.ts'
import Icon from '@/components/Icon'
import './layout.scss'

const { Sider: AntSider } = Layout

interface SiderProps {
  collapsed?: boolean
  onCollapse?: (_collapsed: boolean) => void
}

const Sider: React.FC<SiderProps> = ({ collapsed = false, onCollapse = () => {} }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { data: routes = [], isLoading } = useGetRoutesQuery()

  const [menuCollapsed, setMenuCollapsed] = useState(collapsed)

  const handleMenuCollapse = () => {
    const newCollapsed = !menuCollapsed
    setMenuCollapsed(newCollapsed)
    onCollapse?.(newCollapsed)
  }

  const menuItems = React.useMemo(() => {
    if (routes.length === 0) {
      return []
    }

    const buildMenuItems = (routes: RouteItem[]): any[] => {
      return routes
        .map((route: RouteItem) => {
          if (!route.path) return null

          const menuItem: any = {
            key: route.path,
            label: route.name,
          }

          if (route.icon) {
            menuItem.icon = <Icon type={route.icon} />
          }

          if (route.children && route.children.length > 0) {
            const childItems = route.children
              .map((child: RouteItem) => {
                if (!child.path) return null

                const childMenuItem: any = {
                  key: child.path,
                  label: child.name,
                }

                if (child.icon) {
                  childMenuItem.icon = <Icon type={child.icon} />
                }

                return childMenuItem
              })
              .filter(Boolean)

            if (childItems.length > 0) {
              menuItem.children = childItems
            }
          }

          return menuItem
        })
        .filter(Boolean)
    }

    return buildMenuItems(routes)
  }, [routes])

  const handleMenuSelect: MenuProps['onSelect'] = ({ key }) => {
    navigate(key)
  }

  if (isLoading) {
    return (
      <AntSider width={200} className="sider-loading">
        <div className="sider-loading-container">
          <Spin size="small" description="Loading..." />
        </div>
      </AntSider>
    )
  }

  return (
    <AntSider
      width={200}
      collapsible
      collapsed={menuCollapsed}
      onCollapse={handleMenuCollapse}
      trigger={null}
      className="sider"
    >
      <div
        className={`siderCollapsedBox ${menuCollapsed ? 'siderCollapsedBox-rotated' : ''}`}
        onClick={handleMenuCollapse}
      >
        <LeftOutlined />
      </div>

      <Menu
        mode="inline"
        theme="light"
        selectedKeys={[location.pathname]}
        onSelect={handleMenuSelect}
        items={menuItems}
        className="sider-menu"
      />
    </AntSider>
  )
}

export default Sider
