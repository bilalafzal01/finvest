import express from 'express'
import { currentUser } from '../../middlewares/current-user'
import { isAdmin } from '../../middlewares/is-admin'
import { InvestmentType } from '../../models/investmentType'

const router = express.Router()

router.get(`/api/investmenttype/show`, async (req, res, next) => {
  try {
    const investmentTypes = await InvestmentType.find({})
    res.status(200).send(investmentTypes)
  } catch (err) {
    console.log(err)
  }
})

export { router as showInvestmentTypesRouter }
