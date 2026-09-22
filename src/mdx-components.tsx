import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
    h2: (props) => (
        <h2
            className="text-honey-brown mt-10 mb-4 text-2xl font-bold"
            {...props}
        />
    ),
    p: (props) => <p className="my-5 text-lg leading-8" {...props} />,
    ul: (props) => (
        <ul
            className="my-5 list-disc space-y-2 pl-6 text-lg leading-8"
            {...props}
        />
    ),
    ol: (props) => (
        <ol
            className="my-5 list-decimal space-y-3 pl-6 text-lg leading-8"
            {...props}
        />
    ),
    blockquote: (props) => (
        <blockquote
            className="border-honey-gold bg-honey-beige my-8 rounded-r-2xl border-l-4 px-6 py-2"
            {...props}
        />
    ),
    a: (props) => (
        <a
            className="text-honey-brown hover:text-honey-gold underline decoration-2 underline-offset-4"
            {...props}
        />
    )
}

export function useMDXComponents(): MDXComponents {
    return components
}
