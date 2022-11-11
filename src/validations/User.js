import Joi from 'joi'

export const loginValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
})

export const registerValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
})
