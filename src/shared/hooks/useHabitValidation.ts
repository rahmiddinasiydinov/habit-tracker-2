import { useState } from 'react'
import { validateInputFields } from '../utils/validation';

type NameValue = string | undefined
type DescriptionValue = string | undefined

export type InputError = {
    identifier: string,
    message: string
} | null

export default function useHabitValidation() {
    const [formErrors, setFormErrors] = useState<InputError[]>([]);

    const validateHabitInputs = (nameValue: NameValue, descriptionValue: DescriptionValue) => {
        const errors: InputError[] = []

        const nameError = validateInputFields("Name", nameValue?.trim(), 1);
        const descriptionError = validateInputFields("Description", descriptionValue?.trim(), 5);

        if (nameError) {
            errors.push(nameError)
        }
        if (descriptionError) {
            errors.push(descriptionError);
        }

        setFormErrors(errors)
        
        const AreValuesValid = errors.length === 0;
        
        return AreValuesValid;
    }


    return (
        {
            formErrors,
            validateHabitInputs,
            setFormErrors
        }
    )
}