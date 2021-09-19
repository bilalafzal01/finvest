import express from 'express'
import { currentUser } from '../../middlewares/current-user'
import { isAdmin } from '../../middlewares/is-admin'
import { InvestmentType } from '../../models/investmentType'

const router = express.Router()

router.post(
  `/api/investmenttype/create`,
  currentUser,
  isAdmin,
  async (req, res, next) => {
    try {
      const { title, description, projectedROI, currentROI, icon } = req.body
      if (!title || !description || !projectedROI || !currentROI) {
        throw new Error('Payload incomplete')
      }

      const investmentType = InvestmentType.build({
        title,
        description,
        projectedROI,
        currentROI,
        icon,
      })
      await investmentType.save()
      res.status(201).send(investmentType)
    } catch (err) {
      console.log(err)
    }
  }
)

export { router as createInvestmentTypeRouter }
