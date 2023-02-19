import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onChangeTheme = () => {
        toggleTheme()
      }

      const logoImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const textColor = isDarkTheme ? 'color-white' : 'color-black'

      const navbar = isDarkTheme ? 'dark-nav' : 'white-nav'

      const themeIcon = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <nav className={navbar}>
          <img src={logoImg} alt="website logo" />
          <ul className="nav-items">
            <li>
              <Link to="/" className={textColor}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={textColor}>
                About
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="theme-btn"
            onClick={onChangeTheme}
            data-testid="theme"
          >
            <img src={themeIcon} alt="theme" className="theme-logo" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
