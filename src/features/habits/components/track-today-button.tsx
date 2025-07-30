import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import useProgressState from '../../../shared/hooks/useProgressState';
import type { Habit } from '../types';
import { useSelector } from 'react-redux';
import type { ProgressStateValue } from '@/features/progress/types';
import { selectProgressForOneHabitForOneDay } from '@/features/progress/utils';

type Props = {
    habitId: Habit['id']
}

export default function TrackTodayButton({ habitId }: Props) {
    const today = new Date();
    const {  dispatchProgressTrack } = useProgressState( habitId, today);

    const ISOToday = today.toISOString()
    const todayProgress = useSelector((state:ProgressStateValue) => selectProgressForOneHabitForOneDay(state, habitId, ISOToday));
    const [isChecked, setIsChecked] = useState(Boolean(todayProgress) || false);

    const handleClick = () => {
        dispatchProgressTrack(habitId, today, setIsChecked);
    }

    const buttonClasses = isChecked ? 'bg-green-500 hover:bg-green-600' : '';
    const checkboxClasses = 'data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500';

    useEffect(() => {
        
        if (todayProgress) {
            setIsChecked(true)
        } else {
            setIsChecked(false)
        }
    }, [todayProgress])

    return (<Button variant={isChecked ? 'default' : 'outline'} className={`${buttonClasses} w-22`} onClick={handleClick} >
        <Checkbox id="track" className={`${checkboxClasses}`} checked={isChecked} />
        <Label htmlFor="track" className='pointer-events-none'>{isChecked ? 'Today' : 'Today'}</Label>
    </Button >
    )
}
