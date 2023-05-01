const express = require('express');

const requireAuth = require('../middleware/requireAuth')

const {
    getRooms,
    changeRoomStatus,
    createRoom
} = require('../controllers/roomController')

const router = express.Router();
router.use(requireAuth)

router.get('/', getRooms);
router.put('/:id', changeRoomStatus);
router.post('/', createRoom);

module.exports = router;