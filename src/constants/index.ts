import type { RouteItem } from '@/global.d'

export const TEST_ROUTES: RouteItem[] = [
  {
    path: '/home',
    component: 'Home',
    name: '首页',
    icon: 'icon-ADPIPfengjin',
  },
  {
    path: '/components',
    name: '组件示例',
    icon: 'AppstoreOutlined',
    children: [
      {
        path: '/components/all',
        component: 'Components',
        name: '全部组件',
        icon: 'CardOutlined',
      },
      {
        path: '/components/buttons',
        component: 'ButtonDemo',
        name: '按钮组件',
        icon: 'ButtonOutlined',
      },
      {
        path: '/components/inputs',
        component: 'InputDemo',
        name: '输入组件',
        icon: 'InputOutlined',
      },
      {
        path: '/components/forms',
        component: 'FormDemo',
        name: '表单组件',
        icon: 'FormOutlined',
      },
    ],
  },
  {
    path: '/about',
    component: 'About',
    name: '关于',
    icon: 'InfoCircleOutlined',
  },
]
