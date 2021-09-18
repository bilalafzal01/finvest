import express from 'express'
import { currentUser } from '../../middlewares/current-user'
import { isAdmin } from '../../middlewares/is-admin'
import { InvestmentType } from '../../models/investmentType'

const router = express.Router()

router.post(`/updateInvestmentType`, currentUser,
isAdmin, async(req, res, next) => {
    try {
        const { investmentTypeID, title, description, projectedROI, currentROI } = req.body
        const query = {'_id': investmentTypeID};
        if(title){
            const result = await InvestmentType.findOneAndUpdate(query, {title}, {upsert: true})
            res.status(201).send({"Items updated: ": result.n})
        }
        if(description){
            const result = await InvestmentType.findOneAndUpdate(query, {description}, {upsert: true})
            res.status(201).send({"Items updated: ": result.n})
        }
        if(projectedROI){
            const result = await InvestmentType.findOneAndUpdate(query, {projectedROI}, {upsert: true})
            res.status(201).send({"Items updated: ": result.n})
        }
        if(currentROI){
            const result = await InvestmentType.findOneAndUpdate(query, {currentROI}, {upsert: true})
            res.status(201).send({"Items updated: ": result.n})
        }
    }
    catch(err){
        console.log(err)
    }
})

export { router as updateInvestmentTypeRouter }

