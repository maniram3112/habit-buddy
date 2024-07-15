import React, { useEffect, useState } from "react";
import images from "../../../assets";

const Streak = ({ habits, updateHabits }) => {
    const [highestStreak, setHighestStreak] = useState(0);

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        let maxStreak = 0;
        let habitsChanged = false;

        const updatedHabits = habits.map(habit => {
            const lastCheckedDate = habit.lastChecked || today;
            const daysDifference = (new Date(today) - new Date(lastCheckedDate)) / (1000 * 60 * 60 * 24);

            if (habit.status === "on hold") {
                if (habit.streak !== 0) {
                    habit.streak = 0; // Reset streak to zero if status is "on hold"
                    habitsChanged = true;
                }
            } else if (daysDifference > 1) {
                if (habit.streak !== 0) {
                    habit.streak = 0; // Reset streak if more than 1 day has passed
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
        }
    }, [habits, updateHabits]);

    return (
        <div className="streak">
            <div>
                <h2>
                    Highest Streak: {highestStreak}
                    <img
                        src={images.streak1}
                        alt="highest streak img"
                    />
                </h2>
            </div>
        </div>
    );
};

export default Streak;