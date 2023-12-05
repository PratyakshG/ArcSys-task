import React from "react";
import Users from "./Users";
import Messages from "./Messages";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="container mt-10 xl:mt-20">
      <Users />
      <Messages />
    </div>
  );
};

export default Hero;
