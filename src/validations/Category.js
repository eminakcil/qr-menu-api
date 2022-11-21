import Joi from 'joi'

export const createValidationBody = Joi.object({
  title: Joi.string().required(),
})

export const createValidationFile = Joi.object({
  logo: Joi.any().required(),
})
