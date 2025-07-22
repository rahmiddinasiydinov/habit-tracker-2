import { memo } from "react"
import CompletionState from "./completion-state"
import DailySummary from "./daily-summary"

const HomeSummary = memo(function HomeSummary() {

  return (
    <>
      <DailySummary />
      <CompletionState />
    </>
  )
})

export default HomeSummary; 
