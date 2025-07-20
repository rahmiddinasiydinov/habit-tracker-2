
import type { HabitSubmission } from '../hooks/useUpadeHabits'
import DialogWrapper from './dialog-wrapper'
import { HabitForm } from './habit-form'

type Props = {
    type: HabitSubmission,
    triggerName: string,
    dialogTitle: string
}

export default function ManipulatedHabitForm({ type, triggerName, dialogTitle }: Props) {
    return (
        <DialogWrapper
            buttonVariant={'default'}
            buttonText={triggerName}
            title={dialogTitle}
        >
            <HabitForm type={type} />
        </DialogWrapper>
    )
}