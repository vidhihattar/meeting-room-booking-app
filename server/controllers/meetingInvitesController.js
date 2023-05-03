const mongoose = require('mongoose');
const Meeting = require('../models/meetingModel');

const getInvites = async (req, res) => {
    const user_id = req.user._id;
    const invites = await Meeting.find({ "attendees.id": user_id }).sort({ createdAt: -1 });
    res.status(200).json(invites);
  };



  module.exports = {
    getInvites
}