// server.js
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Listen for connections and room creation
io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("create-room", (roomId) => {
    socket.join(roomId);
    console.log(`Room ${roomId} created`);
    socket.emit("room-created", roomId);
  });

  socket.on("join-room", (roomId) => {
    socket.join(roomId);
    console.log(`User joined room ${roomId}`);
    socket.emit("room-joined", roomId);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
