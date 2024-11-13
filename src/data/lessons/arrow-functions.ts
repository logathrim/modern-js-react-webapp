import { Lesson } from '../../types';

export const arrowFunctionsLesson: Lesson = {
  id: 2,
  title: 'Arrow Functions',
  duration: '20 นาที',
  content: `# 🎯 Arrow Functions

> *"Arrow Functions make JavaScript code more concise and maintainable"*

## 📝 สิ่งที่จะได้เรียนรู้

✨ Syntax ของ Arrow Functions  
🔄 ข้อแตกต่างจาก Regular Functions  
🎯 Lexical \`this\` binding  
💡 Use Cases ที่เหมาะสม  

## 1. 🎨 รูปแบบการเขียน

### Basic Syntax
- 📝 การเขียนแบบสั้นและเต็มรูปแบบ
- 🎯 Implicit Return สำหรับ expressions เดียว
- 💡 Multiple Parameters และการใช้วงเล็บ
- 🚀 Single Parameter ไม่จำเป็นต้องใช้วงเล็บ

### Advanced Syntax
- 🔄 การ Return Object Literals
- 🎨 Destructuring Parameters
- 💡 Default Parameters
- ⚡️ Rest Parameters

## 2. 🔄 Lexical this

### การทำงานของ this
- 🎯 \`this\` จะอ้างอิงตาม scope ที่ฟังก์ชันถูกสร้าง
- 🔒 ไม่มีการ bind \`this\` ใหม่
- 💡 เหมาะกับ Callback Functions
- 🎨 ใช้งานใน Class Methods

### ข้อควรระวัง
- ⚠️ ไม่เหมาะกับ Methods ใน Object
- 🚫 ไม่สามารถใช้เป็น Constructor
- ❌ ไม่มี arguments object
- 🎯 ไม่สามารถใช้ \`call\`, \`apply\`, \`bind\` เพื่อเปลี่ยน \`this\`

## 3. 💡 Best Practices

### เมื่อไหร่ควรใช้
- ✅ Array Methods (map, filter, reduce)
- ✅ Promise Chains
- ✅ Event Handlers ที่ไม่ต้องการ dynamic this
- 🎯 Short, single-purpose functions

### เมื่อไหร่ไม่ควรใช้
- ❌ Object Methods ที่ต้องการ this
- ❌ Event Handlers ที่ต้องการ dynamic this
- ❌ Constructor Functions
- ⚠️ Methods ที่ใช้ arguments object

> 💡 **Pro Tips**: 
> - ใช้ Arrow Functions เมื่อต้องการความกระชับและไม่ต้องการ this binding
> - หลีกเลี่ยงการใช้ในสถานการณ์ที่ต้องการ dynamic this
> - ใช้กับ functional programming patterns เช่น map, filter, reduce`,
  codeExamples: [
    {
      title: '🎨 Basic Arrow Function Patterns',
      language: 'javascript',
      code: `// Single parameter (no parentheses needed)
const square = x => x * x;
console.log(square(5)); // 25

// Multiple parameters (require parentheses)
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// No parameters (empty parentheses required)
const getRandomNumber = () => Math.random();

// Multiple lines (require curly braces and return)
const getUser = (id) => {
  const user = fetchUser(id);
  return user.name;
};

// Returning object literal (wrap in parentheses)
const createPerson = (name, age) => ({
  name,
  age,
  sayHi: () => \`Hi, I'm \${name}\`
});

// With destructuring and default parameters
const greet = ({ name = 'Guest', age = 0 } = {}) => 
  \`Hello, \${name}! You are \${age} years old.\`;`
    },
    {
      title: '🔄 Lexical this Binding Examples',
      language: 'javascript',
      code: `// ✅ Good: Arrow function in class method
class Timer {
  constructor() {
    this.seconds = 0;
    
    // Arrow function preserves this
    setInterval(() => {
      this.seconds++;
      console.log(\`Seconds: \${this.seconds}\`);
    }, 1000);
  }
}

// ❌ Bad: Arrow function as object method
const person = {
  name: 'John',
  // This will not work as expected
  sayHi: () => {
    console.log(\`Hi, I'm \${this.name}\`); // this.name is undefined
  }
};

// ✅ Good: Regular function as object method
const betterPerson = {
  name: 'John',
  sayHi() {
    console.log(\`Hi, I'm \${this.name}\`); // Works correctly
  }
};`
    },
    {
      title: '💡 Practical Use Cases',
      language: 'javascript',
      code: `// Array methods
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((a, b) => a + b, 0);

// Promise chains
fetchUser(1)
  .then(user => fetchPosts(user.id))
  .then(posts => posts.filter(post => post.likes > 50))
  .catch(error => console.error(error));

// Event listeners
button.addEventListener('click', () => {
  console.log('Clicked!');
});

// Function composition
const compose = (...fns) => x => 
  fns.reduceRight((y, f) => f(y), x);

const addOne = x => x + 1;
const double = x => x * 2;
const addOneAndDouble = compose(double, addOne);`
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Arrow Functions มีความแตกต่างจาก Regular Functions อย่างไร?",
      options: [
        "Arrow Functions มี arguments object แต่ Regular Functions ไม่มี",
        "Arrow Functions สามารถใช้เป็น constructor ได้ แต่ Regular Functions ไม่ได้",
        "Arrow Functions มี lexical this binding และไม่มี arguments object",
        "Arrow Functions ไม่สามารถ return object ได้"
      ],
      correctAnswer: 2,
      explanation: "Arrow Functions มี lexical this binding (this จะอ้างอิงตาม scope ที่ฟังก์ชันถูกสร้าง) และไม่มี arguments object ซึ่งต่างจาก Regular Functions ที่มี dynamic this binding และมี arguments object"
    },
    {
      id: 2,
      question: "ข้อใดเป็นการใช้งาน Arrow Function ที่เหมาะสมที่สุด?",
      options: [
        "เป็น method ใน object",
        "เป็น callback function ใน array methods",
        "เป็น constructor function",
        "เป็น event handler ที่ต้องการ dynamic this"
      ],
      correctAnswer: 1,
      explanation: "Arrow Functions เหมาะสมที่สุดเมื่อใช้เป็น callback function ใน array methods เพราะไม่ต้องการ this binding แบบพิเศษ และทำให้โค้ดกระชับขึ้น"
    },
    {
      id: 3,
      question: "การ return object literal ใน Arrow Function ต้องทำอย่างไร?",
      options: [
        "Return โดยตรงโดยไม่ต้องใช้วงเล็บ",
        "ต้องครอบ object ด้วยวงเล็บ",
        "ต้องใช้ return statement เท่านั้น",
        "ไม่สามารถ return object literal ได้"
      ],
      correctAnswer: 1,
      explanation: "เมื่อต้องการ return object literal ใน Arrow Function แบบ implicit return ต้องครอบ object ด้วยวงเล็บ เช่น `() => ({ name: 'John' })` เพื่อไม่ให้ JavaScript เข้าใจผิดว่าเป็นการเปิด block scope"
    },
    {
      id: 4,
      question: "เมื่อใช้ Arrow Function กับ object method จะเกิดอะไรขึ้น?",
      options: [
        "this จะอ้างอิงถึง object นั้นเสมอ",
        "this จะอ้างอิงถึง global scope หรือ undefined",
        "จะเกิด syntax error",
        "this จะอ้างอิงถึง parent scope ของ object"
      ],
      correctAnswer: 3,
      explanation: "เมื่อใช้ Arrow Function เป็น object method, this จะอ้างอิงถึง parent scope ของ object (ไม่ใช่ตัว object เอง) เพราะ Arrow Functions มี lexical this binding"
    }
  ]
};