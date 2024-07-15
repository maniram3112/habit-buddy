import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import images from "../../../assets";
import './NavbarM.css';

const NavbarM = ({ handleAuth }) => {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const navigate = useNavigate();

    const handleProfileClick = () => {
        setShowProfileDropdown(!showProfileDropdown);
    };

    const handleProfile = () => {
        setShowProfileDropdown(false);
        navigate('/profile');
    };

    const handleLogout = () => {
        setShowProfileDropdown(false);
        localStorage.removeItem('isAuthenticated');
        handleAuth(false, "Logged out successfully");
        navigate('/');
    };

    return (
        <div className="navbar_container">
            <div className="navbar-logo" id="#">
                <img src={images.logo} alt="logo" />
            </div>
            <div className="navbar-profile" onClick={handleProfileClick}>
                <FaUser />
                {showProfileDropdown && (
                    <div className="profile-dropdown">
                        <ul>
                            <li onClick={handleProfile}>Profile</li>
                            <li onClick={handleLogout}>Logout</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavbarM;