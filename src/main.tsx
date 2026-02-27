import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './stores'
import 'antd/dist/reset.css'
import './styles/index.scss'
import { ThemeProvider } from './contexts/ThemeContext'
import { IconProvider } from './contexts/IconContext'
import { MessageProvider } from './contexts/MessageContext'
import AppRouter from './router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <MessageProvider>
          <IconProvider>
            <AppRouter />
          </IconProvider>
        </MessageProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
)
