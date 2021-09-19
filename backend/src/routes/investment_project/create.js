import express from 'express'
import { body } from 'express-validator'
import { isAdmin } from '../../middlewares/is-admin'
import { requireAuth } from '../../middlewares/require-auth'

import { InvestmentProject } from '../../models/investmentProject'
import { currentUser } from './../../middlewares/current-user'

const router = express.Router()

router.post(
  `/api/investmentprojects/create`,
  currentUser,
  isAdmin,
  async (req, res) => {
    const {
      deadline,
      title,
      target,
      shares,
      admin,
      status,
      finalROI,
      basePrice,
      investmentType,
      icon,
    } = req.body
    const investmentProject = InvestmentProject.build({
      deadline,
      target,
      title,
      shares,
      admin,
      status,
      basePrice,
      finalROI,
      investmentType,
      icon,
    })
    await investmentProject.save()
    res.status(201).send(investmentProject)
  }
)

export { router as createInvestmentProjectRouter }
