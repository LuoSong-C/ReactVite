import React, { ReactNode, useState, useEffect } from 'react'
import { Layout, type LayoutProps } from 'antd'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '@/stores'
import Header from './Header'
import Sider from './Sider'
import Breadcrumb from './Breadcrumb'
import './layout.scss'

const { Content } = Layout

interface AppLayoutProps extends LayoutProps {
  children?: ReactNode
  layoutMode?: 'side' | 'top'
  showBreadcrumb?: boolean
}

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  layoutMode: propLayoutMode,
  showBreadcrumb: propShowBreadcrumb,
}) => {
  const location = useLocation()
  const routes = useSelector((state: RootState) => state.route.routes)
  const userConfig = useSelector((state: RootState) => state.config.userConfig)

  // 屏幕宽度检测
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920)
  const [isMobile, setIsMobile] = useState(false)
  const [siderCollapsed, setSiderCollapsed] = useState(false)

  // 监听窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 根据屏幕宽度判断是否为移动设备
  useEffect(() => {
    const MOBILE_BREAKPOINT = 768
    setIsMobile(screenWidth < MOBILE_BREAKPOINT)
  }, [screenWidth])

  // 使用props传递的值或从store中获取配置，移动设备强制使用顶部布局
  const layoutMode = isMobile ? 'top' : propLayoutMode || userConfig?.layoutMode || 'side'
  const showBreadcrumb = propShowBreadcrumb !== undefined ? propShowBreadcrumb : userConfig?.showBreadcrumb !== false

  return layoutMode === 'top' ? (
    <Layout>
      <Header showMenu={true} layoutMode={layoutMode} isMobile={isMobile} />
      <Layout>
        {showBreadcrumb && (
          <Breadcrumb
            routes={routes}
            currentPath={location.pathname}
            className="breadcrumb breadcrumb-fixed breadcrumb-fixed-top"
          />
        )}
        <Content className={`content ${showBreadcrumb ? 'content-top-layout-with-breadcrumb' : 'content-top-layout'}`}>
          {children}
        </Content>
      </Layout>
    </Layout>
  ) : (
    <Layout>
      <Header layoutMode={layoutMode} isMobile={isMobile} />
      <Layout>
        <Sider collapsed={siderCollapsed} onCollapse={(value) => setSiderCollapsed(value)} />
        <Layout>
          {showBreadcrumb && (
            <Breadcrumb
              routes={routes}
              currentPath={location.pathname}
              className={`breadcrumb breadcrumb-fixed ${siderCollapsed ? 'breadcrumb-fixed-side-collapsed' : 'breadcrumb-fixed-side'}`}
            />
          )}
          <Content
            className={`content ${showBreadcrumb ? (siderCollapsed ? 'content-side-layout-with-breadcrumb content-side-layout-with-breadcrumb-collapsed' : 'content-side-layout-with-breadcrumb') : siderCollapsed ? 'content-side-layout content-side-layout-collapsed' : 'content-side-layout'}`}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default AppLayout
