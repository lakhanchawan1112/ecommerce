const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.post("/register", (req, res) => {
    const {name, email, phone, company, password, confirmPassword} = req.body;
    if(!name || !email || !phone || !company || !password || !confirmPassword) {
        return res.status(400).json({message: "Please fill all the fields"})
    }

    if(password !== confirmPassword) {
        return res.status(400).json({message: "Passwords does not match"})
    }

    res.status(200).json({message: "User Registered Success", 
        data: {
            name,
            email,
            phone,
            company
        }
    })
});


app.listen(3000, () => {
    console.log("server running on port 3000")
});