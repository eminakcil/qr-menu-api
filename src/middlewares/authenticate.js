import JWT from 'jsonwebtoken'

export const authenticateToken = (req, res, next) => {
  const token = req.headers?.authorization?.split(' ')?.[1]
  if (!token) return res.status(401).send({ message: 'not logged in' })

  JWT.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
    if (err) return res.status(403).send({ message: err.message })
    req.user = user
    next()
  })
}
