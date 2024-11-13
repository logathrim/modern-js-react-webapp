import { Lesson } from "../../types";

export const variablesLesson: Lesson = {
  id: 1,
  title: "Variables และ Scoping",
  duration: "25 นาที",
  content: `# ตัวแปรใน JavaScript สมัยใหม่ 🚀

> **"การเลือกใช้ตัวแปรที่เหมาะสมช่วยให้โค้ดของคุณมีประสิทธิภาพ อ่านง่าย และดูแลรักษาง่าย"** 💡

## Quick Start Guide 🌟
สำหรับผู้เริ่มต้น มีตัวแปร **2 แบบหลัก**ที่ควรรู้จัก:

### 1. const - ใช้กับค่าที่ไม่ต้องการเปลี่ยนแปลง
\`\`\`javascript
// ✅ การใช้งานที่ถูกต้อง
const gameName = "Monster Hunter";    // ชื่อเกมไม่ควรเปลี่ยน
const maxPlayers = 4;                // จำนวนผู้เล่นสูงสุดคงที่

// ❌ ไม่สามารถทำได้ เพราะ const ไม่อนุญาตให้เปลี่ยนค่า
gameName = "Pokemon";                // Error: Assignment to constant variable
maxPlayers = 8;                      // Error: Assignment to constant variable
\`\`\`

### 2. let - ใช้กับค่าที่ต้องการเปลี่ยนแปลง
\`\`\`javascript
// ✅ การใช้งานที่ถูกต้อง
let playerScore = 0;                 // คะแนนเริ่มต้น
playerScore = 100;                   // เพิ่มคะแนนได้
let isGameOver = false;              // สถานะเกม
isGameOver = true;                   // เปลี่ยนสถานะได้

// 🤔 ทำไมไม่ใช้ var?
// var มีปัญหาเรื่อง scope และการ hoisting ซึ่งอาจทำให้เกิดบัคที่ตามหายาก
// ❌ ตัวอย่างปัญหาของ var
var score = 100;
{
    var score = 200;    // ค่าด้านนอกจะถูกเปลี่ยนด้วย
}
console.log(score);     // 200 (ไม่เป็นไปตามที่คาด)

// ✅ ใช้ let แทน จะปลอดภัยกว่า
let points = 100;
{
    let points = 200;   // ค่านี้อยู่แค่ใน block
}
console.log(points);    // 100 (ค่าไม่เปลี่ยน)
\`\`\`

## เปรียบเทียบตัวแปรแต่ละประเภท 📊

| ความสามารถ | let | const | var | คำอธิบาย |
|---------|-----|-------|-----|----------|
| เปลี่ยนค่าได้ | ✅ | ❌ | ✅ | **let** และ **var** สามารถเปลี่ยนค่าได้, **const** เปลี่ยนไม่ได้ |
| Block Scope | ✅ | ✅ | ❌ | **let** และ **const** จำกัดขอบเขตการใช้งานใน block, **var** ใช้ได้ทั้งไฟล์ |
| ต้องกำหนดค่าเริ่มต้น | ❌ | ✅ | ❌ | **const** ต้องกำหนดค่าทันทีที่ประกาศ |
| ประกาศซ้ำได้ | ❌ | ❌ | ✅ | **var** ประกาศซ้ำได้ซึ่งอาจทำให้เกิดบัค |

&nbsp;  
## Basic Concepts 📚

### 1. const - ตัวแปรที่ค่าไม่เปลี่ยนแปลง 🔒

**const** เหมาะสำหรับค่าที่**ไม่ต้องการให้เปลี่ยนแปลง**ตลอดการทำงานของโปรแกรม เช่น:
- ค่าคงที่ในการคำนวณ
- การตั้งค่าระบบ
- ค่าที่ใช้อ้างอิงตลอดโปรแกรม

\`\`\`javascript
// ✅ การใช้งานที่ถูกต้อง - เน้นความสำคัญของข้อมูลที่ไม่ควรเปลี่ยน
const PI = 3.14159;                  // ค่าคงที่ทางคณิตศาสตร์
const API_URL = "https://api.example.com";  // URL ที่ใช้เชื่อมต่อ
const DEFAULT_SETTINGS = {           // ค่าเริ่มต้นของระบบ
    theme: "dark",
    language: "th"
};

// ❌ กรณีที่ทำไม่ได้ และเหตุผล - เข้าใจข้อจำกัดของ const
const score;                         // Error: Missing initializer - const ต้องกำหนดค่าเริ่มต้นเสมอ
const name = "John";
name = "Jane";                       // Error: Assignment to constant variable - ไม่สามารถเปลี่ยนค่าได้

// ⚠️ ข้อควรระวัง: const กับ Object - เข้าใจพฤติกรรมพิเศษ
const player = {
    name: "John",
    score: 0
};

// ✅ ทำได้: เปลี่ยนค่าภายใน object - เข้าใจว่าทำไมถึงเปลี่ยนได้
player.score = 100;                  // const ล็อคแค่การ assign ค่าใหม่
player.name = "Jane";                // ไม่ได้ล็อคค่าภายใน object

// ❌ ทำไม่ได้: assign object ใหม่ - เข้าใจข้อจำกัดหลัก
player = {                          // Error: Assignment to constant variable
    name: "Bob",
    score: 200
};

// 💡 การป้องกันการเปลี่ยนแปลงทั้งหมด - วิธีแก้ปัญหา
const FROZEN_CONFIG = Object.freeze({
    difficulty: "normal",
    sound: true
});

// ❌ ทำไม่ได้ทั้งหมดหลังจาก freeze - เข้าใจผลของ Object.freeze
FROZEN_CONFIG.difficulty = "hard";    // Error ใน strict mode
FROZEN_CONFIG.newSetting = "value";   // Error ใน strict mode
\`\`\`

### 2. let - ตัวแปรที่เปลี่ยนค่าได้ 🔄

**let** เหมาะสำหรับค่าที่**ต้องการเปลี่ยนแปลง**ระหว่างการทำงานของโปรแกรม เช่น:
- ตัวนับในการวนลูป
- สถานะที่เปลี่ยนแปลงได้
- คะแนนที่เพิ่มขึ้น
- ค่าที่ต้องอัพเดตตามเงื่อนไข

\`\`\`javascript
// ✅ การใช้งานที่เหมาะสม - ตัวอย่างที่พบบ่อยในเกม
let playerHealth = 100;              // พลังชีวิตที่ลดลงได้
let isGameOver = false;              // สถานะที่เปลี่ยนได้
let roundNumber = 1;                 // รอบการเล่นที่เพิ่มขึ้น

// การใช้งานในสถานการณ์จริง
function playGame() {
    // การอัพเดตค่าตามเงื่อนไขของเกม
    if (playerHealth <= 0) {
        isGameOver = true;           // เปลี่ยนสถานะเมื่อเงื่อนไขเป็นจริง
        console.log("Game Over!");
    }

    if (!isGameOver) {
        roundNumber++;               // เพิ่มรอบการเล่น
        console.log(\`Round \${roundNumber}\`);
    }
}

// ✅ ความยืดหยุ่นของ let - ไม่จำเป็นต้องกำหนดค่าเริ่มต้น
let highScore;                       // ค่าเริ่มต้นเป็น undefined
console.log(highScore);              // undefined - ไม่ error

// ❌ ข้อผิดพลาดที่พบบ่อย - การประกาศซ้ำ
let score = 100;
let score = 200;                     // Error: Identifier 'score' has already been declared

// ⚠️ ข้อควรระวัง: Block Scope - การทำงานใน block
let points = 50;                     // ตัวแปรนอก block
{
    let points = 100;                // ตัวแปรใหม่ใน block (ไม่เกี่ยวกับตัวนอก)
    console.log(points);             // 100 (ค่าใน block)
}
console.log(points);                 // 50 (ค่านอก block ไม่เปลี่ยน)
\`\`\`

### 3. Block Scope - การจำกัดขอบเขตการใช้งานตัวแปร 🏰

**Block Scope** คือการจำกัดขอบเขตการใช้งานตัวแปรภายในวงเล็บปีกกา \`{}\` ซึ่งมีผลกับ **let** และ **const** แต่ไม่มีผลกับ **var**

\`\`\`javascript
// ✅ การทำงานของ Block Scope - เข้าใจการแยกขอบเขต
let score = 0;                      // ตัวแปรขอบเขตนอก (outer scope)

{
    let score = 100;                // ตัวแปรขอบเขตใน (inner scope) - แยกจากตัวนอกโดยสิ้นเชิง
    console.log(score);             // 100 (ใช้ค่าในขอบเขตใน)
    
    let bonus = 50;                 // ตัวแปรที่เห็นได้เฉพาะในขอบเขตนี้
    console.log(bonus);             // 50 (สามารถใช้ได้ในขอบเขตนี้)
}

console.log(score);                 // 0 (กลับไปใช้ค่าในขอบเขตนอก)
// console.log(bonus);              // ❌ Error: bonus is not defined (ไม่สามารถเข้าถึงตัวแปรในขอบเขตใน)

// 🔍 เปรียบเทียบกับ var ที่ไม่มี block scope - เห็นความแตกต่างชัดเจน
var lives = 3;                      // ตัวแปรแบบ var
if (true) {
    var lives = 5;                  // เปลี่ยนค่าตัวแปรด้านนอก (ไม่สร้างตัวแปรใหม่)
}
console.log(lives);                 // 5 (var ไม่มีการแยกขอบเขต)

// ⚠️ ข้อควรระวัง: Nested Blocks - การซ้อนขอบเขต
let level = 1;                      // ขอบเขตนอกสุด
{
    let level = 2;                  // ขอบเขตกลาง
    {
        let level = 3;              // ขอบเขตใน
        console.log(level);         // 3 (ใช้ค่าในขอบเขตใน)
    }
    console.log(level);             // 2 (ใช้ค่าในขอบเขตกลาง)
}
console.log(level);                 // 1 (ใช้ค่าในขอบเขตนอก)
\`\`\`

&nbsp;  
## Advanced Concepts 🎓

### 1. Temporal Dead Zone (TDZ) - พื้นที่อันตรายของตัวแปร ⚠️

**TDZ** คือช่วงเวลาอันตรายระหว่างการประกาศตัวแปร (**let** และ **const**) จนถึงการกำหนดค่า ในช่วงนี้จะไม่สามารถเข้าถึงตัวแปรได้

\`\`\`javascript
// ❌ ตัวอย่างการเกิด TDZ - เข้าใจปัญหา
console.log(money);                 // ReferenceError: Cannot access 'money' before initialization
let money = 1000;                   // ตัวแปรยังไม่ถูกประกาศ

// 💡 เปรียบเทียบกับชีวิตจริง:
// เหมือนการพยายามใช้บัตรเครดิตก่อนธนาคารอนุมัติ
// เหมือนการพยายามเข้าบ้านก่อนสร้างเสร็จ
// เหมือนการพยายามใช้โทรศัพท์ก่อนเปิดเครื่อง

// ✅ วิธีที่ถูกต้อง - การประกาศและใช้งานที่ปลอดภัย
let gold = 500;                     // ประกาศและกำหนดค่าก่อน
console.log(gold);                  // 500 - ใช้ได้อย่างปลอดภัย

// 🔍 เปรียบเทียบพฤติกรรมกับ var
console.log(gems);                  // undefined (ไม่ error แต่อาจทำให้เกิดบัคที่ตามหายาก)
var gems = 300;

// ⚠️ TDZ ใน Block Scope - ความซับซ้อนที่ต้องระวัง
{
    // TDZ เริ่มต้นตั้งแต่ต้น block
    console.log(coins);             // ❌ ReferenceError
    let coins = 100;                // TDZ จบที่การประกาศ
    console.log(coins);             // ✅ 100 - ใช้งานได้ปกติ
}
\`\`\`

### 2. Best Practices - แนวทางการใช้งานที่ดี ✨

#### 1. การตั้งชื่อตัวแปรให้มีความหมาย 📝
\`\`\`javascript
// ❌ ชื่อที่ไม่ดี - ไม่สื่อความหมาย
const x = "John";                   // ไม่รู้ว่า x คืออะไร
const arr = [1,2,3];               // ไม่รู้ว่าเก็บข้อมูลอะไร
let f = false;                     // ไม่รู้ว่าเป็น flag ของอะไร

// ✅ ชื่อที่ดี - สื่อความหมายชัดเจน
const playerName = "John";          // เข้าใจทันทีว่าเก็บชื่อผู้เล่น
const scoreHistory = [1, 2, 3];     // เข้าใจว่าเป็นประวัติคะแนน
let isGameActive = false;           // เข้าใจว่าเป็นสถานะการเล่นเกม

// 💡 แนวทางการตั้งชื่อที่ดี
const MAX_ATTEMPTS = 3;             // ค่าคงที่ใช้ตัวพิมพ์ใหญ่
let currentLevel = 1;              // camelCase สำหรับตัวแปรทั่วไป
let isPlayerAlive = true;          // boolean ขึ้นต้นด้วย is, has, can
\`\`\`

#### 2. การจัดการ Object และ Array อย่างมีประสิทธิภาพ 🎯
\`\`\`javascript
// ❌ วิธีที่ไม่ดี - ยากต่อการดูแลรักษา
const data = {};                    // ชื่อไม่สื่อความหมาย
data.value = 100;                   // เพิ่มค่าทีละอัน
data.items = [];                    // โครงสร้างไม่ชัดเจน

// ✅ วิธีที่ดี - มีโครงสร้างชัดเจน
const gameState = {                 // ชื่อสื่อความหมาย
    score: 0,
    level: 1,
    players: [],
    settings: {
        difficulty: "normal",
        sound: true
    }
};

// การอัพเดต Object อย่างมีประสิทธิภาพ
const updatedGameState = {
    ...gameState,                   // คงค่าเดิมไว้
    score: 100,                     // อัพเดตเฉพาะค่าที่ต้องการ
    settings: {
        ...gameState.settings,      // คงค่า settings เดิม
        difficulty: "hard"          // อัพเดตเฉพาะ difficulty
    }
};
\`\`\`

### 3. การ Debug อย่างมืออาชีพ 🔧

\`\`\`javascript
// 1. ตรวจสอบ Type ของตัวแปร - ป้องกันข้อผิดพลาด
const score = "100";
console.log(typeof score);          // "string" - ระวัง! อาจต้องการเป็น number
console.log(+score + 50);           // 150 - แปลงเป็น number ก่อนคำนวณ

// 2. ตรวจสอบค่า undefined อย่างรอบคอบ
let points;
if (typeof points === "undefined") {
    console.log("ยังไม่ได้กำหนดค่า"); // ป้องกันการใช้งานก่อนกำหนดค่า
}

// 3. ตรวจสอบ Object อย่างละเอียด
const player = {
    name: "John",
    score: 100,
    settings: {
        sound: true
    }
};

// วิธีตรวจสอบแบบมืออาชีพ
console.table(player);              // แสดงในรูปแบบตาราง - ดูง่าย
console.log(JSON.stringify(player, null, 2));  // แสดงโครงสร้างทั้งหมด
console.log(Object.keys(player));   // ดูว่ามี property อะไรบ้าง
\`\`\`

### 4. คำถามที่พบบ่อย (FAQ) - คำตอบที่ควรรู้ ❓

**Q: เมื่อไรควรใช้ const และเมื่อไรควรใช้ let?**
\`\`\`javascript
// ✅ ใช้ const เมื่อ:
const API_KEY = "abc123";           // ค่าคงที่ที่ไม่ควรเปลี่ยน
const MAX_LIVES = 3;                // ค่าที่กำหนดไว้แน่นอน
const gameConfig = {                // Object ที่ไม่ต้องการ reassign
    title: "My Game",
    version: "1.0.0"
};

// ✅ ใช้ let เมื่อ:
let score = 0;                      // ค่าที่ต้องเปลี่ยนแปลง
let playerName = "";                // ค่าที่รอรับจาก user
let isGameOver = false;             // สถานะที่เปลี่ยนได้
\`\`\`

**Q: Object.freeze() ใช้อย่างไร และเมื่อไรควรใช้?**
\`\`\`javascript
// ใช้เมื่อต้องการป้องกันการเปลี่ยนแปลงทั้งหมด
const GAME_SETTINGS = Object.freeze({
    difficulty: ["easy", "normal", "hard"],
    maxPlayers: 4,
    defaultLives: 3
});

// ❌ ทำไม่ได้ทั้งหมดหลังจาก freeze
GAME_SETTINGS.difficulty.push("expert");  // Error ใน strict mode
GAME_SETTINGS.maxPlayers = 6;             // Error ใน strict mode
\`\`\`

&nbsp;  
## สรุป Best Practices ที่ควรจดจำ 🎯

### 1. การเลือกใช้ตัวแปรที่เหมาะสม 📌
\`\`\`javascript
// 1. เริ่มต้นด้วย const เสมอ
const MAX_SPEED = 100;              // ค่าคงที่
const CONFIG = {                    // Object การตั้งค่า
    theme: "dark",
    language: "th"
};

// 2. ใช้ let เมื่อต้องการเปลี่ยนค่า
let currentSpeed = 0;               // ค่าที่เปลี่ยนแปลงได้
let isMoving = false;               // สถานะที่เปลี่ยนได้

// 3. หลีกเลี่ยง var โดยสิ้นเชิง
// ❌ ไม่ควรใช้
var score = 0;                      // var ไม่มี block scope
\`\`\`

### 2. การตั้งชื่อตัวแปรอย่างมืออาชีพ 🏆
\`\`\`javascript
// ✅ แนวทางการตั้งชื่อที่ดี
const USER_ROLES = {                // ค่าคงที่ใช้ UPPERCASE
    ADMIN: 'admin',
    USER: 'user'
};

let currentUser = {                 // ตัวแปรทั่วไปใช้ camelCase
    name: 'John',
    role: USER_ROLES.USER
};

// Boolean ใช้คำที่สื่อความหมาย
let isLoggedIn = false;             // ขึ้นต้นด้วย is
let hasPermission = true;           // ขึ้นต้นด้วย has
let canEdit = true;                 // ขึ้นต้นด้วย can

// Array ใช้คำนามพหูพจน์
const colors = ['red', 'blue'];     // พหูพจน์บอกว่าเป็น array
const userList = [];                // ชื่อสื่อว่าเก็บหลายรายการ
\`\`\`

### 3. การป้องกันข้อผิดพลาดที่พบบ่อย 🛡️
\`\`\`javascript
// 1. ป้องกัน TDZ
let value;                          // ประกาศก่อน
value = calculateValue();           // ค่อยกำหนดค่า

// 2. ป้องกันการเปลี่ยนแปลง Object
const SETTINGS = Object.freeze({     // ล็อคการเปลี่ยนแปลงทั้งหมด
    version: '1.0.0',
    api: 'https://api.example.com'
});

// 3. ตรวจสอบค่าก่อนใช้งาน
let userInput;                      // อาจยังไม่มีค่า
if (typeof userInput === 'undefined') {
    userInput = 'default';          // กำหนดค่าเริ่มต้น
}
\`\`\`

### 4. เทคนิคการ Debug อย่างมีประสิทธิภาพ 🔍
\`\`\`javascript
// 1. ใช้ console.table สำหรับข้อมูลที่ซับซ้อน
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
];
console.table(users);               // แสดงในรูปแบบตาราง

// 2. ตรวจสอบ type และค่า
const input = "123";
console.log({                       // แสดงทั้ง type และค่า
    value: input,
    type: typeof input,
    isNumber: !isNaN(input)
});

// 3. ใช้ debugger ในจุดที่ซับซ้อน
function complexCalculation(a, b) {
    debugger;                       // หยุดโปรแกรมเพื่อตรวจสอบ
    return a * b + Math.random();
}
\`\`\`

&nbsp;  
## แนวทางการพัฒนาทักษะต่อไป 🚀

1. **ฝึกฝนการใช้ const ก่อนเสมอ**
   - เริ่มเขียนโค้ดด้วย const
   - เปลี่ยนเป็น let เมื่อจำเป็น
   - สังเกตว่าโค้ดมีการเปลี่ยนแปลงค่าบ่อยแค่ไหน

2. **ทำความเข้าใจ Scope**
   - ฝึกการใช้ Block Scope
   - ระวังการใช้ตัวแปรซ้ำ
   - เข้าใจการทำงานของ TDZ

3. **พัฒนาการตั้งชื่อ**
   - ใช้ชื่อที่สื่อความหมาย
   - ทำให้โค้ดอ่านง่ายขึ้น
   - ลดความซับซ้อนของโค้ด

## Tips & Tricks สุดท้าย 💡

\`\`\`javascript
// 1. ใช้ Object Destructuring
const { name, age } = user;         // แทนการเข้าถึงทีละตัว

// 2. ใช้ Default Values
const { theme = 'light' } = config; // กำหนดค่าเริ่มต้น

// 3. ใช้ Shorthand Properties
const name = 'John';
const user = { name };              // แทน { name: name }

// 4. ใช้ Optional Chaining
const userCity = user?.address?.city; // ป้องกัน undefined error
\`\`\`

**หมายเหตุ:** การฝึกฝนและทำความเข้าใจเรื่องตัวแปรเป็นพื้นฐานสำคัญในการเขียนโค้ด JavaScript ที่มีคุณภาพ การเลือกใช้ตัวแปรที่เหมาะสมจะช่วยลดข้อผิดพลาดและทำให้โค้ดอ่านง่ายขึ้น 🌟`,
  quiz: [
    {
      id: 1,
      question: "ข้อใดต่อไปนี้เป็นความแตกต่างที่สำคัญระหว่าง let และ const?",
      options: [
        "let มี block scope แต่ const ไม่มี",
        "const ไม่สามารถเปลี่ยนแปลงค่าได้หลังจากกำหนด แต่ let สามารถเปลี่ยนได้",
        "let ไม่สามารถใช้ใน loop ได้ แต่ const ใช้ได้",
        "const ต้องกำหนดค่าเริ่มต้นเสมอ แต่ let ไม่จำเป็น",
      ],
      correctAnswer: 1,
      explanation:
        "const จะไม่สามารถเปลี่ยนแปลงค่าได้หลังจากกำหนดค่าแล้ว (immutable binding) ในขณะที่ let สามารถเปลี่ยนแปลงค่าได้ตลอด ทั้ง let และ const มี block scope เหมือนกัน",
    },
    {
      id: 2,
      question: "เมื่อประกาศ object ด้วย const สามารถทำอะไรได้บ้าง?",
      options: [
        "ไม่สามารถเปลี่ยนแปลงค่าใดๆ ใน object ได้เลย",
        "สามารถเปลี่ยนแปลงค่าของ properties ได้ แต่ไม่สามารถ reassign object ใหม่ได้",
        "สามารถ reassign object ใหม่ได้ แต่ไม่สามารถเปลี่ยนแปลง properties",
        "สามารถทำได้ทั้งการ reassign และเปลี่ยนแปลง properties",
      ],
      correctAnswer: 1,
      explanation:
        "เมื่อประกาศ object ด้วย const เราสามารถเปลี่ยนแปลงค่าของ properties ภายใน object ได้ แต่ไม่สามารถ reassign ตัว object ทั้งหมดเป็นค่าใหม่ได้",
    },
    {
      id: 3,
      question: "Temporal Dead Zone (TDZ) คืออะไร?",
      options: [
        "พื้นที่ในหน่วยความจำที่เก็บตัวแปรที่ไม่ได้ใช้งาน",
        "ช่วงเวลาระหว่างการประกาศตัวแปรและการกำหนดค่า",
        "ส่วนของโค้ดที่ไม่สามารถเข้าถึงได้",
        "ตัวแปรที่ถูกลบออกจากหน่วยความจำ",
      ],
      correctAnswer: 1,
      explanation:
        "TDZ คือช่วงเวลาระหว่างการประกาศตัวแปร (declaration) และการกำหนดค่า (initialization) ซึ่งในช่วงนี้จะไม่สามารถเข้าถึงตัวแปรได้ ช่วยป้องกันการใช้ตัวแปรก่อนการประกาศ",
    },
    {
      id: 4,
      question: "ข้อใดเป็น Best Practice ในการใช้งานตัวแปร?",
      options: [
        "ใช้ var แทน let และ const เสมอ",
        "ใช้ let เป็นค่าเริ่มต้น และเปลี่ยนเป็น const เมื่อจำเป็น",
        "ใช้ const เป็นค่าเริ่มต้น และเปลี่ยนเป็น let เมื่อจำเป็น",
        "ไม่ควรใช้ block scope",
      ],
      correctAnswer: 2,
      explanation:
        "การใช้ const เป็นค่าเริ่มต้นและเปลี่ยนเป็น let เฉพาะเมื่อจำเป็นต้องเปลี่ยนแปลงค่า เป็น best practice ที่ช่วยป้องกันการเปลี่ยนแปลงค่าโดยไม่ตั้งใจ และทำให้โค้ดมีความปลอดภัยมากขึ้น",
    },
  ],
};
