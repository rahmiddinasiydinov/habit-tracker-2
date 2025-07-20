import { useSelector } from 'react-redux'

import type { HabitStateValue } from '@/store/habit-slice'
import SingleHabitCard from './single-habit-card';

type Props = {}

export default function HabitsList({ }: Props) {
  const habits = useSelector((state: HabitStateValue) => state.habits.habits);

  return (
    <ul>
      {habits.map(habit => {
        return <li key={habit.id} className='mb-2 md:mb-4 last:mb-0'>
          <SingleHabitCard habit={habit} />
        </li>
      })}

    </ul>
  )
}