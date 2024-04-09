const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')


dotenv.config()


const app = express()

const PORT = process.env.PORT || 5000


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected to the database")
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log('Error connecting to the database', error)
        process.exit(1)
    })