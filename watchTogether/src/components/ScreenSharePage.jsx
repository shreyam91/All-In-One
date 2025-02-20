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

  // Copy to clipboard function
  const handleCopyRoomId = () => {
    navigator.clipboard.writeText(roomId).then(() => {
      alert("Room ID copied to clipboard!");
    }).catch((err) => {
      alert("Failed to copy room ID.");
    });
  };

  // Share functionality (using the Web Share API)
  const handleShareRoomId = () => {
    if (navigator.share) {
      navigator.share({
        title: "Screen Sharing Room",
        text: `Join my screen sharing session using this Room ID: ${roomId}`,
        url: window.location.href, // This is the current URL of the page
      }).then(() => {
        alert("Room ID shared!");
      }).catch((err) => {
        alert("Failed to share the Room ID.");
      });
    } else {
      alert("Sharing is not supported on your browser.");
    }
  };

  return (
    <div>
      <h2>
        Room ID: {roomId}
        {/* Buttons aligned next to Room ID */}
        <button onClick={handleCopyRoomId} style={{ marginLeft: "10px" }}>
          Copy
        </button>
        <button onClick={handleShareRoomId} style={{ marginLeft: "10px" }}>
          Share
        </button>
      </h2>
      
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
