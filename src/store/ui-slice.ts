import { createSlice } from "@reduxjs/toolkit";


export type UiSliceValue = {
    theme: string,
    isSidebarOpen: boolean
}

export type UiStateValue = {
    ui: UiSliceValue,
}

const deviceInnerWidth = window.innerWidth;
const MIN_LARGE_DEVICE_LENGTH = 1024

const initialState: UiSliceValue = {
    theme: 'light',
    isSidebarOpen: deviceInnerWidth > MIN_LARGE_DEVICE_LENGTH
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        updateUi(state, action) {
            state.theme = action.payload
        },
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
