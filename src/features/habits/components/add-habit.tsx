import HabitForm from "./habit-form";

export default function AddHabit() {
    return (
        <HabitForm
            type='add'
            triggerName='+New Habit'
            dialogTitle='Add a new habit'
        />
    )
}
