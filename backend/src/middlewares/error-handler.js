import { CustomError } from '../errors/custom-error'

export const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ errors: err.serializeErrors() })
  }
  console.error(err)
  res.status(400).send({ errors: [{ message: 'Something went wrong' }] })
}
