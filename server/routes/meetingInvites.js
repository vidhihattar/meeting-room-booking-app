const express = require('express');

const {
    getInvites,
    updateAttendeeStatus
} = require('../controllers/meetingInvitesController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

router.use(requireAuth)

router.get('/', getInvites);
router.put('/attendees/:meetingId', updateAttendeeStatus);

module.exports = router;