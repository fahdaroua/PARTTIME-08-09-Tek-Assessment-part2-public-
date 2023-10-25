const { db } = require("./index.js");
const { Characters } = require("./characters.js"); 

const sampleData = require("../../react-client/src/components/data.json");

const insertSampleProducts = async function () {
  try {
    await Characters.insertMany(sampleData);
    console.log("Database seeded successfully");
  } catch (error) {
    console.log("Error seeding the database: ", error);
  } finally {
    db.close();
  }
};

insertSampleProducts();
