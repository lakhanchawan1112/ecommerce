const express = require("express");
const router = express.Router();

const {registerSeller} = require("../controllers/sellerRegister");

router.post("/register", registerSeller);

module.exports = router;