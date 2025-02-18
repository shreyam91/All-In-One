// src/components/Message.js
import React from "react";

const Message = ({ message }) => {
  return <div className="message">{message && <p>{message}</p>}</div>;
};

export default Message;
