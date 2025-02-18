import React, { useState } from "react";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom"; // useNavigate for page redirection

const socket = io("http://localhost:4000");

const RoomCreation = ({ setMessage }) => {
  const [name, setName] = useState(""); // User's name
  const [roomId, setRoomId] = useState(""); // Room ID for joining
  const [createdRoomId, setCreatedRoomId] = useState(""); // Room ID for created room
  const navigate = useNavigate(); // useNavigate for navigation

  // Create Room function
  const createRoom = () => {
    if (!name) {
      setMessage("Please enter your name.");
      return;
    }
    socket.emit("create-room", name); // Emit event to create room
  };

  // Join Room function
  const joinRoom = () => {
    if (!name || !roomId) {
      setMessage("Please enter your name and room ID.");
      return;
    }
    socket.emit("join-room", roomId, name); // Emit event to join room
  };

  // Copy Room ID to clipboard
  const copyRoomId = () => {
    if (createdRoomId) {
      navigator.clipboard.writeText(createdRoomId).then(() => {
        setMessage(`Room ID ${createdRoomId} copied to clipboard.`);
      });
    }
  };

  // Share Room Link
  const shareRoomLink = () => {
    if (createdRoomId) {
      const roomLink = `${window.location.origin}/screen-share/${createdRoomId}`;
      navigator.clipboard.writeText(roomLink).then(() => {
        setMessage(`Room link ${roomLink} copied to clipboard.`);
      });
    }
  };

  // Listen for room creation event
  React.useEffect(() => {
    socket.on("room-created", (roomId, userName) => {
      setCreatedRoomId(roomId); // Store the generated room ID
      setMessage(`Room ${roomId} created successfully! Welcome, ${userName}.`);
      
      // Redirect to screen-sharing page
      navigate(`/screen-share/${roomId}`);
    });

    socket.on("room-joined", (roomId, userName) => {
      setMessage(`Joined room ${roomId}! Welcome, ${userName}.`);

      // Redirect to screen-sharing page
      navigate(`/screen-share/${roomId}`);
    });

    return () => {
      socket.off("room-created");
      socket.off("room-joined");
    };
  }, [navigate]);

  return (
    <div className="room-creation">
      <h1>Welcome to Room Creation</h1>

      {/* Input fields */}
      <div>
        <label>
          Your Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </label>
      </div>

      <div>
        <label>
          Room ID (Only required when joining):
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Enter Room ID"
          />
        </label>
      </div>

      {/* Render Room ID after successful creation */}
      {createdRoomId && (
        <div>
          <h2>Your Room ID:</h2>
          <span>{createdRoomId}</span>
          <div>
            <button onClick={copyRoomId}>Copy Room ID</button>
            <button onClick={shareRoomLink}>Share Room Link</button>
          </div>
        </div>
      )}

      {/* Buttons to create room or join room */}
      <div className="buttons">
        <button onClick={createRoom}>Create Room</button>
        <button onClick={joinRoom}>Join Room</button>
      </div>
    </div>
  );
};

export default RoomCreation;
