import express from 'express'
import { UserInvestment } from '../../models/userInvestment'
import { InvestmentProject } from '../../models/investmentProject'

const router = express.Router()

router.get(`/api/investmentprojects/progress`, async (req, res, next) => {
  try {
    var totalProjectAmount = 0
    const { projectId } = req.query
    const usersInvestments = await UserInvestment.find({
      investmentProject: projectId,
    })
      .populate('investmentProject')
      .exec()
    const amount = usersInvestments.reduce((accumulator, curr) => {
      return accumulator + curr.amount
    }, 0)
    console.log(amount)
    const project = await InvestmentProject.findOne({ _id: projectId })
    res
      .status(200)
      .send({ progress: amount / project.target, target: project.target })
  } catch (err) {
    console.log(err)
  }
})

export { router as progressInvestmentProjectsRouter }
