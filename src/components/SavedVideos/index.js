import './index.css'
import {Component} from 'react'
import TopNavbar from '../TopNavbar'
import LeftNavbar from '../LeftNavbar'
import ThemeContext from '../../context/ThemeContext'

class SavedVideos extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, savedVideos} = value
          return (
            <div className="saved-video-app-container">
              <TopNavbar />
              <div className="app-container">
                <LeftNavbar />
                <div className="saved-videos-container">
                  <h1>Saved Videos</h1>
                </div>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
