import type { Habit, HabitStateValue } from '@/features/habits/types';
import { useSelector } from 'react-redux'

export default function useHabitsState() {
    const getAllHabits = () => useSelector((state: HabitStateValue) => state.habits.habits);
    const getCurrentChosenHabit = () => useSelector((state: HabitStateValue) => state.habits.currentChosenHabit)
    const getFilters = () => useSelector((state: HabitStateValue) => state.habits.filter);

    const getHabitsByType = (type: string) => {
        return getAllHabits().filter(habit => habit.type === type);
    }

    const getHabitById = (id: Habit['id']) => {
        const habits = getAllHabits();
        const foundHabit = habits.find(habit => habit.id === id);
        return foundHabit
    }

    return (
        {
            getAllHabits,
            getCurrentChosenHabit,
            getFilters,
            getHabitsByType,
            getHabitById
        }
    )
}
