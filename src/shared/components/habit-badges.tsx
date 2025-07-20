import { Badge } from '@/components/ui/badge'

type Props = {
    isHabitCustom: boolean,
    habitType: 'custom' | 'predefined',
    isNew: boolean | undefined
}

export default function HabitBadges({ isHabitCustom, habitType, isNew }: Props) {
    const renderUpdateBadges = () => {
        if (isHabitCustom) {
            return isNew
                ? <Badge variant={'outline'} className={`ml-1 md:ml-3 text-red-600`}>new</Badge>
                :
                <Badge variant={'outline'} className={`ml-1 md:ml-3 text-amber-400`}>edited</Badge>
        }
    }
    return (
        <>
            <Badge variant={isHabitCustom ? "default" : "secondary"} className="ml-2 md:ml-5">{habitType}</Badge>
            {
                renderUpdateBadges()
            }
        </>
    )
}