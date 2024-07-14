import React, { useEffect, useState } from "react";
import components from "../../components";
import Streak from "../../components/MainPage/Streak/Streak";
import './Home.css';

const { NavbarM, AddHabit, EditHabit } = components;

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [habits, setHabits] = useState([]);
    const [editModal, setEditModal] = useState(false);
    const [currentHabit, setCurrentHabit] = useState(null);

    // Load habits from local storage
    useEffect(() => {
        const storeHabits = JSON.parse(localStorage.getItem('habits')) || [];
        setHabits(storeHabits);
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
            <NavbarM />
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
                {habits.length > 0 && (
                    <div className="habits-list">
                        <h2>My Habits:</h2>
                        <ul>
                            {habits.map((habit) => (
                                <li key={habit.id}>
                                    {habit.habit}
                                    <button
                                        className="manage custom_btn"
                                        onClick={() => handleEditHabit(habit)}
                                    >
                                        Manage
                                    </button>
                                    {editModal && currentHabit && currentHabit.id === habit.id && (
                                        <EditHabit
                                            habit={currentHabit}
                                            onClose={() => setEditModal(false)}
                                            onUpdateHabit={handleUpdateHabit}
                                            onDeleteHabit={handleDeleteHabit}
                                        />
                                    )}
                                    <div className="current-status">
                                        <p>Current Status: {habit.status}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <Streak habits={habits} updateHabits={updateHabits}/>
            </div>
        </div>
    );
};

export default Home;