import express from 'express'
import { currentUser } from '../../middlewares/current-user'
import { isAdmin } from '../../middlewares/is-admin'
import { InvestmentType } from '../../models/investmentType'

const router = express.Router()

router.post(`/showInvestmentTypes`, currentUser,
isAdmin, async(req, res, next) => {
    try {
        const investmentTypes = await InvestmentType.find({})
        res.status(201).send(investmentTypes)
    }
    catch(err){
        console.log(err)
    }
})

export { router as showInvestmentTypesRouter }

