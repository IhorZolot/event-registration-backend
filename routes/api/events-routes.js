import express from 'express'
import eventController from '../../controllers/event-controller.js'

const eventRouter = express.Router()

eventRouter.get('/events', eventController.getAllEvents)
eventRouter.post('/event/create', eventController.createEvent)
eventRouter.post('/event/:eventId/register', eventController.registerForEvent)
eventRouter.get('/event/:eventId/participants', eventController.getParticipantsForEvent)

export default eventRouter
