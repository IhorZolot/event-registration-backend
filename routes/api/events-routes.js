import express from 'express'
import eventController from '../../controllers/event-controller.js'

const eventRouter = express.Router()

eventRouter.get('/events', eventController.getAllEvents)
eventRouter.post('/create', eventController.createEvent)

export default eventRouter
