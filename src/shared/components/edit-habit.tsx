import ManipulatedHabitForm from './manipulated-habit-form'

type Props = {}

export default function EditHabit({ }: Props) {
    return (
        <ManipulatedHabitForm
            type='edit'
            triggerName='Edit'
            dialogTitle='Edit the habit:'
        />
    )
}