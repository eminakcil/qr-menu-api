import CryptoJS from 'crypto-js'
import JWT from 'jsonwebtoken'

export const passwordToHash = (password) =>
  CryptoJS.HmacSHA256(
    password,
    CryptoJS.HmacSHA1(password, process.env.PASSWORD_HASH).toString()
  ).toString()

export const generateAccessToken = (email) => {
  return JWT.sign({ name: email }, process.env.ACCESS_TOKEN_SECRET_KEY, {
    expiresIn: '1h',
  })
}

export const generateRefreshToken = (email) => {
  return JWT.sign({ name: email }, process.env.REFRESH_TOKEN_SECRET_KEY, {
    expiresIn: '1h',
  })
}
