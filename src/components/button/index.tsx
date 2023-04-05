import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import cn from 'classnames'

import './index.scss'

interface IButton
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label: string
}

const Button = ({ onClick, className, label, ...rest }: IButton) => (
  <button className={cn('button', className)} onClick={onClick} {...rest}>
    {label}
  </button>
)

export default Button
