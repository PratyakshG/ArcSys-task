import Image from "next/image";
import React from "react";
import NewChat from "../../assets/NewBot.svg";

const NewBot = () => {
  return (
    <div className="newbot flex items-center gap-1 xl:gap-4 cursor-pointer w-fit">
      <Image
        src={NewChat}
        alt="new"
      />
      <span className="font-poppins text-[14px] xl:text-[22px] font-[300]">Create new bot</span>
    </div>
  );
};

export default NewBot;
