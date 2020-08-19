import React, {Component} from 'react';

class ColorInput extends Component {
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
  
  // Add a render function which returns JSX
  render() {
    return(
      <li className="ColorInput cards-item" >
        <div className="card">
          <div className="card-content">
            <div className="card-image" style={{backgroundColor: this.state.status}}></div>
            <div className="card-title">Color</div>
            <p className="card-text">
              <div className="input btn-block">
                <input type="color" className="colorButton" onChange={this.handleChange}/>
              </div>
              <div className="output" >
                <label for="colorOutput">State: </label>
                <span name="colorOutput">{this.state.status}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    )
  }
}

export default ColorInput;
