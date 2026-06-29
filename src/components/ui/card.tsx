import type { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/lib/utils'

export function Card({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            className={cn(
                'rounded-[22px] bg-white shadow-[0_18px_36px_-28px_rgba(66,34,12,0.4)] transition duration-300',
                className
            )}
            {...props}
        />
    )
}
