import express, { Router } from 'express'
import { currentUser } from '../../middlewares/current-user'
import { isAdmin } from '../../middlewares/is-admin'
import { User } from '../../models/user'

const router = express.Router()

router.post(`/api/users/getuser`, async(req, res,next) => {
    try{
        const { userID } = req.body
        const query = {'_id': userID};
        if(userID){
            const result = await User.findOne(query)
            res.status(201).send({result})
        }
    }
    catch{

    }
})

export { router as getUserRouter }
