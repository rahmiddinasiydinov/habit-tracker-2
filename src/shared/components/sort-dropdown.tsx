"use client"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import SortDropdownItem from "./sort-dropdown-item"
import type { Filter } from "@/store/habit-slice"

type Props = {
    triggerName: string,
    options: Filter[],
    dropdownTitle: string,
}

export function SortDropdown({ options, dropdownTitle, triggerName }: Props) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">{triggerName}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>{dropdownTitle}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {
                    options.map(option => <SortDropdownItem option={option} />)
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
