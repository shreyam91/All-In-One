import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import io from "socket.io-client";
import RoomCreation from "./components/RoomCreation";
import Message from "./components/Message";
import ScreenSharePage from "./components/ScreenSharePage"; // Import the new screen share page
import "./App.css";

// Connect to the backend server
const socket = io("http://localhost:4000");

function App() {
  const [message, setMessage] = useState(""); // Message to display (success/error)

  return (
    <Router>
      <div className="App">
        <h1>Watch Together</h1>
        <Routes>
          {/* ✅ Correct way to define a Route in v6 */}
          <Route
            path="/"
            element={
              <>
                <RoomCreation setMessage={setMessage} />
                <Message message={message} />
              </>
            }
          />

          <Route path="/screen-share/:roomId" element={<ScreenSharePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
