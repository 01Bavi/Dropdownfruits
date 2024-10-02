import React , {useState}from 'react';
import { LuUserCircle2 } from "react-icons/lu";
import { MdFeedback } from "react-icons/md";
import { RiSettings5Fill } from "react-icons/ri";
import { IoHelpCircleSharp } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { IoLogOutSharp } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import '../styles/Userloginitem.css'; 

const Userloginitem = () => {
    const [open, setOpen] = useState(false);

    const openDropdown = ()=>{
        setOpen(!open);
    }

    return (
        <div >
            <div className='nav-bar'>
               <IoMdArrowDropdownCircle className='dropdown-arrow' onClick={openDropdown}/>
            </div>
            {open && (
                <div className='profile-dropdown-container'>
                   <div className='dropdown-menu'>
                    <ul>
                        <div className='menu-trigger' onClick={() => alert('see your profile')}>
                            <LuUserCircle2  className='user-icon'/>
                            <h3 className='profile-name'>Subin B<br/><span>See your profile</span></h3>
                        </div>
                        <DropdownItem 
                            Icon={MdFeedback} 
                            text={"Give feedback"} 
                            onClick={() => alert('Give feedback')}
                        />
                        <DropdownItem 
                            Icon={RiSettings5Fill} 
                            text={"Settings & privacy"} 
                            EndIcon={MdNavigateNext}
                            onClick={() => alert('Settings & privacy')}
                
                        />
                        <DropdownItem 
                            Icon={IoHelpCircleSharp} 
                            text={"Help & support"} 
                            EndIcon={MdNavigateNext}
                            onClick={() => alert('Help & support')}
                        />
                        <DropdownItem 
                            Icon={MdDarkMode} 
                            text={"Display & accessibility"} 
                            EndIcon={MdNavigateNext}
                            onClick={() => alert('Display & accessibility')}
                        />
                        <DropdownItem 
                            Icon={IoLogOutSharp} 
                            text={"Log Out"} 
                            onClick={() => alert('Log Out clicked')}
                        />
                    </ul>
                </div>
                </div>
            )}
        </div>
    );
}

function DropdownItem({ Icon, text, onClick, EndIcon  }) {
    return (
        <li className='dropdownitem' onClick={onClick}>
            <Icon className='dropdown-icon'/>
            <span>{text}</span>
            {EndIcon && <EndIcon className='end-icon'/>}
        </li>
    );
}

export default Userloginitem;
