import { Lesson } from '../../types';

export const destructuringLesson: Lesson = {
  id: 4,
  title: 'Destructuring',
  duration: '25 นาที',
  content: `# 🔄 Destructuring in Modern JavaScript

> *"Destructuring makes working with complex data structures elegant and intuitive"*

## 📝 สิ่งที่จะได้เรียนรู้

✨ Array Destructuring  
🔄 Object Destructuring  
🎯 Nested Destructuring  
💡 Advanced Patterns  

## 1. 🎨 Array Destructuring

### Basic Array Destructuring
- 📦 แยกค่าจาก array ไปยังตัวแปร
- 🎯 ข้ามบาง elements ที่ไม่ต้องการ
- 💡 ใช้ rest operator (...) เก็บค่าที่เหลือ
- ⚡️ กำหนดค่า default

### Advanced Array Patterns
- 🔄 Swapping variables
- 🎨 Combining with functions
- 💡 Nested array destructuring
- 🚀 Mixed with objects

## 2. 🏗️ Object Destructuring

### Basic Object Destructuring
- 📦 แยก properties จาก object
- 🎯 เปลี่ยนชื่อตัวแปร
- 💡 ค่า default สำหรับ properties
- ⚡️ Computed property names

### Advanced Object Patterns
- 🔄 Deep destructuring
- 🎨 Rest properties
- 💡 Dynamic property names
- 🚀 Function parameters

## 3. 💫 Practical Applications

### Function Parameters
- 📦 Named parameters
- 🎯 Optional parameters
- 💡 Default configurations
- ⚡️ API responses

### React Patterns
- 🔄 Props destructuring
- 🎨 Hooks destructuring
- 💡 Context values
- 🚀 Event handlers

> 💡 **Pro Tips**: 
> - ใช้ destructuring ให้เร็วที่สุดเพื่อลดการอ้างอิงซ้ำ
> - ตั้งชื่อตัวแปรให้มีความหมายเมื่อ rename
> - ระวังการ destructuring ลึกเกินไปจะทำให้โค้ดอ่านยาก`,
  codeExamples: [
    {
      title: '🎨 Array Destructuring Patterns',
      language: 'javascript',
      code: `// Basic array destructuring
const colors = ['red', 'green', 'blue'];
const [primary, secondary, tertiary] = colors;

// Skipping elements
const [first, , third] = colors;

// Rest operator
const numbers = [1, 2, 3, 4, 5];
const [one, two, ...rest] = numbers;
console.log(rest); // [3, 4, 5]

// Default values
const [x = 0, y = 0, z = 0] = [1, 2];
console.log(z); // 0

// Swapping variables
let a = 1, b = 2;
[a, b] = [b, a];

// Nested arrays
const matrix = [[1, 2], [3, 4]];
const [[a1, a2], [b1, b2]] = matrix;

// Return multiple values
function getCoordinates() {
  return [10, 20, 30];
}
const [x, y, z] = getCoordinates();

// Combine with iteration
for (const [index, value] of ['a', 'b', 'c'].entries()) {
  console.log(\`\${index}: \${value}\`);
}`
    },
    {
      title: '🏗️ Object Destructuring Patterns',
      language: 'javascript',
      code: `// Basic object destructuring
const user = {
  name: 'John',
  age: 30,
  city: 'New York'
};
const { name, age } = user;

// Renaming variables
const { name: userName, age: userAge } = user;

// Default values
const { country = 'Unknown' } = user;

// Nested destructuring
const data = {
  user: {
    profile: {
      firstName: 'John',
      lastName: 'Doe',
      social: {
        twitter: '@john',
        facebook: '/johndoe'
      }
    }
  }
};

const { 
  user: { 
    profile: { 
      firstName,
      social: { twitter }
    } 
  } 
} = data;

// Rest operator with objects
const { name, ...userDetails } = user;

// Function parameters
function printUserInfo({
  name = 'Guest',
  age = 0,
  settings: { theme = 'light' } = {}
} = {}) {
  console.log(\`\${name} (\${age}) - Theme: \${theme}\`);
}

// React example
function UserProfile({ 
  user: { name, avatar },
  onUpdate,
  theme = 'light'
}) {
  const handleClick = ({ target: { value } }) => {
    onUpdate(value);
  };
  
  return (
    <div className={\`theme-\${theme}\`}>
      <img src={avatar} alt={name} />
    </div>
  );
}`
    },
    {
      title: '💫 Advanced Patterns and Edge Cases',
      language: 'javascript',
      code: `// Computed property names
const key = 'name';
const { [key]: value } = { name: 'John' };

// Dynamic destructuring
function process(data, keys) {
  const result = {};
  keys.forEach(key => {
    const { [key]: value } = data;
    result[key] = value;
  });
  return result;
}

// Combining array and object destructuring
const [{ name, age }, { city }] = [
  { name: 'John', age: 30 },
  { city: 'New York' }
];

// Deep cloning with restructuring
const original = { a: { b: { c: 1 } } };
const { a: { b: { c } } } = original;
const clone = { a: { b: { c } } };

// Error handling with default values
function fetchUser(id) {
  return {
    data: null,
    error: 'User not found'
  };
}

const { 
  data: user = { name: 'Guest' }, 
  error = null 
} = fetchUser(1);

// Destructuring in loops
const users = [
  { id: 1, name: 'John', active: true },
  { id: 2, name: 'Jane', active: false }
];

for (const { id, name, active } of users) {
  console.log(\`\${id}: \${name} is \${active ? 'active' : 'inactive'}\`);
}`
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Array destructuring สามารถทำอะไรได้บ้าง?",
      options: [
        "แยกค่าจาก array เท่านั้น",
        "แยกค่า, ข้ามบางค่า, และใช้ rest operator ได้",
        "เปลี่ยนชื่อตัวแปรได้เท่านั้น",
        "ใช้ได้กับ object เท่านั้น"
      ],
      correctAnswer: 1,
      explanation: "Array destructuring สามารถแยกค่าจาก array, ข้ามบางค่าที่ไม่ต้องการ, และใช้ rest operator (...) เพื่อเก็บค่าที่เหลือได้ ทำให้การจัดการข้อมูลใน array ทำได้สะดวกขึ้น"
    },
    {
      id: 2,
      question: "การใช้ default values ใน destructuring มีประโยชน์อย่างไร?",
      options: [
        "ไม่มีประโยชน์ เพราะควรมีค่าครบทุกตัวแปร",
        "ช่วยป้องกัน error เมื่อค่าเป็น undefined และกำหนดค่าเริ่มต้นได้",
        "ใช้ได้กับ array destructuring เท่านั้น",
        "ทำให้โค้ดทำงานช้าลง"
      ],
      correctAnswer: 1,
      explanation: "Default values ช่วยป้องกันกรณีที่ค่าเป็น undefined และช่วยกำหนดค่าเริ่มต้นให้กับตัวแปร ทำให้โค้ดมีความยืดหยุ่นและป้องกัน error ได้ดีขึ้น"
    },
    {
      id: 3,
      question: "Nested destructuring คืออะไร?",
      options: [
        "การ destructure ข้อมูลที่ซ้อนกันหลายชั้น",
        "การ destructure array เท่านั้น",
        "การ destructure object เท่านั้น",
        "การสร้างตัวแปรใหม่"
      ],
      correctAnswer: 0,
      explanation: "Nested destructuring คือการ destructure ข้อมูลที่มีโครงสร้างซ้อนกันหลายชั้น เช่น object ที่มี object ซ้อนอยู่ข้างใน หรือ array ที่มี object เป็นสมาชิก"
    },
    {
      id: 4,
      question: "ข้อใดเป็นประโยชน์ของการใช้ destructuring ใน function parameters?",
      options: [
        "ทำให้โค้ดอ่านยากขึ้น",
        "ไม่สามารถกำหนดค่า default ได้",
        "ช่วยให้การรับ parameters มีความยืดหยุ่นและอ่านง่ายขึ้น",
        "ใช้ได้กับ arrow functions เท่านั้น"
      ],
      correctAnswer: 2,
      explanation: "การใช้ destructuring ใน function parameters ช่วยให้การรับ parameters มีความยืดหยุ่น, สามารถกำหนดค่า default ได้, และทำให้โค้ดอ่านง่ายขึ้น โดยเฉพาะเมื่อมี parameters จำนวนมาก"
    }
  ]
};