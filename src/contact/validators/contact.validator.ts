import vine from '@vinejs/vine'

export const contactFormValidators = vine.compile(
  vine.object({
    name: vine.string().trim().maxLength(100).minLength(2),
    email: vine.string().email().normalizeEmail().maxLength(255),
    message: vine.string().trim().minLength(10).maxLength(1000),
  })
)
