class Student {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.grades = [];
    this.averageGrade = 0;
  }

  addGrade(grade) {
    this.grades.push(grade);
    this.calculateAverageGrade();
  }

  calculateAverageGrade() {
    if (this.grades.length > 0) {
      const sum = this.grades.reduce((acc, grade) => acc + grade.score, 0);
      this.averageGrade = sum / this.grades.length;
    } else {
      this.averageGrade = 0;
    }
  }
}

class Teacher {
  constructor(id, name, subject) {
    this.id = id;
    this.name = name;
    this.subject = subject;
  }
}

class Classroom {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
  }
}

class Grade {
  constructor(studentId, score) {
    this.studentId = studentId;
    this.score = score;
  }
}

// Helper Functions
function generateRandomScore() {
  return Math.floor(Math.random() * 100); // Returns a random integer between 0 and 100
}

function createRandomName(i) {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Emily",
    "Fiona",
    "George",
    "Harry",
    "Ivy",
    "Jack",
  ];
  return `${names[i % names.length]} ${i}`;
}

// Create School Data
const teachers = [];
for (let i = 0; i < 5; i++) {
  teachers.push(new Teacher(i + 1, `Teacher ${i + 1}`, `Subject ${i + 1}`));
}

const classrooms = [];
for (let i = 0; i < 10; i++) {
  classrooms.push(new Classroom(i + 1, `Class ${i + 1}`));
}

const students = [];
for (let i = 0; i < 30; i++) {
  students.push(new Student(i + 1, createRandomName(i)));
  const randomClassIndex = Math.floor(Math.random() * classrooms.length);
  classrooms[randomClassIndex].addStudent(students[i]);
}

// Generate Random Grades
students.forEach((student) => {
  for (let i = 0; i < 5; i++) {
    // Give each student 5 random grades
    student.addGrade(new Grade(student.id, generateRandomScore()));
  }
});

// Calculate Teacher Average
teachers.forEach((teacher) => {
  let totalStudentAverage = 0;
  let studentCount = 0;

  classrooms.forEach((classroom) => {
    classroom.students.forEach((student) => {
      if (student.grades.some((grade) => grade.studentId === student.id)) {
        totalStudentAverage += student.averageGrade;
        studentCount++;
      }
    });
  });

  teacher.averageStudentGrade =
    studentCount > 0 ? totalStudentAverage / studentCount : 0;
});

// Output

// Top 5 Students by Average Grade
const topStudents = [...students]
  .sort((a, b) => b.averageGrade - a.averageGrade)
  .slice(0, 5);
console.log("Top 5 Students by Average Grade:");
topStudents.forEach((student) => {
  console.log(`${student.name}: ${student.averageGrade.toFixed(2)}`);
});

console.log("\n");

// Teacher with Highest Student Average
const topTeacher = [...teachers].sort(
  (a, b) => b.averageStudentGrade - a.averageStudentGrade
)[0];
console.log("Teacher with Highest Student Average:");
console.log(`${topTeacher.name}: ${topTeacher.averageStudentGrade.toFixed(2)}`);

console.log("\n");

// List of Students Per Class with Performance
classrooms.forEach((classroom) => {
  console.log(`Students in ${classroom.name}:`);
  classroom.students.forEach((student) => {
    console.log(
      `  ${student.name}: Average Grade - ${student.averageGrade.toFixed(2)}`
    );
  });
  console.log("\n");
});
  