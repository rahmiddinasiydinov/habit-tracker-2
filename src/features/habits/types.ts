export type Habit = {
    id: string;
    name: string;
    description: string;
    type: 'predefined' | 'custom';
    createdAt: string;  // ISO 8601
    updatedAt?: string;  // ISO 8601
    isNew?: boolean
};

export type Filter = 'Predefined' | 'Custom'

export type HabitSliceValue = {
    habits: Habit[],
    currentChosenHabit: Habit | null
    filter: Filter[]
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
    payload: Filter
}
