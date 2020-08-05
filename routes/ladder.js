const express = require('express');
const router = express.Router();

const LadderController = require('../controllers/ladder');

router.get('/ladder'); // , LadderController.getPlayers

router.get('/player/:id');

module.exports = router;