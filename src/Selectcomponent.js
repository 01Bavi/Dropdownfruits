import React, { useState } from 'react';
import './Selectcomponent.css'; 
import { IoMdArrowDropdown } from "react-icons/io";

const Selectcomponent = () => {
  const fruits = [
    {id:1, name:'Apple'},
    {id:2, name:'Orange'},
    {id:3, name:'Grape'},
    {id:4, name:'Mango'},
    {id:5, name:'Banana'},
    {id:6, name:'papaya'},
    {id:7, name:'pineapple'},
    {id:8, name:'Strawberry'},
    {id:9, name:'Guava'},
    {id:10, name:'Watermelon'},
  ];

  const [inputValue, setInputValue] = useState('');
  const [filterFruits, setFilterFruits] = useState(fruits);
  const [open, setOpen] = useState(false);

  const onInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setFilterFruits(
      fruits.filter((fruit) =>
        fruit.name.toLowerCase().includes(value.toLowerCase())
      )
    );
    setOpen(true); 
  };

  const onItemSelected = (selectedFruit) => {
    setInputValue(selectedFruit.name);
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
      <div className='input-cover'>
      <input
        type="text"
        value={inputValue}
        placeholder="Select a fruit"
        onChange={onInputChange}
        onClick={onInputClick}
        onKeyDown={onKeyDown}
        className="input-field" 
      />
      <span class="caret"
        className='arrow-button'
        role='button'
        onClick={onInputClick}
        tabIndex={0}
      > 
      <IoMdArrowDropdown />
      </span>
      </div>
      {open && (
        <div className="dropdown" >
          {filterFruits.map((fruit) => (
            <div
              key={fruit.id}
              onClick={() => onItemSelected(fruit)}
              className="dropdown-item" 
            >
              {fruit.name} ({fruit.id})
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Selectcomponent;
