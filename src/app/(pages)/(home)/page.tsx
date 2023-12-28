"use client";

import Menu from "@/src/components/Menu.comp";
import Messages from "@/src/components/Messages.comp";
import Nav from "@/src/components/Nav.comp";
import Snippets from "@/src/components/Snippet.comp";

import React from "react";

const Page = () => {
  return (
    <main className={`flex min-h-screen flex-col`}>
      <Nav/>
      <div className="main_screen flex justify-between px-4 md:px-6 h-full flex-1 mt-20">
        <Menu />
        <div className="snippets flex-1 flex flex-col gap-16 items-center justify-start">
          <Snippets />
          <Snippets />
          <Snippets />
          <Snippets />
          <Snippets />
        </div>
        <div className="right_layout">
          <Messages/>
        </div>
      </div>
    </main>
  );
};

export default Page;
