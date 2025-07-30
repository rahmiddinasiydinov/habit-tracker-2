import { useDispatch, useSelector } from "react-redux"
import { toast } from "sonner";

import dateFormatter, { getAreDatesEqual } from "../utils/date-fns";
import { generateNewId } from "../utils/id-generator";
import type { ProgressStateValue } from "@/features/progress/types";
import type { Habit } from "@/features/habits/types";
import { progressActions } from "@/features/progress/slice";
import { selectProgressForOneHabitForOneDay } from "@/features/progress/utils";

export default function useProgressState(
    habitId: Habit['id'],
    date?: Date,
) {

    const dispatch = useDispatch();

    const isoDateString = date?.toISOString();
    const progressForOneHabitForOneDay = useSelector((state: ProgressStateValue) => selectProgressForOneHabitForOneDay(state, habitId, isoDateString));

    const toastDispatchedTrack = (date: string, action: 'add' | 'remove') => {
        const areDatesEqual = getAreDatesEqual(date, new Date().toISOString());
        if (action === 'add') {
            if (areDatesEqual) {
                toast.success(`Habit is tracked for today`)
            } else {
                toast.success(`Habit is tracked for date: ${dateFormatter(date)}`)

            }
        } else {
            if (areDatesEqual) {
                toast.info(`Habit is untracked for today`)
            } else {
                toast.info(`Habit is untracked for date: ${dateFormatter(date)}`)
            }
        }
    }

    const dispatchProgressTrack = (
        habitId: Habit['id'],
        date: Date,
        tickForToday?: (status: boolean) => void
    ) => {
        const ISOdate = date.toISOString();

        if (progressForOneHabitForOneDay) {
            dispatch(progressActions.removeTracking(progressForOneHabitForOneDay.id))
            if (tickForToday) {
                tickForToday(false)
            }

            toastDispatchedTrack(ISOdate, 'remove')
        } else {
            dispatch(progressActions.addTracking({
                id: generateNewId(),
                habitId,
                trackedDay: ISOdate
            }))
            if (tickForToday) {
                tickForToday(true)
            }

            toastDispatchedTrack(ISOdate, 'add')
        }
    }

    return ({
        dispatchProgressTrack
    }
    )
}
