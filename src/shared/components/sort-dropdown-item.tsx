import { DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu'
import { useEffect, useState } from 'react'
import { habitActions } from '@/features/habits/slice';
import { useDispatch, useSelector } from 'react-redux';
import type { HabitStatus } from '@/features/habits/types';
import { selectFilter } from '@/features/habits/utils';

type Props = {
    option: HabitStatus,
}

export default function SortDropdownItem({ option }: Props) {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    const isCheckBoxChecked = filter.includes(option)
    const [checked, setChecked] = useState(isCheckBoxChecked);
    const [hasFirstRun, setHasFirstRun] = useState(false);

    useEffect(() => {
        if (hasFirstRun) {
            dispatch(habitActions.updateFilter(option));
        } else{
            setHasFirstRun(true);
        }

         //eslint-disable-next-line
    }, [checked, dispatch, option])
    return (
        <DropdownMenuCheckboxItem
            checked={checked}
            onCheckedChange={setChecked}
        >
            {option}
        </DropdownMenuCheckboxItem>
    )
}
