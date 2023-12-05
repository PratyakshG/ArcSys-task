import React from "react";
import ProfileInfo from "./ProfileInfo";
import Chats from "./Chats";
import Input from "./Input";

const Messages = () => {
  return (
    <div className="messages flex flex-col">
      <ProfileInfo />
      <Chats />
      <Input />
    </div>
  );
};

export default Messages;
