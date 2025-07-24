import type { Habit } from "../habits/types"

export type SingleProgressValue = {
    id: string
    habitId: Habit['id'],
    trackedDay: string
}

export type ProgressSliceValue = {
    progress: SingleProgressValue[]
}

export type ProgressStateValue = {
    progress: ProgressSliceValue;
}

export type AddActionType = {
    type: string,
    payload: SingleProgressValue
}

export type RemoveActionType = {
    type: string,
    payload: SingleProgressValue['id']
}