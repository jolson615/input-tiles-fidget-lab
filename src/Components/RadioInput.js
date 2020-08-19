import React, {Component} from 'react';

class RadioInput extends Component {
  constructor(props){
    super(props);
    // Be sure to add a state.
    this.state = {
      status: null
    }
  }

  handleChange = (event) => {
    this.setState({status: event.target.value});
  }

  render() {
    return(
      <li className="RadioInput cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Radio</div>
            <p className="card-text">
              <div className="input" onChange={this.handleChange}>
                <input type="radio" name="radioInput" value="1" className="checkboxInput" />
                <input type="radio" name="radioInput" value="2" className="checkboxInput" />
                <input type="radio" name="radioInput" value="3" className="checkboxInput" />
                <input type="radio" name="radioInput" value="4" className="checkboxInput" />
                <input type="radio" name="radioInput" value="5" className="checkboxInput" />
              </div>
              <div className="output">
                <label for="radioOutput">State: </label>
                <span name="radioOutput">{this.state.status}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default RadioInput;
