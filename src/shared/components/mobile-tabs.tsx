import { Button } from '@/components/ui/button'
import type { MobileTabs } from './habits-overview'

type Props = {
    activeTab: MobileTabs,
    handleHabitButtonCLick: () => void,
    handleSummaryButtonCLick: () => void
}

export default function MobileTabs({ handleHabitButtonCLick, handleSummaryButtonCLick, activeTab }: Props) {
    return (
        <div className='flex md:hidden justify-center my-2 '>
            <Button variant={activeTab === 'habits' ? 'default' : 'outline'} className='rounded-tr-none rounded-br-none' onClick={handleHabitButtonCLick}>Habits</Button>
            <Button variant={activeTab === 'summary' ? 'default' : 'outline'} className='rounded-tl-none rounded-bl-none' onClick={handleSummaryButtonCLick}>Summary</Button>
        </div>
    )
}
