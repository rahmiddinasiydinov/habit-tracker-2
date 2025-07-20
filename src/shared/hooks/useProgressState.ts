import type { ProgressStateValue, SingleProgressValue } from "@/store/progress-slice"
import { useSelector } from "react-redux"
import { getAreDatesEquel } from "../utils/date-fns";

export default function useProgressState() {
    const getAllTracks = () => useSelector((state: ProgressStateValue) => state.progress.progress);
    const allProgresses = getAllTracks();



    const getTracksForOneHabit = (habitId: string) => {
        const progressesForOneHabit = allProgresses.filter((progress: SingleProgressValue) => progress.habitId === habitId);

        return progressesForOneHabit;
    }


    const getTrackForToday = (habitId: string) => {
        const habitTracks = getTracksForOneHabit(habitId);
        
        
        const date = new Date()
        const today = date.toISOString();
        const trackForToday = habitTracks.find((track: SingleProgressValue) => {
            const areDatesEquel = getAreDatesEquel(today, track.trackedDay);
            return areDatesEquel
        });
        
        console.log(trackForToday);
        return trackForToday;
    }

    return ({
        getAllTracks,
        getTracksForOneHabit,
        getTrackForToday
    }
    )
}