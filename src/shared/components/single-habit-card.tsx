import { CircleCheck, CircleXIcon } from "lucide-react"

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { type Habit } from '@/store/habit-slice'
import dateFormatter from "../utils/date-fns"
import HabitBadges from "./habit-badges"
import SingleHabitActions from "./single-habit-actions"
import useProgressState from "../hooks/useProgressState"
import { TrackDatesButton } from "./track-dates-button"

type Props = {
    habit: Habit
}

export default function SingleHabitCard({ habit }: Props) {
    const isHabitCustom = habit.type === 'custom';
    const { getTrackForOneDay } = useProgressState();

    const today = new Date().toDateString();
    const todaysTrack = getTrackForOneDay(habit.id, today);

    return (
        <Card className={`${!isHabitCustom ? 'opacity-40 cursor-default select-none' : ''}`}>
            <CardHeader className="relative">
                <CardTitle className="md:text-2xl flex flex-col xl:flex-row xl:items-center">
                    {habit.name}
                    <HabitBadges isHabitCustom={isHabitCustom} isNew={habit.isNew} habitType={habit.type} />
                </CardTitle>
                <CardDescription>
                    {dateFormatter(habit.createdAt)}
                </CardDescription>
                <div className={`absolute right-7  md:-top-3 ${!isHabitCustom ? 'hidden' : ''}`}>
                    {
                        todaysTrack
                            ? <CircleCheck className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] text-green-500" />
                            : <CircleXIcon className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] text-destructive" />
                    }
                </div>

            </CardHeader>
            <CardContent>
                <p className="w-[90%]  max-h-[50px]">
                    {habit.description.slice(0, 50)}{habit.description.length > 50 ? "..." : ''}
                </p>
            </CardContent>
            <CardFooter className="flex gap-3 flex-col sm:flex-row sm:justify-between  items-start flex-wrap">
                {
                    isHabitCustom && <>
                        <TrackDatesButton habitId={habit.id}/>
                        <CardAction className="flex items-center flex-wrap gap-2 lg:gap-3">
                            <SingleHabitActions habit={habit} />
                        </CardAction>
                    </>
                }
            </CardFooter>
        </Card>
    )
}