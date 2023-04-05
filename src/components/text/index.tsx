import { FC, ReactNode } from 'react'
import cn from 'classnames'

import './index.scss'

interface IText {
  className?: string
  children: ReactNode
}

const Text: FC<IText> = ({ className, children }) => (
  <span className={cn('text', className)}>{children}</span>
)

export default Text
