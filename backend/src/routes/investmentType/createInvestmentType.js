import express from 'express'
import { requireAuth } from '../../middlewares/require-auth'
import { InvestmentType } from '../../models/investmentType'

const router = express.Router()

router.post(`/createInvestmentType`, requireAuth, async(req, res, next) => {
    try {
        const { title, description, projectedROI, currentROI } = req.body
        if(!title || !description || !projectedROI || !currentROI){
            throw new Error("Payload incomplete")
        }
        
        const investmentType = InvestmentType.build({ title, description, projectedROI, currentROI })
        await investmentType.save()
        res.status(201).send(investmentType)
    }
    catch(err){
        console.log(err)
    }
})

export { router as createInvestmentTypeRouter }

