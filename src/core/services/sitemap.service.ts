import env from '#boot/env'

interface SitemapRoute {
  url: string
  lastmod?: string
  changefreq?: 'weekly' | 'daily' | 'monthly'
  priority?: number
}

export class SitemapService {
  private baseUrl = env.get('APP_URL')

  private getRoutes(): SitemapRoute[] {
    return [
      { url: '/' },
      { url: '/about' },
      { url: '/services' },
      { url: '/contact' },
      { url: '/privacy' },
      { url: '/cookies' },
      { url: '/sitemap' },
    ].map((route) => ({
      ...route,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: this.calculatePriority(route.url),
    }))
  }

  private calculatePriority(url: string): number {
    if (url === '/') return 1.0
    if (url.startsWith('/services')) return 0.8
    return 0.5
  }

  public generateXML(): string {
    const routes = this.getRoutes()

    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map(
          (route) => `
        <url>
          <loc>${this.baseUrl}${route.url}</loc>
          <lastmod>${route.lastmod}</lastmod>
          <changefreq>${route.changefreq}</changefreq>
          <priority>${route.priority}</priority>
        </url>
      `
        )
        .join('')}
    </urlset>`
  }

  public getSitemapRoutes() {
    const translations: Record<string, string> = {
      '/': 'Accueil',
      '/about': 'À propos',
      '/services': 'Services',
      '/contact': 'Contact',
      '/privacy': 'Politique de confidentialité',
      '/cookies': 'Cookies',
      '/sitemap': 'Plan du site',
    }

    return this.getRoutes().map((route) => ({
      url: route.url,
      name: translations[route.url] || route.url, // Utilise la traduction si disponible, sinon garde l'URL brute
    }))
  }
}
