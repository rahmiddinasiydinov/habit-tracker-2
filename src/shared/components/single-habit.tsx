import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import type { Habit } from '@/store/habit-slice'
import dateFormatter from "../utils/date-formatter"
import { CircleCheck, CircleXIcon } from "lucide-react"

type Props = {
    habit: Habit
}

export default function SingleHabit({ habit }: Props) {
    const isHabitCustom = habit.type === 'custom';

    return (
        <Card className={`${!isHabitCustom ? 'opacity-40 cursor-default select-none' : ''}`}>
            <CardHeader className="relative">
                <CardTitle className="md:text-2xl flex items-center">
                    {habit.name}
                    <Badge variant={isHabitCustom ? "default" : "secondary"} className="ml-2 md:ml-5">{habit.type}</Badge>
                </CardTitle>
                <div className={`${!isHabitCustom ? 'hidden' : ''}`}>
                    <CircleCheck className="absolute right-7 top-0 w-[50px] h-[50px] text-green-500" />
                    <CircleXIcon className="absolute right-20 top-0 w-[50px] h-[50px] text-destructive" />
                </div>

            </CardHeader>
            <CardContent>
                <p>

                </p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <p>{dateFormatter(habit.createdAt)}</p>
                {
                    isHabitCustom && <CardAction>
                        <Button className="mr-4 cursor-pointer">Edit</Button>
                        <Button variant={"destructive"} className="cursor-pointer">Delete</Button>
                    </CardAction>
                }
            </CardFooter>
        </Card>
    )
}