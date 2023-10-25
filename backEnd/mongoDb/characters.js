const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const characterSchema = new mongoose.Schema({
  name: String,
  traits: String,
  affiliations: String,
  image: String,
  description: String
});

const Characters = mongoose.model("Character", characterSchema);

module.exports.Characters = Characters;
