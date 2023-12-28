import React, { useRef, useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { Editor } from "@monaco-editor/react";

const Snippets = () => {
  const [code, setCode] = useState<string>();

  return (
    <div className="w-[400px] flex flex-col rounded-lg overflow-hidden max-w-[90vw] bg-def_blue_gray">
      <div className="header w-full px-3 py-1 flex items-center justify-start">
        <div className="left_icons flex gap-2">
          <div className="bg-def_green w-[13px] aspect-square rounded-full"></div>
          <div className="bg-def_gold w-[13px] aspect-square rounded-full"></div>
          <div className="bg-def_rose w-[13px] aspect-square rounded-full"></div>
        </div>
        <div className="file_name flex-1 flex items-center justify-center font-mono -translate-x-[29px] text-sm font-medium cursor-context-menu">
          file.js
        </div>
      </div>
      <div className="flex gap-1 bg-def_blue_gray">
        <Editor
          className="w-full min-h-[100px] max-h-[40vh] pt-1"
          theme="vs-dark"
          language="javascript"
          loading="CodeSnip"
          defaultValue="// Happy Coding From CodeSnip 🤗"
          line={2}
          value={code}
          height={150}
          onChange={(val) => {
            {
              setCode(val);
              console.log(val);
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
            rulers: [{ column: 50, color: "#ffffff30" }],
            overviewRulerBorder: false,
            overviewRulerLanes: 0,
            wrappingStrategy: "advanced",
            
          }}
        />
      </div>
    </div>
  );
};

export default Snippets;
