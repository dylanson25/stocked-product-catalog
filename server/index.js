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

/**Agregar persona */
// InsertNewUser(connection, {
//   full_name: "dvillarreal0@ucol.mx",
//   password: "123456789",
// });
/**Agregar producto */
// InsertNewProduct(
//   connection,
//   {
//     nombre: "Cafe Andati",
//     sale_price: 12,
//     purchase_price: 10,
//     stock: 5,
//     concepto: "Cafe andati de 200 gramos extraido del bosque de tangamandapio",
//     barcode: "0021254874145",
//   }
// );
/**Entradas y salidad */
// InsertNewActivity(connection, {
//   product_id: 4,
//   type_activity: 0,
//   unidades: 5,
// });

/**read product */
// readProduct(connection);
// readUser(connection, "dvillarreal0@ucol.mx");
/**update product */
// updateProduct(connection, {
//   nombre: "Clrets de menta",
//   sale_price: 2,
//   purchase_price: 1.5,
//   stock: 45,
//   concepto: "Modificado en el server",
//   barcode: "0012354125214",
//   id: 4,
// });

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
