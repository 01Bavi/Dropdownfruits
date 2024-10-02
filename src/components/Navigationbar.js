import React, { useState } from 'react';
import { IoColorPalette } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { TbPinnedFilled } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { MdOutlineTrendingUp } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaGem } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoReorderThree } from "react-icons/io5";
import '../styles/Navigationbar.css';

const Navigationbar = () => {
  const [activeItem, setActiveItem] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleItemClick = (text) => {
    setActiveItem(text);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`screen ${isCollapsed ? 'collapsed' : ''}`}>
      <div className={`navigation-container ${isCollapsed ? 'collapsed' : ''}`}>
        {!isCollapsed ? (
          <div className='navigation-title-bar' onClick={toggleCollapse}>
            <h1 className='navigation-title'>CODEPEN</h1>
            <IoIosArrowForward className={`arrowleft-button`} />
          </div>
        ) : (
          <div className='navigation-title-bar'>
            <IoReorderThree className={`toggle-button`} onClick={toggleCollapse}/>
          </div>
        )}
        <hr className='navigation-title-hr' />

        <div className='Navigation-list'>
          <ul>
            <NavigationItem
              Icon={IoColorPalette}
              text={"Your Work"}
              isActive={activeItem === "Your Work"}
              onClick={handleItemClick}
              isCollapsed={isCollapsed}
            />
            <NavigationItem
              Icon={GrGallery}
              text={"Assets"}
              isActive={activeItem === "Assets"}
              onClick={handleItemClick}
              isCollapsed={isCollapsed}
            />
            <NavigationItem
              Icon={TbPinnedFilled}
              text={"Pinned Items"}
              isActive={activeItem === "Pinned Items"}
              onClick={handleItemClick}
              isCollapsed={isCollapsed}
            />
            <hr className='navigation-item-hr-line' />
            <NavigationItem
              Icon={FaHeart}
              text={"Following"}
              isActive={activeItem === "Following"}
              onClick={handleItemClick}
              isCollapsed={isCollapsed}
            />
            <NavigationItem
              Icon={MdOutlineTrendingUp}
              text={"Trending"}
              isActive={activeItem === "Trending"}
              onClick={handleItemClick}
              isCollapsed={isCollapsed}
            />
            <NavigationItem
              Icon={FaFire}
              text={"Challenges"}
              isActive={activeItem === "Challenges"}
              onClick={handleItemClick}
              isCollapsed={isCollapsed}
            />
            <NavigationItem
              Icon={FaWandMagicSparkles}
              text={"Spark"}
              isActive={activeItem === "Spark"}
              onClick={handleItemClick}
              isCollapsed={isCollapsed}
            />
            <hr className='navigation-item-hr-line' />
            <NavigationItem
              Icon={FaGem}
              text={"Codepen pro"}
              isActive={activeItem === "Codepen pro"}
              onClick={handleItemClick}
              isCollapsed={isCollapsed}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

function NavigationItem({ Icon, text, onClick, isActive, isCollapsed }) {
  return (
    <li
      className={`navigation-item ${isActive ? 'active' : ''} ${isCollapsed ? 'collapsed' : ''}`}
      onClick={() => onClick(text)}
    >
      <Icon className='navigation-icon' />
      {!isCollapsed && <span className='navigation-text'>{text}</span>}
    </li>
  );
}

export default Navigationbar;
