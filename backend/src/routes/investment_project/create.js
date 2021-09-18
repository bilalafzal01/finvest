import express from 'express'
import { body } from 'express-validator'
import { requireAuth } from '../../middlewares/require-auth'

import { InvestmentProject } from '../../models/investmentProject'

const router = express.Router()

router.post(`/api/investmentprojects/create`, requireAuth, async (req, res) => {
  const { deadline, target, shares, admin, status, finalROI, investmentType } =
    req.body
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
})

export { router as createInvestmentProjectRouter }
