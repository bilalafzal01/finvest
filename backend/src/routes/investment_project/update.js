import express from 'express'
import { body } from 'express-validator'

const router = express.Router()

export { router as updateInvestmentProjectRouter }


import express from 'express'
import { requireAuth } from '../../middlewares/current-user'
import { InvestmentType } from '../../models/investmentType'

const router = express.Router()

router.post(`/updateInvestmentProject`, requireAuth, currentUser,
isAdmin, async(req, res, next) => {
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
        if(targer){
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

export { router as updateInvestmentTypeRouter }


