import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import mysql2 from "mysql2";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
const app = express();
const httpServer = createServer();
const io = new Server(httpServer, {
  cors: "http://localhost:3000",
});
import {
  InsertNewActivity,
  InsertNewProduct,
  InsertNewUser,
  readProduct,
  readUser,
  updateProduct,
} from "./conexiones.js";
const connection = mysql2.createConnection({
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBDATABASE,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

io.on("connection", (socket) => {
  console.log("user conected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.get("/", function (req, res) {
  res.send("Aplicación iniciada");
});

app.listen(3000, function () {
  console.log("Aplicación iniciada en el puerto 3000");
});
