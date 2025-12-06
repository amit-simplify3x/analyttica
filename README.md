<!-- @format -->

# Analytics Dashboard

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-^7.2.4-purple?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-~5.9.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-^4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

This project is a modern, single-page analytics dashboard featuring a real-time notification system and data visualization charts. The application is built with a fast and robust technology stack, including React 19, Vite, and TypeScript, with a clean and responsive user interface styled using Tailwind CSS.

## ✨ Features

- **Modern Frontend Stack**: Leverages React 19 and Vite for an exceptionally fast and efficient development experience with Hot Module Replacement (HMR).
- **Type Safety**: Fully written in TypeScript, ensuring robust, maintainable, and error-free code.
- **Utility-First Styling**: Implements the latest Tailwind CSS v4 for a highly customizable and responsive design without writing custom CSS.
- **Data Visualization**: Integrates the [Recharts](https://recharts.org/) library to render beautiful and interactive data charts within the `AnalyticsDashboard` component.
- **Real-time Notification System**: Features a complete notification system managed by React Context (`NotificationProvider`), including:
  - A `NotificationBell` component to display unread notification counts.
  - A `NotificationCenter` to view, manage, and clear all notifications.
  - A `NotificationSimulator` to generate mock notifications for testing and demonstration purposes.
- **Responsive Layout**: The UI is built with a responsive grid system that gracefully adapts to various screen sizes, from mobile devices to large desktops.
- **Pre-configured Linting**: Comes with a ready-to-use ESLint setup to enforce code quality and a consistent style across the project.

## 🛠️ Technologies Used

- **Framework**: React
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charting Library**: Recharts
- **Linting**: ESLint
- **Package Manager**: npm

## ⚙️ Project Setup

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Ensure you have Node.js and npm installed on your machine. It is recommended to use Node.js version 18.x or newer.

- Node.js
- npm

### Installation

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/amit-simplify3x/analyttica.git
    ```

2.  **Navigate to the project directory:**

    ```sh
    cd analyttica
    ```

3.  **Install NPM packages:**
    ```sh
    npm install
    ```

## 🚀 Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

This command starts the development server. Open **http://localhost:5173** (or the URL shown in your terminal) to view the application in your browser. The page will automatically reload when you make changes.

### `npm run build`

This command builds the application for production. It first runs the TypeScript compiler (`tsc -b`) to check for type errors and then uses Vite to bundle the project into the `dist` directory. The output is optimized for the best performance.

### `npm run lint`

This command runs ESLint to analyze your code for potential errors and style issues, helping to maintain code quality and consistency.

### `npm run preview`

This command starts a local server to preview the production build from the `dist` folder. It's a great way to test the final application before deploying it.
