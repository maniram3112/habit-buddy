import React from 'react';
import images from '../../assets';
import './Profile.css';

const Profile = ({ habits }) => {

    const onGoingHabits = habits.filter(habit => habit.status === "on Going");
    const onHoldHabits = habits.filter(habit => habit.status === "on hold");
    const achievedHabits = habits.filter(habit => habit.status === "achieved");

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src={images.user2} alt="Profile" className="profile-picture" />
                <div className="profile-name">
                    <h1>Tester</h1>
                </div>
                <button className="logout-button">Logout</button>
            </div>
            <div className="profile-details">
                <h2 className="section-title">User Details</h2>
                <ul className="details-list">
                    <li><strong>Email:</strong> test@example.com</li>
                    <li><strong>Username:</strong> test@3112</li>
                    <li><strong>Joined:</strong> July 15, 2024</li>
                </ul>
            </div>
            <div className="habits-status">
                <h2 className="section-title">My Habits</h2>
                <div className='habits-columns'>
                    <div className='column'>
                        <h3>On Going</h3>
                        <ul className="details-list">
                            {onGoingHabits.map((habit) => (
                                <li key={habit.id}>
                                    <strong>{habit.habit}:</strong> {habit.status} (Streak: {habit.streak})
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='column'>
                        <h3>On Hold</h3>
                        <ul className="details-list">
                            {onHoldHabits.map((habit) => (
                                <li key={habit.id}>
                                    <strong>{habit.habit}:</strong> {habit.status}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='column'>
                        <h3>Achieved</h3>
                        <ul className="details-list">
                            {achievedHabits.map((habit) => (
                                <li key={habit.id}>
                                    <strong>{habit.habit}:</strong> {habit.status} (Streak: {habit.streak})
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p>© 2024 Habit Buddy. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Profile;
