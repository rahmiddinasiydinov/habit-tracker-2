import ManipulatedHabitForm from './manipulated-habit-form'

export default function AddHabit() {
    return (
        <ManipulatedHabitForm
            type='add'
            triggerName='+New Habit'
            dialogTitle='Add a new habit'
        />
    )
}
