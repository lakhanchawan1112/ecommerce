const express = require("express");

const { verifyToken, isAdmin } = require("../middleware");


const router = express.Router();

router.get("/dashboard", verifyToken, isAdmin, (req, res) => {
    res.json({ message: "Welcome to Dashboard"})
})

module.exports = router;
