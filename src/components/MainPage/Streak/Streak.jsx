import React, { useEffect, useState } from "react";
import './Streak.css';

const Streak = ({ habits, updateHabits }) => {
    const [highestStreak, setHighestStreak] = useState(0);

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        let maxStreak = 0;
        let habitsChanged = false;

        const updatedHabits = habits.map(habit => {
            const lastCheckedDate = habit.lastChecked || today;
            const daysDifference = (new Date(today) - new Date(lastCheckedDate)) / (1000 * 60 * 60 * 24);

            if (daysDifference > 1) {
                if (habit.streak !== 0) {
                    habit.streak = 0; // Resets streak if more than 1 day has passed
                    habitsChanged = true;
                }
            } else if (lastCheckedDate !== today) {
                habit.streak += 1; // Increment streak if checked today
                habitsChanged = true;
            }

            habit.lastChecked = today;
            maxStreak = Math.max(maxStreak, habit.streak);
            return habit;
        });

        setHighestStreak(maxStreak);

        if (habitsChanged) {
            updateHabits(updatedHabits); // Update the habits in the parent component or local storage
            localStorage.setItem('habits', JSON.stringify(updatedHabits)); // Update local storage
        }
    }, [habits, updateHabits]); // Watch habits and updateHabits for changes

    return (
        <div className="streak">
            <h2>Highest Streak: {highestStreak}</h2>
            <ul>
                {habits.map(habit => (
                    <li key={habit.id}>
                        <span>{habit.habit}: {habit.streak}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Streak;
