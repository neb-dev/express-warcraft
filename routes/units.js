const express = require('express');
const router = express.Router();

const UnitsController = require('../controllers/units');

router.get('/units');

module.exports = router;