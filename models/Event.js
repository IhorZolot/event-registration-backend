import { Schema, model } from 'mongoose'
import { handleSaveError } from '../hooks/hooks.js'

const eventSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		eventDate: {
			type: String,
			required: true,
		},
		organizer: {
			type: String,
			required: true,
		},
	},
	{ versionKey: false, timestamps: true }
)
eventSchema.post('save', handleSaveError)

const Event = model('event', eventSchema)
export default Event
