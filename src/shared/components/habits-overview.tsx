import { useCallback, useState } from 'react'
import HabitsList from './habits-list'
import HabitsListActions from './habits-list-actions'
import HomeSummary from './home-summary'
import MobileTabs from './mobile-tabs';

export type MobileTabs = 'habits' | 'summary'

export default function HabitsOverview() {
    const [activeTab, setActiveTab] = useState<MobileTabs>('habits');

    const handleHabitButtonCLick = useCallback(() => {
        setActiveTab('habits');
    }, [])

    const handleSummaryButtonCLick = useCallback(() => {
        setActiveTab('summary');
    }, [])

    const habitsClasses = activeTab === 'habits' ? 'block' : 'hidden';
    const summaryClasses = activeTab === 'summary' ? 'flex' : 'hidden';

    return (
        <section className="flex gap-2 md:gap-4 flex-col lg:flex-row mt-3 md:mt-10 pb-4 max-h-[750px]">
            <MobileTabs activeTab={activeTab} handleHabitButtonCLick={handleHabitButtonCLick} handleSummaryButtonCLick={handleSummaryButtonCLick} />

            <div className={`relative lg:w-[50%] p-2 md:p-4 md:pt-10 md:pr-0 bg-secondary shadow-md md:max-h-[750px] overflow-auto rounded-lg md:block ${habitsClasses}`}>
                <HabitsListActions />
                <HabitsList />
            </div>
            <div className={`lg:w-[50%] md:max-h-[750px]  flex-col gap-4 md:flex ${summaryClasses}`}>
                <HomeSummary />
            </div>
        </section>
    )
}
