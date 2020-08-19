import React, {Component} from 'react';

class UrlInput extends Component {
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

  renderUrl = (url) => {
    return "http://" + url
  } 
  
  // Add a render function which returns JSX
  render() {
    return(
      <li className="UrlInput cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">URL</div>
            <div className="card-text">
              <div className="input btn-block">
                <input type="url" placeholder="Type a URL here!" className="textInput" onChange={this.handleChange} />
              </div>
              <div className="output">
                <label htmlFor="urlOutput">State: </label>
                <span name="urlOutput"><a href={this.renderUrl(this.state.status)} id="url" target="_blank" rel="noopener noreferrer">&nbsp;{this.state.status}</a></span>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default UrlInput;
