import SingleHabitCard from './single-habit-card';
import useHabitsState from '../hooks/useHabitsState';
import { useEffect, useState } from 'react';
import type { Habit } from '@/store/habit-slice';

type Props = {}

export default function HabitsList({ }: Props) {
  const [filteredHabits, setFilteredHabits] = useState<Habit[]>([])

  const {getAllHabits, getFilters} = useHabitsState();

  const filters = getFilters();
  const habits = getAllHabits();

  useEffect(() => {
    let storeFiltered:Habit[] = [];
    filters.forEach(filterValue => {
      let filtered = habits.filter(habit => habit.type === filterValue.toLocaleLowerCase());
      storeFiltered = [...storeFiltered, ...filtered]
    });

    setFilteredHabits([...storeFiltered])
  }, [filters])

  return (
    <ul className='mt-3 md:mt-5'>
      {filteredHabits.map(habit => {
        return <li key={habit.id} className='mb-2 md:mb-4 last:mb-0'>
          <SingleHabitCard habit={habit} />
        </li>
      })}
    </ul>
  )
}
