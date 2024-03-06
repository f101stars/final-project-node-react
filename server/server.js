require("dotenv").config()
const express = require("express")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbConn")
const mongoose = require("mongoose")


const PORT = process.env.PORT

const app = express()
connectDB()
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))

app.use("/api/turns",require("./routes/turn"))
app.use("/api/users",require("./routes/user"))
app.get("/", (req, res) => {
    res.send("home page")
})

mongoose.connection.once('open', () => {
    console.log("Connected to db!!!");
    app.listen(PORT, () => {
        console.log(`running on PORT ${PORT}`);
    })
})

mongoose.connection.on('error',err=>{
    console.log(err);
})