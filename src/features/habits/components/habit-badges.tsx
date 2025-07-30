import { Badge } from '@/components/ui/badge'

type Props = {
    isHabitCustom: boolean,
    habitType: 'custom' | 'predefined' | 'active-predefined',
    isNew: boolean | undefined
}

export default function HabitBadges({ isHabitCustom, habitType, isNew }: Props) {
    const renderUpdateBadges = () => {
        if (isHabitCustom) {
            return isNew
                ? <Badge variant={'outline'} className={`text-red-600`}>new</Badge>
                :
                <Badge variant={'outline'} className={`text-amber-400`}>edited</Badge>
        }
    }
    
    return (
        <span className='flex gap-3 mt-2 xl:mt-0 xl:ml-3 justify-start grow-1'>
            <Badge variant={isHabitCustom ? "default" : "secondary"} className="ml-0">{habitType}</Badge>
            {
             renderUpdateBadges()
            }
        </span>
    )
}
