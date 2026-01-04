const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const sellerRoutes = require("./routes/seller.routes");
app.use("/api/seller", sellerRoutes)

app.listen(3000, () => {
    console.log("server running on port 3000")
})