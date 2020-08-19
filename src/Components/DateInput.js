import React, {Component} from 'react';

class DateInput extends Component {
  // Add a constructor with state
  constructor(props) {
    super(props);
    this.state = {
      status: null
    }
  };

  handleChange = (event) => {
    this.setState({status: event.target.value});
  }
  
  render() {
    return(
      <li className="cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Date</div>
            <p className="card-text">
              <div className="input btn-block">
                <input type="date" className="textInput" onChange={this.handleChange} />
              </div>
              <div className="output">
                <label for="dateOutput">State: </label>
                <span name="dateOutput">{this.state.status}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default DateInput;
