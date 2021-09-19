import express from 'express'
import { currentUser } from '../../middlewares/current-user'
import { isAdmin } from '../../middlewares/is-admin'
import { EasyInvestment } from '../../models/easyInvestment'

const router = express.Router()

router.get(`/api/easyinvestment/show-user`, async (req, res, next) => {
  try {
    const { userId } = req.query
    if (userId) {
      const userInvestments = await EasyInvestment.find({
        user: userId,
      })
      res.status(200).send(userInvestments)
    } else {
      res.status(400).send({ message: 'User id not specified' })
    }
  } catch (err) {
    console.log(err)
  }
})

export { router as showEasyUserInvestmentRouter }
