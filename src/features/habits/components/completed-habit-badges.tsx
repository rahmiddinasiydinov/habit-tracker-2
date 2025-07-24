import { Badge } from '@/components/ui/badge'

type Props = {
    title: string
}

export default function CompletedHabitBadges({ title }: Props) {
    return (
        <Badge className='text-lg mr-2 mt-2' variant={'default'}>{title}</Badge>
    )
}