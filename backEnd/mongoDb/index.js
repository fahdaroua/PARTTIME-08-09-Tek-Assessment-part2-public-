const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/OnePieceCharactersDB";
mongoose
  .connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("db mongo connected");
  })
  .catch((err) => console.log(err));
const db = mongoose.connection;
const {Characters} = require("./characters")

const getAllCharachters = () => {
  return Characters.find({})
};

const addCharacter = (data) => {
 return Characters.create(data)
}; 

const updateCharacter = (data,id) => {
return Characters.findOneAndUpdate(id,data,{
  new: true
})}

const deleteOne = (id)=>{
return Characters.findOneAndDelete(id)
}


module.exports.getAllCharachters = getAllCharachters;
module.exports.addCharacter = addCharacter
module.exports.updateCharacter = updateCharacter
module.exports.deleteOne = deleteOne
module.exports.db = db;


