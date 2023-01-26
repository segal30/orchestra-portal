import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import "./chatSideBar.scss";

const ChatSideBar = () => {
  return (
    <div className="chatSidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default ChatSideBar;
