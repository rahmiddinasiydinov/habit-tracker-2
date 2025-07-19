import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { InputWithLabel } from "./input-with-label"
import { useCallback, useRef, useState, type FormEvent } from "react"
import { validateInputFields } from "../utils/validation"
import { useDispatch } from "react-redux"
import { habitActions, type Habit } from "@/store/habit-slice"
import { generateNewId } from "../utils/id-generator"

export type InputError = {
    identifier: string,
    message: string
} | null

export function InputForm() {
    const dispatch = useDispatch();
    const name = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLTextAreaElement>(null);

    const [formErrors, setFormErrors] = useState<InputError[]>([])


    const handleSubmit = useCallback(function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const errors: InputError[] = [];
        const nameValue = name.current?.value;
        const descriptionValue = description.current?.value;

        const nameError = validateInputFields("Name", nameValue, 1);
        const descriptionError = validateInputFields("Description", descriptionValue, 5);

        if (nameError) {
            errors.push(nameError)
        }
        if (descriptionError) {
            errors.push(descriptionError);
        }
        console.log(nameError, descriptionError);


        if (errors.length == 0 && nameValue && descriptionValue) {
            const date = new Date();
            const newHabit: Habit = {
                id: generateNewId(),
                name: nameValue,
                description: descriptionValue,
                createdAt: date.toISOString(),
                type: 'custom'
            }
            dispatch(habitActions.addHabit(newHabit))
            toast("You submitted the following values", {
                description: (
                    <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
                        <code className="text-white">New habit is created successfully!</code>
                    </pre>
                ),
            });

            setFormErrors([]);

            if (name.current) {
                name.current.value = ''
            }

            if (description.current) {
                description.current.value = ''
            }
        }
        else {
            setFormErrors([...errors]);
        }
    }, [name, description]);


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
            <Button type="submit"> {true ? ' Submit' : 'Submitting...'}</Button>
        </form>
    )
}
