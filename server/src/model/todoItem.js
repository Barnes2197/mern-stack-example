'use strict'

const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true}
});

const todoItem = mongoose.model('todoItem', todoSchema);

module.exports = todoItem;