import BaseController from './BaseController'
import UsersService from '../services/UsersService'
import ApiError from '../errors/ApiError'
import { generateAccessToken, passwordToHash } from '../scripts/utils/helper'
import RefreshToken from '../models/RefreshToken'

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
      .then(async (response) => {
        if (!response) {
          return next(new ApiError('wrong email', 401))
        }

        const hashedPassword = passwordToHash(req.body.password)
        if (response.password !== hashedPassword) {
          return next(new ApiError('wrong password', 401))
        }

        const accessToken = generateAccessToken(response.email)
        const refreshToken = await RefreshToken.createToken(response)
        // eslint-disable-next-line no-unused-vars
        const { password, ...responseBody } = {
          ...response.toObject(),
          tokens: { accessToken, refreshToken },
        }

        return res.status(200).send(responseBody)
      })
      .catch(next)
  }

  refreshToken = (req, res, next) => {
    this.service
      .refreshToken(req.body)
      .then((response) => res.status(201).send(response))
      .catch(next)
  }
}
