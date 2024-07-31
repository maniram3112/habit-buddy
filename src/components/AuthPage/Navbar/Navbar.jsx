import React from "react";
import images from '../../../assets';
import './Navbar.css';

const Navbar = ({onSectionChange}) =>{
    return(
        <div className="authPage_container">
            <div className="authPage-logo">
                <img src={images.logo2} alt='Logo'/>
            </div>
            <div className="authPage-btn">
                <button className="custom_btn" onClick={() => onSectionChange('signin')}>SignIn</button>
                <button className="custom_btn" onClick={() => onSectionChange('signup')}>SignUp</button>
                <button className="custom_btn" onClick={() => onSectionChange('credential')}>Show Credentials</button>
            </div>
        </div>
    );
}

export default Navbar;