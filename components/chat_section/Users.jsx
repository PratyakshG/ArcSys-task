import Image from "next/image";
import React from "react";
import User from "./User";
import NewBot from "./NewBot";

const Users = () => {
  return (
    <div className="users flex flex-col">
      <div className="intro p-[20px] xl:p-[40px]">
        <span className="text1 font-poppins text-[18px] xl:text-[26px]">ALL YOUR CHATS</span>
        <div className="text2 h-[36px] xl:h-[55px]">
          <span className="font-open-sans font-semibold text-[12px] xl:text-[18px]">Chat Images: ON</span>
        </div>
        <span className="text3 font-poppins text-[12px] xl:text-[18px]">
          When a bot sends you images, you will be charged one secondary image
        </span>
      </div>
      <User />
      <NewBot />
    </div>
  );
};

export default Users;
