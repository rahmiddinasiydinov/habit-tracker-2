import DialogWrapper from '@/shared/ui/dialog-wrapper'
import type { HabitSubmission } from '@/shared/hooks/useUpdateHabits'
import { Form } from './form'
import { useCallback, useState } from 'react'

type Props = {
    type: HabitSubmission,
    triggerName: string,
    dialogTitle: string
}

export default function HabitForm({ type, triggerName, dialogTitle }: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalClose = useCallback(function handleModalClose() {
        setIsModalOpen(false)
    }, [])

    return (
        <DialogWrapper
            buttonVariant={'default'}
            buttonText={triggerName}
            title={dialogTitle}
            isDialogOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
        >
            <Form type={type} handleModalClose={handleModalClose} />
        </DialogWrapper>
    )
}
