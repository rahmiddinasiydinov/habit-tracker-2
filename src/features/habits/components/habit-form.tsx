import DialogWrapper from '@/shared/ui/dialog-wrapper'
import type { HabitSubmission } from '@/shared/hooks/useUpadeHabits'
import { Form } from './form'

type Props = {
    type: HabitSubmission,
    triggerName: string,
    dialogTitle: string
}

export default function HabitForm({ type, triggerName, dialogTitle }: Props) {
    return (
        <DialogWrapper
            buttonVariant={'default'}
            buttonText={triggerName}
            title={dialogTitle}
        >
            <Form type={type} />
        </DialogWrapper>
    )
}
