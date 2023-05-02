const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const meetingInviteSchema = new Schema({
  meeting_id: {
    type: String, 
    required: true
  },

  attendee_id: {
    type: String, 
    required: true
  },
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
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  description: {
    type: String,
    required: true
  },
  attendees: [
    {
      id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    }
  ],
  user_id: {
    type: String,
    required: true 
  }
});

module.exports = mongoose.model('MeetingInvite', meetingInviteSchema);