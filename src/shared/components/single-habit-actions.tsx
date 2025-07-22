import { useDispatch } from 'react-redux'

import { habitActions, type Habit } from '@/store/habit-slice'
import TrackTodayButton from './track-today-button'
import EditHabitButton from './edit-habit-button'
import DeleteHabitButton from './delete-habit-button'
import { progressActions } from '@/store/progress-slice'
import { useCallback } from 'react'

type Props = {
    habit: Habit
}

export default function SingleHabitActions({ habit }: Props) {
    const dispatch = useDispatch();

    const handleEdit = useCallback(() => {
        dispatch(habitActions.setCurrentChosenHabit(habit))
    }, [habitActions, dispatch])

    const handleDelete = useCallback(() => {
        dispatch(habitActions.deleteHabit(habit.id));
        dispatch(progressActions.removeHabitTrackings(habit.id));
    }, [habitActions, progressActions, dispatch])

    return (
        <>
            <TrackTodayButton habitId={habit.id} />
            <EditHabitButton onEdit={handleEdit} />
            <DeleteHabitButton onDelete={handleDelete} />
        </>
    )
}
