import HabitsList from './habits-list'

type Props = {}

export default function HabitsOverview({ }: Props) {
    return (
        <div className="flex gap-2 md:gap-10 flex-col md:flex-row mt-3 md:mt-10">
            <div className="grow-1 p-2 md:p-8 bg-secondary shadow-md md:max-h-[700px] overflow-auto">
                <HabitsList />
            </div>
            <div className="grow-1 p-2 bg-secondary md:p-8 shadow-md">
                <h2 className='text-lg md:text-2xl'>A Block for Statistics</h2>
            </div>
        </div>
    )
}