import { cn } from '@/lib/utils'

type PhotoPlaceholderProps = {
    label: string
    className?: string
    colors?: [string, string]
}

export function PhotoPlaceholder({
    label,
    className,
    colors = ['#F1DDBE', '#ECD3AC']
}: PhotoPlaceholderProps) {
    return (
        <div
            className={cn(
                'relative overflow-hidden bg-[length:32px_32px] shadow-[0_24px_44px_-26px_rgba(66,34,12,0.45)]',
                className
            )}
            style={{
                background: `repeating-linear-gradient(135deg,${colors[0]},${colors[0]} 16px,${colors[1]} 16px,${colors[1]} 32px)`
            }}
        >
            <span className="photo-badge">FOTO · {label}</span>
        </div>
    )
}
