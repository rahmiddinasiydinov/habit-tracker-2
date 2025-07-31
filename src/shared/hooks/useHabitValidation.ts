import {useState} from 'react'
import {validateInputFields} from '../utils/validation';

type NameValue = string | undefined

export type InputError = {
    identifier: string,
    message: string
} | null

export default function useHabitValidation() {
    const [formErrors, setFormErrors] = useState<InputError[]>([]);

    const validateHabitInputs = (nameValue: NameValue) => {
        const errors: InputError[] = []

        const nameError = validateInputFields("Name", nameValue?.trim(), 5);

        if (nameError) {
            errors.push(nameError)
        }

        setFormErrors(errors)
        return errors.length === 0;
    }

    return (
        {
            formErrors,
            validateHabitInputs,
            setFormErrors
        }
    )
}
