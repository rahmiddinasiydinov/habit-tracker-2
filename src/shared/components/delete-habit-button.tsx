import DialogWrapper from './dialog-wrapper'
import { DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

type Props = {
    onDelete: () => void
}

export default function DeleteHabitButton({ onDelete }: Props) {
    return (
        <DialogWrapper
            buttonText="Delete"
            title="Are your sure to delete the habit?"
            buttonVariant={"destructive"}
        >
            <DialogClose asChild className="mr-4">
                <Button variant={'default'}>
                    Cancel
                </Button>
            </DialogClose>

            <DialogClose>
                <Button variant={'outline'} onClick={onDelete}>
                    Yes
                </Button>
            </DialogClose>

        </DialogWrapper>
    )
}