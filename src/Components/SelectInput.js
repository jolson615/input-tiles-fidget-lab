import React, {Component} from 'react';

class SelectInput extends Component {
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

  findImage = (choice) => {
    switch (choice) {
      case "Dog":
        return "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*"
      case "Cat":
        return "https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg"
      case "Rabbit":
        return "https://cdn0.wideopenspaces.com/wp-content/uploads/2018/04/ftd-babyrabbit-630x339.jpg"
      case "Fish":
        return "https://www.fishkeepingworld.com/wp-content/uploads/2018/12/Regal-Angelfish.jpg"
      case "Horse":
        return "https://fei-fan-production.s3.amazonaws.com/s3fs-public/styles/full_page_image/public/hearing-0303-8.jpg?itok=yV1pksWi"
      default:
        return ""
    }
  }  
  // Add a render function which returns JSX
  render() {
    let myurl = this.findImage(this.state.status)
    return(
      <li className="SelectInput cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-image" style={{backgroundImage: `url(${myurl})`}}></div>
            <div className="card-title">Select</div>
            <div className="card-text">
              <div className="input">
                <select className="selectInput" onChange={this.handleChange}>
                  <option value="">Choose one:</option>
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Rabbit">Rabbit</option>
                  <option value="Fish">Fish</option>
                  <option value="Horse">Horse</option>
                </select>
              </div>
              <div className="output">
                <label htmlFor="selectOutput">Image: </label>
                <span name="selectOutput">{this.state.status}</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default SelectInput;
