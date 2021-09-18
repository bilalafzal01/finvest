import { CustomError } from './custom-error'

export class RequestValidationError extends CustomError {
  statusCode = 400

  constructor(errors) {
    super('Invalid request parameters ')

    // * only because we are extending built in Error class
    Object.setPrototypeOf(this, RequestValidationError.prototype)
  }

  serializeErrors() {
    return this.errors.map((err) => ({
      message: err.msg,
      field: err.param,
    }))
  }
}
