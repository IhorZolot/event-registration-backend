import { ctrlWrapper } from '../decorators/index.js'
import Event from '../models/Event.js'

const getAllEvents = async (req, res) => {
	const {page=1, limit=6, sortBy = 'title', sortOrder = 'asc' } = req.query
	const skip = (page - 1) * limit
	const sortOptions = {};
  sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1; 
	const events = await Event.find({}, '-createdAt -updatedAt', { limit, skip }).sort(sortOptions);
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
