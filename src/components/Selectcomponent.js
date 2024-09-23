import React, { useState } from 'react';
import '../styles/Selectcomponent.css'; 
import { IoMdArrowDropdown } from "react-icons/io";
import { IoClose } from "react-icons/io5";

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

  const [firstinputValue, setFirstInputValue] = useState('');
  const [secondinputValue, setSecondInputValue] = useState('');
  const [filterFruits, setFilterFruits] = useState(fruits);
  const [openFirstdropdown, setOpenFirstdropdown] = useState(false);
  const [openSeconddropdown, setOpenSeconddropdown] = useState(false);

  const onInputChange = (e, inputType) => {
    const value = e.target.value;
    if (inputType === 'first') {
      setFirstInputValue(value);
      setOpenFirstdropdown(true);
    } else {
      setSecondInputValue(value);
      setOpenSeconddropdown(true);
    }
    setFilterFruits(
      fruits.filter((fruit) =>
        fruit.name.toLowerCase().includes(value.toLowerCase())
      )
    );
     
  };

  const onItemSelected = (selectedFruit,inputType) => {
    if (inputType === 'first') {
      setFirstInputValue(selectedFruit.name);
      setOpenFirstdropdown(false);
    } else {
      setSecondInputValue(selectedFruit.name);
      setOpenSeconddropdown(false);
    }
  };

  const onInputClick = (inputType) => {
    if (inputType === 'first') {
      setOpenFirstdropdown((preview) => !preview);
    } else {
      setOpenSeconddropdown((preview) => !preview);
    }
  };

  const onKeyDown = (e, inputType) => {
    if (e.key === 'Enter' && filterFruits.length > 0) {
      onItemSelected(filterFruits[0],inputType); 
    }
  };
  const clearInput = (inputType) => {
    if (inputType === 'first') {
      setFirstInputValue('');
      setOpenFirstdropdown(false);
    } else {
      setSecondInputValue('');
      setOpenSeconddropdown(false);
    }
    setFilterFruits(fruits);
  };

  return (
    <>
    <div className="dropdown-container">
      <div className='input-cover'>
      <input
        type="text"
        value={firstinputValue}
        placeholder="Select a fruit"
        onChange={(e) => onInputChange(e,'first')}
        onClick={()=>onInputClick('first')}
        onKeyDown={(e) => onKeyDown(e,'first')}
        className="input-field" 
      />
      <span 
        className='close-button'
        role='button'
        onClick={()=>onInputClick('first')}
        tabIndex={0}
      > 
      <IoMdArrowDropdown />
      </span>
      <span 
        className='arrow-button'
        role='button'
        onClick={() => clearInput('first')}
        tabIndex={0}
      > 
      <IoClose />
      </span>
      </div>
      {openFirstdropdown && (
        <div className="dropdown" >
          {filterFruits.map((fruit) => (
            <div
              key={fruit.id}
              onClick={() => onItemSelected(fruit,'first')}
              className="dropdown-item" 
            >
              {fruit.name} ({fruit.id})
            </div>
          ))}
        </div>
      )}
    </div>

    <div className="dropdown-container">
      <div className='input-cover'>
      <input
        type="text"
        value={secondinputValue}
        placeholder="Select a fruit"
        onChange={(e) => onInputChange(e, 'second')}
        onClick={() => onInputClick('second')}
        onKeyDown={(e) => onKeyDown(e, 'second')}
        className="input-field" 
      />
      <span 
        className='close-button'
        role='button'
        onClick={() => onInputClick('second')}
        tabIndex={0}
      > 
      <IoMdArrowDropdown />
      </span>
      <span 
        className='arrow-button'
        role='button'
        onClick={() => clearInput('second')}
        tabIndex={0}
      > 
      <IoClose />
      </span>
      </div>
      {openSeconddropdown && (
        <div className="dropdown" >
          {filterFruits.map((fruit) => (
            <div
              key={fruit.id}
              onClick={() => onItemSelected(fruit, 'second')}
              className="dropdown-item" 
            >
              {fruit.name} ({fruit.id})
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Selectcomponent;
