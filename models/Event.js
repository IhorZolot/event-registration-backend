import { Schema, model } from 'mongoose'
import { handleSaveError } from '../hooks/hooks.js'

const eventSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			minlength: 3, 
      maxlength: 50,
		},
		description: {
			type: String,
			required: true,
			maxlength: 100
		},
		eventDate: {
			type: Date,
			required: true,
		},
		organizer: {
			type: String,
			required: true,
			minlength: 3, 
      maxlength: 10 
		},
	},
	{ versionKey: false, timestamps: true }
)
eventSchema.post('save', handleSaveError)

const Event = model('event', eventSchema)
export default Event
