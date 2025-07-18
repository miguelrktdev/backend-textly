# Textly API

This repository contains the backend service for **Textly**, a minimalist social media application focused exclusively on sharing text-based content.

## ✨ Features

*   **User Authentication**: Secure user registration and login.
*   **Post Management**: Create, read, update, and delete text posts.
*   **User Profiles**: View and manage user profiles.
*   **Timeline Feed**: A simple feed to view posts from other users.

*(Note: Some features are under development.)*

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your development machine:

*   [Node.js](https://nodejs.org/) (v18 or newer recommended)
*   [pnpm](https://pnpm.io/)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/backend-textly.git
    cd backend-textly
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root of the project. This file will store sensitive information and environment-specific configurations. You can start by copying the example file if one exists.
    *(Note: As the project evolves, the required environment variables will be listed here.)*

## 🖥️ Usage

### Running the application

*   **Development Mode:**
    Runs the server with hot-reloading on file changes.
    ```bash
    pnpm dev
    ```

*   **Production Mode:**
    Runs the application in a production-ready state.
    ```bash
    pnpm start
    ```

### Available Scripts

*   `pnpm dev`: Starts the application in development mode with file watching via `tsx`.
*   `pnpm start`: Starts the application using `tsx`.
*   `pnpm commit`: Guides you through creating a conventional commit message with `gitmoji`.

## 🛠️ Technologies & Tools

*   **Runtime**: [Node.js](https://nodejs.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **TypeScript Runner**: [tsx](https://github.com/esbuild-kit/tsx)
*   **Code Quality**: [Biome](https://biomejs.dev/) (Linter, Formatter)

## 📁 Project Structure

The project follows a feature-first modular structure to keep the codebase organized and scalable.

```
src/
├── app.ts          # Main application entry point
├── config/         # Environment variables and configuration
├── controllers/    # Request handlers (Express/Fastify routes)
├── middlewares/    # Custom middleware functions
├── models/         # Data models and schemas (e.g., Prisma, TypeORM)
├── repositories/   # Data access layer (database interactions)
├── services/       # Business logic
└── utils/          # Utility functions and helpers
```

## 🤝 Contributing

Contributions are welcome! Please follow the existing code style and conventions. Commits should be made using the `pnpm commit` command to adhere to the [Gitmoji](https://gitmoji.dev/) standard.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`pnpm commit`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

