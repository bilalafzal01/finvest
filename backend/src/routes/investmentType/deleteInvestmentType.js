import express from 'express'
import { requireAuth } from '../../middlewares/require-auth'
import { InvestmentType } from '../../models/investmentType'

const router = express.Router()

router.post(`/deleteInvestmentType`, async(req, res, next) => {
    try {
        const { investmentTypeID } = req.body
        if(!investmentTypeID){
            throw new Error("Payload incomplete")
        }
        await InvestmentType.deleteOne({ _id: investmentTypeID });
        res.send({message: "Investment Type created successfully"})
    }
    catch(err){
        console.log(err)
    }
})

export { router as deleteInvestmentTypeRouter }

