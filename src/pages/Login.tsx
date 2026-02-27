import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Card } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useMessageService } from '@/contexts/MessageContext'

interface LoginFormValues {
  username: string
  password: string
}

const Login: React.FC = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const messageService = useMessageService()

  const onFinish = (_values: LoginFormValues) => {
    setLoading(true)
    setTimeout(() => {
      messageService.showMessage('success', '登录成功！')
      setLoading(false)
      navigate('/home')
    }, 1000)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <Card
        title={
          <div
            style={{
              textAlign: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
            }}
          >
            登录
          </div>
        }
        style={{ width: 400, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}
      >
        <Form
          name="login"
          initialValues={{ username: 'admin', password: 'admin123' }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
            <Input prefix={<UserOutlined />} placeholder="用户名" size="large" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input.Password prefix={<LockOutlined />} placeholder="密码" size="large" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
