import { NotAuthorizedError } from '../errors/not-authorized-error'
import { Admin } from '../models/admin'

// ! assumption: we will always run this middleware after the currentUser middleware
export const isAdmin = async (req, res, next) => {
  console.log(req.currentUser)
  if (!req.currentUser || req.currentUser.role === 'user') {
    throw new NotAuthorizedError()
  }
  if (
    req.currentUser.role === 'admin' ||
    req.currentUser.role === 'superadmin'
  ) {
    const admin = await Admin.findOne({ user: req.currentUser.id })
    console.log(admin)
    req.admin = admin
  }
  next()
}
