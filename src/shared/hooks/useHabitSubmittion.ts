import { useEffect, useRef, type FormEvent } from 'react'

import useHabitValidation from './useHabitValidation';
import useHabitUpdate, { type HabitSubmission } from './useUpadeHabits';
import useHabitsState from './useHabitsState';

export const useHabitSubmittion = (type: HabitSubmission) => {
    const name = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLTextAreaElement>(null);
    
    const { update } = useHabitUpdate(type);
    const { formErrors, setFormErrors, validateHabitInputs } = useHabitValidation();
    const {getCurrentChosenHabit} = useHabitsState()
    
    const currentHabit = getCurrentChosenHabit()
    const isEditing = type === 'edit';
    const initiaNameValue = isEditing ? currentHabit?.name : null
    const initiaDescriptionValue = isEditing ? currentHabit?.description : null

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const nameValue = name.current?.value;
        const descriptionValue = description.current?.value;
        const areValuesValid = validateHabitInputs(nameValue);

        if (areValuesValid && nameValue) {
            update({
                name: nameValue,
                description: descriptionValue || '',
                id: currentHabit?.id
            })

            setFormErrors([]);
            
            if (name.current && !isEditing) {
                name.current.value = ''
            }

            if (description.current && !isEditing) {
                description.current.value = ''
            }
        }
    }

    useEffect(() => {
        if (name.current) {
            name.current.value = initiaNameValue || ''
        }

        if (description.current) {
            description.current.value = initiaDescriptionValue || ''
        }
    }, [])

    return ({
        description,
        name,
        formErrors,
        handleSubmit,
    })
}
