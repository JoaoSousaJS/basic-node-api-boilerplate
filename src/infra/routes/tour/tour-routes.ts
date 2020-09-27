import express from 'express'
import { getAllTours, getTour, deleteTour, updateTour, createTour, getTourStats, getMonthlyPlan } from '../../../presentation/controllers/tour/index'
import { aliasTopTours } from '../../../main/middlewares/alias-top-tours'

export const tourRouter = express.Router()

tourRouter.route('/top-5-cheap').get(aliasTopTours, getAllTours)
tourRouter.route('/tour-stats').get(getTourStats)
tourRouter.route('/monthly-plan/:year').get(getMonthlyPlan)

tourRouter.route('/:id').get(getTour).patch(updateTour).delete(deleteTour)
tourRouter.route('/').get(getAllTours).post(createTour)