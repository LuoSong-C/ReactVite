import React from 'react'
import * as Icons from '@ant-design/icons'

interface CustomIconProps {
  type: string
  style?: React.CSSProperties
  className?: string
  onClick?: () => void
}

const Icon = ({ type, style, className, ...restProps }: CustomIconProps) => {
  if (type.startsWith('icon-ADP')) {
    return (
      <svg className={`iconfont ${className || ''}`} aria-hidden="true" style={style} {...restProps}>
        <use xlinkHref={`#${type}`}></use>
      </svg>
    )
  }

  const AntIcon = (Icons as any)[type]
  if (AntIcon) {
    return <AntIcon style={style} className={className} {...restProps} />
  }

  return null
}

export default Icon
