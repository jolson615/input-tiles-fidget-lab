import React, {Component} from 'react';

class NumberInput extends Component {
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
      <li className="NumberInput cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Number</div>
            <p className="card-text">
              <div className="input btn-block">
                <input type="number" className="textInput" onChange={this.handleChange} />
              </div>
              <div className="output">
                <label for="numberOutput">State: </label>
                <span name="numberOutput">{this.state.status}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default NumberInput;
