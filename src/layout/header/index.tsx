import logo from '../../assets/images/logo.png'

import HeaderModule from './header.module.scss'

const Header = () => (
  <header className={HeaderModule.header}>
    <img src={logo} className={HeaderModule.img} alt="logo" />
  </header>
)

export default Header
