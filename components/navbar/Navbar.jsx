import React from "react";
import "./Navbar.scss";
import Explore from "../../assets/explore.svg";
import Edit from "../../assets/edit.svg";
import Create from "../../assets/create.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between w-[85vw] items-baseline">
      <div className="sidebar flex font-poppins gap-8 items-center">
        <div className="logo font-bold flex text-[38px] text-[#F3AE9F] gap-4 xl:gap-8">
          <span>Logo</span>
          <div className="line border-r-2 border-solid border-[#F3AE9F]"></div>
        </div>
        <ul className="text-group font-open-sans flex font-medium text-[20px] gap-4 xl:gap-8">
          <li className="explore flex leading-none gap-2">
            <Image
              src={Explore}
              alt="explore"
            />
            <span className="text-[#f3ae9f]">Explore</span>
          </li>
          <li className="create flex leading-none gap-2">
            <Image
              src={Create}
              alt="create"
            />
            <span>Create</span>
          </li>
          <li className="edit flex leading-none gap-2">
            <Image
              src={Edit}
              alt="edit"
            />
            <span>Edit</span>
          </li>
        </ul>
      </div>
      <div className="login items-baseline text-[18px] font-[600]">
        <button>
          <span>Login</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
