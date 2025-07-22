"use client"

import { type Dispatch, type SetStateAction } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

type Props = {
    date?: Date,
    setDate: Dispatch<SetStateAction<Date|undefined>>
}


export default function PopoverCalendar({ date, setDate }: Props) {
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
                    required
                    mode="single"
                    captionLayout="dropdown"
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