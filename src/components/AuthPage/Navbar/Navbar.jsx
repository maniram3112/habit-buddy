import React from "react";
import images from '../../../assets';
import './Navbar.css';

const Navbar = () =>{
    return(
        <div className="authPage_container">
            <div className="authPage-logo">
                <img src={images.logo2} alt='Logo'/>
            </div>
            <div className="authPage-btn">
                <button className="custom_btn">SignIn</button>
                <button className="custom_btn">SignUp</button>
            </div>
        </div>
    );
}

export default Navbar;