const Meeting = require('../models/meetingModel');
const MeetingInvite = require('../models/meetingInviteModel')
const Room = require('../models/roomModel');
const mongoose = require('mongoose');

// get all meetings

const getMeetings = async (req, res) => {
    const user_id = req.user._id;
    const meetings = await Meeting.find({ 'host.id': user_id }).sort({ createdAt: -1 });

    res.status(200).json(meetings);
}

// get a single meeting

const getMeeting = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such meeting" })
    }

    const meeting = await Meeting.findById(id);

    if (!meeting) {
        return res.status(404).json({ error: 'No such meeting' })
    }

    res.status(200).json(meeting);
}

// create a new meeting

const createMeeting = async (req, res) => {
    const { title, date, start_time, end_time, room, description, attendees, host } = req.body;
    const user_id = req.user._id;
    const user_email =req.body.host.name;
    console.log(user_email)
    

    try {
        const host = {
            id: user_id,
            name: user_email
        };
        console.log(host)

        const meeting = await Meeting.create({
            title,
            date,
            start_time,
            end_time,
            room,
            attendees,
            description,
            host
        });

    

        res.status(200).json(meeting);
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
}

// delete a meeting

const deleteMeeting = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such meeting' })
    }
    const meeting = await Meeting.findOneAndDelete({ _id: id });

    if (!meeting) {
        return res.status(400).json({ error: 'No such meeting' })
    }

    // update room status
    const bookedRoom = await Room.findByIdAndUpdate(meeting.room._id, { isBooked: false, bookedUntil: null });
    if (!bookedRoom) {
        throw new Error('Could not update room status');
    }

    res.status(200).json(meeting)

}

// update a meeting

const updateMeeting = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such meeting' })
    }

    const meeting = await Meeting.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!meeting) {
        return res.status(400).json({ error: 'No such meeting' })
    }

    res.status(200).json(meeting)

}

module.exports = {
    getMeetings,
    getMeeting,
    createMeeting,
    deleteMeeting,
    updateMeeting
}

