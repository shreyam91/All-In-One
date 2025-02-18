// src/components/ScreenSharePage.js
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { useParams } from "react-router-dom"; // For accessing the roomId from URL

const socket = io("http://localhost:4000");

const ScreenSharePage = () => {
  const { roomId } = useParams(); // Get roomId from URL
  const [users, setUsers] = useState([]); // List of users in the room

  // Logic for screen sharing (add your screen sharing logic here)

  useEffect(() => {
    // When the component mounts, join the room
    socket.emit("join-room", roomId, "User"); // Assuming "User" is the name

    // Listen for users joining the room
    socket.on("user-joined", (user) => {
      setUsers((prevUsers) => [...prevUsers, user]);
    });

    return () => {
      socket.off("user-joined");
    };
  }, [roomId]);

  return (
    <div>
      <h2>Room ID: {roomId}</h2>
      <h3>Users in Room:</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>

      <div>
        <button onClick={() => alert("Screen sharing functionality goes here!")}>
          Start Screen Share
        </button>
      </div>

      {/* Add more components for video streaming, controls, etc. */}
    </div>
  );
};

export default ScreenSharePage;
