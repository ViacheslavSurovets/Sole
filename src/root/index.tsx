import { Header, Main } from '../layout'
import { ErrorBoundary } from '../components'

const Root = () => (
  <ErrorBoundary>
    <Header />
    <Main />
  </ErrorBoundary>
)

export default Root
