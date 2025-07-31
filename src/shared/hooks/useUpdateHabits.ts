import { useDispatch } from 'react-redux';
import { habitActions } from '@/features/habits/slice';
import { generateNewId } from '../utils/id-generator';
import type { Habit } from '@/features/habits/types';

export type HabitSubmission = 'add' | 'edit'

export default function useHabitUpdate(type: HabitSubmission) {
  const dispatch = useDispatch();

  const addHabit = (name: string, description: string) => {
    const date = new Date();
    const newHabit: Habit = {
      id: generateNewId(),
      name,
      description,
      createdAt: date.toISOString(),
      type: 'custom',
      isNew: true,
    }

    dispatch(habitActions.addHabit(newHabit));
  }

  const editHabit = (id: string, name: string, description: string,) => {
    dispatch(habitActions.editHabit({
      id,
      name,
      description
    }))
  }

  const update = ({ name, description, id }: { name: string, description: string, id?: string }) => {
    if (type === 'add') {
      addHabit(name, description)
    }
    else if (type === 'edit' && id) {
      editHabit(id, name, description,)
    }
  }

  return ({
    update
  }
  )
}
