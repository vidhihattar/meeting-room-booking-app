const express = require('express');

const requireAuth = require('../middleware/requireAuth')

const {
    getUsers,
} = require('../controllers/usersController')

const router = express.Router();
router.use(requireAuth)

router.get('/', getUsers);

module.exports = router;