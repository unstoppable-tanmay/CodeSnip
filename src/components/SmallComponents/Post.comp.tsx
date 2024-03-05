"use client";

import React, { useState } from "react";
import ProfileHeader from "./ProfileHeader.comp";
import { ProfileImageType, getImage } from "@/src/lib/profileIconArray";
import { Editor, Monaco } from "@monaco-editor/react";
import { TbTriangleInvertedFilled } from "react-icons/tb";

const Post = ({
  userName,
  userDesignation,
  userProfileImage,
  fileName,
  codeData,
  language = "javascript",
  project = false,
}: {
  userName: string;
  userDesignation: string;
  userProfileImage: ProfileImageType;
  fileName: string;
  codeData: string;
  language?: string;
  project?: boolean;
}) => {
  const [hover, setHover] = useState(false);
  const [code, setCode] = useState<string | undefined>(codeData);

  const handleEditorDidMount = (monaco: Monaco) => {
    monaco?.editor.defineTheme("my-theme", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#1d1e22",
      },
    });

    monaco?.editor.setTheme("my-theme");
  };

  return (
    <div className="flex flex-col gap-4 max-w-[80vw] flex-shrink-0">
      <ProfileHeader
        name={userName}
        designation={userDesignation}
        profileImage={getImage(userProfileImage)}
      />

      <div
        className="flex flex-col rounded-[7px] w-[400px] max-w-full bg-def_blue_gray_dark gap-1"
        onMouseEnter={(e) => setHover(true)}
        onMouseLeave={(e) => setHover(false)}
      >
        {/* Header */}
        <div className="header w-full px-3 py-1 flex items-center justify-start">
          <div className="left_icons flex gap-[.4rem]">
            <div className="bg-def_green w-[13px] aspect-square rounded-full"></div>
            <div className="bg-def_gold w-[13px] aspect-square rounded-full"></div>
            <div className="bg-def_rose w-[13px] aspect-square rounded-full"></div>
          </div>
          <div className="file_name flex-1 flex items-center justify-center font-mono text-sm font-medium cursor-context-menu">
            <div className="text -translate-x-[25%]">{fileName}</div>
          </div>
        </div>

        {/* Code */}
        <div
          className={`code p-4 min-h-[100px] max-h-[400px]`}
          style={{ height: `${code?.split("\n").length! + 4}rem` }}
        >
          <Editor
            className="w-full h-full pt-1 bg-def_blue_gray_dark"
            theme="my-theme"
            language={language}
            loading="CodeSnip"
            defaultValue={code}
            line={1}
            value={code}
            options={{
              smoothScrolling: true,
              scrollbar: { vertical: "hidden", horizontal: "hidden" },
              overviewRulerBorder: false,
              overviewRulerLanes: 0,
              minimap: { enabled: false },
              readOnly: true,
              copyWithSyntaxHighlighting: true,
              domReadOnly: true,
              lineNumbersMinChars: 0,
              readOnlyMessage: { value: "" },
              cursorBlinking: "solid",
            }}
            onMount={(editor, monaco) => {
              handleEditorDidMount(monaco);
            }}
          />
        </div>
      </div>

      {/* Likes */}
      <div className="tale flex gap-2 items-center justify-end">
        <div className="like w-9 flex items-center justify-center text-lg bg-def_blue_gray_light aspect-square rounded-full font-FiraMono cursor-pointer">
          {"0"}
        </div>
        <div className="like w-9 flex items-center justify-center text-base bg-def_blue_gray_light aspect-square rounded-full font-FiraMono cursor-pointer">
          {"//"}
        </div>
        <div className="like w-9 flex items-center justify-center text-base bg-def_blue_gray_light aspect-square rounded-full font-FiraMono cursor-pointer">
          <TbTriangleInvertedFilled />
        </div>
      </div>
    </div>
  );
};

export default Post;
