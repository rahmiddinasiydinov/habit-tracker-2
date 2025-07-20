import type { HabitStateValue } from '@/store/habit-slice'
import { useSelector } from 'react-redux'


export default function useHabitsState() {
    const getAllHabits = () => useSelector((state: HabitStateValue) => state.habits.habits);
    const getCurrentChosenHabit = () => useSelector((state: HabitStateValue) => state.habits.currentChosenHabit)
    return (
        {
            getAllHabits,
            getCurrentChosenHabit
        }
    )
}