import AddHabit from './add-habit'
import PageHeading from './page-heading'
import { SortDropdown } from './sort-dropdown'


type Props = {}

export default function HabitsHeader({ }: Props) {
    return (
        <div className="flex items-center justify-between pr-2 md:pr-20 lg:pr-30">
            <PageHeading>Dashboard</PageHeading>
            <SortDropdown />
            <AddHabit/>
        </div>
    )
}