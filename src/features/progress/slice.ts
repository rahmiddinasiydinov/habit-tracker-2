import { createSlice } from "@reduxjs/toolkit";
import type { AddActionType, ProgressSliceValue, RemoveActionType, SingleProgressValue } from "./types";

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
        },
        removeHabitTrackings(state, action: { type: string, payload: string }) {
            state.progress = state.progress.filter((progress) => progress.habitId !== action.payload);
        }
    }
})

export const progressActions = progressSlice.actions;

export default progressSlice.reducer
