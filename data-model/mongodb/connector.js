const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/osrs-mate';

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));

const LoadoutSchema = new mongoose.Schema({
    _id: String,
    name: String,
    items: [Number]
});

module.exports = {
    Loadout: mongoose.model("loadouts", LoadoutSchema)
}