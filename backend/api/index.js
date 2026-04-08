require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("../db/conn");
const routes = require("../routes/router");

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
  }),
);

app.use(express.json());

// conecta no banco
connectDB();

// rotas
app.use("/api", routes);

module.exports = app;
