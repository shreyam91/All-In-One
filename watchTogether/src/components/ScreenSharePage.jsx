import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { useParams } from "react-router-dom"; // For accessing the roomId from URL
import { FaRegCopy } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";

const socket = io("http://localhost:4000");

const ScreenSharePage = () => {
  const { roomId } = useParams(); // Get roomId from URL
  const [users, setUsers] = useState([]); // List of users in the room
  const [isSharing, setIsSharing] = useState(false); // Track if screen sharing is active
  const videoRef = useRef(null); // Ref for the video element to display the stream
  const mediaStreamRef = useRef(null); // Ref for storing the media stream

  // Logic for screen sharing
  const startScreenShare = async () => {
    try {
      // Prompt the user to select a screen or window to share
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });

      // Set the video element source to the screen stream
      videoRef.current.srcObject = stream;
      mediaStreamRef.current = stream;

      // Broadcast the stream to other users in the room
      socket.emit("start-screen-share", roomId, stream);

      // Set screen sharing state to true
      setIsSharing(true);

      // Handle stream stop event (when user stops sharing)
      stream.getVideoTracks()[0].addEventListener("ended", () => {
        setIsSharing(false);
        socket.emit("stop-screen-share", roomId);
      });
    } catch (err) {
      console.error("Error starting screen share: ", err);
    }
  };

  // Stop screen sharing
  const stopScreenShare = () => {
    const stream = mediaStreamRef.current;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      setIsSharing(false);
      socket.emit("stop-screen-share", roomId);
    }
  };

  useEffect(() => {
    // When the component mounts, join the room
    socket.emit("join-room", roomId, "User"); // Assuming "User" is the name

    // Listen for users joining the room
    socket.on("user-joined", (user) => {
      setUsers((prevUsers) => [...prevUsers, user]);
    });

    // Listen for screen sharing started by another user
    socket.on("screen-share-started", (stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    });

    // Listen for screen sharing stopped by another user
    socket.on("screen-share-stopped", () => {
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    });

    return () => {
      socket.off("user-joined");
      socket.off("screen-share-started");
      socket.off("screen-share-stopped");
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
          <FaRegCopy />
        </button>
        <button onClick={handleShareRoomId} style={{ marginLeft: "10px" }}>
          <FaShareNodes />
        </button>
      </h2>

      <h3>Users in Room:</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>

      <div>
        {/* Toggle between starting and stopping screen sharing */}
        {!isSharing ? (
          <button onClick={startScreenShare}>Start Screen Share</button>
        ) : (
          <button onClick={stopScreenShare}>Stop Screen Share</button>
        )}
      </div>

      {/* Display the screen share video */}
      <div>
        <video
          ref={videoRef}
          autoPlay
          muted
          style={{ width: "100%", height: "auto", border: "1px solid black" }}
        />
      </div>
    </div>
  );
};

export default ScreenSharePage;
