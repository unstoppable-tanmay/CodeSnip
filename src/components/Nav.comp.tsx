/* eslint-disable @next/next/no-img-element */
import React, { LegacyRef } from "react";

const Nav = () => {
  return (
    <div className="nav w-full pt-4 pb-2 px-1 pr-2 md:px-4 flex items-center justify-between mb-5 fixed">
      <div className="logo flex items-center justify-center -mt-1 min-w-[140px] md:min-w-max">
        <img src="/images/logo_text.svg" alt="CodeSnip" className="scale-90" />
      </div>
      <div className="menu_items flex gap-3 items-center justify-center">
        <div className="name font-medium text-def_text_primary -mt-1">
          Tanmay
        </div>
        <div className="profile w-9 aspect-square rounded-full flex items-center justify-center overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702512000&semt=ais"
            alt="CodeSnip"
            className="object-cover w-full aspect-square rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
