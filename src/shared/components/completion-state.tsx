import SummaryWrapper from '../ui/summary-wrapper'
import { useState } from 'react'
import PopoverCalendar from '../ui/popover-calendar'

export default function CompletionState() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const ISODate = date?.toISOString();

    return (
        <SummaryWrapper
            date={ISODate}
            title={'Completion State'}
            calendar={<PopoverCalendar date={date} setDate={setDate} />}
        />
    )
}