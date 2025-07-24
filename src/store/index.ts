import { configureStore } from "@reduxjs/toolkit";
import habitReducer from '../features/habits/slice';
import progressReducer from '../features/progress/slice';

const store  = configureStore({
    reducer:{
        habits: habitReducer,
        progress: progressReducer
    }
})

export default store;