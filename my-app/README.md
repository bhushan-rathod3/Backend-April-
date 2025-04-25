# 📚 WEEK 3 ASSIGNMENT - PROJECT 1: LIBRARY MANAGEMENT SYSTEM

---

### 🔹 Entities & Relationships

- [book.entity.ts](my-app/src/book/entities/book.entity.ts) — `Book (id, title, ISBN, quantity)`
- [member.entity.ts](my-app/src/member/entities/member.entity.ts) — `Member (id, name, email, phone)`
- [borrow.entity.ts](my-app/src/borrow/entities/borrow.entity.ts) — `BorrowRecord (id, bookId, memberId, borrowDate, returnDate)`

> Relation: One `Book` → Many `BorrowRecord`, One `Member` → Many `BorrowRecord`

---

### 🔹 Custom Pipe

[Quantity Validation Pipe](src/common/pipes/quantity-validation.pipe.ts)

### 🔹 Custom Exception Filter

[Exception Filter for "Book not available"](src/common/filters/book-unavailable.filter.ts)

=====================================================================
Absolutely — and you're totally right, that was a great touch!  
We’ll now **recreate that same rich clickable README format** for your **Library Management System**, based on your actual folder structure (from the image you uploaded).

---

### ✅ Here's your updated `README.md` with:

- Clean structure
- Clickable file references
- Realistic path mapping from your provided folder screenshot
- Quick summary under each question/feature

---

````md
# 📚 WEEK 3 ASSIGNMENT - PROJECT 1: LIBRARY MANAGEMENT SYSTEM

---

## ✅ Practical Overview

### 🔹 1. Add New Book

Implements POST `/books` to create a new book in the database. Quantity must be ≥ 0.

- [`src/book/book.controller.ts`](./src/book/book.controller.ts)
- [`src/book/book.service.ts`](./src/book/book.service.ts)
- [`src/book/book.entity.ts`](./src/book/book.entity.ts)
- [`src/book/dto/create-book.dto.ts`](./src/book/dto/create-book.dto.ts)

---

### 🔹 2. List Available Books

GET `/books/available` returns all books where quantity > 0.

- [`src/book/book.controller.ts`](./src/book/book.controller.ts)
- [`src/book/book.service.ts`](./src/book/book.service.ts)

---

### 🔹 3. Register Member

POST `/members` registers a new member with email & phone validation.

- [`src/member/member.controller.ts`](./src/member/member.controller.ts)
- [`src/member/member.service.ts`](./src/member/member.service.ts)
- [`src/member/member.entity.ts`](./src/member/member.entity.ts)
- [`src/member/dto/create-member.dto.ts`](./src/member/dto/create-member.dto.ts)

---

### 🔹 4. Borrow a Book

POST `/borrow` allows a member to borrow a book. Decreases book quantity and sets a due date (14 days from borrow).

- [`src/borrow/borrow.controller.ts`](./src/borrow/borrow.controller.ts)
- [`src/borrow/borrow.service.ts`](./src/borrow/borrow.service.ts)
- [`src/borrow/borrow.entity.ts`](./src/borrow/borrow.entity.ts)
- [`src/borrow/dto/borrow-book.dto.ts`](./src/borrow/dto/borrow-book.dto.ts)

---

### 🔹 5. Return a Book

POST `/return/:id` returns a book and sets `returnDate`. Increments the stock.

- [`src/borrow/borrow.controller.ts`](./src/borrow/borrow.controller.ts)
- [`src/borrow/borrow.service.ts`](./src/borrow/borrow.service.ts)

---

### 🔹 6. Overdue Books Report

GET `/reports/overdue` fetches overdue books (not returned, past dueDate).

- [`src/reports/reports.controller.ts`](./src/reports/reports.controller.ts)
- [`src/borrow/borrow.service.ts`](./src/borrow/borrow.service.ts)

---

## 🔗 API Testing Guide

### 1. ➕ Add Book

```POST /books
Payload:
{
  "title": "The Great Gatsby",
  "ISBN": "9780743273565",
  "quantity": 5
}
```
````

---

### 2. 📚 Get Available Books

```GET /books/available

```

---

### 3. 👤 Register Member

```POST /members
Payload:
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890"
}
```

---

### 4. 📖 Borrow a Book

```POST /borrow
Payload:
{
  "bookId": 1,
  "memberId": 1
}
```

---

### 5. 🔄 Return a Book

```POST /return/1

```

---

### 6. ⏰ Overdue Books Report

```GET /reports/overdue

```

---

### 7. Extra Routes

```
GET /books
GET /books/:id
GET /members
GET /members/:id
GET /borrow-records
GET /borrow-records/:id
```

======================================================================

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
