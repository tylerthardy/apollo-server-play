const mongoose = require("mongoose");
const { Schema } = mongoose;

const loadoutSchema = new Schema({
    Name: String
});
  
const Loadout = mongoose.model('loadout', loadoutSchema); 
  
module.exports = {
    Loadout
};