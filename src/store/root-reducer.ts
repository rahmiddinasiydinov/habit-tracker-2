import persistCombineReducers from "redux-persist/es/persistCombineReducers";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'
import habitReducer from '../features/habits/slice';
import progressReducer from '../features/progress/slice';

const habitPersistConfig  ={
    key: 'habit', 
    storage, 
    blacklist: ['currentChosenHabit']
}

const progressPersistConfig  ={
    key: 'progress', 
    storage, 
}

const rootPersistConfig  ={
    key: 'root', 
    storage, 
}

const habitPersistReducer = persistReducer(habitPersistConfig, habitReducer)
const progressPersistReducer = persistReducer(progressPersistConfig, progressReducer)

export const rootPersistReducer = persistCombineReducers(rootPersistConfig, {
    habits: habitPersistReducer, 
    progress: progressPersistReducer
})
