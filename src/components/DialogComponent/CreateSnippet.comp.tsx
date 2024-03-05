"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { Editor, Monaco } from "@monaco-editor/react";
import { IoClose } from "react-icons/io5";
import Chips from "../SmallComponents/Chips.comp";
import { findMostMatchingWord } from "@/src/lib/createProfileHelper";

const CreateSnippet = ({
  setClose,
}: {
  setClose: Dispatch<SetStateAction<boolean>>;
}) => {
  const [code, setCode] = useState<string | undefined>(
    `/* Here You can Write Anything In Forms Of Code and Comments */\nvar girlFriend;\nconst bestFriend;`
  );
  const [fileName, setFileName] = useState("file_name");
  const [fileExt, setFileExt] = useState("js");

  const [tags, setTags] = useState<string[]>([]);
  const [tagsSearch, setTagsSearch] = useState<string>();

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
    <div className="create_snippet_wrapper w-[550px] relative max-w-[80vw] flex flex-col gap-5 p-4 md:p-6 bg-def_blue_gray_light rounded-[10px]">
      {/* Close Button */}
      <div
        className="cross_btn absolute top-3 right-0 translate-x-[100%] rounded-r-full bg-def_rose flex items-center justify-center px-1 md:px-2 py-1 cursor-pointer"
        onClick={(e) => setClose(false)}
      >
        <IoClose />
      </div>

      {/* Header */}
      <div className="header w-full flex items-center justify-center font-FiraMono font-medium">
        Create Post
      </div>

      {/* Code Snippet */}
      <div className="w-full flex flex-col rounded-[7px] overflow-hidden max-w-[85vw] bg-def_blue_gray_dark gap-1">
        <div className="header w-full px-3 py-1 flex items-center justify-start">
          <div className="left_icons flex gap-[.4rem]">
            <div className="bg-def_green w-[14px] aspect-square rounded-full"></div>
            <div className="bg-def_gold w-[14px] aspect-square rounded-full"></div>
            <div className="bg-def_rose w-[14px] aspect-square rounded-full"></div>
          </div>
          <div className="file_name flex-1 flex items-center justify-center font-mono -translate-x-[29px] text-sm font-medium cursor-context-menu">
            <input
              type="text"
              name=""
              id="file_name"
              value={fileName}
              style={{ width: `${fileName.length}ch` }}
              className="bg-def_blue_gray_dark border-none outline-none text-center text-sm"
              onChange={(e) => {
                if (e.target.value.length > 15) return;
                setFileName(e.target.value);
              }}
            />
            <label htmlFor="file_name" className="text-sm">
              {"." + fileExt}
            </label>
          </div>
        </div>
        <Editor
          className="w-full min-h-[100px] max-h-[40vh] pt-1 -ml-4 bg-def_blue_gray_dark"
          theme="my-theme"
          language="javascript"
          loading="CodeSnip"
          defaultValue={code}
          line={1}
          value={code}
          height={150}
          onChange={(val) => {
            {
              setCode(val);
            }
          }}
          options={{
            autoClosingBrackets: "always",
            autoIndent: "advanced",
            formatOnPaste: true,
            links: true,
            smoothScrolling: true,
            colorDecoratorsActivatedOn: "clickAndHover",
            contextmenu: false,
            scrollbar: { vertical: "hidden", horizontal: "hidden" },
            copyWithSyntaxHighlighting: true,
            minimap: { enabled: false },
            rulers: [{ column: 500, color: "#ffffff30" }],
            overviewRulerBorder: false,
            overviewRulerLanes: 0,
            wrappingStrategy: "advanced",
          }}
          onMount={(editor, monaco) => {
            handleEditorDidMount(monaco);
          }}
        />
      </div>

      {/* Language Choose */}
      <div className="language flex w-full items-center justify-between ">
        <div className="heading font-medium mb-1">Language</div>
        <select className="bg-def_blue_gray_dark text-xs rounded-[5px] text-def_white p-2 font-FiraMono outline-none border-none appearance-none px-4 flex items-center justify-center">
          <option value="Javascript" defaultValue={"javascript"}>
            Javascript
          </option>
          <option value="C++">C++</option>
          <option value="C">C</option>
          <option value="Css">Css</option>
          <option value="Typescript">Typescript</option>
          <option value="Rust">Rust</option>
        </select>
      </div>

      {/* Add Tags */}
      <div className="talksAbout flex flex-col gap-2 scrollbar-thumb-dark">
        <div className="name font-bold text-sm font-FiraMono text-def_white/90">
          Add Tags
        </div>
        <label
          htmlFor="talksAbout"
          className="addTalksAbout w-full h-[60px] rounded-[7px] bg-def_blue_gray_dark resize-none p-2 outline-none text-xs relative flex gap-2 flex-wrap overflow-y-scroll cursor-text"
        >
          {tags.map((ele, ind) => {
            return <Chips size="sm" bg="bg-white" text={ele} key={ind} />;
          })}
          <div className="inputWrapper relative">
            <input
              id="talksAbout"
              placeholder="click enter to add"
              className="bg-transparent outline-none flex-1 self-start font-FiraMono capitalize w-full"
              value={tagsSearch}
              onChange={(e) => {
                setTagsSearch(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  setTags((e) => [
                    ...e,
                    "#" +
                      tagsSearch?.slice(0, 1).toUpperCase() +
                      tagsSearch?.slice(1),
                  ]);
                  setTagsSearch("");
                } else if (e.key == "Backspace" && tagsSearch == "")
                  setTags((e) => e.slice(0, e.length - 1));
                else if (e.key == "Tab" && tagsSearch) {
                  e.preventDefault();
                  setTags((e) => [
                    ...e,
                    "#" + findMostMatchingWord(tagsSearch),
                  ]);
                  setTagsSearch("");
                }
              }}
            ></input>
            <div className="shadowedWord absolute top-0 left-0 font-FiraMono text-white/30 max-w-full">
              {tagsSearch}
              {tagsSearch &&
                findMostMatchingWord(tagsSearch || "")
                  .toString()
                  .split("")
                  .splice(tagsSearch.length)
                  .join("")}
            </div>
          </div>
          <div className="flex flex-col absolute"></div>
        </label>
      </div>

      {/* Post Snippets */}
      <div className="button flex items-center justify-center bg-def_dark_blue text-xs font-medium font-FiraMono rounded-[5px] py-1.5  bg-opacity-75 cursor-pointer select-none hover:scale-[1.01] active:scale-100 duration-200">
        Post Snippets
      </div>
    </div>
  );
};

export default CreateSnippet;
