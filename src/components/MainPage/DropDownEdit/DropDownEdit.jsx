import React, { useState } from "react";
import './DropDownEdit.css';

const DropDownEdit = ({ habit, onUpdateHabit, onDeleteHabit, onStatusChange }) => {
    const [status, setStatus] = useState(habit.status || 'status');

    // Function to handle status change
    const handleStatusChange = (e) => {
        const newStatus = e.target.value;
        setStatus(newStatus);//updates local state
        if (newStatus === 'quit') {
            onDeleteHabit(habit.id);
        } else {
            const updatedHabit = { ...habit, status: newStatus };
            onUpdateHabit(updatedHabit);
            onStatusChange(newStatus);//Notifies parent component of status change
        }
    };

    const renderDropDown = () => {
        if (status === "on hold") {
            return (
                <select className="dropdown custom_btn"
                    value={status}
                    onChange={handleStatusChange}
                >
                    <option value="on hold" hidden>On Hold</option>
                    <option value="on Going">On Going</option>
                    <option value="quit">Quit</option>
                </select>
            );
        } else {
            return (
                <select className="dropdown custom_btn"
                    value={status}
                    onChange={handleStatusChange}
                >
                    <option value="status" hidden>Status</option>
                    <option value="on Going">On Going</option>
                    <option value="achieved">Achieved</option>
                    <option value="on hold">On Hold</option>
                    <option value="quit">Quit</option>
                </select>
            );
        }
    }

    return (
        <div className="habit-container">
            {/* <span>{habit.habit}</span> */}
            {renderDropDown()}
        </div>
    );
}

export default DropDownEdit;