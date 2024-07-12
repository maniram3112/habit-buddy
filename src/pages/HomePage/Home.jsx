import React, { useState } from "react";
import components from "../../components";
import './Home.css';

const {NavbarM, AddHabit} = components;

const Home = () => {

    const [showModal, setShowModal] = useState(false);
    const [habits, setHabits] = useState([]);

    // const toggleModal = () => {
    //     setShowModal(!showModal);
    // };

    const handleAddHabbit = (habit) => {
        setHabits([...habits, habit]);
        // toggleModal();
        setShowModal(false);
    }

    const handleCloseModal = () =>{
        setShowModal(false);
    }

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
                            <h2>My Habits</h2>
                            <ul>
                                {
                                    habits.map((habit, index) => (
                                        <li key={index}>
                                            {habit}
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