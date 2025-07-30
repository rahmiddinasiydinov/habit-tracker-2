import { Button } from '@/components/ui/button'
import HabitForm from './habit-form'

type Props = {
    onEdit: () => void
}

export default function EditHabitButton({ onEdit }: Props) {
    return (
        <Button onClick={onEdit} className='cursor-pointer px-0'>
            <HabitForm
                type='edit'
                triggerName='Edit'
                dialogTitle='Edit the habit:'
            />
        </Button>

    )
}
