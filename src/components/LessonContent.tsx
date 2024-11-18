import Quiz from "./Quiz";
import { Lesson } from "../types";
import { BookOpen, PenTool, Zap } from "lucide-react";
import Coding from "./Coding";
import jsLessons from "../data/lessons";
import Markdown from "./Markdown";

interface LessonContentProps {
  lesson: Lesson;
  showQuiz: number;
  setShowQuiz: (value: number) => void;
  handleLessonComplete: (
    lesson: (typeof jsLessons)[0],
    isQuiz: boolean
  ) => void;
}

export default function LessonContent({
  lesson,
  showQuiz,
  setShowQuiz,
  handleLessonComplete,
}: LessonContentProps) {
  // const answer =
  //   'จากโค้ดที่คุณให้มา มีปัญหาเกี่ยวกับตัวแปร `b` ซึ่งไม่ได้ถูกกำหนดค่าหรือประกาศก่อนที่จะนำมาใช้ในฟังก์ชัน `test()` ในกรณีนี้ตัวแปร `b` จะทำให้เกิดข้อผิดพลาด ```"ReferenceError: b is not defined"``` เมื่อคุณเรียกใช้ฟังก์ชัน `test()` เนื่องจาก JavaScript ไม่สามารถหาค่าของ `b` ได้\n\nคุณสามารถแก้ไขได้โดยการประกาศและกำหนดค่าตัวแปร `b` ก่อนที่จะใช้งาน เช่นนี้:\n\n```javascript\nfunction test() { \n    let a = 50; \n    let b = 20; // กำหนดค่าให้กับ b\n    console.log(a + b); // ตอนนี้ a + b ก็จะไม่มีปัญหา\n}\n\ntest(); // เรียกใช้ฟังก์ชัน\n```\n\nเมื่อคุณทำเช่นนี้ ฟังก์ชัน `test()` จะทำงานได้เรียบร้อยและแสดงผลรวมของ `a` และ `b` (ในที่นี้คือ 70) ออกมาในคอนโซล';

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        {lesson.quiz && lesson.quiz.length > 0 && (
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
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all
                disabled:bg-slate-50 disabled:text-slate-400 disabled:border-slate-200 disabled:shadow-none ${
                  showQuiz === 2
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              style={{ minWidth: "220px" }}
              // disabled
            >
              <PenTool className="h-4 w-4" />
              แบบทดสอบ (<span className="font-bold text-teal-500">Coding</span>)
            </button>
          </div>
        )}
      </div>

      {showQuiz === 1 && lesson.quiz ? (
        <div className="mt-8">
          <Quiz
            questions={lesson.quiz}
            handleLessonComplete={() => handleLessonComplete(lesson, true)}
          />
        </div>
      ) : showQuiz === 2 ? (
        <div className="mt-8">
          <Coding />
        </div>
      ) : (
        <div className="prose prose-lg max-w-none leading-10">
          <Markdown content={lesson.content} />
        </div>
      )}
    </div>
  );
}
