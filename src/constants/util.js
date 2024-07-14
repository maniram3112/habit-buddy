const updateHabitStreak = ({habit}) =>{

    const today = new Date().toISOString().split('T')[0];
    const lastCheckedDate = habit.lastChecked || today;

    if(lastCheckedDate === today){
        return habit;
    }

    const daysDifference = (new Date(today) - new Date(lastCheckedDate))/(1000*60*60*24);
    if(daysDifference > 1){
        habit.streak = 0; //resets streak if more than 1 day has passed
    }else{
        habit.streak +=1; //increment streak
    }

    habit.lastChecked = today;
    return habit;
}

export default updateHabitStreak;