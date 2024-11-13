import React from 'react';
import { Code2, Menu, X } from 'lucide-react';

interface NavbarProps {
  onAuthClick: (type: 'signin' | 'signup') => void;
}

export default function Navbar({ onAuthClick }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">ModernJS Hub</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-gray-600 hover:text-indigo-600">
              หลักสูตร
            </a>
            <button
              onClick={() => onAuthClick('signin')}
              className="px-4 py-2 text-indigo-600 hover:text-indigo-700 font-medium"
            >
              เข้าสู่ระบบ
            </button>
            <button
              onClick={() => onAuthClick('signup')}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              สมัครสมาชิก
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#courses" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">
              หลักสูตร
            </a>
            <button
              onClick={() => onAuthClick('signin')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-indigo-600"
            >
              เข้าสู่ระบบ
            </button>
            <button
              onClick={() => onAuthClick('signup')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-indigo-600"
            >
              สมัครสมาชิก
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}