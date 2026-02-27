import { Card, Typography } from 'antd'

const { Title } = Typography

const Home = () => {
  return (
    <div>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
        <Title level={1}>首页</Title>
        <Card>
          <p>欢迎来到 React + Redux + Ant Design 项目！</p>
          <p>这是一个使用 Vite + React + Redux + Ant Design 构建的项目模板。</p>
        </Card>
      </div>
    </div>
  )
}

export default Home
