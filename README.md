# Martin del Campo

Next.js landing page rebuilt from the backed-up Claude Design HTML in `public/standalone.html`.

The original export is preserved under `.backups/rebuild-20260622-084338/public`.

## Blog en MDX

- Listado: `/blog`.
- Artículo de ejemplo: `/blog/una-degustacion-de-miel-en-casa`.
- Contenido: `src/app/blog/una-degustacion-de-miel-en-casa/page.mdx`.
- Datos de las tarjetas: `src/lib/articles.ts`.
- Estilos de Markdown: `src/mdx-components.tsx`.

Para agregar un artículo, crea `src/app/blog/<slug>/page.mdx` siguiendo el ejemplo y registra sus datos en `src/lib/articles.ts`. Incluye el nuevo registro en `articles` para mostrarlo en el inicio y el listado. Cada artículo debe exportar sus metadatos y tener un único título principal. Las imágenes se guardan en `public/assets`.

Ejecuta `pnpm dev` para previsualizar y `pnpm build` para comprobar las páginas antes de desplegar. El contenido se publica con el despliegue de la web; no requiere base de datos.

### Primer artículo editorial

El artículo visible es `/blog/por-que-se-cristaliza-la-miel`. Su investigación y referencias están en `docs/editorial/cristalizacion-fuentes.md`, fuera de las rutas públicas. El artículo de degustación se conserva como ejemplo sin indexación y no aparece en el listado.

### Metadatos para compartir

Open Graph y Twitter usan imágenes JPEG de 1200 × 630 en public/assets. El dominio canónico es https://mielmdc.com; NEXT_PUBLIC_SITE_URL permite sobrescribirlo en otro entorno. Después de cambiarlo, vuelve a compilar. Las vistas previas externas solo pueden consultar las imágenes después del despliegue público.
