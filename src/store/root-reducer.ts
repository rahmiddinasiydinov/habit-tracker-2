import persistCombineReducers from "redux-persist/es/persistCombineReducers";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'
import habitSlice from '../features/habits/slice';
import progressSlice from '../features/progress/slice';
import type { PersistConfig } from "redux-persist";
import type { HabitSliceValue } from "@/features/habits/types";

const habitPersistConfig: PersistConfig<HabitSliceValue> = {
    key: 'habit',
    storage,
    blacklist: ['currentChosenHabit']
}

const progressPersistConfig = {
    key: 'progress',
    storage,
}

const rootPersistConfig = {
    key: 'root',
    storage,
}

const habitPersistReducer = persistReducer(habitPersistConfig, habitSlice.reducer)
const progressPersistReducer = persistReducer(progressPersistConfig, progressSlice.reducer)

export const rootPersistReducer = persistCombineReducers(rootPersistConfig, {
    habits: habitPersistReducer,
    progress: progressPersistReducer
})
