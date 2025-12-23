const express = require("express");

const Admin_Email = "admin@gmail.com";
const Admin_Password = "admin123";


exports.adminLogin = (req, res) => {
    const { email, password } = req.body;

    if(email !== Admin_Email || password !== Admin_Password) {
        return res.status(401).json({message: "Invalid login credential"});
    }

    const token = jwt.sign(
        { role: "admin"},
        process.env.JWT_SECRET,
        { expiresIn: "1h"}
    );

    res.json({
        message : "Admin login Successfull",
        token
    })
}