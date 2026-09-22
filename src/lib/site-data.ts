export const brand = {
    name: 'Martin del Campo',
    displayName: 'Martín del Campo',
    tagline: 'MIEL DE VERDAD',
    headline: 'Miel 100% natural',
    highlight: 'del panal a tu mesa',
    subheadline:
        'Producida con dedicación y experiencia para ofrecer miel auténtica, tal como debe ser.',
    description:
        'Miel 100% natural, del panal a tu mesa. Una marca familiar mexicana que cuida a las abejas y la honestidad de cada frasco.'
}

export const contact = {
    whatsapp:
        'https://wa.me/528145129468?text=Hola!%20Me%20interesa%20la%20miel%20Mart%C3%ADn%20del%20Campo',
    phone: '+52 814 512 9468',
    email: 'eli.maciel@mielmdc.com',
    facebook: '/miel.mdelcampo',
    facebookUrl: 'https://www.facebook.com/miel.mdelcampo',
    instagram: '@mdc.miel',
    instagramUrl: 'https://www.instagram.com/mdc.miel/'
}

export const navLinks = [
    { label: 'Historia', href: '#historia' },
    { label: 'Por qué', href: '#porque' },
    { label: 'Productos', href: '#productos' },
    { label: 'Aprende', href: '#aprende' },
    { label: 'FAQ', href: '#faq' }
]

export const heroStats = [
    { number: '100%', label: 'Miel pura, sin adulterar' },
    { number: 'Familiar', label: 'Tradición que se hereda' },
    { number: 'Local', label: 'Del campo mexicano' }
]

export const storyPhotos = [
    ['Colmenas', '/assets/colmena.png'],
    ['Trabajo apícola', '/assets/trabajo.png'],
    ['Extracción', '/assets/extraccion.png']
]

export const differences = [
    {
        number: '01',
        tone: 'light',
        title: '100% natural',
        description:
            'Solo lo que las abejas producen. Nada más entra al frasco.'
    },
    {
        number: '02',
        tone: 'gold',
        title: 'Sin adulterar',
        description:
            'Cero jarabes, azúcares ni rellenos. Miel real, comprobable.'
    },
    {
        number: '03',
        tone: 'green',
        title: 'Producción responsable',
        description: 'Cuidamos a las abejas y al campo que las alimenta.'
    },
    {
        number: '04',
        tone: 'dark',
        title: 'Sabor auténtico',
        description:
            'Cada temporada tiene matices propios de las flores del entorno.'
    },
    {
        number: '05',
        tone: 'gold',
        title: 'Calidad artesanal',
        description: 'Lotes pequeños, atención al detalle y mucho oficio.'
    }
]

export const products = [
    {
        id: '250ml',
        size: '235 ml',
        badge: 'Para probar',
        path: '/assets/235ml.png',
        image: 'Botella 250 ml',
        text: 'presentaci%C3%B3n%20de%20235%20ml',
        description:
            'El tamaño ideal para conocernos o llevar miel a donde vayas.',
        featured: false,
        gradient: 'from-[#F4E2C5] to-[#EED7AE]'
    },
    {
        id: '500ml',
        size: '500 ml',
        badge: 'Más popular',
        path: '/assets/500ml.png',
        image: 'Frasco 500 ml',
        text: 'presentaci%C3%B3n%20de%20500%20ml',
        description:
            'Nuestro frasco favorito para la mesa familiar y el uso diario.',
        featured: true,
        gradient: 'from-[#F4D99E] to-[#EFCE88]'
    },
    {
        id: '1l',
        size: '1 litro',
        badge: 'Familiar',
        path: '/assets/1l.png',
        image: 'Frasco de 1 litro',
        text: 'presentaci%C3%B3n%20de%201%20litro',
        description:
            'Para quienes ya no conciben la cocina sin miel de verdad.',
        featured: false,
        gradient: 'from-[#EAD8B6] to-[#E3CDA4]'
    },
    {
        id: 'mielmantequilla',
        size: '235 ml',
        badge: 'Para untar',
        path: '/assets/235ml.png',
        image: 'Frasco miel mantequilla',
        text: 'presentaci%C3%B3n%20de%20miel%20mantequilla',
        description:
            'Para acompañar tus desayunos de una forma muy práctica',
        featured: false,
        gradient: 'from-[#F4E2C5] to-[#EED7AE]'
    }
]

export const testimonials = [
    {
        id: 'lucia',
        name: 'Lucía Hernández',
        location: 'Puebla',
        avatar: 'L',
        color: '#E5950E',
        textColor: '#fff',
        quote: 'Compro su miel desde hace dos años. Se nota que es de verdad: cristaliza, cambia con la temporada y sabe a campo. Mis hijos ya no quieren otra.'
    },
    {
        id: 'jorge',
        name: 'Jorge Ramírez',
        location: 'Ciudad de México',
        avatar: 'J',
        color: '#7E8246',
        textColor: '#fff',
        quote: 'Pedí por WhatsApp y me respondieron con mucha amabilidad. Me explicaron de dónde viene la miel y hasta cómo conservarla. Trato muy humano.'
    },
    {
        id: 'maria',
        name: 'María Elena Soto',
        location: 'Querétaro',
        avatar: 'M',
        color: '#42220C',
        textColor: '#FCC74B',
        quote: 'La uso para el té y para mis remedios de la abuela. Desde que la probé no he vuelto a la del súper. Se siente el cariño con que la hacen.'
    }
]

export const faqs = [
    {
        id: 'cristaliza',
        question: '¿La miel se cristaliza?',
        answer: 'Sí. La miel puede cristalizar de forma natural: parte de su glucosa forma cristales y cambia la textura. Esto no significa que se haya echado a perder, pero tampoco demuestra por sí solo su pureza. Si está bien conservada, puedes consumirla así o ablandarla con un baño de agua tibia.'
    },
    {
        id: 'envios',
        question: '¿Hacen envíos?',
        answer: 'Sí. Coordinamos envíos y entregas locales directamente por WhatsApp para asegurarnos de que tu miel llegue en perfecto estado. Escríbenos y te indicamos las opciones disponibles en tu zona.'
    },
    {
        id: 'conservar',
        question: '¿Cómo conservar la miel?',
        answer: 'Guárdala en un lugar fresco y seco, lejos de la luz directa, con el frasco bien cerrado. No necesita refrigeración. Usa siempre una cuchara limpia y seca para conservarla en buen estado por mucho tiempo.'
    },
    {
        id: 'color',
        question: '¿Por qué cambia de color?',
        answer: 'El color depende de las flores que visitaron las abejas en cada temporada. Por eso una miel natural puede ser más clara o más oscura entre cosechas: es la prueba de que viene directo de la naturaleza, sin estandarizar.'
    }
]
