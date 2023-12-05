import React from "react";
import SendIcon from "../../assets/send.svg";
import Image from "next/image";

const Input = () => {
  return (
    <div className="input flex items-center justify-between">
      {/* Input Field */}
      <div className="inputBox font-poppins">
        <input
          className="h-[50px]"
          type="text"
          placeholder="Message"
        />
      </div>

      {/* SendIcon */}
      <div className="sendIcon cursor-pointer">
        <Image
          src={SendIcon}
          alt="deleteicon"
        />
      </div>
    </div>
  );
};

export default Input;
