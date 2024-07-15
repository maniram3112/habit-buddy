import React, { useEffect, useState } from "react";
import images from "../../assets";
import components from "../../components";
import Streak from "../../components/MainPage/Streak/Streak";
import './Home.css';

const { NavbarM, AddHabit, EditHabit } = components;

const Home = ({ handleAuth }) => {
    const [showModal, setShowModal] = useState(false);
    const [habits, setHabits] = useState([]);
    const [editModal, setEditModal] = useState(false);
    const [currentHabit, setCurrentHabit] = useState(null);

    // Load habits from local storage
    useEffect(() => {
        const storedHabits = JSON.parse(localStorage.getItem('habits')) || [];
        setHabits(storedHabits);
    }, []);

    // Function to add a new habit
    const handleAddHabit = (habit) => {
        const newHabit = { id: habits.length + 1, habit, status: "on Going", streak: 0, lastChecked: new Date().toISOString().split('T')[0] };
        const updatedHabits = [...habits, newHabit];
        setHabits(updatedHabits);
        localStorage.setItem('habits', JSON.stringify(updatedHabits));
        setShowModal(false);
    };

    // Function to close or cancel the modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    // Function to open the modal
    const handleOpenModal = () => {
        setShowModal(true);
    };

    // Function to edit an existing habit
    const handleEditHabit = (habit) => {
        setCurrentHabit(habit);
        setEditModal(true);
    };

    // Function to update an existing habit
    const handleUpdateHabit = (updateHabit) => {
        const updatedHabits = habits.map((habit) =>
            habit.id === updateHabit.id ? updateHabit : habit
        );
        setHabits(updatedHabits);
        localStorage.setItem('habits', JSON.stringify(updatedHabits));
        setEditModal(false);
        setCurrentHabit(null);
    };

    // Function to delete a habit
    const handleDeleteHabit = (id) => {
        const updatedHabits = habits.filter((habit) => habit.id !== id);
        setHabits(updatedHabits);
        localStorage.setItem('habits', JSON.stringify(updatedHabits));
    };

    // Function to update habits in local storage and state
    const updateHabits = (updatedHabits) => {
        setHabits(updatedHabits);
        localStorage.setItem('habits', JSON.stringify(updatedHabits));
    };

    return (
        <div className="home">
            <NavbarM handleAuth={handleAuth} />
            <div className="home_container">
                <div className="home-add">
                    <span className="add" onClick={handleOpenModal}>+</span>
                    <p>Add your New Habit</p>
                </div>
                {showModal && (
                    <div className="modal-container">
                        <AddHabit
                            onAddHabit={handleAddHabit}
                            onClose={handleCloseModal}
                        />
                    </div>
                )}
                <div className="habits-list">
                    <h2>My Habits:</h2>
                    <ul>
                        {habits.map((habit) => (
                            <li key={habit.id} className="habit-item">
                                <span className="habit-name">{habit.habit}</span>
                                <button
                                    className="manage custom_btn"
                                    onClick={() => handleEditHabit(habit)}
                                >
                                    Manage
                                </button>
                                <div className="current-status">
                                    <p>{habit.status}</p>
                                </div>
                                <div className="streak-info">
                                    <span>Streak: {habit.streak}</span>
                                    <img
                                        src={images.streak}
                                        alt="streak img"
                                        className="streak-img"
                                    />
                                </div>
                                {editModal && currentHabit && currentHabit.id === habit.id && (
                                    <EditHabit
                                        habit={currentHabit}
                                        onClose={() => setEditModal(false)}
                                        onUpdateHabit={handleUpdateHabit}
                                        onDeleteHabit={handleDeleteHabit}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="highest-streak">
                    <Streak habits={habits} updateHabits={updateHabits} />
                </div>
            </div>
            <footer className="footer">
                <p>© 2024 Habit Buddy. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;