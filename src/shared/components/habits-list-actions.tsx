import { SortDropdown } from "./sort-dropdown"

type Props = {}

export default function HabitsListActions({}: Props) {
  return (
    <div className="absolute left-2 top-2">
        <SortDropdown options={['Custom', 'Predefined']} triggerName="Type" dropdownTitle="Choose the type"/>
    </div>
  )
}