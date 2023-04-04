const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const meetingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  start_time: {
    type: Date,
    required: true
  },
  end_time: {
    type: Date,
    required: true
  },
  attendees: [
    {
      type: String,
    }
  ],
  room: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Meeting', meetingSchema);
