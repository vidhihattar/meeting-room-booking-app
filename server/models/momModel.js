const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const momSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    meeting_id: {
        type: String,
        required: true
    },
    meeting_title: {
        type: String,
        required: true
    },
    host_name: {
        type: String,
        required: true 
    },
    host_id:{
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
          },
          status: {
            type: String,
            default: "pending"
          }
        }
      ]
});

module.exports = mongoose.model('MOM', momSchema);