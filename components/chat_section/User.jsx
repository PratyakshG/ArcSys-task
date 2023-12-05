/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import React, { useState } from "react";

const User = () => {
  //handler for users to display chats
  const [active, setActive] = useState();

  const handleClick = () => {
    setActive(!active); // Toggle the state
  };

  return (
    <div className="user flex">
      {/* User 1 */}
      <div
        className={`user_container flex ${active ? "inactive" : "active"} `}
        id="user1"
        onClick={handleClick}
      >
        <div className="image">
          {/* profile picture of the user */}
          <img
            src="https://i.pinimg.com/736x/51/64/42/51644205861f741271891faa6d758768.jpg"
            alt="profilepicture"
          />
        </div>

        {/* username and latest message recieved */}
        <div className="profile">
          <span className="username font-open-sans font-semibold">Pikachu</span>
          <span className="last_message font-poppins">Hello</span>
        </div>
      </div>

      {/* User 2 */}
      <div
        className={`user_container flex ${active ? "active" : "inactive"}`}
        id="user2"
        onClick={handleClick}
      >
        <div className="image">
          {/* profile picture of the user */}
          <img
            src="https://i.pinimg.com/736x/51/64/42/51644205861f741271891faa6d758768.jpg"
            alt="profilepicture"
          />
        </div>

        {/* username and latest message recieved */}
        <div className="profile">
          <span className="username font-open-sans font-semibold">Pikachu</span>
          <span className="last_message font-poppins">Hello</span>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default User;
