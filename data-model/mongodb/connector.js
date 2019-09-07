const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/osrs-mate';

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));

const { LoadoutSchema } = require("./schema/LoadoutSchema");

module.exports = {
    Loadout: mongoose.model("loadouts", LoadoutSchema)
}