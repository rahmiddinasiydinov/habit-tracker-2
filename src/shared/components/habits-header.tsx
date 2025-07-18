import PageHeading from './page-heading'
import { SortDropdown } from './sort-dropdown'
import { Button } from '@/components/ui/button'

type Props = {}

export default function HabitsHeader({ }: Props) {
    return (
        <div className="flex items-center justify-between pr-2 md:pr-20 lg:pr-30">
            <PageHeading>Dashboard</PageHeading>
            <SortDropdown />
            <Button>+New habit</Button>
        </div>
    )
}