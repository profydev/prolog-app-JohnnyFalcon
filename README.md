## The Application

The application is an error logging and monitoring tool similar to Sentry or Rollbar. Note: you have to click the "Dashboard" link in the upper right corner to see the app as shown in the screenshot below.

![The running application](docs/app.png)

## Getting Started

### 1. Clone & Install

This project is built with Next.js, TypeScript, Cypress & styled-components among others. To start working on the project, first clone the repository on your local machine and install the dependencies.

```bash
npm install
```

### 2. Create .env File

**copy the `.env.template` file to a new file called `.env`.** This file contains the required environment variables that are injected by Next.js via the `dotenv` package.

### 3. Run Development Server

Finally, run the development server:

```bash
npm run dev
```

Now you can open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Tests

To run the Cypress tests on your local machine use this command:

```bash
npm run cypress
```

## Storybook

Storybook is a great tool to document your components and visually test them in isolation. To open Storybook run

```bash
npm run storybook
```
