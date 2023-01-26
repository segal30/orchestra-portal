import React from "react";
import "./chatWidget.scss";
import ChatSideBar from "./chat/ChatSideBar";
import Chat from "../chatWidget/chat/Chat";

const ChatWidget = () => {
  return (
    <div className="chatWidget">
      <div className="home">
        <div className="container">
          <ChatSideBar />
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
