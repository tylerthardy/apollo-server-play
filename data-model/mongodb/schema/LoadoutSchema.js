const mongoose = require('mongoose');
const LoadoutSchema = new mongoose.Schema({
    name: String,
    activityId: String,
    activityTypeId: String,
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
