import express from 'express'
import { currentUser } from '../../middlewares/current-user'
import { requireAuth } from '../../middlewares/is-admin'
import { InvestmentType } from '../../models/investmentType'

const router = express.Router()

router.post(`/deleteInvestmentType`, requireAuth, async(req, res, next) => {
    try {
        const { investmentProjectID } = req.body
        if(!investmentProjectID){
            throw new Error("Payload incomplete")
        }
        await InvestmentProject.deleteOne({ _id: investmentProjectID });
        res.send({message: "Investment Project deleted successfully"})
    }
    catch(err){
        console.log(err)
    }
})

export { router as deleteInvestmentProjectRouter }

