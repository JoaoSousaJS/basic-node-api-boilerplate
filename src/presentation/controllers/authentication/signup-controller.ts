import { UserModel } from '../../../data/models/user/user'
import { catchAsync } from '../../errors/catch-async-error'
import { signInJwtHelper } from '../../helper/authentication/signin-helper'

export const signUp = catchAsync(async (req, res, next) => {
  const { name, email, password, passwordConfirmation, passwordChangedAt, role } = req.body
  const newUser = await UserModel.create({
    name,
    email,
    password,
    role,
    passwordConfirmation,
    passwordChangedAt
  })

  const token = signInJwtHelper(newUser._id)

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: {
        name,
        email
      }
    }
  })
})
