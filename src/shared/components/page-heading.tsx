import React from 'react'

type Props = {
  children: React.ReactNode,
  classNames?: string
}

export default function PageHeading({ children, classNames }: Props) {
  let classes = 'text-primary text-lg md:text-3xl font-bold ';
  classes += classNames
  return (
    <h1 className={classes}>{children}</h1>
  )
}
