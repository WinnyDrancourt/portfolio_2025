import type { HttpContext } from '@adonisjs/core/http'
import { contactFormValidators } from '#contact/validators/contact.validator'
import ContactServices from '#contact/services/contact.services'

export default class ContactController {
  #sentSessionKey = 'CONTACT_FORM_SENT'

  async index({ inertia, session }: HttpContext) {
    const isSent = session.flashMessages.has(this.#sentSessionKey)
    return inertia.render('Contact', { isSent })
  }

  async send({ request, response, session }: HttpContext) {
    const data = await request.validateUsing(contactFormValidators)

    try {
      await ContactServices.send({
        email: data.email,
        name: data.name,
        message: data.message,
      })
      session.flash(this.#sentSessionKey, true)
    } catch (error) {
      session.flash('error', 'Une erreur est survenue. Veuillez réessayer plus tard.')
    }

    return response.redirect().back()
  }
}
