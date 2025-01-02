import type { HttpContext } from '@adonisjs/core/http'
import { SitemapService } from '#core/services/sitemap.service'

export default class SitemapController {
  private sitemapService: SitemapService

  constructor() {
    this.sitemapService = new SitemapService()
  }

  async xml({ response }: HttpContext) {
    const xml = this.sitemapService.generateXML()
    response.header('Content-Type', 'application/xml')
    return response.send(xml)
  }

  /**
   * Affiche la page du plan du site avec Inertia
   */
  async html({ inertia }: HttpContext) {
    const routes = this.sitemapService.getSitemapRoutes()
    return inertia.render('policy/SiteMap', {
      routes,
    })
  }
}
