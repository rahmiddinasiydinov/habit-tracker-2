import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

type Props = {
    children: React.ReactNode,
    buttonText: string,
    title: string
}

export default function DialogWrapper({children, buttonText, title}: Props) {
    
    return (
        <Dialog>
            <DialogTrigger>{buttonText}</DialogTrigger>
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