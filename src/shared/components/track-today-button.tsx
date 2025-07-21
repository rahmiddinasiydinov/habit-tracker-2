import { useState } from 'react';

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import useProgressState from '../hooks/useProgressState';
import type { Habit } from '@/store/habit-slice';

type Props = {
    habitId: Habit['id']
}

export default function TrackTodayButton({ habitId }: Props) {
    const { getTrackForOneDay, dispatchProgressTrack } = useProgressState();

    const today = new Date();
    const ISOtoday = today.toISOString()
    const todaysTrack = getTrackForOneDay(habitId, ISOtoday);
    const [isChecked, setIsChecked] = useState(Boolean(todaysTrack) || false);

    const handleClick = () => {
        dispatchProgressTrack(habitId, today, setIsChecked);
    }

    const buttonClasses = isChecked ? 'bg-green-500 hover:bg-green-600' : '';
    const checkboxClasses = 'data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500';

    return (<Button variant={isChecked ? 'default' : 'outline'} className={`${buttonClasses} w-22`} onClick={handleClick} >
        <Checkbox id="track" className={`${checkboxClasses}`} checked={isChecked} />
        <Label htmlFor="track" className='pointer-events-none'>{isChecked ? 'Today' : 'Today'}</Label>
    </Button >
    )
}
