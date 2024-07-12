import React from "react";
import { FaUser } from "react-icons/fa";
import images from "../../../assets";
import './NavbarM.css';

const NavbarM=() =>{
    return(
        <div className="navbar_container">
            <div className="navbar-logo" id="#">
                <img src={images.logo} alt="logo"/>
            </div>
            {/* <div className="navbar-contact" id="contact">
                Contact
            </div> */}
            <div className="navbar-profile">
                <FaUser/>
            </div>
        </div>
    );
}

export default NavbarM;