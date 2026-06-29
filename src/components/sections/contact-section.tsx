import { Button } from '@/components/ui/button'
import { contact } from '@/lib/site-data'

const contactMethods = [
    {
        label: 'Facebook',
        value: contact.facebook,
        href: contact.facebookUrl,
        mark: 'f'
    },
    {
        label: 'Instagram',
        value: contact.instagram,
        href: contact.instagramUrl,
        mark: 'ig'
    },
    {
        label: 'Correo',
        value: contact.email,
        href: `mailto:${contact.email}`,
        mark: '@'
    }
]

export function ContactSection() {
    return (
        <section id="contacto" className="bg-honey-cream">
            <div className="container-page py-[clamp(80px,12vh,140px)]">
                <div className="reveal-soft bg-honey-brown relative overflow-hidden rounded-[32px] p-[clamp(40px,6vw,72px)]">
                    <div className="absolute -top-[60px] -right-10 h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(252,199,75,0.32),rgba(252,199,75,0)_70%)]" />
                    <div className="relative flex flex-wrap items-center gap-x-[60px] gap-y-10">
                        <div className="min-w-[290px] flex-1 basis-[360px]">
                            <span className="section-label [--label-color:#FCC74B]">
                                Hablemos
                            </span>
                            <h2 className="text-honey-cream mb-[18px] text-[clamp(2rem,4vw,3rem)] leading-[1.1] font-bold">
                                ¿Listo para probar
                                <br />
                                miel de verdad?
                            </h2>
                            <p className="mb-[30px] max-w-[440px] text-[1.1rem] leading-[1.7] text-[#E7D3B4]">
                                Escríbenos por WhatsApp y con gusto te ayudamos
                                a elegir tu presentación. Respondemos de manera
                                personal, como en familia.
                            </p>
                            <Button
                                href={contact.whatsapp}
                                variant="whatsapp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="h-[11px] w-[11px] rounded-full bg-[#25D366] shadow-[0_0_0_3px_rgba(37,211,102,0.3)]" />
                                Contáctanos por WhatsApp
                            </Button>
                        </div>

                        <div className="flex min-w-60 flex-1 basis-60 flex-col gap-3.5">
                            {contactMethods.map((method) => (
                                <a
                                    key={method.label}
                                    href={method.href}
                                    target={
                                        method.href.startsWith('http')
                                            ? '_blank'
                                            : undefined
                                    }
                                    rel={
                                        method.href.startsWith('http')
                                            ? 'noopener noreferrer'
                                            : undefined
                                    }
                                    className="flex items-center gap-3.5 rounded-2xl border border-[rgba(251,241,228,0.14)] bg-[rgba(251,241,228,0.06)] px-5 py-[18px] transition-colors hover:bg-[rgba(251,241,228,0.12)]"
                                >
                                    <span className="text-honey-brown flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-[#FCC74B] font-serif font-bold">
                                        {method.mark}
                                    </span>
                                    <span>
                                        <span className="text-honey-cream block font-semibold">
                                            {method.label}
                                        </span>
                                        <span className="text-[0.85rem] text-[#C9B393]">
                                            {method.value}
                                        </span>
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
