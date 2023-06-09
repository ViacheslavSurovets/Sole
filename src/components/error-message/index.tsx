import './index.scss'

interface IErrorMessage {
  message: string
}

const ErrorMessage = ({ message }: IErrorMessage) => (
  <span className="error-message" aria-label={`Error: ${message}`}>
    {message}
  </span>
)

export default ErrorMessage
