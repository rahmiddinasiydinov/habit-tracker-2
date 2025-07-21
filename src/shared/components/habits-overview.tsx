import HabitsList from './habits-list'
import HabitsListActions from './habits-list-actions'

export default function HabitsOverview() {
    return (
        <section className="flex gap-2 md:gap-10 flex-col lg:flex-row mt-3 md:mt-10">
            <div className="lg:w-[50%] p-2 md:p-8 bg-secondary shadow-md md:h-[700px] overflow-auto">
                <HabitsListActions/>
                <HabitsList />
            </div>
            <div className="lg:w-[50%] p-2 bg-secondary md:p-8 shadow-md">
                <h2 className='text-lg md:text-2xl'>A Block for Statistics</h2>
            </div>
        </section>
    )
}
