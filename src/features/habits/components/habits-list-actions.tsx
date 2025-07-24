import { memo } from "react"
import { SortDropdown } from "../../../shared/components/sort-dropdown"

const HabitsListActions = memo(function HabitsListActions() {

  return (
    <div className="absolute left-2 top-2">
      <SortDropdown options={['Custom', 'Predefined']} triggerName="Type" dropdownTitle="Choose the type" />
    </div>
  )
})

export default HabitsListActions
