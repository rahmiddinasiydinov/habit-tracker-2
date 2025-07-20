import { createSlice } from "@reduxjs/toolkit";
import type { Habit } from "./habit-slice";

export type SingleProgressValue = {
    id: string
    habitId: Habit['id'],
    trackedDay: string
}

type ProgressSliceValue = {
    progress: SingleProgressValue[]
}

export type ProgressStateValue = {
    progress: ProgressSliceValue;
}

type AddActionType = {
    type: string,
    payload: SingleProgressValue
}

type RemoveActionType = {
    type: string,
    payload: SingleProgressValue['id']
}

const initialState: ProgressSliceValue = {
    progress: []
}

const progressSlice = createSlice({
    name: "progress",
    initialState,
    reducers: {
        addTracking(state: ProgressSliceValue, action: AddActionType) {
            state.progress.push(action.payload);
        },
        
        removeTracking(state: ProgressSliceValue, action: RemoveActionType) {
            const id = action.payload;
            const currentTrackIndex = state.progress.findIndex((progress: SingleProgressValue) => progress.id === id);
            state.progress.splice(currentTrackIndex, 1);
        }
    }
})

export const progressActions = progressSlice.actions;

export default progressSlice.reducer