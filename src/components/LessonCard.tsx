import React from "react";
import { ChevronRight, CheckCircle2 } from "lucide-react";

interface LessonCardProps {
  title: string;
  duration: string;
  completed?: boolean;
  active?: boolean;
  onClick: () => void;
}

export default function LessonCard({
  title,
  duration,
  completed = false,
  active = false,
  onClick,
}: LessonCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg transition-all duration-200 border ${
        active
          ? "bg-indigo-50 border-indigo-200"
          : "bg-white border-gray-100 hover:border-indigo-200 hover:bg-indigo-50"
      } group`}
    >
      <div className="flex items-start gap-3">
        <div className="pt-1">
          {completed ? (
            <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500" />
          ) : (
            <div
              className={`h-5 w-5 flex-shrink-0 rounded-full border-2 ${
                active
                  ? "border-indigo-500"
                  : "border-gray-300 group-hover:border-indigo-500"
              } transition-colors duration-200`}
            />
          )}
        </div>

        <div className="flex-grow min-w-0">
          <div className="flex justify-between items-start gap-4">
            <div
              className={`font-medium ${
                active
                  ? "text-indigo-600"
                  : "text-gray-900 group-hover:text-indigo-600"
              } transition-colors duration-200 break-words flex-grow`}
            >
              {title}
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-sm text-gray-500 whitespace-nowrap">
                {duration}
              </span>
              <ChevronRight
                className={`h-4 w-4 flex-shrink-0 ${
                  active ? "text-indigo-500" : ""
                } group-hover:transform group-hover:translate-x-1 transition-all duration-200`}
              />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
