import { PREDEFINED_HABITS } from "@/shared/constants/predefined-habits";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

export type Habit = {
    id: string;
    name: string;
    description: string;
    type: 'predefined' | 'custom';
    createdAt: string;  // ISO 8601
    updatedAt?: string;  // ISO 8601
    isNew?: boolean
};

export type HabitSliceValue = {
    habits: Habit[],
    currentChosenHabit: Habit | null
}

export type HabitStateValue = {
    habits: HabitSliceValue
}

type AddHabitAction = {
    type: string,
    payload: Habit
}

type EditHabitAction = {
    type: string,
    payload: {
        id: string,
        name?: string,
        description?: string
    }
}

type CurrentChosenHabitAction = {
    type: string,
    payload: Habit
}

type DeleteHabitAction = {
    type: string,
    payload: string
}

const initialState: HabitSliceValue = {
    habits: PREDEFINED_HABITS,
    currentChosenHabit: null
};

const habitSlice = createSlice({
    name: 'habits',
    initialState,
    reducers: {
        addHabit(state, action: AddHabitAction) {
            state.habits.unshift(action.payload)
            toast.success("New habit has been created!");
        },

        editHabit(state, action: EditHabitAction) {
            const id = action.payload.id
            const name = action.payload.name
            const description = action.payload.description

            if (id && name && description) {
                const currentHabitIndex = state.habits.findIndex(habit => habit.id === id);

                const updatedHabit: Habit = {
                    ...state.habits[currentHabitIndex],
                    name,
                    description,
                    isNew: false
                }

                state.habits.splice(currentHabitIndex, 1, updatedHabit);
                toast.success("Habit has been updated!");
            }

            state.currentChosenHabit = null;
        },

        deleteHabit(state, action: DeleteHabitAction) {
            const id = action.payload;

            if (id) {
                const currentHabitIndex = state.habits.findIndex(habit => habit.id === id);
                state.habits.splice(currentHabitIndex, 1);
                toast.success('Habit has been deleted!');
            }
        },

        setCurrentChosenHabit(state, action: CurrentChosenHabitAction) {
            state.currentChosenHabit = action.payload
        }
    }
})

export const habitActions = habitSlice.actions;
export default habitSlice.reducer;