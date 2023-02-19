import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const backGroundColor = isDarkTheme ? 'dark-bg' : 'white-bg'

      return (
        <>
          <Navbar />
          <div className={backGroundColor}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="home-img"
            />
            <h1>Lost Your Way</h1>
            <p>We cannot seem to find the page</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
