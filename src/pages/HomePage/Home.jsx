import React, { useEffect, useState } from "react";
import components from "../../components";
import './Home.css';

const {NavbarM, AddHabit, EditHabit} = components;

const Home = () => {

    const [showModal, setShowModal] = useState(false);
    const [habits, setHabits] = useState([]);

    const [editModal, setEditModal] = useState(false);
    const [currentHabit, setCurrentHabit] = useState(null);

    // load habits from local storage
    useEffect(() => {
        const storeHabits = JSON.parse(localStorage.getItem('habits')) || [];
        setHabits(storeHabits);
    },[]);

    // Function to add a new habit
    const handleAddHabbit = (habit) => {
        const newHabit = {id: habits.length + 1, habit};
        const updatedHabits = [...habits, newHabit];
        setHabits(updatedHabits);
        localStorage.setItem('habits', JSON.stringify(updatedHabits));
        setShowModal(false); // to close or cancel the modal
    }

    // function to close or cancel the modal
    const handleCloseModal = () =>{
        setShowModal(false);
    }

    // function to open the modal
    const handleOpenModal = () =>{
        setShowModal(true);
    }


    // function to edit an exiting habits
    const handleEditHabit = (habit) =>{
        setCurrentHabit(habit);
        setEditModal(true);
    }

    // function to update an existing habit
    const handleUpdateHabit = (updateHabit) => {
        const updatedHabits = habits.map((habit) =>
            habit.id === updateHabit.id ? updateHabit : habit
        );
        setHabits(updatedHabits);
        localStorage.setItem('habits', JSON.stringify(updatedHabits));
        setEditModal(false);
        setCurrentHabit(null);
    }

    // function to delete a habit
    const handleDeleteHabit = (id) =>{
        const updatedHabits = habits.filter((habit) => habit.id !== id);
        setHabits(updatedHabits);
        localStorage.setItem('habits', JSON.stringify(updatedHabits));
    }

    return(
        <div className="home">
            <NavbarM/>
            <div className="home_container">
                <div className="home-add">
                    <span className="add" onClick={handleOpenModal}>+</span>
                    <p>Add your New Habit</p>
                </div>
                {showModal && (
                    <div className="modal-container">
                        <AddHabit
                            onAddHabit={handleAddHabbit}
                            onClose={handleCloseModal}
                        />
                    </div>
                )}
                {
                    habits.length > 0 && (
                        <div className="habits-list">
                            <h2>My Habits:</h2>
                            <ul>
                                {
                                    habits.map((habit) => (
                                        <li key={habit.id}>
                                            {habit.habit}
                                            <button
                                                className="manage custom_btn"
                                                onClick={() => handleEditHabit(habit)}
                                            >
                                                Manage
                                            </button>
                                            {editModal &&
                                                currentHabit &&
                                                currentHabit.id === habit.id &&(
                                                <EditHabit
                                                    habit={currentHabit}
                                                    onClose={() => setEditModal(false)}
                                                    onUpdateHabit={handleUpdateHabit}
                                                    onDeleteHabit={handleDeleteHabit}
                                                />
                                            )}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Home;