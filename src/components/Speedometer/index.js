// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(previous => ({count: previous.count + 10}))
    } else if (count > 200) {
      this.setState(previous => ({count: previous.count}))
    }
  }

  applyBrake = () => {
    const {count} = this.state
    if (count !== 0) {
      this.setState(previous => ({count: previous.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="content-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-count">Speed is {count}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-container">
          <button
            className="button blue"
            type="button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button
            className="button black"
            type="button"
            onClick={this.applyBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
