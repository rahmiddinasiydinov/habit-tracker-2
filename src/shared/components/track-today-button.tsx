import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { useState } from 'react';
import useProgressState from '../hooks/useProgressState';
import type { Habit } from '@/store/habit-slice';
import { useDispatch } from 'react-redux';
import { progressActions } from '@/store/progress-slice';
import { generateNewId } from '../utils/idGenerator';

type Props = {
    currentHabitId: Habit['id']
}

export default function TrackTodayButton({ currentHabitId }: Props) {
    const dispatch = useDispatch();
    const {getTrackForToday} = useProgressState();
    const todaysTrack = getTrackForToday(currentHabitId);
    const [isChecked, setIsChecked] = useState(Boolean(todaysTrack)||false);

    const handleClick = () => {
        console.log(todaysTrack);
        
        
        if (todaysTrack) {
            dispatch(progressActions.removeTracking(todaysTrack.id))
            setIsChecked(false)
        } else{
            const date =  new Date();
            const today = date.toISOString();
            dispatch(progressActions.addTracking({
                id: generateNewId(),
                habitId: currentHabitId,
                trackedDay: today
            }))
            setIsChecked(true)
        }
    }

    const buttonClasses = isChecked ? 'bg-green-500 hover:bg-green-600' : '';
    const checkboxClasses = 'data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500';


    return (<Button variant={isChecked ? 'default' : 'outline'} className={`${buttonClasses} w-30 mr-4`} onClick={handleClick} >
        <Checkbox id="track" className={`${checkboxClasses}`} checked={isChecked} />
        <Label htmlFor="track" className='pointer-events-none'>{isChecked ? 'Tracked' : 'Untracked'}</Label>
    </Button >
    )
}