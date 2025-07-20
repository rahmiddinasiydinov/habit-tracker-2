import SingleHabitCard from './single-habit-card';
import useHabitsState from '../hooks/useHabitsState';

type Props = {}

export default function HabitsList({ }: Props) {
  const {getAllHabits} = useHabitsState()
  const habits = getAllHabits();

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