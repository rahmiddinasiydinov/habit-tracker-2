import { DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu'
import { useEffect, useState } from 'react'
import useHabitsState from '../hooks/useHabitsState';
import { habitActions, type Filter } from '@/store/habit-slice';
import { useDispatch } from 'react-redux';

type Props = {
    option: Filter,
}

export default function SortDropdownItem({ option }: Props) {
    const dispatch = useDispatch();
    const {getFilters} = useHabitsState();
    const isCheckBoxChecked = getFilters().includes(option)
    const [checked, setChecked] = useState(isCheckBoxChecked);

    useEffect(() => {
        dispatch(habitActions.updateFilter(option))
    }, [checked])

    return (
        <DropdownMenuCheckboxItem
            checked={checked}
            onCheckedChange={setChecked}
        >
            {option.toUpperCase()}
        </DropdownMenuCheckboxItem>
    )
}
