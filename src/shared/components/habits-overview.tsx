import HabitsList from './habits-list'
import HabitsListActions from './habits-list-actions'
import HomeStats from './home-stats'

export default function HabitsOverview() {
    return (
        <section className="flex gap-2 md:gap-4 flex-col lg:flex-row mt-3 md:mt-10 pb-4">
            <div className="relative lg:w-[50%] p-2 md:p-4 md:pt-8 md:pr-0 bg-secondary shadow-md md:max-h-[800px] overflow-auto rounded-xl">
                <HabitsListActions/>
                <HabitsList />
            </div>
            <div className="lg:w-[50%] md:max-h-[800px] flex flex-col gap-4">
                <HomeStats/>
            </div>
        </section>
    )
}
