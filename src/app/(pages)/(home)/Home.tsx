"use client";

import CreateSnippet from "@/src/components/CreateSnippet.comp";
import Dialog from "@/src/components/Dialog";
import React, { useState } from "react";

const Home = () => {
  const [createSnippet, setCreateSnippet] = useState(false);
  return (
    <div className="Home relative">
      <Dialog isOpen={createSnippet} setOpen={setCreateSnippet}>
        <CreateSnippet setClose={setCreateSnippet} />
      </Dialog>

      <div className="div h-[200vh] w-screen flex items-center justify-center">
        <button className=" p-2" onClick={(e) => setCreateSnippet(true)}>
          Open
        </button>
      </div>
    </div>
  );
};

export default Home;
