// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeText = event => {
    this.setState({
      inputPhrase: event.target.value,
    })
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="container">
        <div className="calculator-container">
          <div>
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="label" htmlFor="input">
                Enter the phrase
              </label>
              <input
                placeholder="Enter the phrase"
                className="input-ele"
                type="text"
                id="input"
                value={inputPhrase}
                onChange={this.onChangeText}
              />
            </div>
            <div className="paragraph-container">
              <p className="paragraph">No.of letters: {inputPhrase.length}</p>
            </div>
          </div>
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
