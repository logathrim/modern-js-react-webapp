import { Lesson } from "../../types";

export const classesLesson: Lesson = {
  id: 7,
  title: "Classes และ OOP",
  duration: "30 นาที",
  content: `# 🏗️ Classes และ OOP ใน JavaScript

> *"Classes ใน ES6+ ทำให้การเขียน OOP ใน JavaScript เป็นเรื่องง่ายและเป็นระบบมากขึ้น"*

## 📝 สิ่งที่จะได้เรียนรู้

✨ Class Declaration และ Expression  
🔄 Constructor และ Methods  
🎯 Inheritance และ super  
💡 Static Members  
🔒 Private Fields  

## 1. 🎨 Class Basics

### Class Declaration
- 📦 การสร้าง class ด้วย class keyword
- 🎯 Constructor method สำหรับ initialization
- 💡 Instance methods และ properties
- ⚡️ Method definitions

### Class Expression
- 🔄 Named vs Anonymous classes
- 🎨 First-class citizens
- 💡 Hoisting behavior
- 🚀 Dynamic class creation

## 2. 🔄 Inheritance

### Extending Classes
- 📝 การสืบทอดคุณสมบัติด้วย extends
- 🎯 Method overriding
- 💡 super keyword
- ⚡️ Constructor chain

### Advanced Inheritance
- 🔄 Multiple inheritance patterns
- 🎨 Mixins
- 💡 Composition vs Inheritance
- 🚀 Abstract classes

## 3. 🔒 Advanced Features

### Static Members
- 📦 Static methods และ properties
- 🎯 Utility functions
- 💡 Singleton pattern
- ⚡️ Factory methods

### Private Fields
- 🔒 Private properties ด้วย #
- 🎯 Private methods
- 💡 Encapsulation
- 🚀 Class fields

> 💡 **Pro Tips**: 
> - ใช้ private fields เพื่อซ่อน implementation details
> - เลือกใช้ composition แทน inheritance เมื่อเหมาะสม
> - ระวังการใช้ this ใน methods`,
  codeExamples: [
    {
      title: "🎨 Class Basics และ Inheritance",
      language: "javascript",
      code: `// Basic Class
class Animal {
  // Class fields
  #privateField = 'private';
  static species = 'Animal';

  constructor(name) {
    this.name = name;
  }

  speak() {
    return \`\${this.name} makes a sound\`;
  }

  // Private method
  #privateMethod() {
    return 'This is private';
  }

  // Static method
  static createAnimal(name) {
    return new Animal(name);
  }
}

// Inheritance
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    return \`\${this.name} barks!\`;
  }

  fetch() {
    return \`\${this.name} fetches the ball\`;
  }
}

// Usage
const dog = new Dog('Rex', 'German Shepherd');
console.log(dog.speak()); // "Rex barks!"
console.log(dog.fetch()); // "Rex fetches the ball"
console.log(Animal.species); // "Animal"`,
    },
    {
      title: "🔒 Advanced Class Features",
      language: "javascript",
      code: `// Advanced Class with Private Fields
class BankAccount {
  // Private fields
  #balance = 0;
  #transactions = [];

  // Private static field
  static #bankName = 'Modern Bank';
  
  // Static getter
  static get bankName() {
    return BankAccount.#bankName;
  }

  constructor(initialBalance) {
    this.#balance = initialBalance;
    this.#logTransaction('Initial deposit', initialBalance);
  }

  // Private method
  #logTransaction(type, amount) {
    this.#transactions.push({
      type,
      amount,
      date: new Date()
    });
  }

  // Public methods
  deposit(amount) {
    if (amount <= 0) throw new Error('Invalid amount');
    this.#balance += amount;
    this.#logTransaction('Deposit', amount);
    return this.#balance;
  }

  withdraw(amount) {
    if (amount <= 0) throw new Error('Invalid amount');
    if (amount > this.#balance) {
      throw new Error('Insufficient funds');
    }
    this.#balance -= amount;
    this.#logTransaction('Withdrawal', amount);
    return this.#balance;
  }

  // Getters
  get balance() {
    return this.#balance;
  }

  get transactionHistory() {
    return [...this.#transactions];
  }
}`,
    },
    {
      title: "🚀 Mixins and Advanced Patterns",
      language: "javascript",
      code: `// Mixin function
const TimestampMixin = {
  getCreatedAt() {
    return this.createdAt;
  },
  
  setCreatedAt() {
    this.createdAt = new Date();
  }
};

const LoggerMixin = {
  log(message) {
    console.log(\`[\${new Date().toISOString()}] \${message}\`);
  }
};

// Apply mixins
function applyMixins(targetClass, ...mixins) {
  mixins.forEach(mixin => {
    Object.getOwnPropertyNames(mixin).forEach(name => {
      targetClass.prototype[name] = mixin[name];
    });
  });
}

// Usage with class
class Task {
  constructor(title) {
    this.title = title;
    this.setCreatedAt();
  }

  complete() {
    this.completed = true;
    this.log(\`Task "\${this.title}" completed\`);
  }
}

applyMixins(Task, TimestampMixin, LoggerMixin);

// Factory pattern
class UserFactory {
  static #roles = {
    admin: AdminUser,
    user: RegularUser
  };

  static createUser(role, data) {
    const UserClass = this.#roles[role];
    if (!UserClass) {
      throw new Error(\`Invalid role: \${role}\`);
    }
    return new UserClass(data);
  }
}`,
    },
  ],
  quiz: [
    {
      id: 1,
      question: "Private fields (#) ใน JavaScript classes มีลักษณะอย่างไร?",
      options: [
        "สามารถเข้าถึงได้จากภายนอก class",
        "สามารถเข้าถึงได้จาก child classes",
        "เข้าถึงได้เฉพาะภายใน class เท่านั้น",
        "เหมือนกับ protected ใน languages อื่น",
      ],
      correctAnswer: 2,
      explanation:
        "Private fields ที่ประกาศด้วย # สามารถเข้าถึงได้เฉพาะภายใน class นั้นๆ เท่านั้น ไม่สามารถเข้าถึงได้จากภายนอกหรือแม้แต่จาก child classes",
    },
    {
      id: 2,
      question: "super keyword ใน JavaScript ใช้ทำอะไร?",
      options: [
        "เรียก constructor ของ child class",
        "เรียก methods ของ current class",
        "เรียก constructor และ methods ของ parent class",
        "สร้าง instance ใหม่ของ class",
      ],
      correctAnswer: 2,
      explanation:
        "super keyword ใช้สำหรับเรียก constructor และ methods ของ parent class ใน child class โดยต้องเรียก super() ใน constructor ของ child class ก่อนใช้ this",
    },
    {
      id: 3,
      question: "static members ใน class มีลักษณะอย่างไร?",
      options: [
        "ต้องสร้าง instance ก่อนใช้งาน",
        "เป็นของ class โดยตรง ไม่ต้องสร้าง instance",
        "สามารถเข้าถึงได้จาก instance methods",
        "ไม่สามารถใช้ร่วมกับ private fields",
      ],
      correctAnswer: 1,
      explanation:
        "static members (methods และ properties) เป็นของ class โดยตรง สามารถเรียกใช้ได้โดยไม่ต้องสร้าง instance และไม่สามารถเข้าถึงจาก instance methods ได้โดยตรง",
    },
    {
      id: 4,
      question: "เมื่อไหร่ควรใช้ Class Expression แทน Class Declaration?",
      options: [
        "เมื่อต้องการ hoisting",
        "เมื่อต้องการสร้าง class แบบ dynamic หรือใช้เป็น parameter",
        "เมื่อต้องการ inheritance",
        "เมื่อต้องการใช้ private fields",
      ],
      correctAnswer: 1,
      explanation:
        "Class Expression เหมาะสำหรับการสร้าง class แบบ dynamic หรือเมื่อต้องการส่ง class เป็น parameter เพราะสามารถสร้างและกำหนดค่าได้ในขณะ runtime",
    },
  ],
};
