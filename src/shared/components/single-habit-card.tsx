import { CircleCheck, CircleXIcon } from "lucide-react"

import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { type Habit } from '@/store/habit-slice'
import dateFormatter from "../utils/date-fns"
import HabitBadges from "./habit-badges"
import SingleHabitActions from "./single-habit-actions"
import useProgressState from "../hooks/useProgressState"

type Props = {
    habit: Habit
}

export default function SingleHabitCard({ habit }: Props) {
    const isHabitCustom = habit.type === 'custom';
    const { getTrackForToday } = useProgressState();
    const todaysTrack = getTrackForToday(habit.id);

    return (
        <Card className={`${!isHabitCustom ? 'opacity-40 cursor-default select-none' : ''}`}>
            <CardHeader className="relative">
                <CardTitle className="md:text-2xl flex items-center">
                    {habit.name}
                    <HabitBadges isHabitCustom={isHabitCustom} isNew={habit.isNew} habitType={habit.type} />
                </CardTitle>
                <div className={`absolute right-7  md:-top-3 ${!isHabitCustom ? 'hidden' : ''}`}>
                    {
                        todaysTrack
                            ? <CircleCheck className="w-[25px] h-[25px] md:w-[50px] md:h-[50px] text-green-500" />
                            : <CircleXIcon className=" w-[50px] h-[50px] text-destructive"/>                            
                    }

                            </div>

            </CardHeader>
            <CardContent>
                <p className="w-[90%]  max-h-[50px]">
                    {habit.description.slice(0, 50)}{habit.description.length > 50 ? "..." : ''}
                </p>
            </CardContent>
            <CardFooter className="flex gap-3 flex-col md:flex-row md:justify-between  items-start">
                <p className="text-start">{dateFormatter(habit.createdAt)}</p>
                {
                    isHabitCustom && <CardAction className="flex items-center">
                        <SingleHabitActions habit={habit} />
                    </CardAction>
                }
            </CardFooter>
        </Card>
    )
}