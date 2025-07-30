import dateFormatter from "../utils/date-fns";
import type {SingleProgressValue} from "@/features/progress/types";
import type {Habit} from "@/features/habits/types";
import {useSelector} from "react-redux";
import {selectAllProgress} from "@/features/progress/utils";
import {selectAllHabits} from "@/features/habits/utils";

const getHabitIdsForDay = (tracks: SingleProgressValue[], date: string) => {
    return tracks.filter(track => dateFormatter(date) === dateFormatter(track.trackedDay)).map(track => track.habitId);
}

export default function useHabitSummary() {
    const progress =  useSelector(selectAllProgress);
    const habits = useSelector(selectAllHabits);

    const getCompletedHabits = (date: string) => {
        const habitIdsForDay: Habit['id'][] = getHabitIdsForDay(progress, date);
        return habits.filter(habit => habitIdsForDay.some(id => habit.id === id))
    }

    return (
        {
            getCompletedHabits
        }
    )
}
