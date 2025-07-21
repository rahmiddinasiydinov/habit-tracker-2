import { createSlice } from "@reduxjs/toolkit";

export type UiSliceValue = {
    theme: 'dark' | 'light',

}

export type UiStateValue = {
    ui: UiSliceValue,
}

const initialState: UiSliceValue = {
    theme: 'light',
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
