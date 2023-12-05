/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

import BackIcon from "../../assets/back.svg";
import DeleteIcon from "../../assets/delete.svg";

const ProfileInfo = () => {
  return (
    <div className="profileInfo flex">
      <div className="userInfo flex gap-2 xl:gap-4">
        <img
          className="h-[30px] w-[30px] xl:h-[42px] xl:w-[42px]"
          src="https://images.unsplash.com/photo-1527082395-e939b847da0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXRzfGVufDB8fDB8fHww"
          alt="profilepicture"
        />
        <span className="font-open-sans font-[400] xl:font-[500] text-[12px] xl:text-[18px]">
          John Cena
        </span>
      </div>
      <div className="options flex gap-[15px] items-center">
        <div className="back flex cursor-pointer gap-2 font-poppins text-[18px]">
          <Image
            src={BackIcon}
            alt="backicon"
          />
          <span>Back</span>
        </div>
        <div className="delete flex cursor-pointer gap-2 font-poppins text-[18px]">
          <Image
            src={DeleteIcon}
            alt="deleteicon"
          />
          <span>Delete</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
