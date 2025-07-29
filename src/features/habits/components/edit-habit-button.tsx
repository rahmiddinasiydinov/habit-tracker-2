import { Button } from '@/components/ui/button'
import ManipulatedHabitForm from './manipulated-habit-form'

type Props = {
    onEdit: () => void
}

export default function EditHabitButton({ onEdit }: Props) {
    return (
        <Button onClick={onEdit} className='cursor-pointer px-0'>
            <ManipulatedHabitForm
                type='edit'
                triggerName='Edit'
                dialogTitle='Edit the habit:'
            />
        </Button>

    )
}
