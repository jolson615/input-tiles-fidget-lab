import React, {Component} from 'react';
import './App.css';
import TextInput from './Components/TextInput';
import DateInput from './Components/DateInput';
import NumberInput from './Components/NumberInput';
import ButtonInput from './Components/ButtonInput';
import RadioInput from './Components/RadioInput';
import ColorInput from './Components/ColorInput';
import CheckboxInput from './Components/CheckboxInput';
import RangeInput from './Components/RangeInput';
import SelectInput from './Components/SelectInput';
import UrlInput from './Components/UrlInput';

class App extends Component  {
  render() {
    return (
      <div className="container">
        <ul className="cards">
          <TextInput />
          <DateInput />
          <NumberInput />
          <ButtonInput />
          <RadioInput />
          <ColorInput />
          <CheckboxInput />
          <RangeInput />
          <SelectInput />
          <UrlInput />
        </ul>
      </div>
    );
  }
}

export default App;
