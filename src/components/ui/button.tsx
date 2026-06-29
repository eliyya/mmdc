import { cva, type VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-3 rounded-full font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey-gold',
    {
        variants: {
            variant: {
                primary:
                    'bg-honey-gold px-7 py-4 text-[1.02rem] text-white shadow-[0_16px_30px_-12px_rgba(229,149,14,0.85)] hover:-translate-y-0.5 hover:bg-[#cf8408]',
                secondary:
                    'border-[1.5px] border-honey-tan bg-transparent px-6 py-4 text-[1.02rem] text-honey-brown hover:border-honey-brown hover:bg-honey-beige',
                whatsapp:
                    'bg-honey-gold px-[30px] py-[17px] text-[1.05rem] text-white shadow-[0_16px_32px_-12px_rgba(229,149,14,0.9)] hover:-translate-y-0.5 hover:bg-[#cf8408]',
                compact:
                    'bg-honey-gold px-5 py-[11px] text-[0.92rem] text-white shadow-[0_10px_22px_-10px_rgba(229,149,14,0.8)] hover:-translate-y-0.5 hover:bg-[#cf8408]'
            }
        },
        defaultVariants: {
            variant: 'primary'
        }
    }
)

type ButtonProps = ComponentPropsWithoutRef<'a'> &
    VariantProps<typeof buttonVariants> & {
        href: string
    }

export function Button({ className, href, variant, ...props }: ButtonProps) {
    if (href.startsWith('#')) {
        return (
            <Link
                className={cn(buttonVariants({ variant }), className)}
                href={href}
                {...props}
            />
        )
    }

    return (
        <a
            className={cn(buttonVariants({ variant }), className)}
            href={href}
            {...props}
        />
    )
}
