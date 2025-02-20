import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom'; 
// import { FaRegCopy, FaRegCopyright, FaShareNodes } from 'react-icons/fa';
import ChatComponent from './ChatComponent'; // Importing the ChatComponent

// import { FaRegCopy } from "react-icons/fa";
// import { FaShareNodes } from "react-icons/fa6";

const socket = io('http://localhost:4000');

const ScreenSharePage = () => {
  const { roomId } = useParams();
  const [users, setUsers] = useState([]);
  const [isSharing, setIsSharing] = useState(false);
  const videoRef = useRef(null);
  const mediaStreamRef = useRef(null);

  const startScreenShare = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      videoRef.current.srcObject = stream;
      mediaStreamRef.current = stream;
      socket.emit('start-screen-share', roomId, stream);
      setIsSharing(true);

      stream.getVideoTracks()[0].addEventListener('ended', () => {
        setIsSharing(false);
        socket.emit('stop-screen-share', roomId);
      });
    } catch (err) {
      console.error('Error starting screen share: ', err);
    }
  };

  const stopScreenShare = () => {
    const stream = mediaStreamRef.current;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      setIsSharing(false);
      socket.emit('stop-screen-share', roomId);
    }
  };

  useEffect(() => {
    socket.emit('join-room', roomId, 'User'); 

    socket.on('user-joined', (user) => {
      setUsers((prevUsers) => [...prevUsers, user]);
    });

    socket.on('screen-share-started', (stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    });

    socket.on('screen-share-stopped', () => {
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    });

    return () => {
      socket.off('user-joined');
      socket.off('screen-share-started');
      socket.off('screen-share-stopped');
    };
  }, [roomId]);

  const handleCopyRoomId = () => {
    navigator.clipboard.writeText(roomId).then(() => {
      alert('Room ID copied to clipboard!');
    }).catch((err) => {
      alert('Failed to copy room ID.');
    });
  };

  const handleShareRoomId = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Screen Sharing Room',
        text: `Join my screen sharing session using this Room ID: ${roomId}`,
        url: window.location.href,
      }).then(() => {
        alert('Room ID shared!');
      }).catch((err) => {
        alert('Failed to share the Room ID.');
      });
    } else {
      alert('Sharing is not supported on your browser.');
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left side: 70% screen for sharing */}
      <div style={{ flex: 100, padding: '20px' }}>
        <h2>
          Room ID: {roomId}
          <button onClick={handleCopyRoomId} style={{ marginLeft: '10px' }}>
            Copy
          </button>
          <button onClick={handleShareRoomId} style={{ marginLeft: '10px' }}>
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
          {!isSharing ? (
            <button onClick={startScreenShare}>Start Screen Share</button>
          ) : (
            <button onClick={stopScreenShare}>Stop Screen Share</button>
          )}
        </div>

        <div>
          <video
            ref={videoRef}
            autoPlay
            muted
            style={{ width: '100%', height: 'auto', border: '1px solid black' }}
          />
        </div>
      </div>

      {/* Right side: 30% for chat */}
      <div style={{ flex: 3, borderLeft: '1px solid #ddd', height: '100%' }}>
        <ChatComponent roomId={roomId} />
      </div>
    </div>
  );
};

export default ScreenSharePage;
