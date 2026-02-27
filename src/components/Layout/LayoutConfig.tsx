import React from 'react'
import { Card, Radio, Switch, Space, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setLayoutMode, setShowBreadcrumb } from '@/features/configSlice'
import type { RootState } from '@/stores'

const { Title } = Typography

const LayoutConfig: React.FC = () => {
  const dispatch = useDispatch()
  const userConfig = useSelector((state: RootState) => state.config.userConfig)

  const handleLayoutModeChange = (e: any) => {
    dispatch(setLayoutMode(e.target.value))
  }

  const handleBreadcrumbChange = (checked: boolean) => {
    dispatch(setShowBreadcrumb(checked))
  }

  const layoutConfigItemStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

  return (
    <Card title={<Title level={4}>布局配置</Title>} style={{ marginBottom: 24 }}>
      <Space orientation="vertical" style={{ width: '100%' }}>
        <div style={layoutConfigItemStyles}>
          <span>布局模式：</span>
          <Radio.Group value={userConfig?.layoutMode || 'side'} onChange={handleLayoutModeChange} optionType="button">
            <Radio.Button value="side">侧边布局</Radio.Button>
            <Radio.Button value="top">顶部布局</Radio.Button>
          </Radio.Group>
        </div>
        <div style={layoutConfigItemStyles}>
          <span>显示面包屑：</span>
          <Switch checked={userConfig?.showBreadcrumb !== false} onChange={handleBreadcrumbChange} />
        </div>
      </Space>
    </Card>
  )
}

export default LayoutConfig
