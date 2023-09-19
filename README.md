# Gemini Sports Todo Frontend 🚀

Gemini Sports Tasks Challenge is a Todo List web application built using React, Vite, TypeScript, Tailwind CSS, GraphQL, Shadcn (Tailwind Components Library), and Zod (Data Validator). This project provides the front-end functionalities for managing tasks and connects to a Nest.js backend project.

![Gemini Sports Tasks Preview](https://github.com/oliveirabalsa/gemini-todo-frontend/assets/57500163/fac386f5-48ac-4234-a9d1-0c24167478b2)

## 🛠️ Prerequisites

Before running the Gemini Sports Tasks application, ensure that you have the following prerequisites installed and configured:

1. **Node.js and npm**: Make sure you have Node.js (v16 or later) and npm (v7 or later) installed on your system. You can download them from [nodejs.org](https://nodejs.org/).

2. **Nest.js Backend**: Ensure that you have the Nest.js backend project running. You can find the backend project at [Gemini Todo Backend](https://github.com/oliveirabalsa/gemini-todo-backend).

3. **Environment Variables**: Create a `.env` file in the root of this project and set the following environment variable:

   ```
   REACT_APP_GRAPHQL_URI=http://localhost:3000/graphql
   ```

   Update the URI if the backend GraphQL endpoint is hosted elsewhere or using another port.

## 🚀 Getting Started

Follow these steps to set up and run the Gemini Sports Tasks application:

1. Clone this repository:

   ```bash
   git clone https://github.com/oliveirabalsa/gemini-todo-frontend.git
   ```

2. Change to the project directory:

   ```bash
   cd gemini-sports-tasks
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   This will start the development server and open the application in your default web browser at `http://localhost:8080`.

## ✨ Features

- ✅ Create, Read, Update, and Delete sports-related tasks.
- 🔗 Connects to a Nest.js backend via GraphQL to persist data.
- ⚙️ Utilizes TypeScript for strong typing and code safety.
- 🎨 Integrates Tailwind CSS for responsive and stylish UI.
- 🧩 Uses Shadcn for pre-designed Tailwind CSS components.
- 🚧 Implements Zod for data validation and error handling.

## 📁 Project Structure

The project structure follows the conventions set by Vite and React. Here is a brief overview of important directories and files:

- `src/`: Contains the source code for the application.
  - `components/`: Reusable React components.
    - `ui/`: Generic UI components.
    - `task/`: Complete components related to tasks.
  - `services/`: Various services used in the application.
    - `graphql/`: GraphQL queries and mutations.
    - `zod/`: Data validation and error handling using Zod.
  - `pages/`: Application routes and pages.
  - `styles/`: CSS styles and Tailwind CSS configuration.
  - `lib/utils/`: Utility functions.
- `vite.config.js`: Vite configuration file.
- `tsconfig.json`: TypeScript configuration file.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Author:** Leonardo Oliveira Balsalobre  
**Email:** oliveirabalsa2@gmail.com
