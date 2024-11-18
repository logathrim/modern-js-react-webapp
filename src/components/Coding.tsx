import Editor from "@monaco-editor/react";
import draculaTheme from "../themes/editor.json";
import { Brain, Play } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";
import Markdown from "./Markdown";

const Coding = () => {
  const [code, setCode] = useState("");
  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
    content: "",
  });
  const [isModalLoading, setIsModalLoading] = useState(false);

  const editorOptions = {
    fontSize: 16,
    fontFamily: "MesloLGL, sans-serif",
    lineHeight: 24,
    minimap: {
      enabled: true,
    },
    formatOnType: true,
    autoClosingBrackets: true,
    wordWrap: "on",
    lineNumbers: "on",
    scrollBeyondLastLine: false,
    automaticLayout: true,
    padding: {
      top: 16,
      bottom: 16,
    },
  };

  const defaultCode = `// คุณสามารถพิมพ์โค้ด JavaScript ของคุณที่นี่
function sayHello() {
  console.log("สวัสดีชาวโลก"); // Hello World
  return "ยินดีต้อนรับ"; // Welcome
}
  
sayHello();`;

  const runCode = () => {
    try {
      eval(code);
      setModal({
        isOpen: true,
        title: "Success",
        content: "โค้ดทำงานถูกต้อง",
      });
    } catch (error) {
      if (error instanceof Error) {
        setModal({
          isOpen: true,
          title: "Error",
          content: error.message,
        });
      } else {
        setModal({
          isOpen: true,
          title: "Error",
          content: String(error),
        });
      }
    }
  };

  const aiHelper = async () => {
    if (modal.content === "") {
      setModal({
        isOpen: true,
        title: "AI Assistant",
        content: "จำเป็นต้อง run โค้ดก่อน",
      });
      return;
    }

    setModal({
      isOpen: true,
      title: "AI Assistant",
      content: "",
    });
    setIsModalLoading(true);

    const res = await fetch("http://localhost:3000/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `${code}, จากโค้ดนี้ฉันพบ error นี้ ${modal.content}`,
      }),
    });
    const data = await res.json();

    setModal({
      isOpen: true,
      title: "AI Assistant",
      content: data?.message?.content,
    });
    setIsModalLoading(false);
  };

  return (
    <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden border border-gray-200">
      <div className="flex gap-2 flex-shrink-0 ms-auto max-w-full overflow-x-auto mt-3">
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all bg-emerald-400 text-white hover:bg-emerald-600
            ms-auto`}
          onClick={runCode}
        >
          <Play />
          Run
        </button>
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all bg-cyan-400 text-white hover:bg-cyan-600
            mr-4`}
          onClick={aiHelper}
        >
          <Brain />
          AI
        </button>
      </div>

      <Editor
        height="600px"
        defaultLanguage="javascript"
        defaultValue={defaultCode}
        options={editorOptions}
        theme="dracula"
        className="p-4"
        beforeMount={(monaco) => {
          monaco.editor.defineTheme("dracula", draculaTheme);

          monaco.languages.setMonarchTokensProvider("javascript", {
            defaultToken: "",
            tokenPostfix: "",

            keywords: [
              "function",
              "return",
              "if",
              "while",
              "for",
              "new",
              "try",
              "catch",
              "break",
              "continue",
              "throw",
              "const",
              "let",
              "var",
            ],

            operators: [
              "=",
              ">",
              "<",
              "!",
              "~",
              "?",
              ":",
              "==",
              "<=",
              ">=",
              "!=",
              "&&",
              "||",
              "++",
              "--",
              "+",
              "-",
              "*",
              "/",
              "&",
              "|",
              "^",
              "%",
              "<<",
              ">>",
              ">>>",
              "+=",
              "-=",
              "*=",
              "/=",
              "&=",
              "|=",
              "^=",
              "%=",
              "<<=",
              ">>=",
              ">>>=",
            ],

            // we include these common regular expressions
            symbols: /[=><!~?:&|+\-*\/\^%]+/,

            escapes:
              /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

            tokenizer: {
              root: [
                // Function calls
                [
                  /[a-zA-Z_][\w$]*(?=\s*\()/,
                  { cases: { "@keywords": "keyword", "@default": "function" } },
                ],

                // identifiers and keywords
                [
                  /[a-zA-Z_$][\w$]*/,
                  {
                    cases: { "@keywords": "keyword", "@default": "identifier" },
                  },
                ],

                // whitespace
                { include: "@whitespace" },

                // delimiters and operators
                [/[{}()\[\]]/, "@brackets"],
                [/[<>](?!@symbols)/, "@brackets"],
                [
                  /@symbols/,
                  { cases: { "@operators": "operator", "@default": "" } },
                ],

                // numbers
                [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float"],
                [/0[xX][0-9a-fA-F]+/, "number.hex"],
                [/\d+/, "number"],

                // delimiter: after number because of .\d floats
                [/[;,.]/, "delimiter"],

                // strings
                [/"([^"\\]|\\.)*$/, "string.invalid"], // non-teminated string
                [/'([^'\\]|\\.)*$/, "string.invalid"], // non-teminated string
                [/"/, "string", "@string_double"],
                [/'/, "string", "@string_single"],
              ],

              whitespace: [
                [/[ \t\r\n]+/, ""],
                [/\/\*/, "comment", "@comment"],
                [/\/\/.*$/, "comment"],
              ],

              comment: [
                [/[^\/*]+/, "comment"],
                [/\*\//, "comment", "@pop"],
                [/[\/*]/, "comment"],
              ],

              string_double: [
                [/[^\\"]+/, "string"],
                [/@escapes/, "string.escape"],
                [/\\./, "string.escape.invalid"],
                [/"/, "string", "@pop"],
              ],

              string_single: [
                [/[^\\']+/, "string"],
                [/@escapes/, "string.escape"],
                [/\\./, "string.escape.invalid"],
                [/'/, "string", "@pop"],
              ],
            },
          });
        }}
        onChange={(value) => {
          setCode(value + "");
        }}
      />

      <Modal
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        title={modal.title}
        size="md"
        onConfirm={() => {}}
        confirmText="Close"
        closeOnBackdropClick
        isLoading={isModalLoading}
      >
        <div className="space-y-4">
          {/* <p className="text-gray-600">{modal.title}</p> */}
          {/* <div className="bg-gray-50 p-4 rounded-md">{modal.content}</div> */}

          <div className="prose prose-lg max-w-none leading-10">
            <Markdown content={modal.content} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Coding;
