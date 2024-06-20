
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/demo';

mongoose.connect(url)

const db = mongoose.connection;

db.on('connected', () => {
    console.log("connected to mongo server");
});

db.on('error', (error) => {
    console.log("error", error);
});

db.on('disconnected', () => {
    console.log("disconnected");
});

module.exports = db;   
