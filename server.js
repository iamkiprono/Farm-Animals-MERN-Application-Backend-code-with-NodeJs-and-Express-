require("dotenv").config()
const express = require("express")
const connectDB = require("./db")
const app = express()
const cowsRoutes = require("./routes/cowsRoutes")

const port = process.env.PORT

connectDB()

// middleware
app.use(express.json())




app.use("/cows", cowsRoutes )


app.listen(port, ()=>{
    console.log(`Listening on ${port}`)
})