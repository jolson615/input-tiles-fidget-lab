import React, {Component} from 'react';

class RangeInput extends Component {
  // Add a constructor with a state
  constructor(props) {
    super(props);
    this.state = {
      status: null
    }
  }

  handleChange = (event) => {
    this.setState({status: event.target.value});
  }

  createGreyscale = (percentage) => {
    let x = percentage / 100 * 255
    return `rgb(${x},${x},${x})`
  }
  
  // Add a render function which returns JSX
  render() {
    return(
      <li className="RangeInput cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-image" style={{backgroundColor: this.createGreyscale(this.state.status)}}></div>
            <div className="card-title">Range Slider</div>
            <p className="card-text">
              <div className="input">
                <input type="range" className="rangeInput" onChange={this.handleChange} />
              </div>
              <div className="output">
                <label for="rangeOutput">State: </label>
                <span name="rangeOutput">{this.state.status}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    )
  }
}

export default RangeInput;
