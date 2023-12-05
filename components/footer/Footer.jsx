import Image from "next/image";
import React from "react";
import TelegramIcon from "../../assets/telegram.svg";
import InstagramIcon from "../../assets/instagram.svg";
import XIcon from "../../assets/x.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer mt-10 flex justify-between w-[85vw] mb-5 lg:mb-10 items-center">
        <div className="logo font-poppins font-bold flex text-[38px] text-[#F3AE9F] gap-8">
          <span>Logo</span>
        </div>
        <div className="connect flex gap-4 items-center">
          <span className="font-poppins font-light">
            Contact@0000000000.tech
          </span>
          <div className="socials flex gap-4">
            <Image
              src={TelegramIcon}
              alt="Telegram"
            />
            <Image
              src={InstagramIcon}
              alt="Instagram"
            />
            <Image
              src={XIcon}
              alt="X"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
