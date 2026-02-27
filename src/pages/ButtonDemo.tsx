import { Button, Card, Typography } from 'antd'

const { Title } = Typography

const ButtonDemo = () => {
  return (
    <div>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
        <Title level={1}>按钮组件示例</Title>
        <Card>
          <Button type="primary">主按钮</Button>
          <Button>默认按钮</Button>
          <Button type="dashed">虚线按钮</Button>
          <Button type="text">文本按钮</Button>
          <Button type="link">链接按钮</Button>
          <Button danger>危险按钮</Button>
          <Button loading>加载按钮</Button>
          <Button disabled>禁用按钮</Button>
        </Card>
      </div>
    </div>
  )
}

export default ButtonDemo
