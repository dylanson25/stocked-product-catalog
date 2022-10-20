import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer();
const io = new Server(httpServer);

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
