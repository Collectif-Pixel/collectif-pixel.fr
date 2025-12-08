<div align="center">
  <img src="./.github/assets/thumbnail.jpg" alt="Collectif Pixel">
</div>

<div align="center">

[![astro-image]][astro-url]
[![tailwind-image]][tailwind-url]
[![docker-image]][docker-url]
[![gh-workflow-image]][gh-workflow-url]
[![licence-image]][licence-url]

</div>

<br />

## Collectif Pixel

Site vitrine de l'association Collectif Pixel, une association loi 1901 créée par des étudiants passionnés de technologie.

- **Podcast** - Pixel Podcast, la tech vue par la nouvelle génération
- **Open Source** - Tous nos projets sont ouverts et disponibles sur GitHub
- **Transparence** - Documents officiels de l'association accessibles à tous

## Stack

**Frontend**: Astro, Tailwind CSS v4, TypeScript
**Animations**: Lenis (smooth scroll), Intersection Observer
**Build**: Vite, Sharp (optimisation images)
**Deploy**: Docker, Nginx, Cloudflare Tunnel

## Development

### Prerequisites

- Node.js >= 18
- pnpm ou npm

### Setup

```bash
npm install
```

### Commands

```bash
# Development
npm run dev           # Dev server avec hot reload

# Build
npm run build         # Build production
npm run preview       # Preview du build

# Docker
docker build -t collectif-pixel .
docker run -p 8080:80 collectif-pixel
```

## Architecture

```
src/
├── assets/           # Images optimisées par Astro
├── components/       # Composants Astro
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Podcast.astro
│   ├── OpenSource.astro
│   ├── Transparence.astro
│   ├── About.astro
│   └── Footer.astro
├── layouts/          # Layout principal
├── pages/            # Routes
│   ├── index.astro
│   ├── mentions-legales.astro
│   └── politique-de-confidentialite.astro
└── styles/           # CSS global

public/
├── documents/        # PDFs (statuts, PV, etc.)
├── favicon.svg
└── robots.txt
```

## Deployment

### Docker (recommandé)

L'image Docker est automatiquement buildée et pushée sur GitHub Container Registry à chaque push sur `main`.

```bash
# Pull et run
docker pull ghcr.io/collectif-pixel/collectif-pixel.fr:latest
docker run -p 80:80 ghcr.io/collectif-pixel/collectif-pixel.fr:latest
```

### Manuel

```bash
npm run build
# Servir le contenu de dist/ avec Nginx, Apache, etc.
```

## Configuration

### Site URL

Éditer `astro.config.mjs` :

```js
export default defineConfig({
  site: 'https://collectif-pixel.fr',
  // ...
});
```

### Variables d'environnement

Aucune variable d'environnement requise pour le build.

## Liens

- **Site**: [collectif-pixel.fr](https://collectif-pixel.fr)
- **Podcast**: [Spotify](https://open.spotify.com/show/4BQ5vVIjDufKgtqHrn6zqZ) · [Apple Podcasts](https://podcasts.apple.com/us/podcast/pixel-by-ekod-students/id1774553858) · [YouTube](https://www.youtube.com/@CollectifPixel)
- **GitHub**: [github.com/Collectif-Pixel](https://github.com/Collectif-Pixel)
- **Contact**: pixelbyekod@gmail.com

## License

[MIT](LICENSE)

[astro-image]: https://img.shields.io/badge/Astro-BC52EE.svg?style=for-the-badge&logo=astro&logoColor=white
[astro-url]: https://astro.build
[tailwind-image]: https://img.shields.io/badge/Tailwind_CSS-38B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[tailwind-url]: https://tailwindcss.com
[docker-image]: https://img.shields.io/badge/Docker-2496ED.svg?style=for-the-badge&logo=docker&logoColor=white
[docker-url]: https://www.docker.com
[gh-workflow-image]: https://img.shields.io/github/actions/workflow/status/Collectif-Pixel/collectif-pixel.fr/docker.yml?branch=main&style=for-the-badge
[gh-workflow-url]: https://github.com/Collectif-Pixel/collectif-pixel.fr/actions/workflows/docker.yml
[licence-image]: https://img.shields.io/badge/License-MIT-green?style=for-the-badge
[licence-url]: LICENSE
