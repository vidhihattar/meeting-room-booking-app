const mongoose = require('mongoose');
const Meeting = require('../models/meetingModel');

const getInvites = async (req, res) => {
  const user_id = req.user._id;
  const now = new Date();
  const invites = await Meeting.find({ "attendees.id": user_id , end_time: { $gt: now } }).sort({ createdAt: -1 });
  res.status(200).json(invites);
};

const updateAttendeeStatus = async (req, res) => {
  const { meetingId} = req.params;
  const objectId = req.user._id;
  const attendeeId = objectId.toString();
  const {status} =req.body;
  console.log(attendeeId);


  try {
    const meeting = await Meeting.findById(meetingId);
    const attendee = meeting.attendees.find(att => att.id === attendeeId);

    if (!attendee) {
      return res.status(404).json({ message: 'Attendee not found' });
    }

    attendee.status = status;
    await meeting.save();

    res.status(200).json({ message: 'Attendee status updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};


module.exports = {
  getInvites,
  updateAttendeeStatus
}