const express = require('express');
const router = express.Router();
const db = require('../../models');
const Op = require('sequelize').Op;

router.get('/getBookings/', (req, res) => {
  db.Booking.findAll().then(function(result) {
    res.json(result);
  });
});

module.exports = router;
