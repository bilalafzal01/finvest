import express from 'express'
import { body } from 'express-validator'
import { requireAuth } from '../../middlewares/require-auth'

const router = express.Router()

router.get(`/api/investmentprojects/show`, requireAuth, async (req, res) => {})

export { router as showInvestmentProjectRouter }
