import { Lesson } from "../../types";

export const esModulesLesson: Lesson = {
  id: 8,
  title: "ES Modules",
  duration: "25 นาที",
  content: `# 📦 ES Modules

> *"ES Modules bring a standardized module system to JavaScript, making code organization and sharing more elegant"*

## 📝 สิ่งที่จะได้เรียนรู้

✨ Import และ Export Syntax  
🔄 Module Patterns  
🎯 Dynamic Imports  
💡 Module Best Practices  

## 1. 🎨 Export Patterns

### Named Exports
- 📦 Export แบบระบุชื่อ
- 🎯 Export หลายรายการ
- 💡 Export with renaming
- ⚡️ Inline vs. Declaration exports

### Default Exports
- 🚀 Export ค่าหลักของ module
- 🎯 ข้อแตกต่างจาก named exports
- 💡 Best practices
- ⚡️ เมื่อไหร่ควรใช้

## 2. 🔄 Import Patterns

### Basic Imports
- 📥 Import แบบระบุชื่อ
- 🎯 Import default
- 💡 Import ทั้งหมด
- ⚡️ Import with renaming

### Advanced Patterns
- 🔄 Mixed imports
- 🎨 Namespace imports
- 💡 Side-effect imports
- 🚀 Re-exporting modules

## 3. 🚀 Dynamic Imports

### การใช้งาน
- 📦 Code splitting
- 🎯 Lazy loading
- 💡 Conditional loading
- ⚡️ Performance optimization

### Best Practices
- 🔄 Error handling
- 🎨 Loading states
- 💡 Bundling strategies
- 🚀 Module preloading

> 💡 **Pro Tips**: 
> - ใช้ named exports เป็นหลักเพื่อให้ IDE ช่วย autocomplete ได้ดี
> - ระวังการใช้ default export ที่มากเกินไป
> - ใช้ dynamic imports เมื่อต้องการ optimize performance`,
  codeExamples: [
    {
      title: "📦 Export Patterns",
      language: "javascript",
      code: `// Named exports
export const PI = 3.14159;
export function square(x) {
  return x * x;
}

// Export list
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
export { add, subtract };

// Export with renaming
export { add as sum, subtract as minus };

// Default export
export default class Calculator {
  add(a, b) { return a + b; }
  subtract(a, b) { return a - b; }
  multiply(a, b) { return a * b; }
  divide(a, b) { return a / b; }
}

// Combined exports
export const VERSION = '1.0.0';
export { Calculator as default, PI, square };`,
    },
    {
      title: "🔄 Import Patterns",
      language: "javascript",
      code: `// Named imports
import { PI, square } from './math.js';
import { add, subtract } from './operations.js';

// Import with renaming
import { add as sum, subtract as minus } from './operations.js';

// Default import
import Calculator from './calculator.js';

// Mixed imports
import Calculator, { PI, square } from './math.js';

// Namespace import
import * as MathUtils from './math.js';
console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.square(4)); // 16

// Side-effect import
import './polyfills.js';

// Re-export
export { PI, square } from './math.js';
export { default as Calculator } from './calculator.js';`,
    },
    {
      title: "🚀 Dynamic Imports",
      language: "javascript",
      code: `// Basic dynamic import
const loadModule = async () => {
  try {
    const module = await import('./heavy-module.js');
    module.doSomething();
  } catch (error) {
    console.error('Failed to load module:', error);
  }
};

// Conditional loading
const loadLocaleMessages = async (locale) => {
  try {
    const messages = await import(\`./locales/\${locale}.js\`);
    return messages.default;
  } catch {
    return import('./locales/en.js').then(m => m.default);
  }
};

// React lazy loading
import React, { Suspense, lazy } from 'react';

const HeavyComponent = lazy(() => 
  import('./components/HeavyComponent')
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}

// Module preloading
const preloadModule = () => {
  const link = document.createElement('link');
  link.rel = 'modulepreload';
  link.href = '/modules/heavy-module.js';
  document.head.appendChild(link);
};`,
    },
  ],
  quiz: [
    {
      id: 1,
      question: "ข้อใดคือความแตกต่างระหว่าง Named Export และ Default Export?",
      options: [
        "Named Export ใช้ได้กับ functions เท่านั้น",
        "Default Export ใช้ได้หลายครั้งใน module เดียวกัน",
        "Named Export สามารถมีได้หลายตัว แต่ Default Export มีได้แค่หนึ่งตัวต่อ module",
        "Default Export ต้องใช้กับ class เท่านั้น",
      ],
      correctAnswer: 2,
      explanation:
        "Named Export สามารถมีได้หลายตัวใน module เดียวกัน ในขณะที่ Default Export จะมีได้เพียงหนึ่งตัวต่อ module เท่านั้น ทำให้เหมาะกับการ export ค่าหลักของ module",
    },
    {
      id: 2,
      question: "Dynamic Import มีประโยชน์อย่างไร?",
      options: [
        "ทำให้โค้ดทำงานเร็วขึ้นเสมอ",
        "ช่วยในการ code splitting และ lazy loading",
        "ลดขนาดของไฟล์ JS ทั้งหมด",
        "ทำให้ไม่ต้องใช้ bundler",
      ],
      correctAnswer: 1,
      explanation:
        "Dynamic Import ช่วยในการทำ code splitting และ lazy loading โดยโหลด modules เมื่อต้องการใช้งานจริง ทำให้สามารถลดขนาดของ initial bundle และปรับปรุง performance ของแอพพลิเคชัน",
    },
    {
      id: 3,
      question: "การใช้ import * as namespace มีข้อดีอย่างไร?",
      options: [
        "ทำให้โค้ดทำงานเร็วขึ้น",
        "ป้องกันการชนกันของชื่อตัวแปร",
        "ลดขนาดของ bundle",
        "ไม่ต้องระบุชื่อ imports",
      ],
      correctAnswer: 1,
      explanation:
        "การใช้ namespace import (import * as) ช่วยป้องกันการชนกันของชื่อตัวแปรโดยรวมทุก exports ไว้ภายใต้ namespace เดียวกัน ทำให้จัดการและเข้าถึง exports ได้เป็นระบบมากขึ้น",
    },
    {
      id: 4,
      question: "เมื่อไหร่ควรใช้ Side-effect imports?",
      options: [
        "เมื่อต้องการ import ทุกอย่างจาก module",
        "เมื่อต้องการ import เฉพาะบางส่วน",
        "เมื่อต้องการโหลด polyfills หรือ global styles",
        "เมื่อต้องการ export ค่าหลัก",
      ],
      correctAnswer: 2,
      explanation:
        "Side-effect imports (import './file.js') ใช้เมื่อต้องการโหลด module ที่มีผลข้างเคียง เช่น การเพิ่ม polyfills, การโหลด global styles, หรือการ register service workers โดยไม่ต้องการ import ค่าใดๆ จาก module นั้น",
    },
  ],
};
