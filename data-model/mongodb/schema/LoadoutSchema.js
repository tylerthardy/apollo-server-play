const mongoose = require('mongoose');
const LoadoutSchema = new mongoose.Schema({
    name: String,
    inventory: [{
        item: Number,
        slot: Number,
        quantity: Number
    }],
    equipment: [{
        item: Number,
        slot: Number,
        quantity: Number
    }]
});

exports.LoadoutSchema = LoadoutSchema;
