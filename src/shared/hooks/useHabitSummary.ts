import useHabitsState from "./useHabitsState"
import useProgressState from "./useProgressState";
import dateFormatter from "../utils/date-fns";
import type { SingleProgressValue } from "@/features/progress/types";
import type { Habit } from "@/features/habits/types";

const getHabitIdsForDay = (tracks: SingleProgressValue[], date: string) => {
    return tracks.filter(track => dateFormatter(date) === dateFormatter(track.trackedDay)).map(track => track.habitId);
}

export default function useHabitSummary() {
    const { getAllHabits } = useHabitsState();
    const { getAllTracks } = useProgressState()

    const getCompletedHabits = (date: string) => {
        const tracks = getAllTracks();
        const habits = getAllHabits();
        const habitIdsForDay: Habit['id'][] = getHabitIdsForDay(tracks, date);
        const trackedHabits = habits.filter(habit => habitIdsForDay.some(id => habit.id === id));
        return trackedHabits
    }

    return (
        {
            getCompletedHabits
        }
    )
}
