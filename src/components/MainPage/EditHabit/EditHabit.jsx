import React, { useState } from "react";
import './EditHabit.css';

const EditHabit = ({habit, onClose, onUpdateHabit, onDeleteHabit}) =>{

    const [editHabit, setEditHabit] = useState(habit.habit);
    const [status, setStatus] = useState(habit.status);

    // function to edit the existing habit
    const handleEdit = () =>{
        const updatedHabit = {...habit, habit: editHabit, status};
        onUpdateHabit(updatedHabit);
    }

    // function to delete the existing habit
    const handleDelete = () =>{
        onDeleteHabit(habit.id);
        onClose();
    }

    return(
        <div className="editHabit-modal">
            <div className="editHabit-content">
                <input
                    type="text"
                    value={editHabit}
                    onChange={(e) => setEditHabit(e.target.value)}
                />
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option>select</option>
                    <option value="achieved">Achieved</option>
                    <option value="quit">Quit</option>
                    <option value="on hold">On Hold</option>
                </select>
                <div className="btns">
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}
export default EditHabit;