import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { Ref } from "react"


type Props = {
  id: string,
  placeholder: string,
  label: string,
  textarea?: boolean,
  ref: Ref<HTMLInputElement | HTMLTextAreaElement>
}

export function InputWithLabel({ id, placeholder, label, textarea, ref, ...props }: Props) {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor={id}>{label}</Label>
      {textarea
        ? <Textarea ref={ref as Ref<HTMLTextAreaElement>} id={id} placeholder={placeholder} {...props} />
        : <Input ref={ref as Ref<HTMLInputElement>} type={id} id={id} placeholder={placeholder} {...props} />}

    </div>
  )
}
