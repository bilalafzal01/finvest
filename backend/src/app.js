import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import { json } from 'body-parser'
import cookieSession from 'cookie-session'

import { currentUserRouter } from './routes/auth/current-user'
import { signinRouter } from './routes/auth/signin'
import { signoutRouter } from './routes/auth/signout'
import { signupRouter } from './routes/auth/signup'

import { adminSignupRouter } from './routes/auth/admin-signup'
import { adminSigninRouter } from './routes/auth/admin-signin'

import { createInvestmentProjectRouter } from './routes/investment_project/create'
import { showInvestmentProjectsRouter } from './routes/investment_project/show'
import { deleteInvestmentProjectRouter } from './routes/investment_project/delete'
import { updateInvestmentProjectRouter } from './routes/investment_project/update'

import { showInvestmentTypesRouter } from './routes/investmentType/showInvestmentTypes'
import { updateInvestmentTypeRouter } from './routes/investmentType/updateInvestmentType'
import { deleteInvestmentTypeRouter } from './routes/investmentType/deleteInvestmentType'
import { createInvestmentTypeRouter } from './routes/investmentType/createInvestmentType'

import { getUserRouter } from './routes/user/getUser'
import { updateUserRouter } from './routes/user/update'

import { createEasyInvestmentRouter } from './routes/easyInvestment/create'

import { createUserInvestmentRouter } from './routes/userInvestment/create'

import { errorHandler } from './middlewares/error-handler'
import { NotFoundError } from './errors/not-found-error'
import { showUserInvestmentRouter } from './routes/userInvestment/show'
import { showEasyUserInvestmentRouter } from './routes/easyInvestment/show-user'
import { progressInvestmentProjectsRouter } from './routes/investment_project/progress'

const app = express()

app.set('trust proxy', 1)

app.use(
  cors({
    origin: '*',
  })
)
app.use(json())
app.use(
  cookieSession({
    signed: false,
    secure: false,
    // secure: process.env.NODE_ENV !== 'test',
  })
)

// * auth
app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)

app.use(adminSignupRouter)
app.use(adminSigninRouter)

// * investment type routes
app.use(createInvestmentTypeRouter)
app.use(deleteInvestmentTypeRouter)
app.use(showInvestmentTypesRouter)
app.use(updateInvestmentTypeRouter)

// * investment projects routes
app.use(createInvestmentProjectRouter)
app.use(progressInvestmentProjectsRouter)
app.use(showInvestmentProjectsRouter)
app.use(deleteInvestmentProjectRouter)
app.use(updateInvestmentProjectRouter)

app.use(getUserRouter)

app.use(createUserInvestmentRouter)
app.use(showUserInvestmentRouter)

app.use(createEasyInvestmentRouter)
app.use(showEasyUserInvestmentRouter)

app.all('*', async (req, res, next) => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }
