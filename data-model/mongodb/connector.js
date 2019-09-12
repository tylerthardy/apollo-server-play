const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/osrs-mate';

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));

const { LoadoutSchema } = require("./schema/LoadoutSchema");
const { ActivitySchema } = require("./schema/ActivitySchema");
const { ActivityTypeSchema } = require("./schema/ActivityTypeSchema");

module.exports = {
    Loadout: mongoose.model("loadouts", LoadoutSchema),
    Activity: mongoose.model("activities", ActivitySchema),
    ActivityType: mongoose.model("activity-types", ActivityTypeSchema)
}