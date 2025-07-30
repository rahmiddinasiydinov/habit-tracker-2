import { createSlice } from "@reduxjs/toolkit";

import { toast } from "sonner";
import { PREDEFINED_HABITS } from "@/shared/constants/predefined-habits";
import type { AddHabitAction, CurrentChosenHabitAction, DeleteHabitAction, EditHabitAction, Habit, HabitSliceValue, updateFilter, updatePredefinedType } from "./types";


const initialState: HabitSliceValue = {
    habits: PREDEFINED_HABITS,
    currentChosenHabit: null,
    filter: ['custom', 'predefined', "active-predefined"]
};

const habitSlice = createSlice({
    name: 'habits',
    initialState,
    reducers: {
        addHabit(state, action: AddHabitAction) {
            state.habits.unshift(action.payload)
            toast.success("New habit has been created!");
        },

        editHabit(state, action: EditHabitAction) {
            const id = action.payload.id
            const name = action.payload.name
            const description = action.payload.description

            let isEdited = false;

            if (id && name) {
                const currentHabitIndex = state.habits.findIndex(habit => habit.id === id);
                const currentHabit = state.habits[currentHabitIndex];

                isEdited = name !== currentHabit.name || description !== currentHabit.description;

                if (isEdited) {
                    const updatedHabit: Habit = {
                        ...state.habits[currentHabitIndex],
                        name,
                        description: description || '',
                        isNew: false
                    }
                    state.habits.splice(currentHabitIndex, 1, updatedHabit);
                    toast.success("Habit has been updated!");
                } else {
                    toast.warning("You have not updated the habit!");
                }
            }

            state.currentChosenHabit = null;
        },

        deleteHabit(state, action: DeleteHabitAction) {
            const id = action.payload;

            if (id) {
                const currentHabitIndex = state.habits.findIndex(habit => habit.id === id);
                state.habits.splice(currentHabitIndex, 1);
                toast.success('Habit has been deleted!');
            }
        },

        setCurrentChosenHabit(state, action: CurrentChosenHabitAction) {
            state.currentChosenHabit = action.payload
        },

        updateFilter(state, action: updateFilter) {
            const filterName = action.payload;
            const filterExist = state.filter.includes(filterName)
            if (filterExist) {
                state.filter = state.filter.filter(filterValue => filterValue !== filterName)
            } else {
                state.filter.push(filterName)
            }
        },

        updatePredefinedType(state, action: updatePredefinedType) {
            const currentHabitIndex = state.habits.findIndex(habit => habit.id === action.payload.habitId);
            state.habits[currentHabitIndex].type = action.payload.type
            if (!state.habits[currentHabitIndex].isAddedToTrack) {
                state.habits[currentHabitIndex].isAddedToTrack = true
            }

        }
    }
})

export const habitActions = habitSlice.actions;
export default habitSlice.reducer;
