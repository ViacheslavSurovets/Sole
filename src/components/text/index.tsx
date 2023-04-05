import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'

import './index.scss'

interface IText extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  children: ReactNode
}

const Text: FC<IText> = ({ className, children, ...rest }) => (
  <span className={cn('text', className)} {...rest}>
    {children}
  </span>
)

export default Text
