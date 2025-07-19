import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Input } from '@/components/ui/input'
type Props = {
    form: any,
    id: string,
    label: string,
    placeholder: string,
    textarea?: boolean
}

export default function FormFieldWrapper({ form, id, label, placeholder, textarea }: Props) {
    return (
        <FormField
            control={form.control}
            name={id}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        {textarea ? <Textarea placeholder={placeholder} {...field} /> : <Input placeholder={placeholder} {...field} />}
                        { }
                    </FormControl>
                    <FormDescription>
                        {/* {<p className="text-destructive">Error happened</p>} */}
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}