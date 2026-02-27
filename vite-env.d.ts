/// <reference types="vite/client" />

declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.css' {
  const content: Record<string, string>
  export default content
}

declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

declare module '*.sass' {
  const content: Record<string, string>
  export default content
}

// 环境变量类型声明
interface ImportMetaEnv {
  // 全局变量
  readonly VITE_DEV_PORT: string
  readonly VITE_SYS_NAME: string

  // 环境特定变量
  readonly VITE_APP_ENV: string
  readonly VITE_APP_API_URL: string
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
