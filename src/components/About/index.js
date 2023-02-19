import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const backGroundColor = isDarkTheme ? 'dark-bg' : 'white-bg'

      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      return (
        <>
          <Navbar />
          <div className={backGroundColor}>
            <img src={imageUrl} alt="about" className="home-img" />
            <h1>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
