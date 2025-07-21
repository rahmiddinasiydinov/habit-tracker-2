import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function PageHeading({children}: Props) {
  return (
    <h1 className='text-primary text-lg md:text-3xl font-bold'>{children}</h1>
  )
}
