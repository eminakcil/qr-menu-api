import Joi from 'joi'

export const createValidation = Joi.object({
  name: Joi.string().required(),
})
