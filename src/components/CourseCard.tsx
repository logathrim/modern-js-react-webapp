import { ChevronRight, ArrowRight } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  topics: string[];
  image: string;
  onStartLearning?: () => void;
}

export default function CourseCard({
  title,
  description,
  topics,
  image,
  onStartLearning,
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
      <div className="lg:flex">
        <div className="lg:w-2/5 relative overflow-hidden">
          <img
            className="h-64 w-full lg:h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            src={image}
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50 mix-blend-multiply" />
        </div>
        <div className="lg:w-3/5 p-8">
          <div className="flex flex-col h-full">
            <div>
              <div className="uppercase tracking-wide text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                {title}
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="mt-6 flex-grow">
              <h4 className="text-sm font-medium text-gray-900 mb-3">
                เนื้อหาที่จะได้เรียนรู้:
              </h4>
              <ul className="space-y-2">
                {topics.map((topic, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-200"
                  >
                    <ChevronRight className="h-4 w-4 text-indigo-500 mr-2 group-hover:text-indigo-600" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <button
                onClick={onStartLearning}
                className="group inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <span>เริ่มเรียน</span>
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
