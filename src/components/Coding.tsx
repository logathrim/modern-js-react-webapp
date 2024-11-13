import Editor from "@monaco-editor/react";
import draculaTheme from "../themes/editor.json";

const Coding = () => {
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

  return (
    <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden border border-gray-200">
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
      />
    </div>
  );
};

export default Coding;
