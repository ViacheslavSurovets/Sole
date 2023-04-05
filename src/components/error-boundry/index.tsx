import { Component, ErrorInfo, ReactNode } from 'react'

import { ErrorMessage } from '../index'

import locales from '../../locales/common.json'

import './index.scss'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <ErrorMessage message={locales.error.common} />
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
