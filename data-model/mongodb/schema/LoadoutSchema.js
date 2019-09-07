const mongoose = require('mongoose');
const LoadoutSchema = new mongoose.Schema({
    name: String,
    inventory: [{
        item: Number,
        slot: Number
    }],
    equipment: [{
        item: Number,
        slot: Number
    }]
});

exports.LoadoutSchema = LoadoutSchema;
