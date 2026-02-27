import { Card, Typography } from 'antd'

const { Title, Paragraph } = Typography

const About = () => {
  return (
    <div>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
        <Title level={1}>关于</Title>
        <Card>
          <Paragraph>本项目是一个基于以下技术栈构建的现代化 Web 应用：</Paragraph>
          <ul>
            <li>Vite - 下一代前端构建工具</li>
            <li>React - 用于构建用户界面的 JavaScript 库</li>
            <li>Redux Toolkit - Redux 的官方推荐工具集</li>
            <li>Ant Design - 企业级 UI 设计语言和 React UI 组件库</li>
            <li>TypeScript - JavaScript 的超集，添加了类型系统</li>
            <li>React Router - React 的路由库</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}

export default About
