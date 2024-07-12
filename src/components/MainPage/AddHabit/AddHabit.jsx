import React, { useState } from "react";
import './AddHabit.css';

const AddHabit = ({onAddHabit, onClose}) => {

    const [habit, setHabit] = useState('');

    const handleAddHabbit = () => {
        if(habit.trim()){
            onAddHabit(habit);
            setHabit('');
            onClose();
        }
    };

    return(
        <div className="addHabit-modal">
            <input
                type="text"
                placeholder="Enter new habit..."
                value={habit}
                onChange={(e) => setHabit(e.target.value)}
            />
            <div className="btns">
                <button className="custom_btn" onClick={handleAddHabbit}>Add</button>
                <button className="custom_btn" onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}

export default AddHabit;