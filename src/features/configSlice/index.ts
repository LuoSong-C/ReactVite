import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserConfig {
  theme?: string
  language?: string
  layoutMode?: 'side' | 'top'
  showBreadcrumb?: boolean
}

interface AppConfig {
  name?: string
  version?: string
  apiUrl?: string
}

interface ConfigState {
  iconUrl: string
  appConfig?: AppConfig
  userConfig?: UserConfig
}

const initialState: ConfigState = {
  iconUrl: '',
  appConfig: {},
  userConfig: {
    theme: 'light',
    language: 'zh-CN',
    layoutMode: 'side',
    showBreadcrumb: true,
  },
}

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setIconUrl: (state, action: PayloadAction<string>) => {
      state.iconUrl = action.payload
    },
    setAppConfig: (state, action: PayloadAction<AppConfig>) => {
      state.appConfig = action.payload
    },
    setUserConfig: (state, action: PayloadAction<UserConfig>) => {
      state.userConfig = { ...state.userConfig, ...action.payload }
    },
    setLayoutMode: (state, action: PayloadAction<'side' | 'top'>) => {
      state.userConfig = {
        ...state.userConfig,
        layoutMode: action.payload,
      }
    },
    setShowBreadcrumb: (state, action: PayloadAction<boolean>) => {
      state.userConfig = {
        ...state.userConfig,
        showBreadcrumb: action.payload,
      }
    },
    setTheme: (state, action: PayloadAction<string>) => {
      state.userConfig = {
        ...state.userConfig,
        theme: action.payload,
      }
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.userConfig = {
        ...state.userConfig,
        language: action.payload,
      }
    },
  },
})

export const { setIconUrl, setAppConfig, setUserConfig, setLayoutMode, setShowBreadcrumb, setTheme, setLanguage } =
  configSlice.actions

export default configSlice.reducer
