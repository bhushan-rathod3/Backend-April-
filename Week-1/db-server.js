import http from "http";
import url from "url";
import dotenv from "dotenv";
import {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
  getAllAuthors,
  addAuthor,
  deleteAuthor,
  getAllGenres,
  addGenre,
  deleteGenre,
  getAllUsers,
  addUser,
  deleteUser,
} from "./db.js";

dotenv.config();

const getRequestBody = async (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => resolve(JSON.parse(body || "{}")));
    req.on("error", (err) => reject(err));
  });
};

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { method } = req;
  const path = parsedUrl.pathname;
  res.setHeader("Content-Type", "application/json");

  try {
    if (method === "GET" && path === "/books") {
      res.end(JSON.stringify(await getAllBooks()));
    } else if (method === "GET" && path.startsWith("/books/")) {
      res.end(JSON.stringify(await getBookById(path.split("/")[2])));
    } else if (method === "POST" && path === "/books") {
      const { title, author_id, genre_id } = await getRequestBody(req);
      res.end(
        JSON.stringify({ bookId: await addBook(title, author_id, genre_id) })
      );
    } else if (method === "PUT" && path.startsWith("/books/")) {
      const { title, author_id, genre_id } = await getRequestBody(req);
      await updateBook(path.split("/")[2], title, author_id, genre_id);
      res.end(JSON.stringify({ message: "Book updated" }));
    } else if (method === "DELETE" && path.startsWith("/books/")) {
      await deleteBook(path.split("/")[2]);
      res.end(JSON.stringify({ message: "Book deleted" }));
    } else if (method === "GET" && path === "/authors") {
      const authors = await getAllAuthors();
      res.end(JSON.stringify(authors));
    } else if (method === "POST" && path === "/authors") {
      const { name } = await getRequestBody(req);
      const authorId = await addAuthor(name);
      res.end(JSON.stringify({ message: "Author added", authorId }));
    } else if (method === "DELETE" && path.startsWith("/authors/")) {
      const authorId = path.split("/")[2];
      await deleteAuthor(authorId);
      res.end(JSON.stringify({ message: "Author deleted" }));
    } else if (method === "GET" && path === "/genres") {
      const genres = await getAllGenres();
      res.end(JSON.stringify(genres));
    } else if (method === "POST" && path === "/genres") {
      const { name } = await getRequestBody(req);
      const genreId = await addGenre(name);
      res.end(JSON.stringify({ message: "Genre added", genreId }));
    } else if (method === "DELETE" && path.startsWith("/genres/")) {
      const genreId = path.split("/")[2];
      await deleteGenre(genreId);
      res.end(JSON.stringify({ message: "Genre deleted" }));
    } else if (method === "GET" && path === "/users") {
      const users = await getAllUsers();
      res.end(JSON.stringify(users));
    } else if (method === "POST" && path === "/users") {
      const { name, email } = await getRequestBody(req);
      const userId = await addUser(name, email);
      res.end(JSON.stringify({ message: "User added", userId }));
    } else if (method === "DELETE" && path.startsWith("/users/")) {
      const userId = path.split("/")[2];
      await deleteUser(userId);
      res.end(JSON.stringify({ message: "User deleted" }));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ message: "Route Not Found" }));
    }
  } catch (error) {
    res.statusCode = 500;
    res.end(JSON.stringify({ message: "Server Error", error: error.message }));
  }
});

server.listen(5000, () => console.log("Server running on port 5000"));
