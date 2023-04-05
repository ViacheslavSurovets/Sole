import { FC, ReactNode } from 'react'

import './index.scss'

const Text: FC<{ children: ReactNode }> = ({ children }) => <span className="text">{children}</span>

export default Text
