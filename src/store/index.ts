import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './ui-slice';
import habitReducer from './habit-slice';
import progressReducer from './progress-slice';

const store  = configureStore({
    reducer:{
        ui: uiReducer,
        habits: habitReducer,
        progress: progressReducer
    }
})

export default store;