import express from 'express'
import { currentUser } from '../../middlewares/current-user'
import { isAdmin } from '../../middlewares/is-admin'
import { UserInvestment } from '../../models/userInvestment'

const router = express.Router()

router.post(
  `/api/userInvestment/create`,
  currentUser,
  async (req, res, next) => {
    try {
      const { investmentType, investmentProject, amount, plan, roi, dateInvested } = req.body
      if (!investmentType || !investmentProject || !amount || !roi || !dateInvested) {
        throw new Error('Payload incomplete')
      }

      const userInvestment = UserInvestment.build({
        investmentType,
        investmentProject,
        amount,
        plan,
        roi,
        dateInvested
      })
      await userInvestment.save()
      res.status(201).send(userInvestment)
    } catch (err) {
      console.log(err)
    }
  }
)

export { router as createInvestmentTypeRouter }
