import React, { useState, useRef, useEffect } from 'react';
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
    {id:6, name:'Papaya'},
    {id:7, name:'Pineapple'},
    {id:8, name:'Strawberry'},
    {id:9, name:'Guava'},
    {id:10, name:'Watermelon'},
  ];

  const [inputValues, setInputValues] = useState(['']);
  const [filterFruits, setFilterFruits] = useState(fruits);
  const [openDropdown, setOpenDropdown] = useState([false]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const dropdownRefs = useRef([]); 

  useEffect(() => {
    if (activeIndex !== -1 && dropdownRefs.current[activeIndex]) {
      dropdownRefs.current[activeIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      });
    }
  }, [activeIndex]);

  const onInputChange = (e, index) => {
    const value = e.target.value;
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
    const filtered = fruits.filter((fruit) =>
      fruit.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilterFruits(filtered);
    setOpenDropdown(
      openDropdown.map((isOpen, i) => (i === index ? value !== '' : isOpen))
    );
    setActiveIndex(-1);
  };

  const onItemSelected = (selectedFruit, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = `${selectedFruit.name} (${selectedFruit.id})`;
    setInputValues(newInputValues);
    
    setOpenDropdown((prev) =>
      prev.map((isOpen, i) => (i === index ? false : isOpen))
    );
    
    setFilterFruits(fruits); 
    setActiveIndex(-1);

    if (index === inputValues.length - 1 && inputValues.length < 5) {
      setTimeout(() => {
        setInputValues((prev) => [...prev, '']);
        setOpenDropdown((prev) => [...prev, false]);
      }, 0); 
    }
  };

  const onInputClick = (index) => {
    setOpenDropdown(
      openDropdown.map((isOpen, i) => (i === index ? !isOpen : false)) 
    );
    setActiveIndex(-1);
    setFilterFruits(fruits); 
  };

  const onKeyDown = (e, index) => {
    if (e.key === 'ArrowDown' && filterFruits.length > 0) {
      e.preventDefault(); 
      setActiveIndex((prev) => (prev + 1) % filterFruits.length);
      setOpenDropdown(
        openDropdown.map((isOpen, i) => (i === index ? true : isOpen))
      );
    }
    if (e.key === 'ArrowUp' && filterFruits.length > 0) {
      e.preventDefault(); 
      setActiveIndex((prev) => (prev === 0 ? filterFruits.length - 1 : prev - 1));
      setOpenDropdown(
        openDropdown.map((isOpen, i) => (i === index ? true : isOpen))
      );
    }
    if (e.key === 'Enter' && filterFruits.length > 0 && activeIndex !== -1) {
      e.preventDefault(); 
      onItemSelected(filterFruits[activeIndex], index);
      setActiveIndex(-1);
    }
    if (e.key === 'Escape') {
      setOpenDropdown(
        openDropdown.map((isOpen, i) => (i === index ? false : isOpen))
      );
      setActiveIndex(-1);
    }
  };

  const clearInput = (index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = '';
    setInputValues(newInputValues);
    setFilterFruits(fruits);
    setActiveIndex(-1);
    setOpenDropdown(
      openDropdown.map((isOpen, i) => (i === index ? false : isOpen))
    );
  };

  return (
    <div className="dropdown-container">
      {inputValues.map((inputValue, index) => (
        <div key={index} className='input-cover'>
          <div className="input-wrapper">
            <input
              type="text"
              value={inputValue}
              placeholder="Select a fruit"
              onChange={(e) => onInputChange(e, index)}
              onClick={() => onInputClick(index)}
              onKeyDown={(e) => onKeyDown(e, index)}
              className="input-field" 
              disabled={index > 0 && inputValues[index - 1] === ''}
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
          {openDropdown[index] && (
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

export default Selectcomponent;
