import { progressActions, type ProgressStateValue, type SingleProgressValue } from "@/store/progress-slice"
import { useDispatch, useSelector } from "react-redux"
import dateFormatter, { getAreDatesEquel } from "../utils/date-fns";
import type { Habit } from "@/store/habit-slice";
import { generateNewId } from "../utils/idGenerator";
import { toast } from "sonner";

export default function useProgressState() {
    const dispatch = useDispatch();
    const getAllTracks = () => useSelector((state: ProgressStateValue) => state.progress.progress);
    const allProgresses = getAllTracks();

    const getTracksForOneHabit = (habitId: string) => {
        const progressesForOneHabit = allProgresses.filter((progress: SingleProgressValue) => progress.habitId === habitId);

        return progressesForOneHabit;
    }

    const getTrackForOneDay = (habitId: string, date: string) => {
        const habitTracks = getTracksForOneHabit(habitId);

        const trackForToday = habitTracks.find((track: SingleProgressValue) => {
            const areDatesEquel = getAreDatesEquel(date, track.trackedDay);
            return areDatesEquel
        });

        return trackForToday;
    }

    const toastDispatchedTrack = (date: string, action: 'add' | 'remove') => {
        const areDatesEquel = getAreDatesEquel(date, new Date().toISOString());
        if (action === 'add') {
            if (areDatesEquel) {
                toast.success(`Habit is tracked for today`)
            } else {
                toast.success(`Habit is tracked for date: ${dateFormatter(date)}`)

            }
        } else {
            if (areDatesEquel) {
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
        const progressTrack: SingleProgressValue | undefined = getTrackForOneDay(habitId, ISOdate);

        if (progressTrack) {
            dispatch(progressActions.removeTracking(progressTrack.id))
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
        getAllTracks,
        getTracksForOneHabit,
        getTrackForOneDay,
        dispatchProgressTrack
    }
    )
}
