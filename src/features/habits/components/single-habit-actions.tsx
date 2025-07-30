import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { habitActions } from '@/features/habits/slice'
import { progressActions } from '@/features/progress/slice'
import TrackTodayButton from './track-today-button'
import EditHabitButton from './edit-habit-button'
import DeleteHabitButton from './delete-habit-button'
import type { Habit } from '../types'

type Props = {
    habit: Habit
}

export default function SingleHabitActions({ habit }: Props) {
    const dispatch = useDispatch();

    const handleEdit = useCallback(() => {
        dispatch(habitActions.setCurrentChosenHabit(habit))
    }, [dispatch, habit])

    const handleDelete = useCallback(() => {
        dispatch(habitActions.deleteHabit(habit.id));
        dispatch(progressActions.removeHabitTrackings(habit.id));
    }, [dispatch, habit])

    return (
        <>
            <TrackTodayButton habitId={habit.id} />
            {
                habit.type === 'custom' && <>
                    <EditHabitButton onEdit={handleEdit} />
                    <DeleteHabitButton onDelete={handleDelete} />
                </>
            }
        </>
    )
}
