import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { SidebarData } from '../SidebarData/SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { IoMoonOutline } from "react-icons/io5";
import { PiBellRingingLight } from "react-icons/pi";
import { SiGoogletranslate } from "react-icons/si";




function Navbar() {
    const [sidebar,setSidebar]=useState(false)

    const showSidebar=()=>setSidebar(!sidebar)

  return (
    <>
    <IconContext.Provider value={{color:"#000000"}}>
      <div className='navbar'>
        <Link to="#" className='menu-bars'>
        <img src="" alt="avatar" className='avatar-logo1'/>
        <FaBars onClick={showSidebar}/>
        </Link>
        <div className='settings'>
          <IoMoonOutline className='moon'/>
          <PiBellRingingLight className='bell'/>
          <SiGoogletranslate className='translate'/>
          <img src="" alt="avatar" className='avatar-logo'/>
        </div>
      </div>
      
      <nav className={sidebar ? 'nav-menu active': 'nav-menu'} id="navMenu">
        <ul className='nav-menu-items' onClick={showSidebar}>
            {/* <li className='navbar-toggle'>
                <Link to="#" className='menu-bars'>
                <GoSidebarCollapse />
                </Link>
            </li> */}
            {SidebarData.map((item,index)=>{
              return(
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
