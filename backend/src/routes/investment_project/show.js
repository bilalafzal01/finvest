import express from 'express'
import { requireAuth } from '../../middlewares/require-auth'
import { InvestmentProject } from '../../models/investmentProject'

const router = express.Router()

router.get(`/api/investmentprojects/show`, async (req, res, next) => {
  try {
    const { investmentType } = req.query
    let investmentProjects = []
    if (!investmentType) {
      investmentProjects = await InvestmentProject.find({})
    } else {
      investmentProjects = await InvestmentProject.find({
        investmentType: investmentType,
      })
    }
    res.status(200).send(investmentProjects)
  } catch (err) {
    console.log(err)
  }
})

export { router as showInvestmentProjectsRouter }
