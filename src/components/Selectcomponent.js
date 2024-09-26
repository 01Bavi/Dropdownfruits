import React, { useState, useRef, useEffect } from 'react';
import '../styles/Selectcomponent.css';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const SelectComponent = () => {
  const fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Orange' },
    { id: 3, name: 'Grape' },
    { id: 4, name: 'Mango' },
    { id: 5, name: 'Banana' },
    { id: 6, name: 'Papaya' },
    { id: 7, name: 'Pineapple' },
    { id: 8, name: 'Strawberry' },
    { id: 9, name: 'Guava' },
    { id: 10, name: 'Watermelon' },
  ];

  const [inputs, setInputs] = useState([{ value: '', id: '', openDropdown: false }]);
  const [filterFruits, setFilterFruits] = useState(fruits);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [shouldFocusNewInput, setShouldFocusNewInput] = useState(false); 
  const dropdownRefs = useRef([]);
  const inputRefs = useRef([]); 

  useEffect(() => {
    if (activeIndex !== -1 && dropdownRefs.current[activeIndex]) {
      dropdownRefs.current[activeIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    if (shouldFocusNewInput && inputRefs.current[inputs.length - 1]) {
      inputRefs.current[inputs.length - 1].focus();
      setShouldFocusNewInput(false); 
    }
  }, [inputs, shouldFocusNewInput]);

  const onInputChange = (e, index) => {
    const value = e.target.value;
    const newInputs = [...inputs];
    newInputs[index].value = value;
    setInputs(newInputs);
    const filtered = fruits.filter((fruit) =>
      fruit.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilterFruits(filtered);
    newInputs[index].openDropdown = value !== '';
    setInputs(newInputs);
    setActiveIndex(-1);
  };

  const onIdChange = (e, index) => {
    const idValue = e.target.value;
    const newInputs = [...inputs];
    newInputs[index].id = idValue;
    setInputs(newInputs);
  };

  const onItemSelected = (selectedFruit, index) => {
    const newInputs = [...inputs];
    newInputs[index].value = selectedFruit.name;
    newInputs[index].id = selectedFruit.id;
    newInputs[index].openDropdown = false;
    setInputs(newInputs);
    setFilterFruits(fruits);
    setActiveIndex(-1);

    if (newInputs.every(input => input.value !== '')) {
      addInputField();
      setShouldFocusNewInput(true); 
    }
  };

  const onInputClick = (index) => {
    const newInputs = [...inputs];
    newInputs.forEach((input, i) => (input.openDropdown = i === index ? !input.openDropdown : false));
    setInputs(newInputs);
    setActiveIndex(-1);
    setFilterFruits(fruits);
  };

  const onKeyDown = (e, index) => {
    if (e.key === 'ArrowDown' && filterFruits.length > 0) {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filterFruits.length);
      setDropdownState(index, true);
    }
    if (e.key === 'ArrowUp' && filterFruits.length > 0) {
      e.preventDefault();
      setActiveIndex((prev) => (prev === 0 ? filterFruits.length - 1 : prev - 1));
      setDropdownState(index, true);
    }
    if (e.key === 'Enter' && filterFruits.length > 0 && activeIndex !== -1) {
      e.preventDefault();
      onItemSelected(filterFruits[activeIndex], index);
      setActiveIndex(-1);
    }
    if (e.key === 'Escape') {
      setDropdownState(index, false);
      setActiveIndex(-1);
    }
  };

  const setDropdownState = (index, state) => {
    const newInputs = [...inputs];
    newInputs[index].openDropdown = state;
    setInputs(newInputs);
  };

  const clearInput = (index) => {
    const newInputs = [...inputs];
    newInputs[index] = { value: '', id: '', openDropdown: false };
    setInputs(newInputs);
    setFilterFruits(fruits);
    setActiveIndex(-1);
  };

  const removeInputField = (index) => {
    if (inputs.length > 1) {
      setInputs((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const addInputField = () => {
    setInputs((prev) => [...prev, { value: '', id: '', openDropdown: false }]);
  };

  return (
    <div className="dropdown-container">
      {inputs.map((input, index) => (
        <div key={index} className='input-cover'>
          <div className="input-wrapper">
            <input
              type="text"
              value={input.value}
              placeholder="Select a fruit"
              onChange={(e) => onInputChange(e, index)}
              onClick={() => onInputClick(index)}
              onKeyDown={(e) => onKeyDown(e, index)}
              className="input-field"
              disabled={index > 0 && inputs[index - 1].value === ''}
              ref={(el) => (inputRefs.current[index] = el)} 
            />
            <span
              className='icon-button arrow-icon'
              role='button'
              onClick={() => onInputClick(index)}
              tabIndex={0}
            >
              <IoMdArrowDropdown />
            </span>
            <span
              className='icon-button close-icon'
              role='button'
              onClick={() => clearInput(index)}
              tabIndex={0}
            >
              <IoClose />
            </span>
          </div>
          <input
            type="text"
            value={input.id || ''}
            placeholder="ID"
            onChange={(e) => onIdChange(e, index)} 
            className="input-field id-field"
            onFocus={() => setShouldFocusNewInput(false)} 
          />
          <span
            className='close-input-field-button'
            role='button'
            onClick={() => removeInputField(index)}
            tabIndex={0}
          >
            <IoClose />
          </span>
          {input.openDropdown && (
            <div className="dropdown">
              {filterFruits.length > 0 ? (
                filterFruits.map((fruit, i) => (
                  <div
                    key={fruit.id}
                    ref={(el) => (dropdownRefs.current[i] = el)}
                    onClick={() => onItemSelected(fruit, index)}
                    className={`dropdown-item ${i === activeIndex ? 'active' : ''}`}
                  >
                    {fruit.name}
                  </div>
                ))
              ) : (
                <div className="dropdown-item">No results found</div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SelectComponent;
