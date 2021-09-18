import express from 'express'
import { body } from 'express-validator'
import jwt from 'jsonwebtoken'

import { User } from '../../models/user'
import { Password } from '../../services/password'
import { validateRequest } from '../../middlewares/validate-request'
import { BadRequestError } from '../../errors/bad-request-error'
import { Admin } from '../../models/admin'

const router = express.Router()

router.post(
  `/api/admins/signin`,
  [
    body('email').isEmail().withMessage('Email must be valid!'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('Password must be supplied!'),
  ],
  validateRequest,
  async (req, res) => {
    const { email, password } = req.body
    const existingUser = await User.findOne({ email })
    if (!existingUser) {
      throw new BadRequestError(`Invalid credentials`)
    }

    const passwordsMatch = await Password.compare(
      existingUser.password,
      password
    )
    if (!passwordsMatch) {
      throw new BadRequestError(`Invalid credentials`)
    }

    const admin = await Admin.findOne({ user: existingUser.id })

    // * Generate JWT and store it in the cookie
    const adminJwt = jwt.sign(
      {
        userId: existingUser.id,
        email: existingUser.email,
        name: existingUser.name,
        phone: existingUser.phone,
        role: existingUser.role,
        adminId: admin.id,
      },
      process.env.JWT_KEY
    )
    req.session = {
      jwt: adminJwt,
    }

    res.status(200).send(admin)
  }
)

export { router as adminSigninRouter }
