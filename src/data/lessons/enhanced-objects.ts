import { Lesson } from '../../types';

export const enhancedObjectsLesson: Lesson = {
  id: 6,
  title: 'Enhanced Object Literals',
  duration: '20 นาที',
  content: `# 🎨 Enhanced Object Literals

> *"Modern JavaScript makes object creation and manipulation more elegant and powerful"*

## 📝 สิ่งที่จะได้เรียนรู้

✨ Property Shorthand  
🔄 Computed Property Names  
🎯 Method Shorthand  
💡 Object Method Definitions  

## 1. 🚀 Property Shorthand

### การใช้งาน Property Shorthand
- 📦 ลดความซ้ำซ้อนในการเขียนโค้ด
- 🎯 ใช้ชื่อตัวแปรเป็นชื่อ property
- 💡 เหมาะสำหรับการสร้าง object จากตัวแปร
- ⚡️ ทำงานร่วมกับ destructuring ได้ดี

### Best Practices
- 🎨 ใช้เมื่อชื่อตัวแปรตรงกับชื่อ property ที่ต้องการ
- 🔍 ตั้งชื่อตัวแปรให้สื่อความหมาย
- 💡 จัดกลุ่ม properties ที่เกี่ยวข้องกัน

## 2. 🎯 Computed Property Names

### Dynamic Property Names
- 🔄 กำหนดชื่อ property แบบ dynamic
- 🎨 ใช้ expression เป็นชื่อ property
- 💡 สร้าง object แบบยืดหยุ่น
- ⚡️ ใช้กับ template literals ได้

### Use Cases
- 📝 Dynamic keys จาก API responses
- 🎯 Form handling
- 💡 Data transformation
- 🚀 State management

## 3. 🛠️ Method Shorthand

### เขียน Method แบบสั้น
- 📝 ลดรูปแบบการเขียน function
- 🎯 เขียนโค้ดได้กระชับขึ้น
- 💡 ใช้กับ object method
- ⚡️ Support async/await

### Advanced Features
- 🔄 Generator methods
- 🎨 Async methods
- 💡 Getter และ Setter
- 🚀 Computed method names

> 💡 **Pro Tips**: 
> - ใช้ property shorthand เมื่อชื่อตัวแปรสื่อความหมายดีอยู่แล้ว
> - ระวังการใช้ computed properties ที่ซับซ้อนเกินไป
> - ใช้ method shorthand แทน arrow functions เมื่อต้องการ this binding`,
  codeExamples: [
    {
      title: '🚀 Property Shorthand และ Method Shorthand',
      language: 'javascript',
      code: `// Property Shorthand
const name = 'John';
const age = 30;
const skills = ['JavaScript', 'React'];

// แบบเดิม
const userOld = {
  name: name,
  age: age,
  skills: skills
};

// แบบใหม่ (shorthand)
const user = {
  name,
  age,
  skills,
  // Method shorthand
  sayHi() {
    return \`Hi, I'm \${this.name}\`;
  },
  // Computed method name
  [\`get\${name}Age\`]() {
    return this.age;
  }
};

// With destructuring
const { name: userName, age: userAge } = user;
const newUser = { userName, userAge };`
    },
    {
      title: '🎯 Computed Properties และ Advanced Methods',
      language: 'javascript',
      code: `// Computed Property Names
const prefix = 'user';
const suffix = 'Info';
const id = 123;

const userInfo = {
  [\`\${prefix}_\${id}\`]: 'John',
  [\`get\${suffix}\`]() {
    return this[\`\${prefix}_\${id}\`];
  }
};

// Dynamic form handling
const formData = {
  name: 'John',
  email: 'john@example.com'
};

const handleChange = (field, value) => ({
  [field]: value
});

// Advanced method definitions
const api = {
  // Async method
  async fetchUser(id) {
    const response = await fetch(\`/api/users/\${id}\`);
    return response.json();
  },

  // Generator method
  *idGenerator() {
    let id = 1;
    while (true) {
      yield \`user_\${id}\`;
      id++;
    }
  },

  // Getter/Setter
  get fullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  },
  
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(' ');
  }
};`
    },
    {
      title: '💫 Real-world Examples',
      language: 'javascript',
      code: `// Redux-style reducer
const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
};

const todosReducer = createReducer([], {
  ['ADD_TODO'](state, action) {
    return [...state, action.payload];
  },
  ['REMOVE_TODO'](state, action) {
    return state.filter(todo => todo.id !== action.payload);
  }
});

// React component with computed properties
const componentProps = {
  ['data-testid']: 'user-profile',
  className: 'profile-card',
  onClick() {
    this.handleClick();
  }
};

// API response transformer
const transformResponse = (data) => {
  const fields = ['id', 'name', 'email'];
  return fields.reduce((obj, field) => ({
    ...obj,
    [field]: data[field]
  }), {});
};`
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Property shorthand ใน object literal คืออะไร?",
      options: [
        "การย่อชื่อ property ให้สั้นลง",
        "การใช้ชื่อตัวแปรเป็นทั้งชื่อและค่าของ property",
        "การลบ property ที่ไม่จำเป็น",
        "การเพิ่ม property แบบอัตโนมัติ"
      ],
      correctAnswer: 1,
      explanation: "Property shorthand คือการใช้ชื่อตัวแปรเป็นทั้งชื่อและค่าของ property เมื่อชื่อตัวแปรตรงกับชื่อ property ที่ต้องการ ทำให้โค้ดกระชับและอ่านง่ายขึ้น"
    },
    {
      id: 2,
      question: "Computed property names มีประโยชน์อย่างไร?",
      options: [
        "ทำให้โค้ดทำงานเร็วขึ้น",
        "ลดขนาดของ object",
        "สร้างชื่อ property แบบ dynamic ได้",
        "จำกัดการเข้าถึง property"
      ],
      correctAnswer: 2,
      explanation: "Computed property names ช่วยให้เราสามารถสร้างชื่อ property แบบ dynamic ได้ โดยใช้ expressions หรือตัวแปรในการกำหนดชื่อ ทำให้การสร้าง object มีความยืดหยุ่นมากขึ้น"
    },
    {
      id: 3,
      question: "Method shorthand แตกต่างจากการเขียนแบบเดิมอย่างไร?",
      options: [
        "ทำงานเร็วกว่า",
        "ใช้หน่วยความจำน้อยกว่า",
        "เขียนโค้ดได้สั้นกว่าและมี this binding แบบปกติ",
        "ไม่สามารถใช้ async/await"
      ],
      correctAnswer: 2,
      explanation: "Method shorthand ช่วยให้เขียนโค้ดได้สั้นกว่าและยังคงมี this binding แบบปกติ เหมาะสำหรับการเขียน object methods โดยไม่ต้องใช้คำว่า function"
    },
    {
      id: 4,
      question: "ข้อใดเป็นข้อดีของ getter และ setter?",
      options: [
        "ทำให้โค้ดทำงานเร็วขึ้น",
        "ควบคุมการเข้าถึงและแก้ไข properties ได้",
        "ประหยัดหน่วยความจำ",
        "ลดความซับซ้อนของโค้ด"
      ],
      correctAnswer: 1,
      explanation: "Getter และ setter ช่วยให้เราสามารถควบคุมการเข้าถึงและแก้ไข properties ได้ โดยสามารถเพิ่มโลจิกในการอ่านหรือเขียนค่าได้ ทำให้การจัดการข้อมูลมีความยืดหยุ่นและปลอดภัยมากขึ้น"
    }
  ]
};