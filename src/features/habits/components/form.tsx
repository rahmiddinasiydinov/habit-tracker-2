import { Button } from "@/components/ui/button"
import { DialogClose } from "@/components/ui/dialog"

import { InputWithLabel } from "../../../shared/ui/input-with-label"
import { useHabitSubmission } from "../../../shared/hooks/useHabitSubmission.ts"
import type { HabitSubmission } from "../../../shared/hooks/useUpdateHabits.ts"

type Props = {
    type: HabitSubmission,
    handleModalClose: () => void
}

export function Form({ type, handleModalClose }: Props) {
    const { description, name, formErrors, handleSubmit } = useHabitSubmission(type, handleModalClose);

    return (
        <form onSubmit={handleSubmit} className="w-full space-y-6">
            <InputWithLabel ref={name} id="name" label="Name" placeholder="Enter habit name" />
            <InputWithLabel ref={description} id="description" label="Description" placeholder="Enter habit description" textarea />
            <p className="text-destructive">
                {formErrors.length > 0 &&
                    formErrors?.map(error =>
                        <li key={error?.identifier}>{error?.message}</li>
                    )
                }
            </p>
            <Button type="submit" className="mr-3">Submit</Button>
            <DialogClose asChild>
                <Button type="button" variant='outline'>Close</Button>
            </DialogClose>
        </form>
    )
}
