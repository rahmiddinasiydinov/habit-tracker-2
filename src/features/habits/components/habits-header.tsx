import AddHabit from './add-habit'
import PageHeading from '../../../shared/components/page-heading'

export default function HabitsHeader() {
    return (
        <section className="flex items-center justify-between pr-2 md:pr-20 lg:pr-30">
            <PageHeading>Dashboard</PageHeading>
            <AddHabit/>
        </section>
    )
}
