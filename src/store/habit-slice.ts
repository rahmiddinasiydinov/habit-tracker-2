import { PREDEFINED_HABITS } from "@/shared/constants/predefined-habits";
import { createSlice } from "@reduxjs/toolkit";

export type Habit = {
    id: string;
    name: string;
    description: string;
    type: 'predefined' | 'custom';
    createdAt: string;  // ISO 8601
    updatedAt: string;  // ISO 8601
};

export type HabitSliceValue = {
    habits: Habit[]
}

export type HabitStateValue = {
    habits: HabitSliceValue
}


const initialState: HabitSliceValue = {
    habits: PREDEFINED_HABITS
};

const habitSlice = createSlice({
    name: 'habits',
    initialState,
    reducers: {
        addHabit(state, action) {
            state.habits.push(action.payload)
        }
    }
})

export const habitActions = habitSlice.actions;
export default habitSlice.reducer;