import type { HttpContext } from '@adonisjs/core/http'

export default class CookiepreferencesController {
  public async store({ request, response }: HttpContext) {
    const preferences = request.only(['necessary', 'analytics', 'marketing'])

    response.encryptedCookie('cookie-preferences', preferences, {
      // expire dans 6 mois
      maxAge: 15778800,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    })

    return response.status(200).send({ status: 'success' })
  }

  public async show({ response }: HttpContext) {
    const preferences = response.encryptedCookie('cookie-preferences', undefined)
    return response.status(200).send(preferences)
  }
}
