import JWT from 'jsonwebtoken'
import ApiError from '../errors/ApiError'

export const authenticateToken = (req, res, next) => {
  const token = req.headers?.authorization?.split(' ')?.[1]
  if (!token) return next(new ApiError('not logged in', 401))

  JWT.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
    if (err) next(new ApiError(err.message, 403))
    req.user = user
    next()
  })
}
