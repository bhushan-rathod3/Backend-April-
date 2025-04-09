class User {
  constructor(id, username) {
    this.id = id;
    this.username = username;
  }
}

class Post {
  constructor(id, content, author) {
    this.id = id;
    this.content = content;
    this.author = author;
    this.likes = [];
    this.comments = [];
    this.createdAt = new Date();
  }

  like(user) {
    if (!this.likes.includes(user)) {
      this.likes.push(user);
    }
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment {
  constructor(id, commenter, text) {
    this.id = id;
    this.commenter = commenter;
    this.text = text;
  }
}

// Helper Functions
function generateRandomUsername(i) {
  const adjectives = ["Cool", "Happy", "Brave", "Clever", "Sunny"];
  const nouns = ["Coder", "Thinker", "Dreamer", "Explorer", "Creator"];
  return `${adjectives[i % adjectives.length]}${nouns[i % nouns.length]}${i}`;
}

function generateRandomSentence() {
  const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "All that glitters is not gold.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "The only way to do great work is to love what you do.",
  ];
  return sentences[Math.floor(Math.random() * sentences.length)];
}

function generateRandomComment() {
  const comments = [
    "Great post!",
    "Interesting thoughts.",
    "I disagree with this.",
    "Well said!",
    "This is very helpful.",
  ];
  return comments[Math.floor(Math.random() * comments.length)];
}

// 1. User Functionality
const users = [];
for (let i = 0; i < 10; i++) {
  users.push(new User(i + 1, generateRandomUsername(i)));
}

// 2. Post Functionality
const posts = [];
users.forEach((user) => {
  posts.push(new Post(user.id, generateRandomSentence(), user));
});

// 3. Interaction Simulation
for (let i = 0; i < 20; i++) {
  // Simulating 20 random interactions
  const randomUser = users[Math.floor(Math.random() * users.length)];
  const randomPost = posts[Math.floor(Math.random() * posts.length)];

  if (randomUser.id !== randomPost.author.id) {
    if (Math.random() < 0.5) {
      // 50% chance to like
      randomPost.like(randomUser);
    } else {
      // 50% chance to comment
      const comment = new Comment(i + 1, randomUser, generateRandomComment());
      randomPost.addComment(comment);
    }
  }
}

// 4. Display Output
console.log("--- Users ---");
users.forEach((user) => console.log(user));

console.log("\n--- Posts and Interactions ---");
users.forEach((user) => {
  console.log(`\n--- User: ${user.username} ---`);
  const userPosts = posts.filter((post) => post.author.id === user.id);

  userPosts.forEach((post) => {
    console.log(`\nPost ID: ${post.id}`);
    console.log(`Content: ${post.content}`);
    console.log(`Likes: ${post.likes.map((user) => user.username).join(", ")}`);
    console.log("Comments:");
    post.comments.forEach((comment) => {
      console.log(`  ${comment.commenter.username}: ${comment.text}`);
    });
    console.log(`  Created At: ${post.createdAt}`);
  });
});
