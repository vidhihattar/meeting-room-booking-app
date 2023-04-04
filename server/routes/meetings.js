const express = require('express');
const {
    getMeetings,
    getMeeting,
    createMeeting,
    deleteMeeting,
    updateMeeting
} = require('../controllers/meetingController')

const router = express.Router();

// GET all meetings
router.get('/', getMeetings);

// GET a single meeting
router.get('/:id', getMeeting);

// POST a new meeting
router.post('/', createMeeting);

// DELETE a meeting
router.delete('/:id', deleteMeeting)

// UPDATE a meeting
router.patch('/:id', updateMeeting)

module.exports = router;