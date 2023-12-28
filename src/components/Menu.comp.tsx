import React, { LegacyRef } from "react";

const Menu = () => {
  return (
    <div className={`flex min-w-[170px] font-FiraMono gap-16 h-[calc(100vh-80px)] pb-10 fixed`}>
      <div className="menu flex flex-col text-lg gap-6 h-auto">
        <div className="menu_grp flex flex-col">
          <div className="items cursor-pointer">Home</div>
          <div className="items cursor-pointer">Messages</div>
          <div className="items cursor-pointer">Notification</div>
          <div className="items cursor-pointer">My Posts</div>
          <div className="items cursor-pointer">My Projects</div>
          <div className="items cursor-pointer">Search</div>
        </div>
        <div className="menu_grp flex flex-col">
          <div className="items cursor-pointer">Profile</div>
          <div className="items cursor-pointer">Create Post</div>
          <div className="items cursor-pointer">Create Project</div>
          <div className="items cursor-pointer">Settings</div>
        </div>
        <div className="flex-1"></div>
        <div className="menu_grp flex flex-col gap-2 cursor-pointer">
          <div className="premium px-2 py-1 rounded-md flex items-center justify-center text-lg bg-[#C33764] bg-[-webkit-linear-gradient(to_right,_#1D2671,_#C33764)] bg-[linear-gradient(to_right,_#1D2671,_#C33764)] hover:brightness-125 duration-150 hover:drop-shadow-lg hover:scale-105 active:scale-100 select-none">
            Upgrade
          </div>
          <div className="items cursor-pointer">Log Out</div>
        </div>
      </div>
      <div className="write_border-wrapper flex items-center justify-center ">
        <div className="right_border w-[1.5px] bg-def_white/30 h-full"></div>
      </div>
    </div>
  );
};

export default Menu;
