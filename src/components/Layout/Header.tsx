import React, { useState } from 'react'
import { Layout, Button, Dropdown, Space, Avatar, Menu, Drawer, Spin } from 'antd'
import type { MenuProps } from 'antd'
import { UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router-dom'
import type { RouteItem } from '@/global.d.ts'
import Icon from '@/components/Icon'
import './layout.scss'
import { useGetRoutesQuery } from '@/features/api'

const { Header: AntHeader } = Layout

interface HeaderProps {
  showMenu?: boolean
  collapsed?: boolean
  onMenuClick?: () => void
  layoutMode?: 'side' | 'top'
  isMobile?: boolean
}

const Header: React.FC<HeaderProps> = ({ layoutMode = 'side', isMobile = false }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { data: routes = [], isLoading } = useGetRoutesQuery()

  const [drawerVisible, setDrawerVisible] = useState(false)

  // 打开抽屉菜单
  const handleDrawerOpen = () => {
    setDrawerVisible(true)
  }

  // 关闭抽屉菜单
  const handleDrawerClose = () => {
    setDrawerVisible(false)
  }

  const userMenu = [
    {
      key: 'profile',
      label: '个人资料',
    },
    {
      key: 'settings',
      label: '设置',
    },
    {
      key: 'logout',
      label: '退出登录',
    },
  ]

  // 构建顶部菜单配置
  const topMenuItems = React.useMemo(() => {
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

  // 处理顶部菜单点击
  const handleTopMenuSelect: MenuProps['onSelect'] = ({ key }) => {
    navigate(key)
  }

  if (isLoading) {
    return (
      <AntHeader>
        <div>
          <Spin size="small" description="Loading..." />
        </div>
      </AntHeader>
    )
  }

  return (
    <AntHeader className={`header ${isMobile ? 'header-mobile' : ''}`}>
      <div className="header-left">
        {layoutMode === 'top' && isMobile && (
          <Button
            type="text"
            icon={drawerVisible ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => handleDrawerOpen()}
            className="mobile-menu-button"
          />
        )}
        <div className="header-logo">
          <img src="/logo.webp" alt="Logo" />
          <span className="header-title">{import.meta.env.VITE_SYS_NAME}</span>
          {layoutMode === 'top' && !isMobile && (
            <Menu
              mode="horizontal"
              selectedKeys={[location.pathname]}
              onSelect={handleTopMenuSelect}
              items={topMenuItems}
              className="header-menu"
            />
          )}
        </div>
      </div>
      <div className="header-right">
        <Space className="header-space" classNames={{ item: 'header-space-item' }}>
          <Dropdown menu={{ items: userMenu }} placement="bottom" trigger={['click']}>
            <div className="dropdownMenu">
              <Avatar icon={<UserOutlined />} />
              <span>CAYT-A</span>
            </div>
          </Dropdown>
        </Space>
      </div>
      {/* 抽屉菜单 - 小屏时使用 */}
      {layoutMode === 'top' && isMobile && (
        <Drawer
          title={null}
          placement="left"
          onClose={handleDrawerClose}
          open={drawerVisible}
          mask={{ enabled: true, blur: true }}
          className="mobileMenuDrawer"
          size={210}
        >
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            onSelect={handleTopMenuSelect}
            items={topMenuItems}
            className={isMobile ? 'sider-menu sider-menu-mobile' : 'sider-menu'}
          />
        </Drawer>
      )}
    </AntHeader>
  )
}

export default Header
