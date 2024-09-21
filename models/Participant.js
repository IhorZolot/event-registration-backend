import { Schema, model } from 'mongoose'

const participantSchema = new Schema({
  eventId: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    enum: ['Social Media', 'Friends', 'Found myself'],
    required: true,
  },
}, { versionKey: false, timestamps: true });

const Participant = model('participant', participantSchema);

export default Participant;
