"use client"
import { useEffect, useState } from "react"

import useProgressState from "../hooks/useProgressState"
import PopoverCalendar from "../ui/popover-calendar"
import type { Habit } from "@/features/habits/types"

type Props = {
    habitId: Habit['id']
}

export function TrackDatesButton({ habitId }: Props) {
    const [date, setDate] = useState<Date>()
    const { dispatchProgressTrack } = useProgressState(habitId, date)

    useEffect(() => {
        if (date) {
          dispatchProgressTrack(habitId, date);
        }
        
        //eslint-disable-next-line
    }, [date,  habitId])

    return (
        <PopoverCalendar date={date} setDate={(setDate)}/>
    )
}
