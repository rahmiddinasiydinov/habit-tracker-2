import { createSlice } from "@reduxjs/toolkit";
import type { Habit } from "./habit-slice";

type SingleProgressValue = {
    habitId: Habit['id'],
    trackedDays: string[]
}

type ProgressSliceValue = {
    progress: SingleProgressValue[]
}

const initialState: ProgressSliceValue = {
    progress: []
}

const progressSlice = createSlice({
    name: "progress",
    initialState,
    reducers: {
        addTracking(){
            
        },
    }
})

export const progressActions = progressSlice.actions;

export default progressSlice.reducer