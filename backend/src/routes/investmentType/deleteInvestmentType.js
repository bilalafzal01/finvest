import express from 'express'
import { currentUser } from '../../middlewares/current-user'
import { isAdmin } from '../../middlewares/is-admin'
import { InvestmentType } from '../../models/investmentType'

const router = express.Router()

router.post(`/api/investmenttype/delete`, currentUser,
isAdmin, async(req, res, next) => {
    try {
        const { investmentTypeID } = req.body
        if(!investmentTypeID){
            throw new Error("Payload incomplete")
        }
        await InvestmentType.deleteOne({ _id: investmentTypeID });
        res.send({message: "Investment Type deleted successfully"})
    }
    catch(err){
        console.log(err)
    }
})

export { router as deleteInvestmentTypeRouter }

