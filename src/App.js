import React, {useState} from "react";
import './App.css';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'The color blue',
    value: 'blue'
  },
  {
    label: 'The color yellow',
    value: 'yellow'
  }
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
      <div className="ui container">
        <Dropdown 
          options={options} 
          onSelectedChange={setSelected} 
          selected={selected}
        />
      </div>
  );
};
