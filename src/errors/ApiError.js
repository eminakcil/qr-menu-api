export default class ApiError extends Error {
  constructor(message = 'Internal server error.', statusCode = 500) {
    super(message)
    this.message = message
    this.statusCode = statusCode
  }
}
