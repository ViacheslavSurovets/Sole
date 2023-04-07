import { createRoot } from 'react-dom/client'

import Root from './root'

import './styles/index.scss'

import { getIsWindowsDevice } from './utils/get-is-windows-device'

getIsWindowsDevice() && require('./styles/scroll.scss')

import reportWebVitals from './reportWebVitals'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<Root />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
