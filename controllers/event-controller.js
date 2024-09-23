import { ctrlWrapper } from '../decorators/index.js'
import Event from '../models/Event.js'

const getAllEvents = async (req, res) => {
	const page = parseInt(req.query.page) || 1
	const limit = 10
	const skip = (page - 1) * limit
	const events = await Event.find({}, '-createdAt -updatedAt', { limit, skip })
	const totalEvents = await Event.countDocuments()
	const totalPages = Math.ceil(totalEvents / limit)
	res.status(200).json({ events, totalPages })
}
const createEvent = async (req, res) => {
	const event = await Event.create(req.body)
	res.status(201).json(event)
}


export default {
	getAllEvents: ctrlWrapper(getAllEvents),
	createEvent: ctrlWrapper(createEvent),
}
