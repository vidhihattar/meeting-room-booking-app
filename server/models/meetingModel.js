const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const meetingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  start_time: {
    type: Date,
  },
  end_time: {
    type: Date,
  },
  room: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  attendees: [
    {
      type: String,
    }
  ],
  user_id: {
    type: String,
    required: true 
  }  
});

module.exports = mongoose.model('Meeting', meetingSchema);
