import jwt from 'jsonwebtoken'

export const currentUser = (req, res, next) => {
  if (!req.session.jwt) {
    return next()
  }
  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY)
    req.currentUser = payload
  } catch (err) {}

  next()
}
