const mongoose = require('mongoose');
const ActivitySchema = new mongoose.Schema({
    name: String,
    activityTypeId: String
});

exports.ActivitySchema = ActivitySchema;
