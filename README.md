# Notification Service - a notifications microservice 📢

<br>

<p align="center">
  <a href="#-about-the-project">About the project</a> •
  <a href="#-technologies">Technologies</a> •  
<a href="#-getting-started">Getting started</a> •
<a href="#-license">License</a>

</p>

## 👩‍💻 About the project

This project was developed with the goal of creating and managing a notification microservice in an organized, scalable, and well-structured way. Using NestJS as the main framework integrated with Prisma as the ORM, the application follows modern development principles such as SOLID architecture, dependency injection, and the factory pattern for creating complex objects and services. Business rules and use cases are implemented clearly, connecting all layers of the application, including routes, controllers, validations, and services. Additionally, the project includes automated tests to ensure quality and reliability, establishing a robust and sustainable solution.

## 🚀 Technologies 

- [Node.js](https://nodejs.org/)
- [Nest.js](https://nestjs.com/)
- [Jest.js](https://jestjs.io/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)

## Functionalities Supported by the API

### Functional requirements

-  Create notification;
-  List notification recipient by id;
-  Count notifications from recipient id;
-  Get recipient data from notification id;
-  Cancel notification by id;
-  Mark notification as read;
-  Mark notification as unread;
 
## 💻 Getting started

### Requirements

- Before starting, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

**Clone the project and access the folder**

```bash
$ git clone https://github.com/leandrorodrigues00/notification-service && cd notification-service
$ cd notification-service
```

**Follow the steps below**

```bash
# Install the dependencies
$ pnpm i

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
$ cp .env.example .env
 

# Start the app
$ pnpm run start:dev
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with 💜&nbsp; by  Leandro Rodrigues
</p>
