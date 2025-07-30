export type HabitStatus = 'predefined' | 'custom' | "active-predefined"

export type Habit = {
    id: string;
    name: string;
    description: string;
    type: HabitStatus;
    createdAt: string;  // ISO 8601
    updatedAt?: string;  // ISO 8601
    isNew?: boolean,
    isAddedToTrack?: boolean
};


export type HabitSliceValue = {
    habits: Habit[],
    currentChosenHabit: Habit | null
    filter: HabitStatus[]
}

export type HabitStateValue = {
    habits: HabitSliceValue
}

export type AddHabitAction = {
    type: string,
    payload: Habit
}

export type EditHabitAction = {
    type: string,
    payload: {
        id: string,
        name?: string,
        description?: string
    }
}

export type CurrentChosenHabitAction = {
    type: string,
    payload: Habit
}

export type DeleteHabitAction = {
    type: string,
    payload: string
}

export type updateFilter = {
    type: string,
    payload: HabitStatus
}

export type updatePredefinedType = {
    type: string,
    payload: {
        habitId: Habit["id"],
        type: HabitStatus
    }
}