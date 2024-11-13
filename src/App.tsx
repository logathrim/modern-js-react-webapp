import React from "react";
import Navbar from "./components/Navbar";
import CourseCard from "./components/CourseCard";
import LearningPage from "./pages/LearningPage";
import { ArrowDown, Sparkles, Code2, Brain, Rocket } from "lucide-react";
import AuthModal from "./components/AuthModal";

function App() {
  const [showLearning, setShowLearning] = React.useState(false);
  const [showAuthModal, setShowAuthModal] = React.useState(false);
  const [authType, setAuthType] = React.useState<"signin" | "signup">("signin");

  const handleStartLearning = () => {
    setShowLearning(true);
  };

  const handleAuthClick = (type: "signin" | "signup") => {
    setAuthType(type);
    setShowAuthModal(true);
  };

  if (showLearning) {
    return (
      <>
        <Navbar onAuthClick={handleAuthClick} />
        <LearningPage setShowLearning={setShowLearning} />
      </>
    );
  }

  const jsTopics = [
    "การประกาศตัวแปรด้วย let และ const",
    "Arrow Functions และการใช้งาน",
    "Template Literals และ String Interpolation",
    "Destructuring Arrays และ Objects",
    "Spread/Rest Operators",
    "Enhanced Object Literals",
    "Classes และ OOP ใน JavaScript",
    "ES Modules (import/export)",
    "Promises และ Async/Await",
    "Array Methods ขั้นสูง",
  ];

  const reactTopics = [
    "Components และ Props",
    "State Management และ Hooks",
    "การจัดการ Side Effects",
    "Context API และ Global State",
    "การจัดการฟอร์มใน React",
    "React Router และ Navigation",
    "Performance Optimization",
    "Custom Hooks",
    "Error Boundaries",
    "Testing ใน React",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar onAuthClick={handleAuthClick} />

      {/* Hero Section */}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          }}
        >
          <span className="w-full h-full absolute opacity-60 bg-gradient-to-r from-blue-900 to-purple-900"></span>
        </div>

        <div className="container relative mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="text-white">
                <h1 className="text-5xl font-bold mb-6">
                  เรียนรู้ Modern JavaScript & React
                  <span className="inline-block ml-2">
                    <Sparkles className="h-8 w-8 text-yellow-300" />
                  </span>
                </h1>
                <p className="mt-4 text-xl leading-relaxed">
                  พัฒนาทักษะการเขียนโค้ดของคุณเพิ่อเตรียมตัวเข้าสู่การใช้งาน
                  modern Javascript libraries and frameworks
                  ซึ่งจะเป็นการเรียนรู้แบบ Interactive ผ่านตัวอย่างจริง
                </p>
                <button
                  // onClick={() => handleAuthClick("signup")}
                  onClick={() => {
                    if (window) window.location.href = "#courses";
                  }}
                  className="mt-8 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  เริ่มต้นเรียน
                </button>
                <div
                  className="mt-8 animate-bounce"
                  onClick={() => {
                    if (window) window.location.href = "#courses";
                  }}
                >
                  <ArrowDown className="h-8 w-8 mx-auto text-white opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-indigo-600">
                    <Code2 className="h-8 w-8" />
                  </div>
                  <h6 className="text-xl font-semibold">
                    เรียนรู้จากตัวอย่างจริง
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    ฝึกฝนผ่านโค้ดตัวอย่างที่ใช้งานได้จริง
                    พร้อมคำอธิบายแบบละเอียด
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-purple-600">
                    <Brain className="h-8 w-8" />
                  </div>
                  <h6 className="text-xl font-semibold">เนื้อหาทันสมัย</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    อัพเดทกับเทคโนโลยีล่าสุดในวงการ JavaScript และ React
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-pink-600">
                    <Rocket className="h-8 w-8" />
                  </div>
                  <h6 className="text-xl font-semibold">
                    เรียนรู้แบบ Interactive
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    ทดลองเขียนโค้ดได้ทันที พร้อมระบบตรวจสอบอัตโนมัติ พร้อมมี AI
                    เป็นตัวช่วย
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-gray-50" id="courses">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            หลักสูตรของเรา
          </h2>
          <div className="mx-auto space-y-12">
            <CourseCard
              title="Modern JavaScript"
              description="เรียนรู้ JavaScript สมัยใหม่แบบครบวงจร ตั้งแต่พื้นฐานจนถึงการเขียนโค้ดขั้นสูง พร้อมเทคนิคและแนวทางการพัฒนาที่เป็นมาตรฐานในปัจจุบัน"
              topics={jsTopics}
              image="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              onStartLearning={handleStartLearning}
            />

            {/* <CourseCard
              title="React.js Fundamentals"
              description="เริ่มต้นเรียนรู้ React.js ตั้งแต่พื้นฐานจนถึงการสร้างแอพพลิเคชันขนาดใหญ่ เรียนรู้การจัดการ State, Hooks, และ Best Practices ต่างๆ"
              topics={reactTopics}
              image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              onStartLearning={handleStartLearning}
            /> */}
          </div>
        </div>
      </section>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        type={authType}
        onSwitchType={(type) => setAuthType(type)}
      />
    </div>
  );
}

export default App;
