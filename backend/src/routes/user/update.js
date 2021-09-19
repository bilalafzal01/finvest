import express from 'express'
import { currentUser } from '../../middlewares/current-user'
import { isAdmin } from '../../middlewares/is-admin'
import { User } from '../../models/user'

const router = express.Router()

router.post(`/api/users/update`, async (req, res, next) => {
  try {
    const { userId, amount } = req.body
    const query = { _id: userId }
    if (amount) {
      const user = await User.findOne(query)
      const credit = user.credit - amount
      const result = await User.findOneAndUpdate(
        query,
        { credit },
        { upsert: true }
      )
      res.status(201).send({ 'Items updated: ': result.n })
    }
  } catch (err) {
    console.log(err)
  }
})

export { router as updateUserRouter }
