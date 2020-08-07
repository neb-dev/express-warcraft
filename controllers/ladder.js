const Player = require('../models/player');

exports.getPlayers = (req, res, next) => {
    Player.find()
    .then(player => res.json(player));
};