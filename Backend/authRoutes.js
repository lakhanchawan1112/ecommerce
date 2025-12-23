const express = require("express");

const {adminLogin} = require("../adminLgin");

const router = express.Router();

router.post("/admin/login", adminLogin);

module.exports = router;