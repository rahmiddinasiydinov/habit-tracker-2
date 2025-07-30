import { memo } from "react"
import { SortDropdown } from "@/shared/ui/sort-dropdown.tsx"

const HabitsListActions = memo(function HabitsListActions() {

  return (
    <div className="absolute left-2 top-2">
      <SortDropdown options={['custom', 'predefined', 'active-predefined']} triggerName="Type" dropdownTitle="Choose the type" />
    </div>
  )
})

export default HabitsListActions
