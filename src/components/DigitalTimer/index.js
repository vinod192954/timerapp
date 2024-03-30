// Write your code here
import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {timerLimit: 25, seconds: 59, isStarted: false}

  onToggleStatus = () => {
    this.setState(prevState => ({isStarted: !prevState.isStarted}))
    this.timeId = setInterval(this.tick, 1000)
    this.minuteId = setInterval(this.minutHand, 60000)
  }
  tick = () => {
    const {timerLimit, isStarted, seconds} = this.state
    if (isStarted) {
      this.setState(prevState => ({seconds: prevState.seconds - 1}))
    } else {
      clearInterval(this.timeId.prevState)
    }
  }

  minutHand = () => {
    const {timerLimit, isStarted} = this.state
    if (isStarted) {
      this.setState(prevState => ({timerLimit: prevState.timerLimit - 1}))
    } else {
      clearInterval(this.minutHand.prevState)
    }
  }
  decrementTimeValue = () => {
    const {timerLimit, isStarted} = this.state
    if (isStarted === false) {
      this.setState({timerLimit: timerLimit - 1})
    }
  }

  incrementTimeValue = () => {
    const {timerLimit, isStarted} = this.state
    if (isStarted === false) {
      this.setState({timerLimit: timerLimit + 1})
    }
  }

  render() {
    const {isStarted, timerLimit, seconds} = this.state

    const imageUrl = isStarted
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const controlText = isStarted ? 'Pause' : 'Start'
    return (
      <div className="bg-container">
        <h1>Digital Timer</h1>
        <div className="controllings">
          <div className="time-container">
            <div className="timer-container">
              <h1>
                {timerLimit} :{seconds}
              </h1>
              <p className="status">{isStarted ? 'Running' : 'Paused'}</p>
            </div>
          </div>
          <div className="time-settings-container">
            <div className="timer-controls">
              <button
                onClick={this.onToggleStatus}
                type="button"
                className="timing-elements"
              >
                <img src={imageUrl} className="img-custom" alt="" />
                <h1>{controlText}</h1>
              </button>

              <button type="button" className="timing-elements">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="img-custom"
                />
                <h1>Reset</h1>
              </button>
            </div>

            <div className="setting-container">
              <p>Set Timer limit</p>
              <div className="setting">
                <button
                  type="button"
                  onClick={this.decrementTimeValue}
                  className="btn"
                >
                  -
                </button>
                <div className="changing-time-limit">
                  <h1>{timerLimit}</h1>
                </div>
                <button
                  type="button"
                  onClick={this.incrementTimeValue}
                  className="btn"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
