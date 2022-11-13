import Joi from 'joi'

export const createValidation = Joi.object({
  title: Joi.string().required(),
  photo: Joi.string().required(),
  price: Joi.number().min(0).required(),
  description: Joi.string().required(),
  category: Joi.string().required(),
})
