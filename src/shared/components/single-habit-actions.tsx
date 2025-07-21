import TrackTodayButton from './track-today-button'
import EditHabitButton from './edit-habit-button'
import DeleteHabitButton from './delete-habit-button'
import { useDispatch } from 'react-redux'
import { habitActions, type Habit } from '@/store/habit-slice'

type Props = {
    habit: Habit
}

export default function SingleHabitActions({ habit }: Props) {
    const dispatch = useDispatch();


    const handleEdit = () => {
        dispatch(habitActions.setCurrentChosenHabit(habit))
    }

    const handleDelete = () => {
        dispatch(habitActions.deleteHabit(habit.id));
    }

    return (
        <>
                <TrackTodayButton habitId={habit.id}/>
                <EditHabitButton onEdit={handleEdit} />
                <DeleteHabitButton onDelete={handleDelete} />
        </>
    )
}