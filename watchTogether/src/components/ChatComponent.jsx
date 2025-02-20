// src/components/ChatComponent.js

import React, { useState, useEffect } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

const ChatComponent = ({ roomId }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for incoming messages from the server
    socket.on('chat-message', (messageData) => {
      setMessages((prevMessages) => [...prevMessages, messageData]);
    });

    return () => {
      socket.off('chat-message');
    };
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Emit message to the server
      socket.emit('chat-message', { roomId, message });
      setMessage('');
    }
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          flex: 1,
          overflowY: 'scroll',
          padding: '10px',
          borderBottom: '1px solid #ddd',
        }}
      >
        <h3>Chat</h3>
        <div style={{ maxHeight: '80vh', overflowY: 'auto' }}>
          {messages.map((msg, index) => (
            <div key={index}>
              <strong>{msg.user}:</strong> {msg.message}
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: '10px', borderTop: '1px solid #ddd' }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          style={{ width: '80%', padding: '5px' }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            padding: '5px 10px',
            marginLeft: '5px',
            cursor: 'pointer',
          }}
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
