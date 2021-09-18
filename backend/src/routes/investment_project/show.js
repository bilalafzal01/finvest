import express from 'express'
import { requireAuth } from '../../middlewares/require-auth'
import { InvestmentProject } from '../../models/investmentType'

const router = express.Router()

router.post(`/showInvestmentProjects`, requireAuth, async(req, res, next) => {
    try {
        const investmentProjects = await InvestmentProject.find({})
        res.status(201).send(investmentProjects)
    }
    catch(err){
        console.log(err)
    }
})

export { router as showInvestmentProjects }

