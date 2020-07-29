const express = require('express');
const router = express.Router();

const LadderController = require('../controllers/ladder');

router.post('/ladder'); // , LadderController.getPlayers

module.exports = router;