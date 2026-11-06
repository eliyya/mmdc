'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

type Props = { details: [string, string][] }

export function CopyablePaymentDetails({ details }: Props) {
    const [copied, setCopied] = useState<string | null>(null)

    async function copy(label: string, value: string) {
        try {
            await navigator.clipboard.writeText(value)
            setCopied(label)
            window.setTimeout(
                () =>
                    setCopied((current) =>
                        current === label ? null : current
                    ),
                1800
            )
        } catch {
            setCopied(null)
        }
    }

    return (
        <dl className="divide-honey-brown/10 border-honey-brown/10 divide-y rounded-2xl border px-4 sm:px-5">
            {details.map(([label, value]) => (
                <div
                    key={label}
                    className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5"
                >
                    <dt className="text-honey-soft text-sm">{label}</dt>
                    <dd>
                        <button
                            type="button"
                            onClick={() => void copy(label, value)}
                            className="text-honey-brown hover:text-honey-gold focus-visible:outline-honey-gold inline-flex cursor-pointer items-center gap-2 text-left font-semibold transition-colors focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-right"
                            aria-label={`Copiar ${label}`}
                        >
                            <span>{value}</span>
                            {copied === label ? (
                                <Check
                                    aria-hidden="true"
                                    className="size-4 shrink-0 text-green-700"
                                />
                            ) : (
                                <Copy
                                    aria-hidden="true"
                                    className="size-4 shrink-0 opacity-60"
                                />
                            )}
                        </button>
                        <span className="sr-only" aria-live="polite">
                            {copied === label ? `${label} copiado` : ''}
                        </span>
                    </dd>
                </div>
            ))}
        </dl>
    )
}
