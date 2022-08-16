import * as Joi from 'joi'

const createUserSchema = Joi.object({
  name: Joi
    .string()
    .alphanum()
    .required(),
  password: Joi
    .string()
    .min(2)
    .max(25)
    .required(),
  email: Joi
    .string()
    .email()
    .required(),
  age: Joi
    .number()
    .min(18)
    .max(45)
    .required(),
  done: Joi
    .boolean()
    .optional()
})

export {
  createUserSchema
}