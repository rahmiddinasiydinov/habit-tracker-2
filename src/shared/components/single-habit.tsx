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

type Props = {
    habit: Habit
}

export default function SingleHabit({ habit }: Props) {
    const isHabitCustom = habit.type === 'custom';

    return (
        <Card className={`${!isHabitCustom ? 'opacity-70' : ''}`}>
            <CardHeader>
                <CardTitle className="md:text-2xl flex items-center">
                    {habit.name}
                    <Badge variant={"secondary"} className="ml-2 md:ml-5">{habit.type}</Badge>
                </CardTitle>
                <CardDescription></CardDescription>
                {
                    isHabitCustom && <CardAction>
                        <Button>Edit</Button>
                        <Button variant={"destructive"}>Delete</Button>
                    </CardAction>
                }

            </CardHeader>
            <CardContent>
                <p>{ }</p>
            </CardContent>
            <CardFooter>
                <p>{dateFormatter(habit.createdAt)}</p>
            </CardFooter>
        </Card>
    )
}