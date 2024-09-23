import express from 'express'
import eventController from '../../controllers/event-controller.js'
import participantController from '../../controllers/participant-controller.js'

const eventRouter = express.Router()

eventRouter.get('/events', eventController.getAllEvents)
eventRouter.post('/event/create', eventController.createEvent)
eventRouter.post('/event/:eventId/register', participantController.registerForEvent)
eventRouter.get('/event/:eventId/participants', participantController.getParticipantsForEvent)

export default eventRouter
