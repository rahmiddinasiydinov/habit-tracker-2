import { memo, useEffect, useState } from 'react';
import { compareDesc } from 'date-fns';

import SingleHabitCard from './single-habit-card';
import type { Habit } from '../types';
import { useSelector } from 'react-redux';
import { selectAllHabits, selectFilter } from '../utils';

const HabitsList = memo(function HabitsList() {
  const [filteredHabits, setFilteredHabits] = useState<Habit[]>([])
  const habits = useSelector(selectAllHabits);
  const filter = useSelector(selectFilter)

  useEffect(() => {
    let storeFiltered: Habit[] = [];
    filter.forEach(filterValue => {
      const filtered = habits.filter(habit => habit.type === filterValue.toLocaleLowerCase());
      storeFiltered = [...storeFiltered, ...filtered]
    });

    storeFiltered.sort((habit, nexthabit) => compareDesc(habit.createdAt, nexthabit.createdAt));

    setFilteredHabits([...storeFiltered])
  }, [filter, habits])

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
