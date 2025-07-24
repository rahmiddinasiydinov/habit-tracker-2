import type { Habit } from "@/features/habits/types";
import PageHeading from "@/shared/components/page-heading"
import useHabitsState from "@/shared/hooks/useHabitsState";
import { useParams } from "react-router-dom"

export default function HabitDetailPage() {
  const params = useParams()
  const { getHabitById } = useHabitsState();

  const id = params.id;
  let habit: Habit | undefined = undefined;

  if (id) {
    habit = getHabitById(id);
  }

  let content = <p>We are sorry, we could not find habit</p>

  if (habit) {
    content = <h1>{habit.name}</h1>
  }

  return (
    <>
      <PageHeading>{content}</PageHeading>
      <p className="mt-4 text-5xl md:text-8xl">🚧</p>
    </>
  )
}
