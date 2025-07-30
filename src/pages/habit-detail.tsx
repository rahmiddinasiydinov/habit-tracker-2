import type {Habit, HabitStateValue} from "@/features/habits/types";
import {selectHabitsById} from "@/features/habits/utils";
import PageHeading from "@/shared/components/page-heading"
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom"

export default function HabitDetailPage() {
    const params = useParams()

    const id = params.id;

    const habit: Habit | undefined = useSelector((state: HabitStateValue) => selectHabitsById(state, id))

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
