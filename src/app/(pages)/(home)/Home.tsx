"use client";

import CreateProfile from "@/src/components/DialogComponent/CreateProfile.comp";
import CreateSnippet from "@/src/components/DialogComponent/CreateSnippet.comp";
import Dialog from "@/src/components/DialogComponent/Dialog";
import Profile from "@/src/components/DialogComponent/Profile.comp";
import Post from "@/src/components/SmallComponents/Post.comp";
import React, { useState } from "react";

const Home = () => {
  const [createSnippet, setCreateSnippet] = useState(false);
  const [profile, setProfile] = useState(false);
  const [createProfile, setCreateProfile] = useState(false);
  return (
    <div className="Home relative w-screen h-screen flex items-center justify-start flex-col gap-10 py-10">
      <Dialog isOpen={createSnippet} setOpen={setCreateSnippet}>
        <CreateSnippet setClose={setCreateSnippet} />
      </Dialog>
      <Dialog isOpen={profile} setOpen={setProfile}>
        <Profile setClose={setProfile} />
      </Dialog>
      <Dialog isOpen={createProfile} setOpen={setCreateProfile}>
        <CreateProfile setClose={setCreateProfile} />
      </Dialog>

      <div className="flex gap-4">
        <button
          onClick={(e) => setCreateSnippet(true)}
          className="px-2 font-FiraMono py-1 rounded-[5px] relative bg-def_blue_gray_dark text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600 group"
        >
          <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent group-hover:w-full duration-300" />
          <span className="relative z-20">Open-Create-Post</span>
        </button>

        <button
          onClick={(e) => setProfile(true)}
          className="px-2 font-FiraMono py-1 rounded-[5px] relative bg-def_blue_gray_dark text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600 group"
        >
          <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent group-hover:w-full duration-300" />
          <span className="relative z-20">Open-Profile</span>
        </button>

        <button
          onClick={(e) => setCreateProfile(true)}
          className="px-2 font-FiraMono py-1 rounded-[5px] relative bg-def_blue_gray_dark text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600 group"
        >
          <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent group-hover:w-full duration-300" />
          <span className="relative z-20">Open-Create-Profile</span>
        </button>
      </div>

      <div className="flex-col flex gap-5">
        <Post
          userName="Swadhin"
          userDesignation="Full Stack Developer"
          userProfileImage="deadpool"
          fileName="hello.js"
          codeData={`// lets have a joke \nconst bestFriend = 'Tanmay';\nvar girlFriend = '______';\n\n\n\n`}
          language="javascript"
        />
        <Post
          userName="Tanmay"
          userDesignation="Full Stack Developer"
          userProfileImage="ironman"
          fileName="hello.js"
          codeData={`// lets have a joke \nconst bestFriend = 'Tanmay';\nvar girlFriend = '______';`}
          language="javascript"
        />
        <Post
          userName="Jeet"
          userDesignation="Full Stack Developer"
          userProfileImage="hulk"
          fileName="hello.js"
          codeData={`// lets have a joke \nconst bestFriend = 'Tanmay';\nvar girlFriend = '______';`}
          language="javascript"
        />
        <Post
          userName="Jeet Mandu"
          userDesignation="Full Stack Developer"
          userProfileImage="captainmarvel"
          fileName="hello.js"
          codeData={`// lets have a joke \nconst bestFriend = 'Tanmay';\nvar girlFriend = '______';`}
          language="javascript"
        />
        <Post
          userName="Kia Mu Janini"
          userDesignation="Full Stack Developer"
          userProfileImage="batman"
          fileName="hello.js"
          codeData={`// lets have a joke \nconst bestFriend = 'Tanmay';\nvar girlFriend = '______';`}
          language="javascript"
        />
      </div>
    </div>
  );
};

export default Home;
