import { Lesson } from "../../types";

export const arrayMethodsLesson: Lesson = {
  id: 10,
  title: "Advanced Array Methods",
  duration: "30 นาที",
  content: `# 🎯 Advanced Array Methods

> *"Master the power of functional programming with Modern JavaScript array methods"*

## 📝 สิ่งที่จะได้เรียนรู้

✨ Transformation Methods  
🔄 Search และ Filter  
🎯 Aggregation Methods  
💡 Chaining Operations  

## 1. 🎨 Transformation Methods

### map()
- 📦 แปลงข้อมูลทุกตัวใน array
- 🎯 สร้าง array ใหม่เสมอ
- 💡 Immutable operations
- ⚡️ One-to-one transformation

### flatMap()
- 🔄 Map และ flatten ในขั้นตอนเดียว
- 🎯 จัดการ nested arrays
- 💡 Performance optimization
- 🚀 One-to-many transformation

## 2. 🔍 Search และ Filter

### filter()
- 🎯 กรองข้อมูลตามเงื่อนไข
- 💡 สร้าง array ใหม่เสมอ
- 📦 Predicate functions
- ⚡️ Chainable operations

### find() และ findIndex()
- 🔍 ค้นหาข้อมูลแรกที่ตรงเงื่อนไข
- 🎯 ค้นหาตำแหน่งข้อมูล
- 💡 Early termination
- 🚀 Performance efficient

## 3. 📊 Aggregation Methods

### reduce()
- 🔄 รวมข้อมูลเป็นค่าเดียว
- 🎯 สร้างโครงสร้างข้อมูลใหม่
- 💡 Complex transformations
- ⚡️ Flexible accumulation

### some() และ every()
- ✅ ตรวจสอบเงื่อนไขบางตัว
- ❌ ตรวจสอบเงื่อนไขทุกตัว
- 💡 Early termination
- 🎯 Boolean results

> 💡 **Pro Tips**: 
> - ใช้ method chaining เพื่อสร้าง data transformation pipeline
> - เลือกใช้ method ที่เหมาะสมกับงาน เพื่อ performance ที่ดี
> - ระวังเรื่อง mutability ของ array methods`,
  codeExamples: [
    {
      title: "🎨 Transformation Examples",
      language: "javascript",
      code: `// Map transformation
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const formatted = numbers.map(n => \`Number: \${n}\`);

// FlatMap example
const orders = [
  { id: 1, items: ['apple', 'banana'] },
  { id: 2, items: ['orange'] }
];
const allItems = orders.flatMap(order => order.items);

// Complex transformations
const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 }
];

const userProfiles = users
  .map(user => ({
    ...user,
    displayName: \`\${user.name} (\${user.age})\`,
    isAdult: user.age >= 18
  }))
  .sort((a, b) => a.age - b.age);

// Nested transformations
const matrix = [[1, 2], [3, 4]];
const flattened = matrix.flatMap(row => 
  row.map(n => n * 2)
);`,
    },
    {
      title: "🔍 Filter และ Search Examples",
      language: "javascript",
      code: `// Filter examples
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0);
const odds = numbers.filter(n => n % 2 === 1);

// Complex filtering
const users = [
  { id: 1, name: 'John', age: 30, active: true },
  { id: 2, name: 'Jane', age: 25, active: false },
  { id: 3, name: 'Bob', age: 35, active: true }
];

const activeAdults = users.filter(user => 
  user.active && user.age >= 18
);

// Search operations
const findUser = (id) => users.find(user => user.id === id);
const findUserIndex = (id) => users.findIndex(user => user.id === id);

// Search with early termination
const hasInactiveUser = users.some(user => !user.active);
const allActive = users.every(user => user.active);

// Advanced search patterns
function searchUsers(query) {
  return users.filter(user => 
    Object.values(user)
      .some(value => 
        String(value)
          .toLowerCase()
          .includes(query.toLowerCase())
      )
  );
}`,
    },
    {
      title: "📊 Reduce และ Aggregation Examples",
      language: "javascript",
      code: `// Basic reduction
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
const product = numbers.reduce((acc, curr) => acc * curr, 1);

// Object transformation
const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 35 }
];

// Group by age range
const usersByAgeGroup = users.reduce((groups, user) => {
  const ageGroup = \`\${Math.floor(user.age / 10) * 10}s\`;
  return {
    ...groups,
    [ageGroup]: [...(groups[ageGroup] || []), user]
  };
}, {});

// Create lookup table
const userMap = users.reduce((map, user) => ({
  ...map,
  [user.id]: user
}), {});

// Complex aggregation
const orderData = [
  { product: 'A', quantity: 2, price: 10 },
  { product: 'B', quantity: 1, price: 20 },
  { product: 'A', quantity: 3, price: 10 }
];

const orderSummary = orderData.reduce((summary, order) => {
  const { product, quantity, price } = order;
  
  if (!summary[product]) {
    summary[product] = {
      totalQuantity: 0,
      totalValue: 0,
      orders: []
    };
  }
  
  summary[product].totalQuantity += quantity;
  summary[product].totalValue += quantity * price;
  summary[product].orders.push(order);
  
  return summary;
}, {});`,
    },
  ],
  quiz: [
    {
      id: 1,
      question: "map() และ flatMap() มีความแตกต่างกันอย่างไร?",
      options: [
        "map() ทำงานเร็วกว่า flatMap()",
        "map() สร้าง array ใหม่, flatMap() แก้ไข array เดิม",
        "flatMap() รวมการทำ map() และ flat() ในขั้นตอนเดียว",
        "ไม่มีความแตกต่าง",
      ],
      correctAnswer: 2,
      explanation:
        "flatMap() รวมการทำงานของ map() และ flat() เข้าด้วยกัน ทำให้สามารถแปลงข้อมูลและ flatten array ได้ในขั้นตอนเดียว เหมาะสำหรับการทำ one-to-many transformations",
    },
    {
      id: 2,
      question: "reduce() method ใช้ทำอะไรได้บ้าง?",
      options: [
        "ใช้รวมตัวเลขเท่านั้น",
        "ใช้แปลง array เป็น string เท่านั้น",
        "ใช้แปลงข้อมูลเป็นรูปแบบใดก็ได้ รวมถึงการสร้าง object หรือ array ใหม่",
        "ใช้กรองข้อมูลเท่านั้น",
      ],
      correctAnswer: 2,
      explanation:
        "reduce() เป็น method ที่ยืดหยุ่นมาก สามารถใช้แปลงข้อมูลเป็นรูปแบบใดก็ได้ ไม่ว่าจะเป็นการรวมค่า, สร้าง object, หรือสร้าง array ใหม่",
    },
    {
      id: 3,
      question: "some() และ every() ต่างกันอย่างไร?",
      options: [
        "ไม่มีความแตกต่าง",
        "some() ตรวจสอบบางตัว, every() ตรวจสอบทุกตัว",
        "some() ทำงานเร็วกว่า every()",
        "every() ใช้กับตัวเลขเท่านั้น",
      ],
      correctAnswer: 1,
      explanation:
        "some() จะ return true ถ้ามีอย่างน้อยหนึ่งตัวที่ตรงเงื่อนไข ในขณะที่ every() จะ return true ก็ต่อเมื่อทุกตัวตรงเงื่อนไข ทั้งคู่จะหยุดทำงานทันทีเมื่อได้คำตอบ",
    },
    {
      id: 4,
      question: "เมื่อไหร่ควรใช้ find() แทน filter()?",
      options: [
        "เมื่อต้องการผลลัพธ์เป็น array",
        "เมื่อต้องการค้นหาข้อมูลตัวแรกที่ตรงเงื่อนไข",
        "เมื่อต้องการกรองข้อมูลทั้งหมด",
        "เมื่อต้องการเรียงลำดับข้อมูล",
      ],
      correctAnswer: 1,
      explanation:
        "ควรใช้ find() เมื่อต้องการค้นหาข้อมูลตัวแรกที่ตรงเงื่อนไขเท่านั้น เพราะ find() จะหยุดค้นหาทันทีที่เจอข้อมูลที่ต้องการ ทำให้มีประสิทธิภาพดีกว่า filter() ในกรณีนี้",
    },
  ],
};
