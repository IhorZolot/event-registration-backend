import Participant from '../models/Participant.js';
import Event from '../models/Event.js';
import { ctrlWrapper } from '../decorators/index.js';
import { HttpError } from '../helpers/index.js';

const registerForEvent = async (req, res) => {
	const { fullName, email, dateOfBirth, source } = req.body;
	const { eventId } = req.params;
	const event = await Event.findById(eventId);
	if (!event) {
			throw HttpError(404, `Event with id=${eventId} not found`);
	}
	const existingParticipant = await Participant.findOne({ email, eventId });
  if (existingParticipant) {
    return res.status(400).json({ message: 'Participant with this email is already registered for this event' });
  }
	const participant = new Participant({
		fullName,
		email,
		dateOfBirth,
		source,
		eventId, 
});
	console.log('Saving participant:', participant);
	await participant.save(); 
	res.status(201).json({participant, message: 'Participant registered successfully' });
};

const getParticipantsForEvent = async (req, res) => {
  const { eventId } = req.params;
  const participants = await Participant.find({ eventId }).select('fullName email'); 
  if (!participants.length) {
		return res.status(404).json({ message: 'No participants found for this event.' });
	}
  res.status(200).json(participants);
};

export default {
  registerForEvent: ctrlWrapper(registerForEvent),
  getParticipantsForEvent: ctrlWrapper(getParticipantsForEvent),
}