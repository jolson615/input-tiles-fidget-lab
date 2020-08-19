import React, {Component} from 'react';

class CheckboxInput extends Component {
  // Add a constructor with a state
  constructor(props) {
    super(props);
    this.state = {
      status: [0, 0, 0, 0, 0]
    }
  }

  handleChange = (event) => {
    console.log(event.target)
    console.log(event.target.value)
    let i = parseInt(event.target.value) - 1
    this.setState(state => {
      let newValue = (state.status[i] + 1) % 2
      state.status[i] = newValue
      return state
    });
  }

  countChecks = (checks) => {
    let total = 0
    checks.forEach(check => {
      total += check;
    })
    return total
  }
  
  // Add a render function which returns JSX
  render() {
    return(
      <li className="CheckboxInput cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Checkbox</div>
            <div className="card-text">
              <div className="input" onChange={this.handleChange}>
                <input type="checkbox" name="checkboxInput" value="1" className="checkboxInput" />
                <input type="checkbox" name="checkboxInput" value="2" className="checkboxInput" />
                <input type="checkbox" name="checkboxInput" value="3" className="checkboxInput" />
                <input type="checkbox" name="checkboxInput" value="4" className="checkboxInput" />
                <input type="checkbox" name="checkboxInput" value="5" className="checkboxInput" />
              </div>
              <div className="output">
                <label htmlFor="checkboxOutput">Count: {this.countChecks(this.state.status)}</label>
                <span name="checkboxOutput"></span>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default CheckboxInput;
