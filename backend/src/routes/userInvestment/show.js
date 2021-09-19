import express from 'express'
import { currentUser } from '../../middlewares/current-user'
import { isAdmin } from '../../middlewares/is-admin'
import { UserInvestment } from '../../models/userInvestment'

const router = express.Router()

router.get(`/api/userInvestment/show`, async (req, res, next) => {
  try {
    const { userId } = req.query
    const userInvestments = await UserInvestment.find({
      user: userId,
    })
      .populate('investmentType')
      .populate('investmentProject')
      .exec()
    res.status(200).send(userInvestments)
  } catch (err) {
    console.log(err)
  }
})

export { router as showUserInvestmentRouter }
