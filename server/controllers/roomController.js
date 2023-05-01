const Room = require('../models/roomModel');
const mongoose = require('mongoose');


const getRooms = async (req, res) => {
    
    const rooms = await Room.find({isBooked: false }).sort({ createdAt: -1 });

    res.status(200).json(rooms);
}

const changeRoomStatus = async (req, res) =>{
    const { id } = req.params;
    const { duration } = req.body; // duration in minutes
    const room = await Room.findById(id);
    await room.bookRoom(duration); 
    res.status(200).json(room);
}

const createRoom = async (req, res) =>{
    const { name } = req.body;
    const room = new Room({ name, isBooked: false });
    await room.save();
    res.status(200).json(room);
}

module.exports = {
    getRooms,
    changeRoomStatus,
    createRoom
}