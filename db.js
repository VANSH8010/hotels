//Step for extablish a connection between mongodb with node.js using mongoose library

// step 1 -: import mongoose library and define the mongodb URL
require('dotenv').config();
const mongoose = require('mongoose');

// const mongoURL=;process.env.MONGODB_URL_LOCAL; 

const mongoURL= process.env.MONGODB_URL; 
// step 2-:setup the mongoDB connection 
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// step 3 -: Access default connection abject representing the mongodb connection
const db=mongoose.connection;  

// step 4 -: Define event listener(connected,error,disconnected)
db.on('connected',() =>{
    console.log("connected to mongodb server ");
})
db.on('error',(err) =>{
    console.log(" mongodb connection error ",err);
})
db.on('disconnected',() =>{
    console.log("  mongodb disconnected ");
})

// step 5 -:export the database connection
module.exports=db;