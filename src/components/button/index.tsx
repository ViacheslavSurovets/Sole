import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEventHandler } from 'react'
import cn from 'classnames'

import './index.scss'

interface IButton<T>
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  onClick?: T & MouseEventHandler<HTMLButtonElement>
  label: string
}

const Button = <T,>({ onClick, className, label, ...rest }: IButton<T>) => (
  <button className={cn('button', className)} onClick={onClick} {...rest}>
    {label}
  </button>
)

export default Button
