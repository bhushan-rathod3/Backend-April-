import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const db = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

console.log("MySQL Connected...");

//Books
export async function getAllBooks() {
  const [rows] = await db.query(`
    SELECT books.id, books.title, authors.name AS author, genres.name AS genre 
    FROM books 
    JOIN authors ON books.author_id = authors.id 
    JOIN genres ON books.genre_id = genres.id`);
  return rows;
}

export async function getBookById(id) {
  const [rows] = await db.query(
    `
    SELECT books.id, books.title, authors.name AS author, genres.name AS genre 
    FROM books 
    JOIN authors ON books.author_id = authors.id 
    JOIN genres ON books.genre_id = genres.id 
    WHERE books.id = ?`,
    [id]
  );
  return rows[0] || null;
}

export async function addBook(title, author_id, genre_id) {
  const [result] = await db.query(
    "INSERT INTO books (title, author_id, genre_id) VALUES (?, ?, ?)",
    [title, author_id, genre_id]
  );
  return result.insertId;
}

export async function updateBook(id, title, author_id, genre_id) {
  await db.query(
    "UPDATE books SET title=?, author_id=?, genre_id=? WHERE id=?",
    [title, author_id, genre_id, id]
  );
}

export async function deleteBook(id) {
  await db.query("DELETE FROM books WHERE id=?", [id]);
}

//Authors
export async function getAllAuthors() {
  const [rows] = await db.query("SELECT * FROM authors");
  return rows;
}

export async function addAuthor(name) {
  const [result] = await db.query("INSERT INTO authors (name) VALUES (?)", [
    name,
  ]);
  return result.insertId;
}

export async function deleteAuthor(id) {
  await db.query("DELETE FROM authors WHERE id=?", [id]);
}

//Genres
export async function getAllGenres() {
  const [rows] = await db.query("SELECT * FROM genres");
  return rows;
}

export async function addGenre(name) {
  const [result] = await db.query("INSERT INTO genres (name) VALUES (?)", [
    name,
  ]);
  return result.insertId;
}

export async function deleteGenre(id) {
  await db.query("DELETE FROM genres WHERE id=?", [id]);
}

//Users
export async function getAllUsers() {
  const [rows] = await db.query("SELECT * FROM users");
  return rows;
}

export async function addUser(name, email) {
  const [result] = await db.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email]
  );
  return result.insertId;
}

export async function deleteUser(id) {
  await db.query("DELETE FROM users WHERE id=?", [id]);
}
