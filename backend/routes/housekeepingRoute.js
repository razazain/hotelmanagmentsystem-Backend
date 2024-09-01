const express = require("express");
const router = express.Router();

const { getHousekeepingDetails, createHousekeeping, updateHousekeeping, deleteHousekeeping } = require("../controllers/HousekeepingController");

router.route('/').get(getHousekeepingDetails).post(createHousekeeping);
router.route('/:id').put(updateHousekeeping).delete(deleteHousekeeping);

module.exports = router;
