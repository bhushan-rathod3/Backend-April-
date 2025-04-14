# 📝 WEEKLY ASSIGNMENT - 2

## ✅ Practical Section Overview

---

### 🔹 Q1 - Dynamic Route Handling

**Task:** Create dynamic route `/users/:id/role/:role` to return mock data based on `role`.

- [user.controller.ts](./src/user/user.controller.ts)
- [user.service.ts](./src/user/user.service.ts)

---

### 🔹 Q2 - Custom Decorator

**Task:** Implement a `@Timeout(delay)` decorator to cancel slow requests.

- [Timeout.decorator.ts](./src/decorators/Timeout.decorator.ts)
- [user.controller.ts](./src/user/user.controller.ts)
- [user.service.ts](./src/user/user.service.ts)

---

### 🔹 Q3 - Pipe for Custom Validation

**Task:** Create an `@IsEven()` pipe that rejects odd numbers in `/check-even/:num`.

- [is-even.pipe.ts](./src/pipes/is-even/is-even.pipe.ts)
- [app.controller.ts](./src/app.controller.ts)

---

### 🔹 Q4 - Middleware for Rate Limiting

**Task:** Limit requests to 3 per minute per IP using custom middleware.

- [rate-limiter.middleware.ts](./src/middlewares/rate-limiter/rate-limiter.middleware.ts)
- [app.module.ts](./src/app.module.ts)

---

### 🔹 Q5 - Mock E-Commerce Checkout Flow

**Task:** Simulate cart → payment → order with validations and custom exceptions.

- DTOs:
  - [cart-item.dto.ts](./src/ecommerce/DTO/cart-item.dto.ts)
  - [order.dto.ts](./src/ecommerce/DTO/order.dto.ts)
  - [payment.dto.ts](./src/ecommerce/DTO/payment.dto.ts)
- Custom Exception:
  - [insufficient-stock.exception.ts](./src/ecommerce/exceptions/insufficient-stock.exception.ts)
- Controller & Service:
  - [ecommerce.controller.ts](./src/ecommerce/ecommerce.controller.ts)
  - [ecommerce.service.ts](./src/ecommerce/ecommerce.service.ts)

---

### 🔹 Q6 - Basic Validation with DTOs

**Task:** Validate user creation DTO with class-validator decorators and return custom error messages.

- [createUser.dto.ts](./src/user/DTO/createUser.dto.ts)
- [user.controller.ts](./src/user/user.controller.ts)

---

### 🔹 Q7 - Nested Object Validation + Custom PostalCode Validator

**Task:** Validate nested DTOs including `address` and `education`. Use custom validator for postal code.

- DTOs:
  - [address.dto.ts](./src/user/DTO/address.dto.ts)
  - [Education.dto.ts](./src/user/DTO/Education.dto.ts)
  - [userDetails.dto.ts](./src/user/DTO/userDetails.dto.ts)
- Validator:
  - [PostalCode.ts](./src/validators/PostalCode.ts)
- Controller:
  - [user.controller.ts](./src/user/user.controller.ts)

---

### 🔹 Q8 - Advanced Cross-Field and Header-Based Validation

**Task:** Handle DTO validation with:

- Cross-field checks (`fullTimeDetails` vs `contractorDetails`)
- Dynamic logic based on `X-Country-Code` header
- Metadata key pattern validation
- Hierarchical error structure

- DTOs:
  - [contractorDetails.dto.ts](./src/q8/DTO/contractorDetails.dto.ts)
  - [employmentDetails.dto.ts](./src/q8/DTO/employmentDetails.dto.ts)
  - [fullTimeDetails.dto.ts](./src/q8/DTO/fullTimeDetails.dto.ts)
  - [metaDataValidator.dto.ts](./src/q8/DTO/metaDataValidator.dto.ts)
- Validators:
  - [employeeType.ts](./src/validators/employeeType.ts)
  - [metaData.ts](./src/validators/metaData.ts)
- Error Formatter:
  - [formatError.ts](./src/q8/utils/formatError.ts)
- Controller & Service:
  - [q8.controller.ts](./src/q8/q8.controller.ts)
  - [q8.service.ts](./src/q8/q8.service.ts)

---

> 💡 Tip: All files are internally linked. Click any link to jump straight to the implementation.

====================================================================================

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
