const mongoose = require('mongoose');

async function main() {
   
  await mongoose.connect("mongodb+srv://suvajitsamanta2005:Suvajit%402005@cluster0.hfkejna.mongodb.net/HI");
  
}


module.exports = main;