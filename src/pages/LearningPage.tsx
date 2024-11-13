import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import LessonCard from "../components/LessonCard";
import LessonContent from "../components/LessonContent";
import { jsLessons } from "../data/lessons/index";
import { BookOpen, ChevronLeft } from "lucide-react";

interface LearningPageProps {
  setShowLearning: Dispatch<SetStateAction<boolean>>;
}

export default function LearningPage({ setShowLearning }: LearningPageProps) {
  const [selectedLesson, setSelectedLesson] = React.useState(jsLessons[0]);
  const [completedLessons, setCompletedLessons] = React.useState<number[]>([]);
  const [showQuiz, setShowQuiz] = useState(0);

  useEffect(() => {
    if (window) {
      window.scrollTo(0, 0);
    }
  }, []);

  const handleLessonClick = (
    lesson: (typeof jsLessons)[0],
    isQuiz?: boolean
  ) => {
    setSelectedLesson(lesson);
    if (isQuiz && !completedLessons.includes(lesson.id)) {
      setCompletedLessons([...completedLessons, lesson.id]);
    }
    if (!isQuiz) {
      setShowQuiz(0);
    }
    if (window) {
      window.scrollTo(0, 0);
    }
  };

  const progress = (completedLessons.length / jsLessons.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => setShowLearning(false)}
          className="flex items-center mb-2 bg-white rounded-md border border-slate-200 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800"
          type="button"
        >
          <ChevronLeft /> ย้อนกลับ
        </button>
        {/* Course Progress */}
        <div className="mb-4 bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-900">
                Course Progress
              </h2>
            </div>
            <span className="text-sm font-medium text-gray-600">
              {completedLessons.length} of {jsLessons.length} lessons completed
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Course Content
              </h2>
              <div className="space-y-3">
                {jsLessons.map((lesson) => (
                  <LessonCard
                    key={lesson.id}
                    title={lesson.title}
                    duration={lesson.duration}
                    completed={completedLessons.includes(lesson.id)}
                    active={selectedLesson.id === lesson.id}
                    onClick={() => handleLessonClick(lesson)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow">
              <LessonContent
                lesson={selectedLesson}
                showQuiz={showQuiz}
                setShowQuiz={setShowQuiz}
                handleLessonComplete={handleLessonClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
