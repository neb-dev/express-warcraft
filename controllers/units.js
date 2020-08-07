const Unit = require('../models/unit');

exports.getUnits = (req, res, next) => {
    Unit.find(unit => res.json(unit));
};