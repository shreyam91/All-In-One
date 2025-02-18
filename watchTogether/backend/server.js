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
  const randomString = Math.random().toString(4).substring(2, 8); // Random 6-character string
//   const timestamp = Date.now(); // Unique timestamp
//   return randomString + timestamp; // Combine to ensure uniqueness
  return randomString; // Combine to ensure uniqueness
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
