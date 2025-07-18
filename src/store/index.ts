import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './ui-slice';
import habitReducer from './habit-slice';

const store  = configureStore({
    reducer:{
        ui: uiReducer,
        habits: habitReducer
    }
})

export default store;