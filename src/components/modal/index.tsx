import { FC, ReactNode } from 'react'
import cn from 'classnames'

import { ReactComponent as CloseIcon } from '../../assets/icons/close-icon.svg'

import { useModal } from './hooks'

import './index.scss'

interface IModal {
  closeModal: () => void
  children: ReactNode
  className?: string
  ariaLabel?: string
}

const Modal: FC<IModal> = ({ closeModal, className, ariaLabel, children }) => (
  <div className="modal-wrapper">
    <div className={cn('modal', className)} aria-label={ariaLabel}>
      <CloseIcon className="modal__close-icon" onClick={closeModal} />
      {children}
    </div>
    <div className="app-overlay" onClick={closeModal} />
  </div>
)

export { useModal }

export default Modal
