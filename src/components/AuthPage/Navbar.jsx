import React from "react";
import images from '../../assets';
import './Navbar.css';

const Navbar = () =>{
    return(
        <div className="authPage_container">
            <div className="authPage-logo">
                <img src={images.logo1} alt='Logo'/>
            </div>
            <div className="authPage-btn">
                <button>SignIn</button>
                <button>SignUp</button>
            </div>
        </div>
    );
}

export default Navbar;