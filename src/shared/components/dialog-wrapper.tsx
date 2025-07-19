import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button} from '@/components/ui/button'

type Props = {
    children: React.ReactNode,
    buttonText: string,
    title: string
    buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined
}

export default function DialogWrapper({children, buttonText, buttonVariant,  title}: Props) {
    
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={buttonVariant}>{buttonText}</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription className='md:mt-3'>
                        {children}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}