const mongoose = require('mongoose');
const ActivityTypeSchema = new mongoose.Schema({
    name: String
});

exports.ActivityTypeSchema = ActivityTypeSchema;
