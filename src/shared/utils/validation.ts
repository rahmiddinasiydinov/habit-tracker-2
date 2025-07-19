import type { InputError } from "../hooks/useHabitValidation";

;

export const validateInputFields = (identifier: string, value: string | undefined, minLength: number): InputError => {
    
    if (value === undefined || value.length < minLength) {
        return {
            identifier,
            message: identifier + " should have at least " + minLength + " charachers."
        }
    }
    return null;
}


