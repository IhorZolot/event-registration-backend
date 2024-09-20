import { HttpError } from '../helpers/index.js'
import { ctrlWrapper } from '../decorators/index.js'
import Event from '../models/Event.js'

const getAllEvents = async (req, res) => {
	try {
		const events = await Event.find({}, '-createdAt -updatedAt')
		res.status(200).json(events)
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}

const createEvent = async (req, res) => {
	try {
		const event = await Event.create(req.body)
		res.status(201).json(event)
	} catch (error) {
		res.status(409).json({ message: error.message })
	}
}
export default {
	getAllEvents: ctrlWrapper(getAllEvents),
	createEvent: ctrlWrapper(createEvent),
}
