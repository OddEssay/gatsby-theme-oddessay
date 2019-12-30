import * as React from "react"
import './card.css'
import '../../layouts/index.css'

export interface CardProps { children: React.ReactNode; }

export const Card = ({children}: CardProps) => <div
    className='block tablet:w-1/2 laptop:w-1/3 widescreen:w-1/4'
>
    <div
        className='card'
    >
        {children}
    </div>
</div>

