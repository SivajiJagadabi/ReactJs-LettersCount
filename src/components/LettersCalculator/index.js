// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputText: ''}

  onInputTextCount = event => {
    const {value} = event.target

    this.setState({inputText: value})
  }

  render() {
    const {inputText} = this.state

    return (
      <div className="app-container">
        <div className="calculate-container">
          <div className="letters-input-container">
            <h1>
              Calculate the <br />
              Letters you enter
            </h1>
            <label htmlFor="inputText">Enter the phrase</label>
            <input
              type="text"
              id="inputText"
              className="input-box"
              placeholder="Enter the phrase"
              onChange={this.onInputTextCount}
              value={inputText}
            />
            <p>No.of letters: {inputText.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
