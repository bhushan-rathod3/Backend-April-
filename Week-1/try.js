// console.log("hii");

// setTimeout(() => {
//   console.log("yoo");
// }, 0);

// console.log("last!");

//1.

// const myPromise = new Promise((resolve, reject) => {
//   console.log("pending...");

//   setTimeout(() => {
//     const success = Math.random() > 0.5;
//     success ? resolve("promise fulfilled") : reject("promise rejected");
//   }, 1000);
// });

// myPromise.then(console.log).catch(console.error);

//2.

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((data) => console.log("Data:", data))
//   .catch((error) => console.error("Error:", error));

// async function fetchData() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     let data = await response.json();
//     console.log("Data:", data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// fetchData();

//3.
// async function example() {
//   console.log("Before await");
//   let result = await new Promise((resolve) =>
//     setTimeout(() => resolve("Done!"), 2000)
//   );
//   console.log(result);
// }

// example();
// let result = await fetch(""); //SyntaxError: await is only valid in async functions and the top level bodies of modules

//4.
// async function fetchData() {
//   try {
//     let response = await fetch("https://wrong-url.com"); // Invalid URL
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error caught:", error);
//   }
// }
// fetchData();

//5.
// function greet(name, callback) {
//   console.log("Hello, " + name);
//   callback();
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// greet("Alice", sayGoodbye);

//8.
// function simulateDownload() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Download complete"), 2000);
//   });
// }
// // simulateDownload().then(console.log).catch(console.error);

// //9.
// async function startDownload() {
//   try {
//     let result = await simulateDownload();
//     console.log(result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// startDownload();

//10.
// function delayedSum(a, b, callback) {
//   setTimeout(() => {
//       callback(a + b);
//   }, 1000);
// }

// delayedSum(2, 3, (sum) => console.log("Sum:", sum));

//12.
// async function fetchUser() {
//   try {
//     await new Promise((resolve) => setTimeout(resolve, 1500));
//     return "User data loaded";
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// fetchUser().then(console.log);

//13.

// function loadData(success = true) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       success ? resolve("Completed") : reject("Error occurred");
//     }, 1000);
//   });
// }
// loadData(false).then(console.log).catch(console.error);

//14.
// async function process() {
//   try {
//     const result = await Promise.reject("Something went wrong");
//     console.log(result);
//   } catch (error) {
//     console.error("Caught error:", error);
//   }
// }
// process();

////////////////////////  DAY - 2  ///////////////////////////////

// console.log("one");
// setTimeout(() => console.log("setTimeout"), 0);
// console.log("two");
// setImmediate(() => console.log("setImmediate"));
// console.log("three");

// process.nextTick(() => console.log("Tick callback executed"));
// Promise.resolve().then(() => console.log("Promise resolved"));
// setTimeout(() => console.log("Timeout executed"), 0);
// console.log("End of script");

//11.
// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Data fetched"), 1000);
//   });
// }

// getData().then(console.log);

//12.
// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);
// setImmediate(() => console.log("setImmediate"));

//13.
// Promise.resolve().then(() => console.log("Promise resolved"));
// process.nextTick(() => console.log("NextTick executed"));
// setTimeout(() => console.log("setTimeout executed"), 0);

//14.
// let count = 0;
// const interval = setInterval(() => {
//   console.log("Done");
//   if (++count === 3) clearInterval(interval);
// }, 2000);

//15.
// console.log("Start");
// setTimeout(() => console.log("Timeout"), 0);
// Promise.resolve().then(() => console.log("Promise"));
// console.log("End");

//16.
// process.nextTick(() => console.log("Tick"));
// Promise.resolve().then(() => console.log("Promise"));
// console.log("End");

//17.
// setImmediate(() => {
//   console.log("Immediate");
// });
// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

//18.
// import fs from "fs";

// fs.readFile("file.txt", () => {
//   setTimeout(() => console.log("Timer"), 0);
//   setImmediate(() => console.log("Immediate"));
// });

////////////////////////  DAY - 3  ///////////////////////////////

//1.
// const fs = require("fs");

// console.log("🔵 1. Start of script");

// // Timer: setTimeout
// setTimeout(() => {
//   console.log("🟢 4. setTimeout 0ms");

//   process.nextTick(() => {
//     console.log("🟡 5. nextTick inside setTimeout");
//   });

//   Promise.resolve().then(() => {
//     console.log("🟡 6. Promise inside setTimeout");
//   });
// }, 0);

// // Timer: setInterval (runs repeatedly, shown once here)
// const interval = setInterval(() => {
//   console.log("🟢 7. setInterval");
//   clearInterval(interval); // only show once for demo
// }, 0);

// // I/O Async (will go into the poll phase)
// fs.readFile("file.txt", () => {
//   console.log("🟣 10. fs.readFile (I/O)");

//   setImmediate(() => {
//     console.log("🟣11. setImmediate inside fs.readFile");
//   });

//   setTimeout(() => {
//     console.log("🟣 12. setTimeout inside fs.readFile");
//   }, 0);
// });

// // Custom async-style callback
// function customAsyncCallback(cb) {
//   setTimeout(() => {
//     cb("🔴 13. Custom callback after async work");
//   }, 10);
// }
// customAsyncCallback((message) => {
//   console.log(message);
// });

// console.log("🔵 14. End of script");
// // Microtask: process.nextTick
// process.nextTick(() => {
//   console.log("🟡 2. process.nextTick");
// });
// // Microtask: Promise
// Promise.resolve().then(() => {
//   console.log("🟡 3. Promise.then");
// });
// // Check phase: setImmediate
// setImmediate(() => {
//   console.log("🟢 8. setImmediate");
//   process.nextTick(() => {
//     console.log("🟡 9. nextTick inside setImmediate");
//   });
// });

//2.
// const fs = require("fs");

// console.log("🔵 1. Start of script");

// // Microtask queue
// process.nextTick(() => {
//   console.log("🟡 2. process.nextTick (microtask)");
// });

// // setImmediate
// setImmediate(() => {
//   console.log("🟢 10. setImmediate");
// });

// Promise.resolve().then(() => {
//   console.log("🟡 3. Promise.then (microtask)");
// });

// setTimeout(() => {
//   console.log("🟢 6. setTimeout 0ms");

//   // Nested async inside timeout
//   async function nestedAsync() {
//     console.log("🔵 7. Nested async before await (in setTimeout)");
//     await Promise.resolve();
//     console.log("🟡 8. Nested async after await (in setTimeout)");
//   }
//   nestedAsync();

//   // Recursive timer (like interval)
//   let count = 0;
//   function recursiveTimeout() {
//     if (count < 2) {
//       console.log(`🟢 9. Recursive timeout ${count + 1}`);
//       count++;
//       setTimeout(recursiveTimeout, 0);
//     }
//   }
//   recursiveTimeout();
// }, 0);
// // Async/await
// async function asyncExample() {
//   console.log("🔵 4. Inside async function (before await)");
//   await Promise.resolve();
// }
// console.log("🟡 5. After await inside async function (microtask)");
// asyncExample();
// // I/O operation
// fs.readFile("file.txt", () => {
//   console.log("🟣 11. fs.readFile callback");
//   process.nextTick(() => {
//     console.log("🟡 12. nextTick inside fs.readFile");
//   });
//   Promise.resolve().then(() => {
//     console.log("🟡 13. Promise inside fs.readFile");
//   });
//   setImmediate(() => {
//     console.log("🟣 14. setImmediate inside fs.readFile");
//   });
// });
// console.log("🔵 15. End of script");

// todoManager.js

// export const todoManager = {
//   tasks: [],

//   addTask(task) {
//     this.tasks.push({ id: Date.now(), task });
//     console.log("Task added:", task);
//   },

//   removeTask(id) {
//     const index = this.tasks.findIndex((t) => t.id === id);
//     if (index !== -1) {
//       const removed = this.tasks.splice(index, 1);
//       console.log("Task removed:", removed[0]);
//     } else {
//       console.log("Task not found.");
//     }
//   },

//   listTasks() {
//     console.log("Current tasks:");
//     this.tasks.map((t, i) => console.log(`${i + 1}. ${t.task} (ID: ${t.id})`));
//   },
// };

// // Example usage
// todoManager.addTask("Finish assignment");
// todoManager.addTask("Read Node.js docs");
// todoManager.listTasks();
// const taskId = todoManager.tasks[0].id;
// todoManager.removeTask(taskId);
// todoManager.listTasks();

//Custom-Form Validation

// function validateForm(data) {
//   const errors = [];

//   if (!data.name) errors.push("Name is required.");

//   if (!data.email || !/\S+@\S+\.\S+/.test(data.email))
//     errors.push("Valid email is required.");

//   if (data.age <= 18) errors.push("Age must be over 18.");

//   return errors.length ? errors : "Validation successful!";
// }

// console.log(validateForm({ name: "John", email: "", age: 17 }));
// console.log(validateForm({ name: "John", email: "John@gmail", age: 18 }));
// console.log(validateForm({ name: "John", email: "John@gmail.com", age: 19 }));

//3.Shopping Cart Processor

// function processCart(cart) {
//   let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   if (total > 100) total *= 0.9; // Apply discount

//   return total;
// }

// const cart = [
//   { price: 50, quantity: 2 },
//   { price: 20, quantity: 3 },
// ];

// console.log(processCart(cart)); // Output : 144

// class Student {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//     this.grades = [];
//     this.averageGrade = 0;
//   }

//   addGrade(grade) {
//     this.grades.push(grade);
//     this.calculateAverageGrade();
//   }

//   calculateAverageGrade() {
//     if (this.grades.length > 0) {
//       const sum = this.grades.reduce((sum, grade) => (sum += grade.score), 0);
//       this.averageGrade = sum / this.grades.length;
//     } else {
//       this.averageGrade = 0;
//     }
//   }
// }

// class Teacher {
//   constructor(id, name, subject) {
//     this.id = id;
//     this.name = name;
//     this.subject = subject;
//   }
// }

// class Classroom {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//     this.students = [];
//   }

//   addStudent(student) {
//     this.students.push(student);
//   }
// }

// class Grade {
//   constructor(studentId, score) {
//     this.studentId = studentId;
//     this.score = score;
//   }
// }

// function createRandomName() {
//   const names = [
//     "Alice",
//     "Bob",
//     "Charlie",
//     "David",
//     "Emily",
//     "Fiona",
//     "George",
//     "Harry",
//     "Ivy",
//     "Jack",
//   ];

//   return names[Math.floor(Math.random() * names.length)];
// }

// function generateRandomScore() {
//   return Math.floor(Math.random() * 100);
// }

// //Creating Data
// const teachers = [];
// for (let i = 0; i < 5; i++) {
//   teachers.push(new Teacher(i + 1, `Teacher ${i + 1}`, `Subject ${i + 1}`));
// }

// const classrooms = [];
// for (let i = 0; i < 10; i++) {
//   classrooms.push(new Classroom(i + 1, `Class ${i + 1}`));
// }

// const students = [];
// for (let i = 0; i < 30; i++) {
//   students.push(new Student(i + 1, createRandomName()));
//   const classIndex = Math.floor(Math.random() * classrooms.length);
//   classrooms[classIndex].addStudent(students[i]);
// }

// students.forEach((student) => {
//   for (let i = 0; i < 5; i++) {
//     student.addGrade(new Grade(student.id, generateRandomScore()));
//   }
// });

// // teachers.forEach((teacher) => {
// //   let totalStudentAverage = 0;
// //   let studentCount = 0;

// //   classrooms.forEach((classroom) => {
// //     classroom.students.forEach((student) => {
// //       if (student.grades.some((grade) => grade.studentId === student.id)) {
// //         totalStudentAverage += student.averageGrade;
// //         studentCount++;
// //       }
// //     });
// //   });

// //   teacher.averageStudentGrade =
// //     studentCount > 0 ? totalStudentAverage / studentCount : 0;
// // });

// // Calculate average grade per classroom
// const classroomAverages = classrooms.map((classroom) => {
//   let totalStudentAverage = 0;
//   let studentCount = 0;

//   classroom.students.forEach((student) => {
//     if (student.grades.some((grade) => grade.studentId === student.id)) {
//       totalStudentAverage += student.averageGrade;
//       studentCount++;
//     }
//   });

//   return studentCount > 0 ? totalStudentAverage / studentCount : 0;
// });

// // Assign classroom averages to teachers in a round-robin manner
// teachers.forEach((teacher, index) => {
//   teacher.averageStudentGrade = classroomAverages[index % classrooms.length];
// });

// const topStudents = [...students]
//   .sort((a, b) => b.averageGrade - a.averageGrade)
//   .slice(0, 5);
// console.log("Top 5 Students");
// topStudents.forEach((student) => {
//   console.log(`${student.name} : ${student.averageGrade.toFixed(2)}`);
// });

// console.log(teachers);
// const topTeacher = [...teachers].sort(
//   (a, b) => b.averageStudentGrade - a.averageStudentGrade
// )[0];

// console.log(topTeacher);
