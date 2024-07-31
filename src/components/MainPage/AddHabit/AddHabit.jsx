import React, { useState } from "react";
import './AddHabit.css';

const AddHabit = ({ onAddHabit, onClose }) => {
    const [habit, setHabit] = useState('');

    const handleAddHabit = (e) => {
        e.preventDefault(); // Prevent default form submission
        if (habit.trim()) {
            onAddHabit(habit);
            setHabit('');
            onClose();
        }
    };

    return (
        <div className="addHabit-modal modal">
            <div className="addHabit-content modal-content">
                <form className="add-habit-form" onSubmit={handleAddHabit}>
                    <input
                        type="text"
                        placeholder="Add your new habit..."
                        value={habit}
                        onChange={(e) => setHabit(e.target.value)}
                    />
                    <div className="btns">
                        <button type="submit" className="custom_btn">Add</button>
                        <button type="button" className="custom_btn" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddHabit;
