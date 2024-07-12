import React, { useEffect, useState } from "react";
import components from "../../components";
import './Home.css';

const {NavbarM, AddHabit} = components;

const Home = () => {

    const [showModal, setShowModal] = useState(false);
    const [habits, setHabits] = useState([]);

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

    // function tp open the modal
    const handleOpenModal = () =>{
        setShowModal(true);
    }

    return(
        <div className="home">
            <NavbarM/>
            <div className="home_container">
                <div className="home-add">
                    <span className="add" onClick={handleOpenModal}>+</span>
                    <p>Add your New Habit</p>
                </div>
                {
                    habits.length > 0 && (
                        <div className="habits-list">
                            <h2>My Habits:</h2>
                            <ul>
                                {
                                    habits.map((habit, index) => (
                                        <li key={habit.id}>
                                            {habit.habit}
                                        </li>
                                    ))
                                }
                            </ul>
                            <button>Manage</button>
                        </div>
                    )
                }
            </div>
            {showModal && <AddHabit onAddHabit={handleAddHabbit} onClose={handleCloseModal} />}
        </div>
    );
}

export default Home;