import React, { createContext, useContext, useEffect, ReactNode } from 'react'
import { useGetIconConfigQuery } from '@/features/api'

interface IconContextType {
  iconUrl: string
  loadIconScript: (_url: string) => void
}

const IconContext = createContext<IconContextType | undefined>(undefined)

interface IconProviderProps {
  children: ReactNode
}

export const IconProvider: React.FC<IconProviderProps> = ({ children }) => {
  const { data } = useGetIconConfigQuery()
  const iconUrl = data?.iconUrl || ''

  const loadIconScript = (url: string) => {
    const script = document.createElement('script')
    script.src = url
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      console.log('Icon script loaded successfully')
    }

    script.onerror = () => {
      console.error('Failed to load icon script')
    }
  }

  useEffect(() => {
    if (iconUrl) {
      loadIconScript(iconUrl)
    }
  }, [iconUrl])

  return <IconContext.Provider value={{ iconUrl, loadIconScript }}>{children}</IconContext.Provider>
}

export const useIcon = (): IconContextType => {
  const context = useContext(IconContext)
  if (context === undefined) {
    throw new Error('useIcon must be used within an IconProvider')
  }
  return context
}

export default IconContext
