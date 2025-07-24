import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './ui-slice';
import habitReducer from '../features/habits/slice';
import progressReducer from '../features/progress/slice';

const store  = configureStore({
    reducer:{
        ui: uiReducer,
        habits: habitReducer,
        progress: progressReducer
    }
})

export default store;