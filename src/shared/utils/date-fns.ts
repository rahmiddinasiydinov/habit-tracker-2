import { format } from 'date-fns';

export default function dateFormatter(date: string) {

    return format(date, 'PPP');
}

export const getAreDatesEquel = (date1: string, date2: string) => {
    const formattedDate1 = dateFormatter(date1)
    const formattedDate2 = dateFormatter(date2)

    const areDatesEquel = formattedDate1 === formattedDate2;

    return areDatesEquel;
}
