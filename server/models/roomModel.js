const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  isBooked: {
    type: Boolean,
    default: false
  },
  bookedUntil: {
    type: Date,
    default: null
  }
});

roomSchema.methods.bookRoom = function(duration) {
  const now = new Date();
  const bookedUntil = new Date(now.getTime() + duration * 60000); // add duration in minutes
  this.isBooked = true;
  this.bookedUntil = bookedUntil;
  return this.save();
};

roomSchema.statics.checkAndUpdateBookedRooms = async function() {
  const now = new Date();
  const rooms = await this.find({ isBooked: true, bookedUntil: { $lte: now } });
  for (const room of rooms) {
    room.isBooked = false;
    room.bookedUntil = null;
    await room.save();
  }
};

const Room = mongoose.model('Room', roomSchema);

// check and update booked rooms every minute
setInterval(async () => {
  await Room.checkAndUpdateBookedRooms();
}, 60000);

module.exports = Room;


