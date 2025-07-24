"use client"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import SortDropdownItem from "../components/sort-dropdown-item"
import type { Filter } from "@/features/habits/types"

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
                    options.map(option => <SortDropdownItem key={option} option={option} />)
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
