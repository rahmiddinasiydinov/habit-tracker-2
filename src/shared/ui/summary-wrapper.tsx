import type { ReactNode } from "react"
import CompletedHabitBadges from "../../features/habits/components/completed-habit-badges"
import useHabitSummary from "../hooks/useHabitSummary";
import useHabitsState from "../hooks/useHabitsState";

type Props = {
  title: string,
  calendar?: ReactNode,
  date?: string
}

export default function SummaryWrapper({ title, calendar, date }: Props) {
  const { getCompletedHabits } = useHabitSummary();
  const { getHabitsByType } = useHabitsState();
  const dayToDisplay = date ?? new Date().toISOString();
  const completedHabits = getCompletedHabits(dayToDisplay);

  const customHabits = getHabitsByType('custom');

  let performance = completedHabits.length / customHabits.length * 100;
  performance = isNaN(performance) ? 0.0 : performance;

  const getPerformance = () => {
    if (performance > 85) return "😊"
    if (performance > 60) return "😐"
    if (performance > 30) return "😟"
    return "🤕"
  }

  const sticker = getPerformance()

  return (
    <div className='p-2 bg-secondary md:p-8 shadow-md h-[50%] rounded-lg'>
      <div className="flex items-center gap-3">
        <h3 className='text-lg md:text-xl font-bold'>{title}</h3>
        {
          calendar && <div>{calendar}</div>
        }
        <p className="text-lg md:text-xl font-bold">
          (<span className="">{completedHabits.length}</span>
          /
          <span>{customHabits.length}</span>)
        </p>
      </div>
      <p className="mt-2">Performance {performance.toFixed(1)}% {sticker}</p>
      <div className="mt-4">
        {completedHabits && completedHabits.map(habit => <CompletedHabitBadges key={habit.id} title={habit.name} />)}
        {!completedHabits.length && <p className="text-lg font-bold">There isn't any completed task for this date</p>}
      </div>
    </div>
  )
}