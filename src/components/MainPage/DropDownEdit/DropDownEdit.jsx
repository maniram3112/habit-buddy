import React, { useState } from "react";
import './DropDownEdit.css';

const DropDownEdit = ({habit, onUpadteHabit, OnDeleteHabit}) => {

    const [status, setStatus] = useState(habit.status || 'status');
    return(
        <div></div>
    );
}

export default DropDownEdit;