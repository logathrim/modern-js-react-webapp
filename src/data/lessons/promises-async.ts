import { Lesson } from '../../types';

export const promisesAsyncLesson: Lesson = {
  id: 9,
  title: 'Promises และ Async/Await',
  duration: '35 นาที',
  content: `# ⚡️ Promises และ Async/Await

> *"Master asynchronous programming with Promises and Async/Await in Modern JavaScript"*

## 📝 สิ่งที่จะได้เรียนรู้

✨ Promise Fundamentals  
🔄 Async/Await Syntax  
🎯 Error Handling  
💡 Advanced Patterns  

## 1. 🎨 Promises

### Promise Basics
- 📦 สถานะของ Promise (pending, fulfilled, rejected)
- 🎯 การสร้าง Promise ด้วย Promise constructor
- 💡 Promise chaining (.then, .catch, .finally)
- ⚡️ Error propagation

### Promise Methods
- 🚀 Promise.all() - รอทุก promises ทำงานเสร็จ
- ⚡️ Promise.race() - รอ promise แรกที่เสร็จ
- 🎯 Promise.allSettled() - รอทุก promises จบการทำงาน
- 💫 Promise.any() - รอ promise แรกที่สำเร็จ

## 2. 🔄 Async/Await

### การใช้งานพื้นฐาน
- 📝 async functions และการ return Promise
- 🎯 await expression และการรอผลลัพธ์
- 💡 การแปลง Promise chains เป็น async/await
- ⚡️ Top-level await (ES2022+)

### Error Handling
- ⚠️ try/catch blocks กับ async/await
- 🛡️ การจัดการ errors ใน Promise chains
- 💡 Error boundaries และ recovery strategies
- 🎯 Custom error classes

## 3. 🚀 Advanced Patterns

### Parallel Execution
- 📦 การทำงานพร้อมกันด้วย Promise.all()
- 🎯 การจัดการ concurrent requests
- 💡 Rate limiting และ throttling
- ⚡️ Batch processing

### Sequential Execution
- 🔄 การทำงานตามลำดับด้วย for...of
- 🎯 Dependencies handling
- 💡 Retry mechanisms
- 🚀 Progress tracking

> 💡 **Pro Tips**: 
> - ใช้ async/await เมื่อต้องการโค้ดที่อ่านง่ายและเป็นลำดับ
> - ใช้ Promise.all() เมื่อต้องการประมวลผลพร้อมกัน
> - อย่าลืม error handling ในทุกกรณี`,
  codeExamples: [
    {
      title: '⚡️ Promise Fundamentals',
      language: 'javascript',
      code: `// Creating a Promise
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve({ id: 1, name: 'John' });
    } else {
      reject(new Error('Failed to fetch data'));
    }
  }, 1000);
});

// Promise chaining
fetchData
  .then(data => {
    console.log('Data:', data);
    return processData(data);
  })
  .then(result => {
    console.log('Result:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log('Operation completed');
  });

// Promise.all example
const promises = [
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments')
];

Promise.all(promises)
  .then(([users, posts, comments]) => {
    // All requests completed successfully
  })
  .catch(error => {
    // Any request failed
  });`
    },
    {
      title: '🔄 Async/Await Patterns',
      language: 'javascript',
      code: `// Basic async/await
async function getUserData(userId) {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchPosts(user.id);
    const comments = await fetchComments(posts[0].id);
    return { user, posts, comments };
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}

// Parallel execution
async function getMultipleUsers(userIds) {
  try {
    const userPromises = userIds.map(id => fetchUser(id));
    const users = await Promise.all(userPromises);
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

// Sequential execution with progress
async function processItems(items, onProgress) {
  const results = [];
  for (const [index, item] of items.entries()) {
    try {
      const result = await processItem(item);
      results.push(result);
      onProgress((index + 1) / items.length);
    } catch (error) {
      console.error(\`Error processing item \${index}:\`, error);
    }
  }
  return results;
}

// Retry mechanism
async function fetchWithRetry(url, maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fetch(url);
    } catch (error) {
      if (attempt === maxAttempts) throw error;
      const delay = Math.min(1000 * Math.pow(2, attempt - 1), 5000);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}`
    },
    {
      title: '🚀 Real-world Examples',
      language: 'javascript',
      code: `// Custom Promise wrapper
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Rate limiting
async function fetchWithRateLimit(urls, concurrency = 3) {
  const results = [];
  for (let i = 0; i < urls.length; i += concurrency) {
    const batch = urls.slice(i, i + concurrency);
    const batchResults = await Promise.all(
      batch.map(url => fetch(url))
    );
    results.push(...batchResults);
    await timeout(1000); // Rate limiting delay
  }
  return results;
}

// Progress tracking with async/await
async function uploadFiles(files, onProgress) {
  const total = files.length;
  const results = [];
  
  for (const [index, file] of files.entries()) {
    try {
      const result = await uploadFile(file);
      results.push(result);
      onProgress({
        completed: index + 1,
        total,
        percentage: ((index + 1) / total) * 100
      });
    } catch (error) {
      console.error(\`Failed to upload \${file.name}:\`, error);
    }
  }
  
  return results;
}

// Error boundary pattern
class AsyncBoundary {
  static async run(fn, fallback) {
    try {
      return await fn();
    } catch (error) {
      console.error('Error in async boundary:', error);
      return fallback;
    }
  }
}`
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Promise มีกี่สถานะ และมีอะไรบ้าง?",
      options: [
        "2 สถานะ: fulfilled และ rejected",
        "3 สถานะ: pending, fulfilled และ rejected",
        "4 สถานะ: pending, running, fulfilled และ rejected",
        "1 สถานะ: completed"
      ],
      correctAnswer: 1,
      explanation: "Promise มี 3 สถานะ คือ pending (กำลังดำเนินการ), fulfilled (สำเร็จ) และ rejected (ล้มเหลว) โดย Promise จะเริ่มต้นในสถานะ pending และจะเปลี่ยนเป็น fulfilled หรือ rejected เมื่อการทำงานเสร็จสิ้น"
    },
    {
      id: 2,
      question: "ข้อใดเป็นประโยชน์ของ async/await เมื่อเทียบกับ Promise chains?",
      options: [
        "ทำงานได้เร็วกว่า",
        "ใช้หน่วยความจำน้อยกว่า",
        "โค้ดอ่านง่ายกว่าและเขียนเป็นลำดับขั้นตอนได้ชัดเจน",
        "ไม่ต้องจัดการ errors"
      ],
      correctAnswer: 2,
      explanation: "async/await ช่วยให้โค้ดอ่านง่ายขึ้นและเขียนเป็นลำดับขั้นตอนได้ชัดเจนกว่า Promise chains โดยเฉพาะเมื่อมีการทำงานแบบ sequential หลายขั้นตอน"
    },
    {
      id: 3,
      question: "Promise.all() และ Promise.race() ต่างกันอย่างไร?",
      options: [
        "Promise.all() ทำงานเร็วกว่า",
        "Promise.all() รอทุก promises เสร็จ, Promise.race() รอตัวแรกที่เสร็จ",
        "Promise.race() รอทุก promises เสร็จ, Promise.all() รอตัวแรกที่เสร็จ",
        "ไม่มีความแตกต่าง"
      ],
      correctAnswer: 1,
      explanation: "Promise.all() จะรอให้ทุก promises ทำงานเสร็จก่อนจึงจะ resolve ในขณะที่ Promise.race() จะ resolve ทันทีเมื่อมี promise ตัวใดตัวหนึ่งทำงานเสร็จเป็นตัวแรก"
    },
    {
      id: 4,
      question: "การจัดการ error ใน async/await ควรทำอย่างไร?",
      options: [
        "ไม่จำเป็นต้องจัดการ errors",
        "ใช้ .catch() เท่านั้น",
        "ใช้ try/catch block",
        "ใช้ if/else"
      ],
      correctAnswer: 2,
      explanation: "ใน async/await เราควรใช้ try/catch block เพื่อจัดการ errors เนื่องจากเป็นวิธีที่เป็นมาตรฐานและทำให้โค้ดอ่านง่าย สามารถจัดการ errors ได้อย่างเป็นระบบ"
    }
  ]
};