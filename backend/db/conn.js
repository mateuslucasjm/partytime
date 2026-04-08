const mongoose = require("mongoose");

let isConnected = false;

async function connectDB() {
  if (isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    isConnected = db.connections[0].readyState;
    console.log("Conectado ao banco!");
  } catch (error) {
    console.log("Erro ao conectar:", error);
  }
}

module.exports = connectDB;
