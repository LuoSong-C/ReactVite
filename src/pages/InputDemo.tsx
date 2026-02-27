import { Input, Card, Typography } from 'antd'

const { Title } = Typography

const InputDemo = () => {
  return (
    <div>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
        <Title level={1}>输入组件示例</Title>
        <Card>
          <Input placeholder="请输入文本" style={{ marginBottom: 16 }} />
          <Input.Password placeholder="请输入密码" style={{ marginBottom: 16 }} />
          <Input.TextArea rows={4} placeholder="请输入多行文本" />
        </Card>
      </div>
    </div>
  )
}

export default InputDemo
