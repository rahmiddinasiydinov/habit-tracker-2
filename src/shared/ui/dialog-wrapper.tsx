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
    buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined,
    isOpen?: boolean
}

export default function DialogWrapper({children, buttonText, buttonVariant,  title, isOpen}: Props) {
    return (
        <Dialog modal={isOpen}>
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
