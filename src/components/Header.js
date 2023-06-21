import logo from '../images/Logo.svg'

export default function Header() {
  return (
    <header className="header">
      <img
      src={logo}
      alt="логотип Mesto"
      className="header__logo"
    />
    </header>
  )
}