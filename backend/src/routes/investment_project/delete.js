import express from 'express'
import { requireAuth } from '../../middlewares/require-auth'
import { InvestmentProject } from '../../models/investmentProject'

const router = express.Router()

router.post(`/api/investmentprojects/delete`, requireAuth, async(req, res, next) => {
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

