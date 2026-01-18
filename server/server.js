require("dotenv").config()
const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())


app.post('user', async(req, res) => {
    console.log(req.body)
})



const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI)
.then(app.listen(port, () => {
    console.log('running on port', port)
})) 