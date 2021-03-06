import express from 'express'
import { currentUser } from '../../middlewares/current-user'
import { isAdmin } from '../../middlewares/is-admin'
import { UserInvestment } from '../../models/userInvestment'

const router = express.Router()

router.get(`/api/userInvestment/show`, async (req, res, next) => {
  try {
    const { userId } = req.query
    if (userId) {
      const userInvestments = await UserInvestment.find({
        user: userId,
      })
        .populate('investmentType')
        .populate('investmentProject')
        .exec()
      res.status(200).send(userInvestments)
    } else {
      res.status(400).send('User id not specified')
    }
  } catch (err) {
    console.log(err)
  }
})

export { router as showUserInvestmentRouter }
