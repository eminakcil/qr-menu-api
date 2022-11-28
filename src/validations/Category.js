import Joi from 'joi'

export const createValidationBody = Joi.object({
  title: Joi.string().required(),
})

export const createValidationFile = Joi.object({
  logo: Joi.any().required(),
})

export const editValidationBody = Joi.object({
  title: Joi.string(),
}).allow(null)

export const editValidationFile = Joi.object({
  logo: Joi.any(),
}).allow(null)
