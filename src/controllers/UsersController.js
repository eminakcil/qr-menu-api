import BaseController from './BaseController'
import UsersService from '../services/UsersService'
import ApiError from '../errors/ApiError'
import { generateAccessToken, generateRefreshToken, passwordToHash } from '../scripts/utils/helper'

export default class UsersController extends BaseController {
  constructor() {
    super(new UsersService())
  }

  insert = (req, res, next) => {
    const body = { ...req.body, password: passwordToHash(req.body.password) }
    this.service
      .insert(body)
      .then((response) => res.status(201).send(response))
      .catch(next)
  }

  login = (req, res, next) => {
    this.service
      .get({ email: req.body.email })
      .then((response) => {
        if (response) {
          const hashedPassword = passwordToHash(req.body.password)
          if (response.password === hashedPassword) {
            const accessToken = generateAccessToken(response.email)
            const refreshToken = generateRefreshToken(response.email)
            // eslint-disable-next-line no-unused-vars
            const { password, ...responseBody } = {
              ...response.toObject(),
              tokens: { accessToken, refreshToken },
            }
            return res.status(200).send(responseBody)
          }
          return next(new ApiError('wrong password', 401))
        }
        return next(new ApiError('wrong email', 401))
      })
      .catch(next)
  }
}
