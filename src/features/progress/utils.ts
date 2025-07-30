import {createSelector} from "@reduxjs/toolkit";
import type {ProgressStateValue, SingleProgressValue} from "./types";
import type {Habit} from "../habits/types";
import {getAreDatesEqual} from "@/shared/utils/date-fns";

export const selectAllProgress = (state: ProgressStateValue) => state.progress.progress;

export const selectProgressForOneHabit = createSelector(
    [
        selectAllProgress,
        (_, habitId: Habit["id"]) => habitId
    ],
    (progress, habitId) => {
        return progress.filter((progress: SingleProgressValue) => progress.habitId === habitId);
    }
)




export const selectProgressForOneHabitForOneDay = createSelector(
    [
        selectProgressForOneHabit,
        (_: ProgressStateValue, __: Habit["id"], date: string | undefined) => date
    ],
    (oneHabitProgress, date) => {
        if (!date) return null

        return oneHabitProgress.find((track: SingleProgressValue) => {
            return getAreDatesEqual(date, track.trackedDay)
        });
    }
)
