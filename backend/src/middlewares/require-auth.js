import { NotAuthorizedError } from '../errors/not-authorized-error'

// ! assumption: we will always run this middleware after the currentUser middleware
export const requireAuth = (req, res, next) => {
  if (!req.currentUser) {
    throw new NotAuthorizedError()
  }

  next()
}
