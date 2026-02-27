import { Form, Input, Button, Card, Typography, Select, Checkbox } from 'antd'

const { Title } = Typography
const { Option } = Select

const FormDemo = () => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log('Form values:', values)
  }

  return (
    <div>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
        <Title level={1}>表单组件示例</Title>
        <Card>
          <Form form={form} layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
            <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名' }]}>
              <Input placeholder="请输入用户名" />
            </Form.Item>

            <Form.Item
              label="邮箱"
              name="email"
              rules={[
                { required: true, message: '请输入邮箱' },
                { type: 'email', message: '请输入有效的邮箱地址' },
              ]}
            >
              <Input placeholder="请输入邮箱" />
            </Form.Item>

            <Form.Item label="角色" name="role" rules={[{ required: true, message: '请选择角色' }]}>
              <Select placeholder="请选择角色">
                <Option value="admin">管理员</Option>
                <Option value="user">普通用户</Option>
                <Option value="guest">访客</Option>
              </Select>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                提交
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  )
}

export default FormDemo
