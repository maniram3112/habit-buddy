import React, { useState } from "react";
import './AddHabit.css';

const AddHabit = ({onAddHabit, onClose}) => {

    const [habit, setHabit] = useState('');

    const handleAddHabit = () => {
        if(habit.trim()){
            onAddHabit(habit);
            setHabit('');
            onClose();
        }
    };

    return(
        <div className="addHabit-modal modal">
            <div className="addHabit-content modal-content">
                <input
                    type="text"
                    placeholder="Add your new habit..."
                    value={habit}
                    onChange={(e) => setHabit(e.target.value)}
                />
                <div className="btns">
                    <button className="custom_btn" onClick={handleAddHabit}>Add</button>
                    <button className="custom_btn" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default AddHabit;