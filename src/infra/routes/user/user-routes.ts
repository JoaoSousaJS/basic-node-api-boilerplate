import express from 'express'
import { protectRoutes } from '../../../main/middlewares'
import { signUp, signIn, forgotPassword, resetPassword, updatePassword } from '../../../presentation/controllers/authentication/index'
import { getAllUsers, updateMe } from '../../../presentation/controllers/user/index'

export const userRouter = express.Router()

userRouter.post('/signup', signUp)
userRouter.post('/signin', signIn)
userRouter.post('/forgot-password', forgotPassword)
userRouter.patch('/reset-password/:token', resetPassword)
userRouter.route('/update-password').patch(protectRoutes, updatePassword)
userRouter.get('/', getAllUsers)
userRouter.patch('/update-me',protectRoutes, updateMe)
