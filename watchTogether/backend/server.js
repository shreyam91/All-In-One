const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

// Enable CORS for Express
app.use(cors({ origin: "http://localhost:5173" }));

// Enable CORS for Socket.io
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

// Helper function to generate a unique Room ID
const generateRoomId = () => {
  const randomString = Math.random().toString(36).substring(2, 8); // Random 6-character string
  return randomString; // Ensure uniqueness
};

io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle room creation with auto-generated Room ID
  socket.on("create-room", (userName) => {
    const roomId = generateRoomId(); // Generate unique room ID
    socket.join(roomId); // User joins room
    console.log(`${userName} created room ${roomId}`);

    // Emit event with the generated Room ID
    socket.emit("room-created", roomId, userName);
  });

  // Handle user joining a room
  socket.on("join-room", (roomId, userName) => {
    socket.join(roomId);
    console.log(`${userName} joined room ${roomId}`);
    socket.emit("room-joined", roomId, userName);

    // Notify other users in the room that a new user has joined
    socket.to(roomId).emit("user-joined", userName);
  });

  // Handle screen sharing start
  socket.on("start-screen-share", (roomId, stream) => {
    console.log(`Screen share started in room ${roomId}`);

    // Broadcast the screen stream to all users in the room
    socket.to(roomId).emit("screen-share-started", stream);
  });

  // Handle screen sharing stop
  socket.on("stop-screen-share", (roomId) => {
    console.log(`Screen share stopped in room ${roomId}`);

    // Notify all users in the room that screen sharing has stopped
    socket.to(roomId).emit("screen-share-stopped");
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
