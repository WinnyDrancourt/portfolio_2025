import router from '@adonisjs/core/services/router'
import CookiepreferencesController from '#core/controllers/cookiepreferences.controller'

const ContactController = () => import('#contact/controllers/contact.controller')
const SitemapController = () => import('#core/controllers/sitemap.controller')

// Pages
router.on('/').renderInertia('Home')
router.on('about').renderInertia('About')
router.on('services').renderInertia('Services')

// Policy
router.on('policy').renderInertia('policy/Policy')
router.on('cookies').renderInertia('policy/Cookies')
router.on('privacy').renderInertia('policy/Privacy')
router.get('sitemap.xml', [SitemapController, 'xml']).as('sitemap.xml')
router.get('sitemap', [SitemapController, 'html']).as('sitemap.html')

// Email contact
router.get('contact', [ContactController, 'index']).as('contact.index')
router.post('contact', [ContactController, 'send']).as('contact.send')

router.post('api/cookie-preferences', [CookiepreferencesController, 'store']).as('cookies.store')
router.get('api/cookie-preferences', [CookiepreferencesController, 'show']).as('cookie.show')
