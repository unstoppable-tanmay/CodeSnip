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
    <div className="Home relative w-screen h-screen flex items-center justify-start flex-col gap-10">
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
        <button className=" p-2" onClick={(e) => setCreateSnippet(true)}>
          Open-Post
        </button>
        <button className=" p-2" onClick={(e) => setProfile(true)}>
          Open-Profile
        </button>
        <button className=" p-2" onClick={(e) => setCreateProfile(true)}>
          Open-Create-Profile
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
