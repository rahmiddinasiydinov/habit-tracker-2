import { useDispatch } from "react-redux"
import { CircleCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { habitActions, type Habit } from '@/store/habit-slice'
import dateFormatter from "../utils/dateFormatter"
import EditHabit from "./edit-habit"
import SingleHabitBadges from "./single-habit-badges"

type Props = {
    habit: Habit
}

export default function SingleHabit({ habit }: Props) {
    const dispatch = useDispatch()
    const isHabitCustom = habit.type === 'custom';

    const handleEdit = () => {
        dispatch(habitActions.setCurrentChosenHabit(habit))
    }

    const handleDelete = () => {
        dispatch(habitActions.deleteHabit(habit.id))
    }

    return (
        <Card className={`${!isHabitCustom ? 'opacity-40 cursor-default select-none' : ''}`}>
            <CardHeader className="relative">
                <CardTitle className="md:text-2xl flex items-center">
                    {habit.name}
                    <SingleHabitBadges isHabitCustom={isHabitCustom} isNew={habit.isNew} habitType={habit.type} />
                </CardTitle>
                <div className={`absolute right-7 -top-3 md:top-0 ${!isHabitCustom ? 'hidden' : ''}`}>
                    <CircleCheck className=" w-[50px] h-[50px] text-green-500" />
                    {/* <CircleXIcon className=" w-[50px] h-[50px] text-destructive" /> */}
                </div>

            </CardHeader>
            <CardContent>
                <p>

                </p>
            </CardContent>
            <CardFooter className="flex gap-3 flex-col md:flex-row md:justify-between  items-start">
                <p className="text-start">{dateFormatter(habit.createdAt)}</p>
                {
                    isHabitCustom && <CardAction>
                        <Button className="mr-4 cursor-pointer" onClick={handleEdit}>
                            <EditHabit />
                        </Button>
                        <Button variant={"destructive"} className="cursor-pointer" onClick={handleDelete}>
                            Delete
                        </Button>
                    </CardAction>
                }
            </CardFooter>
        </Card>
    )
}