import { createSelector } from "@reduxjs/toolkit";
import type { Habit, HabitStateValue } from "./types";

export const selectAllHabits = (state: HabitStateValue) => state.habits.habits
export const selectCurrentChosenHabit = (state: HabitStateValue) => state.habits.currentChosenHabit
export const selectFilter = (state: HabitStateValue) => state.habits.filter

export const selectHabitsByType = createSelector(
    [selectAllHabits,
        (_, type) => type
    ],
    (habits, type) => {

        return habits.filter(habit => habit.type.trim() === type.trim());
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

