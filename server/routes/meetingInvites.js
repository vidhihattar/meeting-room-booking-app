const express = require('express');

const {
    getInvites,
} = require('../controllers/meetingInvitesController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

router.use(requireAuth)

router.get('/', getInvites);

module.exports = router;