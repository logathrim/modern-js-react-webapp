import { Lesson } from '../../types';

export const templateLiteralsLesson: Lesson = {
  id: 3,
  title: 'Template Literals',
  duration: '15 นาที',
  content: `# 🎨 Template Literals

> *"Template Literals make string manipulation elegant and powerful in Modern JavaScript"*

## 📝 สิ่งที่จะได้เรียนรู้

✨ String Interpolation  
🔄 Multiline Strings  
🎯 Tagged Templates  
💡 Expression Evaluation  

## 1. 🎨 String Interpolation

### การแทรกตัวแปร
- 📝 ใช้ \${expression} เพื่อแทรกค่า
- 🎯 รองรับ expressions ทุกรูปแบบ
- 💡 ทำงานร่วมกับ functions
- 🚀 แทรกได้หลายค่าในครั้งเดียว

### Expressions
- 🔄 การคำนวณทางคณิตศาสตร์
- 🎨 การเรียก functions
- 💡 Ternary operators
- ⚡️ Template literals ซ้อนกัน

## 2. 🌟 Multiline Strings

### การจัดการ
- 📝 เขียนข้อความหลายบรรทัดโดยไม่ต้องใช้ \\n
- 🎯 รักษา formatting และ indentation
- 💡 สะดวกในการอ่านและแก้ไข
- 🎨 เหมาะสำหรับ HTML templates

### Use Cases
- 📄 HTML Templates
- 📝 SQL Queries
- 💡 Documentation
- 🎯 Email Templates

## 3. 🚀 Tagged Templates

### การใช้งาน
- 🎯 Custom string processing
- 🔄 Dynamic content manipulation
- 💡 Internationalization (i18n)
- 🔒 Security (XSS prevention)

### Advanced Features
- 🎨 String transformation
- 🔒 Input sanitization
- 💡 DSL (Domain Specific Language)
- ⚡️ Dynamic styling (CSS-in-JS)

> 💡 **Pro Tips**: 
> - ใช้ Tagged Templates เมื่อต้องการจัดการ string แบบซับซ้อน
> - ระวังเรื่อง indentation ใน multiline strings
> - ใช้ template literals แทน string concatenation เสมอ`,
  codeExamples: [
    {
      title: '🎨 String Interpolation Examples',
      language: 'javascript',
      code: `// Basic interpolation
const name = 'John';
const age = 30;
const greeting = \`Hello, \${name}!\`;

// Complex expressions
const price = 99.99;
const tax = 0.07;
const total = \`Total: $\${(price * (1 + tax)).toFixed(2)}\`;

// Nested templates
const items = ['apple', 'banana', 'orange'];
const html = \`
  <ul>
    \${items.map(item => \`
      <li>\${item}</li>
    \`).join('')}
  </ul>
\`;

// Conditional expressions
const status = 'premium';
const message = \`
  Your account is \${status === 'premium' ? 'Premium 🌟' : 'Basic'}
  \${status === 'premium' ? \`
    Premium benefits:
    - Priority support
    - Advanced features
  \` : ''}
\`;`
    },
    {
      title: '🌟 Multiline and Tagged Templates',
      language: 'javascript',
      code: `// Email template
const emailTemplate = \`
Dear \${user.name},

Thank you for your recent purchase of \${product.name}.
Your order details:

Order ID: \${order.id}
Total: $\${order.total}

Best regards,
The Team
\`;

// Tagged template for safe HTML
function html(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i - 1];
    // Escape HTML special characters
    const safeValue = value?.replace(/[&<>'"]/g, 
      char => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[char]) ?? char
    );
    return result + safeValue + str;
  });
}

// Usage
const userInput = '<script>alert("XSS")</script>';
const safeHtml = html\`
  <div class="user-content">
    \${userInput}
  </div>
\`;

// CSS-in-JS example
const styled = (strings, ...values) => {
  const styles = strings.reduce((result, str, i) => 
    result + str + (values[i] || ''), '');
  
  const className = 'styled-' + Math.random().toString(36).slice(2);
  const styleElement = document.createElement('style');
  styleElement.textContent = \`
    .\${className} {
      \${styles}
    }
  \`;
  document.head.appendChild(styleElement);
  return className;
};

// Usage
const buttonClass = styled\`
  background: \${props => props.primary ? 'blue' : 'gray'};
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
\`;`
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Template Literals ใช้เครื่องหมายใดในการเขียน?",
      options: [
        "Single quotes (')",
        "Double quotes (\")",
        "Backticks (`)",
        "Forward slashes (/)"
      ],
      correctAnswer: 2,
      explanation: "Template Literals ใช้ backticks (`) ในการเขียน ซึ่งทำให้สามารถเขียน multiline strings และใช้ string interpolation ได้"
    },
    {
      id: 2,
      question: "ข้อใดคือประโยชน์ของ Tagged Templates?",
      options: [
        "ใช้สำหรับการเขียน multiline strings เท่านั้น",
        "ใช้สำหรับการแทรกตัวแปรเท่านั้น",
        "ใช้สำหรับการจัดการ string แบบ custom และ sanitization",
        "ใช้สำหรับการเขียน comments"
      ],
      correctAnswer: 2,
      explanation: "Tagged Templates ช่วยให้เราสามารถสร้างฟังก์ชันที่จัดการ string ได้ตามต้องการ เช่น การทำ sanitization, internationalization หรือการสร้าง DSL"
    },
    {
      id: 3,
      question: "String Interpolation ใน Template Literals สามารถทำอะไรได้บ้าง?",
      options: [
        "แทรกตัวแปรเท่านั้น",
        "แทรกตัวแปรและ expressions รวมถึงเรียกใช้ฟังก์ชัน",
        "แทรกตัวเลขเท่านั้น",
        "แทรก HTML tags เท่านั้น"
      ],
      correctAnswer: 1,
      explanation: "String Interpolation ใน Template Literals สามารถแทรกได้ทั้งตัวแปร, expressions, การคำนวณ, และการเรียกใช้ฟังก์ชัน โดยใช้ ${} syntax"
    },
    {
      id: 4,
      question: "ข้อใดเป็นประโยชน์ของ Multiline Strings ใน Template Literals?",
      options: [
        "ต้องใช้ \\n ในการขึ้นบรรทัดใหม่เสมอ",
        "สามารถเขียนข้อความหลายบรรทัดได้โดยตรง และรักษา formatting",
        "ไม่สามารถใช้ interpolation ในข้อความหลายบรรทัด",
        "ต้องใช้ + ในการต่อข้อความเสมอ"
      ],
      correctAnswer: 1,
      explanation: "Template Literals ช่วยให้เราสามารถเขียนข้อความหลายบรรทัดได้โดยตรง โดยไม่ต้องใช้ \\n และยังรักษา formatting ของข้อความไว้ได้ ทำให้โค้ดอ่านง่ายและจัดการได้สะดวก"
    }
  ]
};