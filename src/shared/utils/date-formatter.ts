import {format} from 'date-fns';

export default function dateFormatter(date:string){
    return format(date, 'do MMM, yyyy');
}