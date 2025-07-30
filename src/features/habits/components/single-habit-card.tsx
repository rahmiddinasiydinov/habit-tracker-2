import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import dateFormatter from "../../../shared/utils/date-fns"
import HabitBadges from "./habit-badges"
import SingleHabitActions from "./single-habit-actions"
import { TrackDatesButton } from "@/shared/components/track-dates-button.tsx"
import type { Habit } from "../types"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { habitActions } from "../slice"

type Props = {
    habit: Habit
}

export default function SingleHabitCard({ habit }: Props) {
    const dispatch = useDispatch();
    const isHabitCustom = habit.type === 'custom';
    const areActionsButtonsEnabled = habit.type === 'custom' || habit.type === 'active-predefined'

    const handleStartTracking = () => {
        const updatedType = habit.type === "predefined" ? "active-predefined" : "predefined"
        dispatch(habitActions.updatePredefinedType({ habitId: habit.id, type: updatedType }))
    }

    return (<div className="relative">
        <Card className={`${!areActionsButtonsEnabled ? 'opacity-40 cursor-default select-none' : ''}`}>
            <CardHeader className="relative">
                <CardTitle className="md:text-2xl flex flex-col xl:flex-row xl:items-center">
                    {habit.name}
                    <HabitBadges isHabitCustom={isHabitCustom} isNew={habit.isNew} habitType={habit.type} />
                </CardTitle>
                <CardDescription>
                    {dateFormatter(habit.createdAt)}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="w-[90%]  max-h-[50px]">
                    {habit.description.slice(0, 50)}{habit.description.length > 50 ? "..." : ''}
                </p>

            </CardContent>
            <CardFooter className="relative flex gap-3 flex-col sm:flex-row sm:justify-between  items-start flex-wrap">
                {
                    areActionsButtonsEnabled && <>
                        <div>
                            <TrackDatesButton habitId={habit.id} />
                            <Link to={'/habit/' + habit.id} className="ml-2 text-blue-600">Details...</Link>
                        </div>
                        <CardAction className="flex items-center flex-wrap gap-2 lg:gap-3">
                            <SingleHabitActions habit={habit} />
                        </CardAction>
                    </>
                }

            </CardFooter>
        </Card>
        {!isHabitCustom && <Button className="absolute bottom-6 right-3 sm:right-3 sm:my-auto sm:top-0 sm:bottom-0 z-10 bg-gray-600 hover:bg-gray-800 cursor-pointer transition duration-200" variant={'default'} onClick={handleStartTracking}>{habit.type === 'predefined' ? "Start tracking" : "Stop tracking"}</Button>}
    </div>
    )
}
