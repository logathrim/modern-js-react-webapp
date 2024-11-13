export interface CodeExample {
  title: string;
  language: string;
  code: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface ExerciseQuestion {
  id: number;
  title: string;
  description: string;
  code: string;
  solution: string;
}

export interface Lesson {
  id: number;
  title: string;
  duration: string;
  content: string;
  codeExamples?: CodeExample[];
  quiz?: QuizQuestion[];
  exercises?: ExerciseQuestion[];
}