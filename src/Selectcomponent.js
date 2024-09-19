import React, { useState } from 'react';
import './Selectcomponent.css'; 

const Selectcomponent = () => {
  const fruits = [
    'Apple', 'Banana', 'Grapes', 'Mango',
    'Orange', 'Papaya', 'Pineapple', 'Strawberry', 'Watermelon',
  ];

  const [inputValue, setInputValue] = useState('');
  const [filterFruits, setFilterFruits] = useState(fruits);
  const [open, setOpen] = useState(false);

  const onInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setFilterFruits(
      fruits.filter((fruit) =>
        fruit.toLowerCase().includes(value.toLowerCase())
      )
    );
    setOpen(true); 
  };

  const onItemSelected = (selectedFruit) => {
    setInputValue(selectedFruit);
    setOpen(false);
  };

  const onInputClick = () => {
    setOpen((preview) => !preview);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && filterFruits.length > 0) {
      onItemSelected(filterFruits[0]); 
    }
  };

  return (
    <div className="dropdown-container">
      <input
        type="text"
        value={inputValue}
        placeholder="Select a fruit"
        onChange={onInputChange}
        onClick={onInputClick}
        onKeyDown={onKeyDown}
        className="input-field"
      />
      {open && (
        <div className="dropdown">
          {filterFruits.map((fruit) => (
            <div
              key={fruit}
              onClick={() => onItemSelected(fruit)}
              className="dropdown-item"
            >
              {fruit}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Selectcomponent;
