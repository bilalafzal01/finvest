import express from 'express'
import { currentUser } from '../../middlewares/current-user'
import { isAdmin } from '../../middlewares/is-admin'
import { InvestmentProject } from '../../models/investmentProject'

const router = express.Router()

router.post(`/api/investmentprojects/update`, currentUser, isAdmin, async(req, res, next) => {
    try {
        const {
            investmentProjectID,
            deadline,
            target,
            shares,
            admin,
            status,
            finalROI,
            investmentType,
          } = req.body
        const query = {'_id': investmentProjectID};
        if(deadline){
            const result = await InvestmentProject.findOneAndUpdate(query, {deadline}, {upsert: true})
            res.status(201).send({"Items updated: ": result.n})
        }
        if(target){
            const result = await InvestmentProject.findOneAndUpdate(query, {target}, {upsert: true})
            res.status(201).send({"Items updated: ": result.n})
        }
        if(shares){
            const result = await InvestmentProject.findOneAndUpdate(query, {shares}, {upsert: true})
            res.status(201).send({"Items updated: ": result.n})
        }
        if(admin){
            const result = await InvestmentProject.findOneAndUpdate(query, {admin}, {upsert: true})
            res.status(201).send({"Items updated: ": result.n})
        }
        if(status){
            const result = await InvestmentProject.findOneAndUpdate(query, {status}, {upsert: true})
            res.status(201).send({"Items updated: ": result.n})
        }
        if(finalROI){
            const result = await InvestmentProject.findOneAndUpdate(query, {finalROI}, {upsert: true})
            res.status(201).send({"Items updated: ": result.n})
        }
        if(investmentType){
            const result = await InvestmentProject.findOneAndUpdate(query, {investmentType}, {upsert: true})
            res.status(201).send({"Items updated: ": result.n})
        }
        
    }
    catch(err){
        console.log(err)
    }
})

export { router as updateInvestmentProjectRouter }


