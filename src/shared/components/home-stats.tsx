import CompletionState from "./completion-state"
import DailySummary from "./daily-summary"

type Props = {}

export default function HomeStats({}: Props) {
  return (
    <>
        <DailySummary/>
        <CompletionState/>
    </>
  )
}