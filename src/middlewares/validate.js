export default (schema, area = 'body') =>
  (req, res, next) => {
    const { value, error } = schema.validate(req[area])
    if (error) {
      const errorMessage = error.details?.map((details) => details.message).join(', ')
      res.status(400).json({ error: errorMessage })
      return
    }

    Object.assign(req, value)
    next()
  }
