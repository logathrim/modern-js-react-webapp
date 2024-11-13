import { Lesson } from '../../types';

export const spreadRestLesson: Lesson = {
  id: 5,
  title: 'Spread และ Rest Operators',
  duration: '20 นาที',
  content: `# 🚀 Spread และ Rest Operators

> *"Spread และ Rest operators เป็นเครื่องมือทรงพลังสำหรับการจัดการข้อมูลใน Modern JavaScript"*

## 📝 สิ่งที่จะได้เรียนรู้

✨ การใช้งาน Spread Operator (\`...\`)  
🔄 การใช้งาน Rest Parameter  
🎯 Use Cases ที่เหมาะสม  
💡 Best Practices  

## 1. 🎨 Spread Operator

### Array Spreading
- 📦 Copy arrays แบบ shallow copy
- 🔄 รวม arrays เข้าด้วยกัน
- 🎯 แยก elements ออกจากกัน
- ⚡️ ใช้กับ array methods

### Object Spreading
- 🔄 Copy objects
- 🎨 Merge objects
- 🛠️ Override properties
- 💡 Shallow copy warning

## 2. 🎯 Rest Parameter

### Function Parameters
- 📝 รับ parameters ไม่จำกัดจำนวน
- 🎨 Collect remaining elements
- 🔍 Array methods กับ rest parameters
- ⚡️ Destructuring with rest

### Destructuring
- 🎯 เก็บค่าที่เหลือจาก destructuring
- 🔄 ใช้ร่วมกับ array destructuring
- 🎨 ใช้ร่วมกับ object destructuring
- 💫 Nested patterns

## 3. 💡 Best Practices

### เมื่อไหร่ควรใช้ Spread
- 📦 Copy ข้อมูลแบบ immutable
- 🔄 Merge ข้อมูล
- 🎯 Pass arguments แบบ dynamic
- ⚠️ ระวัง performance กับ large objects

### เมื่อไหร่ควรใช้ Rest
- 📝 Function ที่รับ parameters ไม่แน่นอน
- 🎨 Destructuring บางส่วนของข้อมูล
- 🔍 Collection parameters
- 🚀 Flexible APIs

> 💡 **Pro Tips**: 
> - ใช้ spread operator เมื่อต้องการ copy หรือ merge ข้อมูล
> - ใช้ rest parameter เมื่อต้องการความยืดหยุ่นในการรับ parameters
> - ระวังเรื่อง shallow copy เมื่อใช้กับ nested objects`,
  codeExamples: [
    {
      title: '🎨 Spread Operator Examples',
      language: 'javascript',
      code: `// Array Spreading
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]

// Combining Arrays
const array1 = [1, 2];
const array2 = [3, 4];
const combined = [...array1, ...array2]; // [1, 2, 3, 4]

// Object Spreading
const person = { name: 'John', age: 30 };
const employee = {
  ...person,
  role: 'Developer',
  age: 31 // Override age
};

// Copy with New Properties
const updatedPerson = {
  ...person,
  age: person.age + 1
};`
    },
    {
      title: '🎯 Rest Parameter Examples',
      language: 'javascript',
      code: `// Rest Parameters in Functions
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Array Destructuring with Rest
const [first, second, ...remaining] = [1, 2, 3, 4, 5];
console.log(remaining); // [3, 4, 5]

// Object Destructuring with Rest
const { name, age, ...other } = {
  name: 'John',
  age: 30,
  city: 'New York',
  country: 'USA'
};
console.log(other); // { city: 'New York', country: 'USA' }

// Function with Named and Rest Parameters
function printUserData(id, ...details) {
  console.log('ID:', id);
  console.log('Details:', details);
}
printUserData(1, 'John', 30, 'Developer');`
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Spread operator (...) ใช้ทำอะไรได้บ้าง?",
      options: [
        "ใช้รวม arrays เท่านั้น",
        "ใช้ copy objects เท่านั้น",
        "ใช้ได้ทั้งการ copy arrays, objects และการรวมข้อมูล",
        "ใช้สำหรับการลบข้อมูลเท่านั้น"
      ],
      correctAnswer: 2,
      explanation: "Spread operator (...) สามารถใช้ได้ทั้งการ copy arrays, objects และการรวมข้อมูล ทำให้การจัดการข้อมูลมีความยืดหยุ่นและสะดวกมากขึ้น"
    },
    {
      id: 2,
      question: "Rest parameter แตกต่างจาก Spread operator อย่างไร?",
      options: [
        "ไม่มีความแตกต่าง ใช้แทนกันได้",
        "Rest ใช้รวบรวม parameters ที่เหลือ, Spread ใช้กระจายข้อมูล",
        "Rest ใช้กับ arrays เท่านั้น, Spread ใช้กับ objects เท่านั้น",
        "Rest ใช้ใน functions เท่านั้น"
      ],
      correctAnswer: 1,
      explanation: "Rest parameter ใช้สำหรับรวบรวม parameters ที่เหลือเป็น array ในขณะที่ Spread operator ใช้สำหรับกระจายข้อมูลจาก array หรือ object"
    },
    {
      id: 3,
      question: "เมื่อใช้ Spread operator กับ objects จะเกิดอะไรขึ้นกับ nested objects?",
      options: [
        "Copy แบบ deep copy ทั้งหมด",
        "Copy แบบ shallow copy (reference ยังชี้ไปที่เดิม)",
        "Nested objects จะถูกลบทิ้ง",
        "Error เมื่อเจอ nested objects"
      ],
      correctAnswer: 1,
      explanation: "Spread operator ทำ shallow copy เท่านั้น ซึ่งหมายความว่า nested objects จะยังคงอ้างอิงไปยังตำแหน่งเดิมในหน่วยความจำ ไม่ได้ถูก copy แยกออกมา"
    },
    {
      id: 4,
      question: "ข้อใดเป็นการใช้ Rest parameter ที่ถูกต้อง?",
      options: [
        "function sum(...nums, extra) {}",
        "function sum(first, ...nums, last) {}",
        "function sum(...nums1, ...nums2) {}",
        "function sum(first, ...nums) {}"
      ],
      correctAnswer: 3,
      explanation: "Rest parameter ต้องเป็น parameter ตัวสุดท้ายเท่านั้น และมีได้แค่ตัวเดียวในฟังก์ชัน การใช้งานที่ถูกต้องคือ (first, ...nums) โดย ...nums จะรวบรวม parameters ที่เหลือทั้งหมด"
    }
  ]
};