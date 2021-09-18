import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'
import cookieSession from 'cookie-session'

import { currentUserRouter } from './routes/auth/current-user'
import { signinRouter } from './routes/auth/signin'
import { signoutRouter } from './routes/auth/signout'
import { signupRouter } from './routes/auth/signup'
import { createInvestmentTypeRouter } from './routes/investmentType/createInvestmentType'

import { errorHandler } from './middlewares/error-handler'
import { NotFoundError } from './errors/not-found-error'

const app = express()

app.set('trust proxy', 1)

app.use(json())
app.use(
  cookieSession({
    signed: false,
    secure: false,
    // secure: process.env.NODE_ENV !== 'test',
  })
)

app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)
app.use(createInvestmentTypeRouter)

app.all('*', async (req, res, next) => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }
