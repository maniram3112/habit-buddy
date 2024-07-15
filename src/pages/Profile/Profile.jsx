import React from 'react';
import images from '../../assets';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src={images.user2} alt="Profile" className="profile-picture" />
                <h1 className="profile-name">Tester</h1>
            </div>
            <div className="profile-details">
                <h2 className="section-title">User Details</h2>
                <ul className="details-list">
                    <li><strong>Email:</strong> test@example.com</li>
                    <li><strong>Username:</strong>test@3112</li>
                    <li><strong>Joined:</strong>July 15, 2024</li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;
