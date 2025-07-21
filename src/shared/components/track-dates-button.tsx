"use client"

import { useEffect, useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import useProgressState from "../hooks/useProgressState"
import type { Habit } from "@/store/habit-slice"

type Props = {
    habitId: Habit['id']
}

export function TrackDatesButton({ habitId }: Props) {
    const [date, setDate] = useState<Date>()
    const { dispatchProgressTrack } = useProgressState()

    useEffect(() => {
        if (date) {
          dispatchProgressTrack(habitId, date);
        }
    }, [date])

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    data-empty={!date}
                    className="data-[empty=true]:text-muted-foreground justify-start text-left font-normal"
                >
                    <CalendarIcon />
                    {date ? format(date, "PPP") : <span>Track other dates</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    buttonVariant={'ghost'}
                    disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                    }
                />
            </PopoverContent>
        </Popover>
    )
}
