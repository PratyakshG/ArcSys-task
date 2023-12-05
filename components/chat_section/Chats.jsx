/* eslint-disable @next/next/no-img-element */
import React from "react";

const Chats = () => {
  return (
    <div className="chats flex items-end pb-[12px] pl-[30px] pr-[30px]">
      <div className="chat1 flex flex-col text-white w-full font-poppins text-[12px] lg:text-[16px]">
        {/* sent */}
        <div className="sent flex flex-col">
          <div className="flex gap-2 lg:gap-4">
            <span className="msg">Hello</span>
            <img
              src="https://i.pinimg.com/736x/51/64/42/51644205861f741271891faa6d758768.jpg"
              alt="profilepicture"
            />
          </div>
          <div>
            <span className="msg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              cupiditate{" "}
            </span>
          </div>
        </div>

        {/* recieved */}
        <div className="recieved flex-col">
          <div className="flex gap-2 lg:gap-4">
            <img
              src="https://images.unsplash.com/photo-1527082395-e939b847da0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXRzfGVufDB8fDB8fHww"
              alt="profilepic"
            />
            <span className="msg">Hey there!</span>
          </div>
          <div className="rmsg">
            <span className="msg">Got your message.</span>
          </div>
        </div>

        {/* sent */}
        <div className="sent flex flex-col">
          <div className="flex gap-2 lg:gap-4">
            <span className="msg">Lorem ipsum dolor</span>
            <div>
              <img
                src="https://i.pinimg.com/736x/51/64/42/51644205861f741271891faa6d758768.jpg"
                alt="profilepicture"
              />
            </div>
          </div>
        </div>

        {/* recieved */}
        <div className="recieved flex-col">
          <div className="flex gap-2 lg:gap-4">
            <img
              src="https://images.unsplash.com/photo-1527082395-e939b847da0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXRzfGVufDB8fDB8fHww"
              alt="profilepicture"
            />
            <div>
              <span className="msg">Lorem ipsum dolor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
