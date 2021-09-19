import express from 'express'
import { body } from 'express-validator'
import { isAdmin } from '../../middlewares/is-admin'
import { requireAuth } from '../../middlewares/require-auth'

import { User } from '../../models/user'
import { EasyInvestment } from '../../models/easyInvestment'
import { currentUser } from './../../middlewares/current-user'

const router = express.Router()

router.post(`/api/easyinvestment/create`, async (req, res) => {
  const { userId, amount } = req.body
  const user = await User.findOne({ _id: userId })
  if (user) {
    if (user.credit >= amount) {
      const easyInvestment = EasyInvestment.build({
        user: userId,
        amount: amount,
      })
      await easyInvestment.save()
      const credit = user.credit - amount
      await User.findOneAndUpdate({ _id: userId }, { credit }, { upsert: true })
      res.status(201).send(easyInvestment)
    } else {
      res.status(400).send({ message: 'User does not have enough funds' })
    }
  } else {
    res.status(400).send({ message: 'User not found' })
  }
})

export { router as createEasyInvestmentRouter }
