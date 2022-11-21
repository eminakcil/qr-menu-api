import Joi from 'joi'

export const createValidationBody = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().min(0).required(),
  description: Joi.string().required(),
  category: Joi.string().required(),
})

export const createValidationFile = Joi.object({
  logo: Joi.any().required(),
})
