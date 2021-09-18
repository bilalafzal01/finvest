import express from 'express'
import { body } from 'express-validator'
import jwt from 'jsonwebtoken'

import { validateRequest } from '../../middlewares/validate-request'
import { BadRequestError } from '../../errors/bad-request-error'

import { User } from '../../models/user'
import { Admin } from '../../models/admin'

const router = express.Router()

router.post(
  `/api/admins/signup`,
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
  ],
  validateRequest,
  async (req, res) => {
    const { email, password, name, phone } = req.body
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      throw new BadRequestError(
        'Email already in use. Please use a different email address.'
      )
    }

    const user = User.build({ email, password, name, phone, role: 'admin' })
    await user.save()

    const admin = Admin.build({ user: user._id, adminType: 'admin' })
    await admin.save()
    // * Generate JWT and store it on the session object
    const adminJWT = jwt.sign(
      {
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        adminId: admin.id,
        role: admin.adminType,
      },
      process.env.JWT_KEY
    )
    req.session = { jwt: adminJWT }
    res.status(201).send(admin)
  }
)

export { router as adminSignupRouter }
