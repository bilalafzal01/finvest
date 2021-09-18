import express from 'express'
import { body } from 'express-validator'
import jwt from 'jsonwebtoken'

import { validateRequest } from '../../middlewares/validate-request'
import { BadRequestError } from '../../errors/bad-request-error'

import { User } from '../../models/user'

const router = express.Router()

router.post(
  `/api/users/signup`,
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
  ],
  validateRequest,
  async (req, res) => {
    const { email, password, name, phone, role } = req.body
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      throw new BadRequestError(
        'Email already in use. Please use a different email address.'
      )
    }

    const user = User.build({ email, password, name, phone, role })
    await user.save()

    // * Generate JWT and store it on the session object
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        role: user.role,
      },
      process.env.JWT_KEY
    )
    req.session = { jwt: userJwt }
    console.log(`in currentuser middlware: `, req.session.jwt)
    res.status(201).send(user)
  }
)

export { router as signupRouter }
