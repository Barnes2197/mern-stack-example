'use strict'
require('cors');
require('express');
const mongoose = require('mongoose');
require('body-parser');
require('../routes/todoItem');
// env variables
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mern-starter';

mongoose.Promise = Promise;
const db = mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
            .then(() =>
                console.log("Successfully connected to MongoDB")
            );


module.exports = db;