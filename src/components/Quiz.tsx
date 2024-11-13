import React, { useState } from 'react';
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react';
import { QuizQuestion } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
}

export default function Quiz({ questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleAnswerSelect = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    return (
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-center mb-6">Quiz Completed! 🎉</h3>
        <div className="text-center mb-6">
          <p className="text-xl">Your Score:</p>
          <p className="text-3xl font-bold text-indigo-600">
            {score} / {questions.length}
          </p>
          <p className="mt-2 text-gray-600">
            ({Math.round((score / questions.length) * 100)}%)
          </p>
        </div>
        <button
          onClick={handleRetry}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm text-gray-500">
            Score: {score}/{currentQuestion + (selectedAnswer !== null ? 1 : 0)}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-4">{question.question}</h3>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            disabled={selectedAnswer !== null}
            className={`w-full text-left p-4 rounded-lg border transition-all ${
              selectedAnswer === null
                ? 'hover:border-indigo-500 hover:bg-indigo-50'
                : selectedAnswer === index
                ? index === question.correctAnswer
                  ? 'border-green-500 bg-green-50'
                  : 'border-red-500 bg-red-50'
                : index === question.correctAnswer
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {selectedAnswer !== null && (
                index === question.correctAnswer ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : selectedAnswer === index ? (
                  <XCircle className="h-5 w-5 text-red-500" />
                ) : null
              )}
            </div>
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-700">{question.explanation}</p>
        </div>
      )}

      {selectedAnswer !== null && (
        <button
          onClick={handleNext}
          className="w-full mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
        </button>
      )}
    </div>
  );
}