import { useCallback, useEffect, useRef, type FormEvent } from 'react'

import useHabitValidation from './useHabitValidation';
import useHabitUpdate, { type HabitSubmission } from './useUpdateHabits';
import { useSelector } from 'react-redux';
import { selectCurrentChosenHabit } from '@/features/habits/utils';

export const useHabitSubmission = (type: HabitSubmission, handleModalClose: () => void) => {
    const name = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLTextAreaElement>(null);

    const currentHabit = useSelector(selectCurrentChosenHabit)

    const { update } = useHabitUpdate(type);
    const { formErrors, setFormErrors, validateHabitInputs } = useHabitValidation();


    const isEditing = type === 'edit';
    const initialNameValue = isEditing ? currentHabit?.name : null
    const initialDescriptionValue = isEditing ? currentHabit?.description : null

    const handleSubmit = useCallback((e: FormEvent) => {
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
            handleModalClose()

            if (name.current && !isEditing) {
                name.current.value = ''
            }

            if (description.current && !isEditing) {
                description.current.value = ''
            }
        }
    }, [validateHabitInputs, update, currentHabit?.id, setFormErrors, handleModalClose, isEditing])

    useEffect(() => {
        if (name.current) {
            name.current.value = initialNameValue || ''
        }

        if (description.current) {
            description.current.value = initialDescriptionValue || ''
        }
    }, [initialDescriptionValue, initialNameValue])

    return ({
        description,
        name,
        formErrors,
        handleSubmit,
    })
}
