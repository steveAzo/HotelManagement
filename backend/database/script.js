const fs = require('fs');
const mongoose = require('mongoose');
const RoomModel = require('../models/room');
const data = require('./rooms.json')
const dotenv = require('dotenv')

dotenv.config()

// Read the JSON file
const data = fs.readFileSync('rooms.json');
const jsonData = JSON.parse(data);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

async function insertData(jsonData) {
  try {
    await RoomModel.insertMany(jsonData);
    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

// Call the function with JSON data
insertData(jsonData);
