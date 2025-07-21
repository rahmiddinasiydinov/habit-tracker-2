import { Button } from "@/components/ui/button"
import { InputWithLabel } from "./input-with-label"
import { useHabitSubmittion } from "../hooks/useHabitSubmittion"
import type { HabitSubmission } from "../hooks/useUpadeHabits"
import { DialogClose } from "@radix-ui/react-dialog"

type Props = {
    type: HabitSubmission
}

export function HabitForm({ type }: Props) {
    const { description, name, formErrors, handleSubmit } = useHabitSubmittion(type);

    return (
        <form onSubmit={handleSubmit} className="w-2/3 space-y-6">
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
            <DialogClose>
                <Button type="button" variant='outline'>Close</Button>
            </DialogClose>
        </form>
    )
}
