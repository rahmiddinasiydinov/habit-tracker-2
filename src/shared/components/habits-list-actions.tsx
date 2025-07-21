import { SortDropdown } from "./sort-dropdown"

type Props = {}

export default function HabitsListActions({}: Props) {
  return (
    <div>
        <SortDropdown options={['Custom', 'Predefined']} triggerName="Type" dropdownTitle="Choose the type"/>
    </div>
  )
}