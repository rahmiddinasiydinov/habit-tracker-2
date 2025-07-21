import { useSelector } from 'react-redux'

import type { HabitStateValue } from '@/store/habit-slice'

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
