const express = require("express");
const router = express.Router();


const { getRoomDetails, createRoom , updateRoom, deleteRoom } = require("../controllers/RoomController");



router.route('/').get(getRoomDetails).post(createRoom)
router.route('/:id').put(updateRoom).delete(deleteRoom)


module.exports = router;