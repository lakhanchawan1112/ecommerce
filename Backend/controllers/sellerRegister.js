const db = require("../config/db");
const bcrypt = require("bcryptjs");

const registerSeller = (req, res) => {
    try{
        const {name, email: email, phone, company, password, confirmPassword} = req.body;
        if(!name || !email || !phone || !company || !password || !confirmPassword) {
            return res.status(400).json({message: "Please fill all the fields"})
        }
    
        if(password !== confirmPassword) {
            return res.status(400).json({message: "Passwords does not match"})
        }

        const checkEmailSql = "SELECT id FROM lakhan_users WHERE email = ?"
        db.query(checkEmailSql, [email], async (err, result) => {
            if(err) {
                return res.status(500).json({message: "database error"})
            }

            if(result.length>0) {
                return res.status(400).json({message: "Email already Registered"})
            }

            const hashPassword = await bcrypt.hash(password, 10);
        })

        const sql = `INSERT INTO lakhan_users(id, name, email, phone, password, role, status, email_verified, phone_verified, created_at, updated_at) 
        VALUES (NULL, '${name}', '${email}', '${phone}', '${password}', 'Seller', 'Pending', 0, 0 NOW(), NOW())`
        db.query(sql, (err, result) => {
            res.status(200).json({message: "User Registered Success"})

        })

    } catch (err) {
        res.status(500).json({message: "server error"})
    }
};


module.exports = {registerSeller};