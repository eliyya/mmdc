import { cn } from '@/lib/utils'
import Image from 'next/image'

type PhotoPlaceholderProps = {
    label: string
    className?: string
    colors?: [string, string]
    path?: string
}

export function PhotoPlaceholder({
    label,
    className,
    path,
    colors = ['#F1DDBE', '#ECD3AC']
}: PhotoPlaceholderProps) {
    return (
        <div
            className={cn(
                'relative overflow-hidden bg-size-[32px_32px] shadow-[0_24px_44px_-26px_rgba(66,34,12,0.45)]',
                className
            )}
            style={{
                background: `repeating-linear-gradient(135deg,${colors[0]},${colors[0]} 16px,${colors[1]} 16px,${colors[1]} 32px)`
            }}
        >
            <span className="photo-badge">FOTO · {label}</span>
            {path && <Image
                src={path}
                alt={label}
                width={1086}
                height={1448}
                className="h-full w-full rounded-[18px] object-cover"
            />}
        </div>
    )
}
