import { createSelector } from "@reduxjs/toolkit";
import type { Habit, HabitStateValue } from "./types";

export const selectAllHabits = (state: HabitStateValue) => state.habits.habits
export const selectCurrentChosenHabit = (state: HabitStateValue) => state.habits.currentChosenHabit
export const selectFilter = (state: HabitStateValue) => state.habits.filter

export const selectAllAcrtiveHabits = createSelector(
    [selectAllHabits],
    (habits) => {

        return habits.filter(habit => habit.type.trim() === 'custom' || habit.isAddedToTrack);
    }
)

export const selectHabitsById = createSelector(
    [
        selectAllHabits,
        (_, id?: Habit["id"]) => id
    ],
    (habits, id) => {
        console.log(habits, id);

        return habits.find(habit => habit.id === id)
    }
)

