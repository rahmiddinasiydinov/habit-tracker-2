"use client"
import { useEffect, useState } from "react"

import useProgressState from "../hooks/useProgressState"
import type { Habit } from "@/store/habit-slice"
import PopoverCalendar from "./popover-calendar"

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
        <PopoverCalendar date={date} setDate={(setDate)}/>
    )
}
