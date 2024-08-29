const express = require("express");
const router = express.Router();

const {
    getUserAccount,
    createUserAccount
} = require ("../controllers/UserController");

router.route('/').get(getUserAccount).post(createUserAccount)


module.exports = router;