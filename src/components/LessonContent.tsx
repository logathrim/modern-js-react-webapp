import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "./CodeBlock";
import Quiz from "./Quiz";
import { CodeExample, QuizQuestion } from "../types";
import { BookOpen, PenTool, Zap } from "lucide-react";
import Coding from "./Coding";

interface LessonContentProps {
  content: string;
  codeExamples: CodeExample[];
  quiz?: QuizQuestion[];
  showQuiz: number;
  setShowQuiz: (value: number) => void;
}

const customParseContent = {
  table: ({ children }: any) => (
    <div className="my-8 overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">{children}</table>
    </div>
  ),
  thead: ({ children }: any) => (
    <thead className="bg-gray-50">{children}</thead>
  ),
  tbody: ({ children }: any) => (
    <tbody className="divide-y divide-gray-200 bg-white">{children}</tbody>
  ),
  tr: ({ children, isHeader }: any) => (
    <tr className={`${!isHeader && "hover:bg-gray-50"}`}>{children}</tr>
  ),
  th: ({ children }: any) => (
    <th
      scope="col"
      className="py-3.5 px-6 text-left text-sm font-semibold text-gray-900 border-r last:border-r-0"
    >
      {children}
    </th>
  ),
  td: ({ children }: any) => (
    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 border-r last:border-r-0">
      {children === "✅" ? (
        <span className="text-green-500 text-lg">✅</span>
      ) : children === "❌" ? (
        <span className="text-red-500 text-lg">❌</span>
      ) : (
        children
      )}
    </td>
  ),
  h1: ({ children }: any) => (
    <h1 className="text-3xl font-bold mt-8 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
      {children}
    </h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800 flex items-center gap-2">
      {children}
    </h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-700">
      {children}
    </h3>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-indigo-500 pl-4 py-3 my-6 bg-indigo-50 rounded-r-lg">
      {children}
    </blockquote>
  ),
  doubleBlockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-indigo-500 pl-4 py-3 my-6 bg-indigo-50 rounded-r-lg">
      <blockquote className="border-l-4 border-indigo-500 pl-4 py-3 my-6 bg-indigo-50 rounded-r-lg">
        {children}
      </blockquote>
    </blockquote>
  ),
  ul: ({ children }: any) => (
    <ul className="space-y-2 my-4 ml-6">{children}</ul>
  ),
  li: ({ children }: any) => (
    <li className="flex items-start gap-2">
      <span
        className={
          children[1]?.type?.name === "p" ? "my-4 " : "" + "text-indigo-500"
        }
      >
        •
      </span>
      <span className="flex-1">{children}</span>
    </li>
  ),
  p: ({ children }: any) => (
    <p className="my-4 text-gray-700 leading-relaxed">{children}</p>
  ),
  code({ inline, className, children }: any) {
    const match = /language-(\w+)/.exec(className ?? "");

    if (inline) {
      return (
        <code className="px-1.5 py-0.5 bg-gray-100 text-indigo-600 rounded-md font-mono text-sm border border-gray-200">
          {children}
        </code>
      );
    }

    return match ? (
      <div className="my-8">
        <CodeBlock code={children} language={"javascript"} />
      </div>
    ) : (
      <code className="px-1.5 py-0.5 bg-gray-100 text-indigo-600 rounded-md font-mono text-sm border border-gray-200">
        {children}
      </code>
    );
  },
  hr: () => <hr className="my-8 border-t-2 border-gray-100" />,
  strong: ({ children }: any) => (
    <strong className="font-semibold text-indigo-600">{children}</strong>
  ),
  em: ({ children }: any) => (
    <em className="text-gray-600 italic">{children}</em>
  ),
};

export default function LessonContent({
  content,
  quiz,
  showQuiz,
  setShowQuiz,
}: LessonContentProps) {
  // const answer =
  //   'จากโค้ดที่คุณให้มา มีปัญหาเกี่ยวกับตัวแปร `b` ซึ่งไม่ได้ถูกกำหนดค่าหรือประกาศก่อนที่จะนำมาใช้ในฟังก์ชัน `test()` ในกรณีนี้ตัวแปร `b` จะทำให้เกิดข้อผิดพลาด ```"ReferenceError: b is not defined"``` เมื่อคุณเรียกใช้ฟังก์ชัน `test()` เนื่องจาก JavaScript ไม่สามารถหาค่าของ `b` ได้\n\nคุณสามารถแก้ไขได้โดยการประกาศและกำหนดค่าตัวแปร `b` ก่อนที่จะใช้งาน เช่นนี้:\n\n```javascript\nfunction test() { \n    let a = 50; \n    let b = 20; // กำหนดค่าให้กับ b\n    console.log(a + b); // ตอนนี้ a + b ก็จะไม่มีปัญหา\n}\n\ntest(); // เรียกใช้ฟังก์ชัน\n```\n\nเมื่อคุณทำเช่นนี้ ฟังก์ชัน `test()` จะทำงานได้เรียบร้อยและแสดงผลรวมของ `a` และ `b` (ในที่นี้คือ 70) ออกมาในคอนโซล';

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        {quiz && quiz.length > 0 && (
          <div className="flex gap-2 flex-shrink-0 ms-auto max-w-full overflow-x-auto">
            <button
              onClick={() => setShowQuiz(0)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                !showQuiz
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <BookOpen className="h-4 w-4" />
              เนื้อหา
            </button>
            <button
              onClick={() => setShowQuiz(1)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                showQuiz === 1
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              style={{ minWidth: "200px" }}
            >
              <Zap className="h-4 w-4" />
              แบบทดสอบ (<span className="font-bold text-orange-400">Quiz</span>)
            </button>
            <button
              onClick={() => setShowQuiz(2)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                showQuiz === 2
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              style={{ minWidth: "220px" }}
            >
              <PenTool className="h-4 w-4" />
              แบบทดสอบ (<span className="font-bold text-teal-500">Coding</span>)
            </button>
          </div>
        )}
      </div>

      {showQuiz === 1 && quiz ? (
        <div className="mt-8">
          <Quiz questions={quiz} />
        </div>
      ) : showQuiz === 2 ? (
        <div className="mt-8">
          <Coding />
        </div>
      ) : (
        <div className="prose prose-lg max-w-none leading-10">
          <ReactMarkdown
            className="text-gray-700 leading-relaxed"
            remarkPlugins={[remarkGfm]}
            components={customParseContent}
          >
            {content}
          </ReactMarkdown>

          {/* <ReactMarkdown
            components={{
              code({ inline, className, children }: any) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <CodeBlock
                    code={String(children).replace(/\n$/, "")}
                    language={"javascript"}
                  />
                ) : (
                  customParseContent.code({ children })
                );
              },
            }}
          >
            {answer}
          </ReactMarkdown> */}
        </div>
      )}
    </div>
  );
}
