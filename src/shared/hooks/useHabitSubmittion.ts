import { useEffect, useRef, type FormEvent } from 'react'
import useHabitValidation from './useHabitValidation';
import useHabitUpdate, { type HabitSubmission } from './useUpadeHabits';
import { useSelector } from 'react-redux';
import type { HabitStateValue } from '@/store/habit-slice';

export const useHabitSubmittion = (type: HabitSubmission) => {
    const { update } = useHabitUpdate(type);
    const currentHabit = useSelector((state: HabitStateValue) => state.habits.currentChosenHabit)

    const initiaNameValue = type === 'edit'? currentHabit?.name : null
    const initiaDescriptionValue = type === 'edit'? currentHabit?.description: null

    const name = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLTextAreaElement>(null);
    const { formErrors, setFormErrors, validateHabitInputs } = useHabitValidation();


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const nameValue = name.current?.value;
        const descriptionValue = description.current?.value;

        validateHabitInputs(nameValue, descriptionValue);

        if (formErrors.length == 0 && nameValue && descriptionValue) {
            update({
                name: nameValue,
                description: descriptionValue,
                id: currentHabit?.id
            })

            setFormErrors([]);

            if (name.current) {
                name.current.value = ''
            }

            if (description.current) {
                description.current.value = ''
            }
        }
    }

    useEffect(()=>{
        if (name.current) {
            name.current.value = initiaNameValue || ''
        }
        
        if(description.current){
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