const express = require('express');

const {
    getMoms,
    createMom
}= require('../controllers/momController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

router.use(requireAuth)

router.get('/', getMoms);

router.post('/', createMom);

module.exports = router;