const express = require("express");
const router = express.Router();

const { getBookingDetails, createBooking, updateBooking, deleteBooking } = require("../controllers/BookingController");

router.route('/').get(getBookingDetails).post(createBooking);
router.route('/:id').put(updateBooking).delete(deleteBooking);

module.exports = router;
