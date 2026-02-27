# My-Project

一个基于 React 19 + TypeScript + Ant Design 的现代前端项目，使用 Vite 作为构建工具，Redux Toolkit 进行状态管理。

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
│   │   │   ├── Layout.tsx           # 主布局组件
│   │   │   ├── LayoutConfig.tsx     # 布局配置组件
│   │   │   ├── Sider.tsx            # 侧边栏组件
│   │   │   └── layout.scss          # 布局样式
│   │   ├── Icon.tsx       # 图标组件
│   │   └── Navigation.tsx # 导航组件
│   ├── contexts/          # Context 目录
│   │   ├── IconContext.tsx     # 图标上下文
│   │   ├── MessageContext.tsx  # 消息上下文
│   │   └── ThemeContext.tsx    # 主题上下文
│   ├── features/          # Redux Toolkit Slice 目录
│   │   ├── configSlice.ts     # 配置状态
│   │   ├── counterSlice.ts    # 计数器状态
│   │   └── routeSlice.ts      # 路由状态
│   ├── pages/             # 页面目录
│   │   ├── About.tsx       # 关于页
│   │   ├── ButtonDemo.tsx  # 按钮演示页
│   │   ├── Components.tsx  # 组件演示页
│   │   ├── FormDemo.tsx    # 表单演示页
│   │   ├── Home.tsx        # 首页
│   │   └── InputDemo.tsx   # 输入框演示页
│   ├── router/            # 路由配置目录
│   │   └── index.tsx      # 路由入口
│   ├── services/          # 服务目录
│   │   ├── api.ts         # API 服务
│   │   └── routeService.ts # 路由服务
│   ├── stores/            # Redux Store 目录
│   │   └── index.ts       # Store 配置
│   ├── styles/            # 样式目录
│   │   ├── index.scss     # 全局样式
│   │   └── theme.ts       # 主题配置
│   ├── utils/             # 工具目录
│   │   └── request.ts     # 请求工具
│   └── main.tsx           # 应用入口
├── .env                   # 全局环境变量配置
├── .env.development       # 开发环境变量
├── .env.production        # 生产环境变量
├── .env.test              # 测试环境变量
├── .gitignore             # Git 忽略文件
├── .editorconfig          # 编辑器配置
├── .prettierrc.json       # Prettier 配置
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

- **响应式布局**: 支持桌面端和移动端的响应式布局
- **可配置布局**: 提供侧边栏布局和顶部布局两种模式，可在配置中切换
- **固定定位**: Header 和 Sider 组件固定定位，不随页面滚动
- **面包屑导航**: 自动生成面包屑导航，显示当前页面路径
- **动态路由**: 支持动态路由配置，可根据后端数据生成路由
- **状态管理**: 使用 Redux Toolkit 进行全局状态管理
- **主题定制**: 支持主题定制，可切换亮色/暗色主题
- **图标管理**: 统一的图标管理和加载机制
- **消息通知**: 统一的消息通知机制
- **组件演示**: 提供各种 Ant Design 组件的演示页面
- **代码规范**: 集成 ESLint 和 Prettier，确保代码规范和一致性

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
- `VITE_SYS_NAME`: 系统名称（默认：游网猫）
- `VITE_BUILD_DIR`: 打包输出目录（默认：dist）
- `VITE_PUBLIC_PATH`: 公共路径（默认：/）

### 环境特定变量

- `VITE_APP_ENV`: 应用环境（development/test/production）
- `VITE_APP_API_URL`: API 地址
- `VITE_APP_TITLE`: 应用标题

## 路由配置

路由配置位于 `src/router/index.tsx` 文件中，负责管理应用的所有路由，支持动态路由和嵌套路由。

## 布局配置

布局配置位于 `src/components/Layout/` 目录中，包含以下组件：

- `Layout.tsx`: 主布局组件，负责整体布局结构
- `Header.tsx`: 头部组件，包含 logo、菜单、用户信息等
- `Sider.tsx`: 侧边栏组件，包含导航菜单
- `Breadcrumb.tsx`: 面包屑组件，显示当前页面路径
- `LayoutConfig.tsx`: 布局配置组件，用于切换布局模式
- `layout.scss`: 布局相关样式

## 状态管理

使用 Redux Toolkit 进行状态管理，状态定义位于 `src/features/` 目录中：

- `configSlice.ts`: 管理布局配置、主题等状态
- `counterSlice.ts`: 示例计数器状态
- `routeSlice.ts`: 管理路由相关状态

## API 服务

API 服务配置位于 `src/services/api.ts` 文件中，使用 Axios 进行 HTTP 请求：

- 封装了常用的 GET、POST、PUT、DELETE 等请求方法
- 支持请求拦截器和响应拦截器
- 统一处理错误和异常

## 工具函数

工具函数位于 `src/utils/` 目录中：

- `request.ts`: 封装了 Axios 请求，提供了统一的请求处理逻辑

## 样式管理

样式文件位于 `src/styles/` 目录中，使用 Sass 进行样式预处理：

- `index.scss`: 全局样式，包含重置样式、全局变量等
- `theme.ts`: 主题配置，定义了亮色和暗色主题的变量

布局组件的样式位于 `src/components/Layout/layout.scss` 文件中。

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
