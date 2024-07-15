import React, { useState } from "react";
import DropDownEdit from "../DropDownEdit/DropDownEdit";

const EditHabit = ({habit, onClose, onUpdateHabit, onDeleteHabit}) =>{

    const [editHabit, setEditHabit] = useState(habit.habit);
    const [status, setStatus] = useState(habit.status);

    // // function to edit the existing habit
    // const handleEdit = () =>{
    //     const updatedHabit = {...habit, habit: editHabit, status};
    //     onUpdateHabit(updatedHabit);
    //     onClose();//close modal after updating
    // }

    // function to delete the existing habit
    const handleDelete = () =>{
        onDeleteHabit(habit.id);
        onClose();
    }

    // function to save the updated habit
    const handleSave = () =>{
        const updatedHabit = { ...habit, habit:editHabit, status};
        onUpdateHabit(updatedHabit);
        onClose(); //close modal after updating
    }

    return(
        <div className="editHabit-modal modal">
            <div className="editHabit-content modal-content">
                <input
                    type="text"
                    value={editHabit}
                    onChange={(e) => setEditHabit(e.target.value)}
                />
                <div className={`habit-container ${status === "on hold" ? "crossed" : ""}`}>
                <DropDownEdit
                    habit={{ ...habit, habit: editHabit, status }}
                    onUpdateHabit={onUpdateHabit}
                    onDeleteHabit={onDeleteHabit}
                    onStatusChange={setStatus} //passing setStatus function to handle status change
                />
                </div>
                <div className="btns">
                    <button className="editHabit-btn custom_btn" style={{marginRight: '1rem'}} onClick={handleSave}>Save</button>
                    <button className="editHabit-btn custom_btn" style={{marginRight: '1rem'}} onClick={handleDelete}>Delete</button>
                    <button className="editHabit-btn custom_btn" style={{marginRight: '1rem'}} onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}
export default EditHabit;