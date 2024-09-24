import { ctrlWrapper } from '../decorators/index.js'
import Event from '../models/Event.js'
import { format } from 'date-fns';

const getAllEvents = async (req, res) => {
	const {page=1, limit=9, sortBy = 'title', sortOrder = 'asc' } = req.query
	const skip = (page - 1) * limit
	const sortOptions = {};
  sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1; 
	const events = await Event.find({}, '-createdAt -updatedAt', { limit, skip }).sort(sortOptions);

	const formattedEvents = events.map(event => ({
		...event.toObject(),
		eventDate: format(new Date(event.eventDate), 'dd.MM.yyyy'), 
	}));
	const totalEvents = await Event.countDocuments()
	const totalPages = Math.ceil(totalEvents / limit)
	res.status(200).json( { events: formattedEvents, totalPages  })
}
const createEvent = async (req, res) => {
  const event = await Event.create(req.body);
  const formattedDate = format(new Date(event.eventDate), 'dd.MM.yyyy');
  res.status(201).json({ ...event.toObject(), eventDate: formattedDate });
};

export default {
	getAllEvents: ctrlWrapper(getAllEvents),
	createEvent: ctrlWrapper(createEvent),
}
