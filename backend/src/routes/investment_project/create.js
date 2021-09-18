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
      target,
      shares,
      admin,
      status,
      finalROI,
      investmentType,
    } = req.body
    const investmentProject = InvestmentProject.build({
      deadline,
      target,
      shares,
      admin,
      status,
      finalROI,
      investmentType,
    })
    await investmentProject.save()
    res.status(201).send(investmentProject)
  }
)

export { router as createInvestmentProjectRouter }
