import React, {Component} from 'react';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null
    }
  };

  // The event will be passed in automatically.
  handleChange = (event) => {
    this.setState({"text": event.target.value});
  }

  render() {
    return (
      <li className="TextInput cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Text</div>
            <div className="card-text">
              <div className="input btn-block">
                <input type="text" placeholder="Write here!" className="textInput" onChange={this.handleChange}/>
              </div>
              <div className="output">
                <label htmlFor="textOutput">State: </label>
                <span name="textOutput">{this.state.text}</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default TextInput;
