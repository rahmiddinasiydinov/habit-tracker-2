import type { InputError } from "../components/form";

export const validateInputFields = (identifier: string, value: string | undefined, minLength: number): InputError => {
    console.log(value, minLength);
    
    if (value === undefined || value.length < minLength) {
        return {
            identifier,
            message: identifier + " should have at least " + minLength + " charachers."
        }
    }
    return null;
}


