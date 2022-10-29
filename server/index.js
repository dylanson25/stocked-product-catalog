const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io", {
  cors: "http://localhost:3030",
});
const io = new Server(server);

const mysql2 = require("mysql2");
require("dotenv").config();

const {
  InsertNewActivity,
  InsertNewProduct,
  InsertNewUser,
  readProduct,
  readUser,
  updateProduct,
} = require("./conexiones");

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

  socket.on("signOrCreateUser", ({ full_name, password }) => {
    readUser(connection, full_name, (resp) => {
      if (resp.length === 1) {
        if (resp[0].password != password) {
          socket.emit("BAD_CREDENCIAL");
        }
        socket.emit("LOGIN");
      } else {
        InsertNewUser(connection, {
          full_name,
          password,
        });
      }
    });
  });

  socket.on("get_products", () => {
    readProduct(connection, (resp) => {
      socket.emit("GET_PRODUCTS", resp);
    });
  });
  socket.on("edit_product", (product) => {
    console.log("editando producto");
    updateProduct(
      connection,
      {
        nombre: product.nombre,
        sale_price: product.sale_price,
        purchase_price: product.purchase_price,
        stock: product.stock,
        concepto: product.concepto,
        barcode: product.barcode,
        id: product.id,
      },
      () => {
        readProduct(connection, (resp) => {
          socket.emit("GET_PRODUCTS", resp);
        });
      }
    );
  });

  socket.on("newEntryOut", (movimiento) => {
    console.log("1-} entrada, 0.- salida: ", movimiento);
    InsertNewActivity(
      connection,
      {
        product_id: movimiento.product_id,
        type_activity: movimiento.type_activity,
        unidades: movimiento.unidades,
      },
      () => {
        readProduct(connection, (resp) => {
          socket.emit("GET_PRODUCTS", resp);
        });
      }
    );
  });

  socket.on("add_new_product", (product) => {
    console.log("ola");
    InsertNewProduct(
      connection,
      {
        nombre: product.nombre,
        sale_price: product.sale_price,
        purchase_price: product.purchase_price,
        stock: product.stock,
        concepto: product.concepto,
        barcode: product.barcode,
      },
      () => {
        readProduct(connection, (resp) => {
          socket.emit("GET_PRODUCTS", resp);
        });
      }
    );
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.get("/", function (req, res) {
  res.send("Aplicación iniciada");
});

server.listen(process.env.port, function () {
  console.log("Aplicación iniciada en el puerto " + process.env.port);
});
module.exports = app;
