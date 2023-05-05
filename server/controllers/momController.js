const Mom = require('../models/momModel');
const mongoose = require('mongoose');


const getMoms = async (req, res) => {
    const user_id = req.user._id;

    const moms = await Mom.find({
        $or: [
          { host_id: user_id },
          { 'attendees.id': user_id }
        ]
      }).sort({ createdAt: -1 });

    res.status(200).json(moms);
}

const createMom = async (req, res) => {
    host_id= req.user._id;
    const {text, meeting_id, meeting_title, host_name, attendees} =req.body;

    try{
        const mom = await Mom.create({
            text,
            meeting_id,
            meeting_title,
            host_name,
            host_id, 
            attendees
        });
        res.status(200).json(mom);
    }catch (err) {
        res.status(400).json({ err: err.message });
    }



}

module.exports = {
    getMoms,
    createMom
}