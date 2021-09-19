import express from 'express'
import { currentUser } from '../../middlewares/current-user'
import { isAdmin } from '../../middlewares/is-admin'
import { UserInvestment } from '../../models/userInvestment'
import { User } from '../../models/user'

const router = express.Router()

router.post(`/api/userInvestment/create`, async (req, res, next) => {
  try {
    const {
      investmentType,
      investmentProject,
      amount,
      plan,
      roi,
      dateInvested,
      userId,
    } = req.body
    if (!investmentType || !investmentProject || !amount || !userId) {
      throw new Error('Payload incomplete')
    }

    const user = await User.findOne({ _id: userId })
    if (user.credit >= amount) {
      const userInvestment = UserInvestment.build({
        investmentType,
        investmentProject,
        amount,
        plan,
        roi,
        dateInvested,
        user: userId,
      })
      await userInvestment.save()
      const credit = user.credit - amount
      await User.findOneAndUpdate({ _id: userId }, { credit }, { upsert: true })
      res.status(201).send(userInvestment)
    } else {
      res.status(400).send({ message: 'User does not have enough funds' })
    }
  } catch (err) {
    console.log(err)
  }
})

export { router as createUserInvestmentRouter }
