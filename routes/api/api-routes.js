//intialize modules
const express = require('express');
const router = express.Router();
const db = require('../../models');
const Op = require('sequelize').Op;

// route to get all bookings by ascending appointment date
router.get('/getBookings/', (req, res) => {
  db.Booking.findAll({ order: [['appt_date', 'ASC']] }).then(result => {
    res.json(result);
  });
});

//route to add a booking
router.post('/createBooking/', (req, res) => {
  db.Booking.create({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    appt_type: req.body.appt_type,
    appt_date: req.body.appt_date,
    appt_time: req.body.appt_time
  }).then(result => res.json(result));
});

module.exports = router;
