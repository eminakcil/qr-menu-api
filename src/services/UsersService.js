import BaseService from './BaseService'
import User from '../models/User'
import RefreshToken from '../models/RefreshToken'
import ApiError from '../errors/ApiError'
import { generateAccessToken } from '../scripts/utils/helper'

export default class UsersService extends BaseService {
  constructor() {
    super(User)
  }

  async refreshToken(data) {
    const { refreshToken: requestToken } = data
    const existingRefreshToken = await RefreshToken.findOne({ token: requestToken }).populate(
      'user'
    )
    if (!existingRefreshToken) {
      throw new ApiError('Refresh token is not in database!')
    }

    // check expire time on verify token

    const newAccessToken = generateAccessToken(existingRefreshToken.user.email)

    return { accessToken: newAccessToken, refreshToken: existingRefreshToken.token }
  }
}
