import HabitsHeader from "@/shared/components/habits-header"
import HabitsOverview from "@/shared/components/habits-overview"

type Props = {}

export default function Home({ }: Props) {

    return (
        <div>
            <HabitsHeader />
            <HabitsOverview />
        </div>
    )
}