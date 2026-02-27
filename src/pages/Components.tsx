import { useState } from 'react'
import {
  Button,
  Space,
  Alert,
  Card,
  Typography,
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  Slider,
  Progress,
  Badge,
  Avatar,
  Tag,
  Tooltip,
  Popover,
  Modal,
} from 'antd'
import { useMessageService } from '@/contexts/MessageContext'
import LayoutConfig from '@/components/Layout/LayoutConfig'

const { Title, Paragraph } = Typography
const { Option } = Select
const { TextArea } = Input

const Components = () => {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('')
  const [checkboxValue, setCheckboxValue] = useState<string[]>([])
  const [radioValue, setRadioValue] = useState('1')
  const [switchValue, setSwitchValue] = useState(false)
  const [sliderValue, setSliderValue] = useState(30)
  const [modalVisible, setModalVisible] = useState(false)
  const messageService = useMessageService()

  const showMessage = () => {
    messageService.showMessage('success', 'Hello, Ant Design!')
  }

  const handleCheckboxChange = (checkedValues: string[]) => {
    setCheckboxValue(checkedValues)
  }

  return (
    <div>
      <Title level={2}>组件示例</Title>
      <Paragraph>这是一个组件示例页面，展示了 Ant Design 组件的使用方法。</Paragraph>

      <LayoutConfig />

      <Card title="按钮组件" style={{ marginBottom: 24 }}>
        <Space>
          <Button type="primary" onClick={showMessage}>
            显示消息
          </Button>
          <Button type="default" onClick={() => setCount(count + 1)}>
            点击次数: {count}
          </Button>
          <Button type="dashed">虚线按钮</Button>
          <Button type="text">文本按钮</Button>
          <Button type="primary" danger>
            危险按钮
          </Button>
          <Button type="primary" ghost>
            幽灵按钮
          </Button>
        </Space>
      </Card>

      <Card title="输入组件" style={{ marginBottom: 24 }}>
        <Space orientation="vertical" style={{ width: '100%' }}>
          <Input placeholder="请输入文本" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <TextArea rows={4} placeholder="请输入多行文本" />
          <Input.Password placeholder="请输入密码" />
          <Input.Search placeholder="请输入搜索内容" onSearch={(value) => console.log(value)} enterButton />
        </Space>
      </Card>

      <Card title="选择器组件" style={{ marginBottom: 24 }}>
        <Space orientation="vertical" style={{ width: '100%' }}>
          <Select
            placeholder="请选择"
            style={{ width: '100%' }}
            value={selectValue}
            onChange={(value) => setSelectValue(value)}
          >
            <Option value="1">选项1</Option>
            <Option value="2">选项2</Option>
            <Option value="3">选项3</Option>
            <Option value="4">选项4</Option>
          </Select>
          <Checkbox.Group
            options={['选项1', '选项2', '选项3', '选项4']}
            value={checkboxValue}
            onChange={handleCheckboxChange}
          />
          <Radio.Group value={radioValue} onChange={(e) => setRadioValue(e.target.value)}>
            <Space>
              <Radio value="1">选项1</Radio>
              <Radio value="2">选项2</Radio>
              <Radio value="3">选项3</Radio>
            </Space>
          </Radio.Group>
          <Space>
            <span>开关：</span>
            <Switch checked={switchValue} onChange={setSwitchValue} />
          </Space>
        </Space>
      </Card>

      <Card title="滑块和进度条" style={{ marginBottom: 24 }}>
        <Space orientation="vertical" style={{ width: '100%' }}>
          <Space>
            <span>滑块：{sliderValue}</span>
            <Slider value={sliderValue} onChange={setSliderValue} style={{ flex: 1 }} />
          </Space>
          <Progress percent={30} status="active" />
          <Progress percent={60} status="exception" />
          <Progress percent={100} status="success" />
          <Progress percent={50} type="circle" />
          <Progress percent={80} type="dashboard" />
        </Space>
      </Card>

      <Card title="徽标和头像" style={{ marginBottom: 24 }}>
        <Space>
          <Badge count={5}>
            <Avatar shape="circle" size={32} icon="user" />
          </Badge>
          <Badge count={100} overflowCount={99}>
            <Avatar shape="square" size={32} icon="user" />
          </Badge>
          <Badge dot>
            <Avatar shape="circle" size={32} icon="user" />
          </Badge>
          <Avatar shape="circle" size={48} icon="user" />
          <Avatar shape="square" size={48} icon="user" />
          <Avatar shape="circle" size={64} icon="user" />
        </Space>
      </Card>

      <Card title="标签组件" style={{ marginBottom: 24 }}>
        <Space wrap>
          <Tag>标签1</Tag>
          <Tag color="blue">标签2</Tag>
          <Tag color="green">标签3</Tag>
          <Tag color="red">标签4</Tag>
          <Tag color="orange">标签5</Tag>
          <Tag color="purple">标签6</Tag>
          <Tag color="cyan">标签7</Tag>
          <Tag color="magenta">标签8</Tag>
          <Tag closable onClose={() => console.log('标签已关闭')}>
            可关闭标签
          </Tag>
        </Space>
      </Card>

      <Card title="提示框和弹出框" style={{ marginBottom: 24 }}>
        <Space>
          <Tooltip title="这是一个提示">
            <Button>悬停查看提示</Button>
          </Tooltip>
          <Popover content="这是一个弹出框" title="弹出框标题">
            <Button>点击查看弹出框</Button>
          </Popover>
          <Button type="primary" onClick={() => setModalVisible(true)}>
            打开对话框
          </Button>
        </Space>
      </Card>

      <Card title="提示组件" style={{ marginBottom: 24 }}>
        <Space orientation="vertical" style={{ width: '100%' }}>
          <Alert title="成功提示" type="success" showIcon />
          <Alert title="警告提示" type="warning" showIcon />
          <Alert title="错误提示" type="error" showIcon />
          <Alert title="信息提示" type="info" showIcon />
          <Alert title="复杂提示" description="这是一个带有描述的复杂提示，可以包含更多的信息。" type="info" showIcon />
        </Space>
      </Card>

      <Modal
        title="对话框"
        open={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      >
        <p>这是一个对话框示例，用于展示重要信息或请求用户确认操作。</p>
        <p>对话框可以包含表单、文本、图片等多种内容。</p>
      </Modal>
    </div>
  )
}

export default Components
