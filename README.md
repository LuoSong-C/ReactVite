# My-Project

一个基于 React 19 + TypeScript + Ant Design 的现代前端项目，使用 Vite 作为构建工具，Redux Toolkit 进行状态管理，支持动态路由、响应式布局和完整的权限管理系统。

## 技术栈

- **前端框架**: React 19.2.4
- **构建工具**: Vite 7.3.1
- **语言**: TypeScript 5.9.3
- **UI 库**: Ant Design 6.3.0, Ant Design Pro Components 2.8.10
- **状态管理**: Redux Toolkit 2.11.2, React Redux 9.2.0
- **路由**: React Router DOM 7.13.0
- **HTTP 客户端**: Axios 1.13.5
- **CSS 预处理器**: Sass 1.97.3
- **图标库**: @ant-design/icons 6.1.0
- **工具库**: await-to-js 3.0.0

## 项目结构

```bash
├── src/
│   ├── components/        # 组件目录
│   │   ├── Layout/        # 布局组件
│   │   │   ├── Breadcrumb.tsx      # 面包屑组件
│   │   │   ├── Header.tsx          # 头部组件
│   │   │   ├── Layout.tsx          # 主布局组件
│   │   │   ├── LayoutConfig.tsx    # 布局配置组件
│   │   │   ├── Sider.tsx           # 侧边栏组件
│   │   │   └── layout.scss         # 布局样式
│   │   └── Icon.tsx       # 图标组件
│   ├── constants/         # 常量目录
│   │   └── index.ts       # 测试路由常量
│   ├── contexts/          # Context 目录
│   │   ├── IconContext.tsx     # 图标上下文
│   │   ├── MessageContext.tsx  # 消息上下文
│   │   └── ThemeContext.tsx    # 主题上下文
│   ├── features/          # Redux Toolkit 特性目录
│   │   ├── api.ts         # RTK Query API 配置
│   │   ├── header.ts      # 请求头配置
│   │   ├── configSlice/   # 配置状态管理
│   │   │   └── index.ts   # 配置 slice
│   │   └── routeSlice/    # 路由状态管理
│   │       └── index.ts   # 路由 slice
│   ├── middlewares/       # 中间件目录
│   │   └── errorMiddleware.ts  # 错误处理中间件
│   ├── pages/             # 页面目录
│   │   ├── About.tsx       # 关于页
│   │   ├── ButtonDemo.tsx  # 按钮演示页
│   │   ├── Components.tsx  # 组件演示页
│   │   ├── FormDemo.tsx    # 表单演示页
│   │   ├── Home.tsx        # 首页
│   │   ├── InputDemo.tsx   # 输入框演示页
│   │   └── Login.tsx       # 登录页
│   ├── router/            # 路由配置目录
│   │   └── index.tsx      # 路由入口
│   ├── stores/            # Redux Store 目录
│   │   └── index.ts       # Store 配置
│   ├── styles/            # 样式目录
│   │   ├── index.scss     # 全局样式
│   │   └── theme.ts       # 主题配置
│   ├── utils/             # 工具目录
│   │   └── pageTools.ts   # 页面工具函数
│   ├── global.d.ts        # 全局类型声明
│   └── main.tsx           # 应用入口
├── .env                   # 全局环境变量配置
├── .env.development       # 开发环境变量
├── .env.production        # 生产环境变量
├── .env.test              # 测试环境变量
├── .gitignore             # Git 忽略文件
├── .editorconfig          # 编辑器配置
├── .prettierrc.json       # Prettier 配置
├── LICENSE                # 许可证
├── README.md              # 项目说明
├── eslint.config.js       # ESLint 配置
├── index.html             # HTML 模板
├── package.json           # 项目配置
├── pnpm-lock.yaml         # 依赖锁文件
├── tsconfig.json          # TypeScript 配置
├── vite-env.d.ts          # Vite 环境声明
└── vite.config.ts         # Vite 配置
```

## 功能特点

### 核心功能

- **用户认证**: 完整的登录系统，支持用户名密码登录，登录后自动跳转
- **动态路由**: 基于 RTK Query 的动态路由系统，支持从后端获取路由配置，失败时使用测试路由
- **响应式布局**: 支持桌面端和移动端的响应式布局，移动端自动切换为顶部布局
- **可配置布局**: 提供侧边栏布局和顶部布局两种模式，可在配置中切换
- **固定定位**: Header 和 Sider 组件固定定位，不随页面滚动
- **面包屑导航**: 自动生成面包屑导航，显示当前页面路径

### 状态管理

- **Redux Toolkit**: 使用 Redux Toolkit 进行全局状态管理
- **RTK Query**: 集成 RTK Query 进行 API 数据管理，自动缓存和重新验证
- **错误处理**: 自定义错误处理中间件，统一处理各种 HTTP 错误状态码
- **配置管理**: 支持应用配置和用户配置的动态管理

### UI/UX 特性

- **主题定制**: 支持主题定制，可切换亮色/暗色主题
- **图标管理**: 统一的图标管理和加载机制，支持自定义图标
- **消息通知**: 统一的消息通知机制，基于 Ant Design Message
- **组件演示**: 提供各种 Ant Design 组件的演示页面
- **加载状态**: 统一的加载状态处理，使用 Spin 组件

### 开发体验

- **代码规范**: 集成 ESLint 和 Prettier，确保代码规范和一致性
- **类型安全**: 完整的 TypeScript 类型定义
- **路径别名**: 支持 `@` 别名指向 src 目录
- **环境配置**: 支持多环境配置（开发、测试、生产）
- **代理配置**: Vite 开发服务器代理配置，支持多个环境代理

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm run dev
```

### 构建生产版本

```bash
pnpm run build
```

### 构建测试版本

```bash
pnpm run build:test
```

### 构建预发布版本

```bash
pnpm run build:prod
```

### 预览构建结果

```bash
pnpm run preview
```

### 代码检查

```bash
pnpm run lint
```

### 代码格式化

```bash
pnpm run format
```

### 检查代码格式

```bash
pnpm run format:check
```

## 环境变量

项目使用 `.env` 文件配置环境变量，根据不同的环境使用不同的配置文件：

- `.env`: 全局环境变量配置
- `.env.development`: 开发环境
- `.env.test`: 测试环境
- `.env.production`: 生产环境

### 全局环境变量

- `VITE_DEV_PORT`: 开发服务器端口（默认：5173）
- `VITE_SYS_NAME`: 系统名称（默认：my-project）
- `VITE_BUILD_DIR`: 打包输出目录（默认：dist）
- `VITE_PUBLIC_PATH`: 公共路径（默认：/）

### 环境特定变量

- `VITE_APP_ENV`: 应用环境（development/test/production）
- `VITE_APP_API_URL`: API 地址
- `VITE_APP_TITLE`: 应用标题

### 代理配置

Vite 开发服务器支持多个代理配置：

- `/mgt`: 代理到后端 API 服务器
- `/dev`: 代理到开发服务器（http://localhost:3000）
- `/test`: 代理到测试服务器
- `/prod`: 代理到生产服务器

## 路由配置

路由配置位于 [src/router/index.tsx](/src/router/index.tsx) 文件中，负责管理应用的所有路由：

- **动态路由**: 使用 RTK Query 从后端获取路由配置，失败时使用测试路由
- **路由扁平化**: 自动将嵌套路由扁平化处理
- **懒加载**: 使用 React.lazy 实现路由组件懒加载
- **错误处理**: 统一的路由加载错误处理
- **登录保护**: 根路径自动重定向到登录页

## 布局配置

布局配置位于 [src/components/Layout/](/src/components/Layout/) 目录中，包含以下组件：

- [Layout.tsx](/src/components/Layout/Layout.tsx): 主布局组件，负责整体布局结构
- [Header.tsx](/src/components/Layout/Header.tsx): 头部组件，包含 logo、菜单、用户信息等
- [Sider.tsx](/src/components/Layout/Sider.tsx): 侧边栏组件，包含导航菜单
- [Breadcrumb.tsx](/src/components/Layout/Breadcrumb.tsx): 面包屑组件，显示当前页面路径
- [LayoutConfig.tsx](/src/components/Layout/LayoutConfig.tsx): 布局配置组件，用于切换布局模式
- [layout.scss](/src/components/Layout/layout.scss): 布局相关样式

布局支持：

- 响应式设计，移动端自动切换为顶部布局
- 侧边栏折叠功能
- 固定定位的 Header 和 Sider
- 可配置的面包屑显示

## Redux 状态管理

使用 Redux Toolkit 进行状态管理，状态定义位于 [src/features/](/src/features/) 目录中：

- [api.ts](/src/features/api.ts): RTK Query API 配置，包含图标配置、应用配置、路由等接口
- [header.ts](/src/features/header.ts): 请求头配置
- [configSlice/index.ts](/src/features/configSlice/index.ts): 管理布局配置、主题、语言等用户配置
- [routeSlice/index.ts](/src/features/routeSlice/index.ts): 管理路由相关状态

Store 配置位于 [src/stores/index.ts](/src/stores/index.ts)，集成了：

- RTK Query reducer 和 middleware
- 自定义错误处理中间件
- 完整的 TypeScript 类型定义

## API 服务

API 服务配置位于 [src/features/api.ts](/src/features/api.ts) 文件中，使用 RTK Query 进行 HTTP 请求：

- **图标配置**: 获取自定义图标配置
- **应用配置**: 获取应用基础配置
- **路由配置**: 动态获取路由配置，支持降级到测试路由
- **请求拦截**: 统一的请求头处理
- **错误处理**: 集成错误处理中间件

## 错误处理

错误处理中间件位于 [src/middlewares/errorMiddleware.ts](/src/middlewares/errorMiddleware.ts)，统一处理各种 HTTP 错误：

- **401**: 登录失效，跳转到登录页
- **403**: 账号在其他设备登录，跳转到登录页
- **400**: 请求参数错误
- **404**: 请求资源不存在
- **500**: 服务器内部错误
- **502/503/504**: 网络连接失败

## 工具函数

工具函数位于 [src/utils/](/src/utils/) 目录中：

- [pageTools.ts](/src/utils/pageTools.ts): 页面工具函数

## 样式管理

样式文件位于 [src/styles/](/src/styles/) 目录中，使用 Sass 进行样式预处理：

- [index.scss](/src/styles/index.scss): 全局样式，包含重置样式、全局变量等
- [theme.ts](/src/styles/theme.ts): 主题配置，定义了亮色和暗色主题的变量

布局组件的样式位于 [src/components/Layout/layout.scss](/src/components/Layout/layout.scss) 文件中。

## Context 管理

项目使用 React Context 进行全局状态共享，位于 [src/contexts/](/src/contexts/) 目录：

- [IconContext.tsx](/src/contexts/IconContext.tsx): 图标上下文，提供全局图标访问
- [MessageContext.tsx](/src/contexts/MessageContext.tsx): 消息上下文，提供统一的消息通知服务
- [ThemeContext.tsx](/src/contexts/ThemeContext.tsx): 主题上下文，提供主题切换功能

## 常量配置

常量配置位于 [src/constants/index.ts](/src/constants/index.ts)，包含：

- 测试路由配置（TEST_ROUTES）
- 其他全局常量

## 类型定义

全局类型定义位于 [src/global.d.ts](/src/global.d.ts)，包含：

- RouteItem: 路由项类型定义
- 其他全局类型声明

## 代码规范

项目集成了 ESLint 和 Prettier，确保代码规范和一致性：

- `eslint.config.js`: ESLint 配置，定义了代码质量规则
- `.prettierrc.json`: Prettier 配置，定义了代码格式化规则
- `.editorconfig`: 编辑器配置，确保不同编辑器使用相同的缩进、换行等设置

## 贡献指南

1. Fork 本项目
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件
