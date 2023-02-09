import React, { useEffect } from "react";
// import {Context} from "../Context"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { HiOutlineMoon } from 'react-icons';
import { IoMoonOutline } from "react-icons/io5";

const Header=()=>{
    // const {darkMode}=useContext(Context)

    return(
        <header className="hero-container">

        {/* className= {darkMode ? "hero-container-dark" : "hero-container"} */}
        <div className="hero">
        <h1 className="hero-text">Where in the world?</h1>
        <button className="dark-mode-btn dark-mode-text " aria-label="Light mode / Dark mode">
        {/* <FaBeer /> */}
        <IoMoonOutline id="moonicon"/>
        {/* <FontAwesomeIcon icon="fa-regular fa-coffee" className="highlight"/> */}
            {/* <i class="fa fa-moon-o theme-switch" aria-hidden="true"></i> */}
            Dark Mode</button>
        </div>
   </header>
    )
}

export default Header