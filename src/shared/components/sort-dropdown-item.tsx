import { DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu'
import { useEffect, useState } from 'react'
import useHabitsState from '../hooks/useHabitsState';
import { habitActions } from '@/features/habits/slice';
import { useDispatch } from 'react-redux';
import type { Filter } from '@/features/habits/types';

type Props = {
    option: Filter,
}

export default function SortDropdownItem({ option }: Props) {
    const dispatch = useDispatch();
    const { getFilters } = useHabitsState();
    const isCheckBoxChecked = getFilters().includes(option)
    const [checked, setChecked] = useState(isCheckBoxChecked);
    const [hasFirstRun, setHasFirstRun] = useState(false);

    useEffect(() => {
        if (hasFirstRun) {
            dispatch(habitActions.updateFilter(option));
        } else{
            setHasFirstRun(true);
        }

    }, [checked])

    return (
        <DropdownMenuCheckboxItem
            checked={checked}
            onCheckedChange={setChecked}
        >
            {option}
        </DropdownMenuCheckboxItem>
    )
}
