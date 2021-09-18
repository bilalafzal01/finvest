import express from 'express'
import { requireAuth } from '../../middlewares/require-auth'
import { InvestmentType } from '../../models/investmentType'

const router = express.Router()

router.post(`/showInvestmentTypes`, requireAuth, async(req, res, next) => {
    try {
        const investmentTypes = await InvestmentType.find({})
        res.status(201).send(investmentTypes)
    }
    catch(err){
        console.log(err)
    }
})

export { router as showInvestmentTypes }

