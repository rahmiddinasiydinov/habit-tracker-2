import SingleHabitCard from './single-habit-card';
import useHabitsState from '../hooks/useHabitsState';
import { memo, useEffect, useState } from 'react';
import type { Habit } from '@/store/habit-slice';
import { compareDesc } from 'date-fns';

const HabitsList = memo(function HabitsList() {
  const [filteredHabits, setFilteredHabits] = useState<Habit[]>([])
  const { getAllHabits, getFilters } = useHabitsState();

  const filters = getFilters();
  const habits = getAllHabits();

  useEffect(() => {
    let storeFiltered: Habit[] = [];
    filters.forEach(filterValue => {
      let filtered = habits.filter(habit => habit.type === filterValue.toLocaleLowerCase());
      storeFiltered = [...storeFiltered, ...filtered]
    });

    storeFiltered.sort((habit, nexthabit) => compareDesc(habit.createdAt, nexthabit.createdAt));

    setFilteredHabits([...storeFiltered])
  }, [filters, habits])

  return (
    <ul className='mt-10 md:mt-6 overflow-auto h-[96%] pr-0 md:pr-3'>
      {filteredHabits.map(habit => {
        return <li key={habit.id} className='mb-2 md:mb-4 last:mb-0'>
          <SingleHabitCard habit={habit} />
        </li>
      })}
    </ul>
  )
}
)

export default HabitsList
