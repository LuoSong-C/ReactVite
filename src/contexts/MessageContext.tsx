import { createContext, ReactNode, useContext } from 'react'
import { message } from 'antd'

interface MessageService {
  showMessage: (_type: string, _content: any, _config?: any) => void
}

const MessageContext = createContext<MessageService | null>(null)

const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [messageApi, contextHolder] = message.useMessage()

  const messageService: MessageService = {
    showMessage: (type: string, content: any, config: any = {}) => {
      messageApi.open({
        type,
        content,
        ...config,
      })
    },
  }

  return (
    <MessageContext.Provider value={messageService}>
      {contextHolder}
      {children}
    </MessageContext.Provider>
  )
}

const useMessageService = () => {
  const context = useContext(MessageContext)
  if (!context) {
    throw new Error('useMessageService must be used within MessageProvider')
  }
  return context
}

export { MessageProvider, useMessageService }
