import SingleHabitCard from './single-habit-card';
import useHabitsState from '../hooks/useHabitsState';
import { useEffect, useState } from 'react';
import type { Habit } from '@/store/habit-slice';
import { compareDesc } from 'date-fns';

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

    storeFiltered.sort((habit, nexthabit) => compareDesc(habit.createdAt, nexthabit.createdAt));
    
    setFilteredHabits([...storeFiltered])
  }, [filters, habits])

  return (
    <ul className='mt-3 md:mt-6 overflow-auto h-[95%] pr-3'>
      {filteredHabits.map(habit => {
        return <li key={habit.id} className='mb-2 md:mb-4 last:mb-0'>
          <SingleHabitCard habit={habit} />
        </li>
      })}
    </ul>
  )
}
