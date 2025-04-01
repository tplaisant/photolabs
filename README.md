# Photolabs

PhotoLabs is a React-based photo-sharing application that allows users to browse, like, and view details of various photos. This project was developed as part of the Web Development React course.

View a collection of photos.
Display selected photo in a modal with detailed information.
Like/Unlike photos.

Screenshots
Homepage View
![Homepage screenshot](./screenshots/homepage.jpg)
Photo Modal View
![Modal View](./screenshots/modal.jpg)
## Setup

# 📦 Server Backend

## 🚀 Overview
This is the backend server for the application, built with **Node.js** and **Express**. It handles API requests, database interactions, and real-time communication via **Socket.io**.

## 📂 Project Structure
```
server/
├── src/
│   ├── index.js         # Main entry point
│   ├── db/             # Database schema & seed data
│   ├── routes/         # API route handlers
│   ├── setupTests.js   # Test setup
├── package.json        # Project dependencies & scripts
├── .env                # Environment variables (ignored in Git)
```

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/server.git
cd server
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file and configure it as needed.

### 4️⃣ Database Setup
If using **PostgreSQL**, run the following command to reset the database:
```sh
npm run reset
```

### 5️⃣ Start the Server
```sh
npm start
```
The server will run on `http://localhost:3000` (or as configured in `.env`).

---

## 📦 Dependencies
The project uses the following main dependencies:

### **Runtime Dependencies**
| Package     | Version  | Description |
|------------|----------|-------------|
| `express`  | ^4.16.4  | Web framework for Node.js |
| `body-parser` | ^1.18.3 | Middleware for parsing JSON & URL-encoded data |
| `cors` | ^2.8.5 | Enables Cross-Origin Resource Sharing |
| `dotenv` | ^7.0.0 | Loads environment variables from `.env` file |
| `helmet` | ^3.18.0 | Security middleware for HTTP headers |
| `pg` | ^8.14.1 | PostgreSQL client |
| `socket.io` | ^2.2.0 | WebSockets for real-time communication |
| `ws` | ^7.0.0 | WebSocket implementation |

### **Development Dependencies**
| Package     | Version  | Description |
|------------|----------|-------------|
| `jest`  | ^24.8.0  | JavaScript testing framework |
| `supertest` | ^4.0.2 | HTTP assertions for testing |

---

Refer to backend/readme for further details.
[Backend Setup Instructions](/backend/)

# 🌐 Frontend

## 🚀 Overview
This is the **React** frontend for the application, built with **Vite** for fast development and optimized builds.

## 📂 Project Structure
```
frontend/
├── src/                 # Source code
│   ├── components/      # React components
│   ├── pages/           # Page components
│   ├── App.js           # Main application component
│   ├── main.js          # Entry point
├── public/              # Static assets
├── package.json         # Project dependencies & scripts
├── vite.config.js       # Vite configuration
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Ignored files
```

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/frontend.git
cd frontend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```
The app will be available at `http://localhost:5173` by default.

---

## 📦 Dependencies
### **Runtime Dependencies**
| Package     | Version  | Description |
|------------|----------|-------------|
| `react`  | ^18.3.1  | JavaScript library for building UI |
| `react-dom` | ^18.3.1 | React DOM renderer |
| `axios` | ^1.8.4 | Promise-based HTTP client |

### **Development Dependencies**
| Package     | Version  | Description |
|------------|----------|-------------|
| `vite`  | 4.4.2  | Fast frontend build tool |
| `jest` | ^29.7.0 | JavaScript testing framework |
| `eslint` | 8.57.0 | Linter for maintaining code quality |
| `sass` | 1.59.2 | CSS preprocessor |
| `@testing-library/react` | 14.3.1 | Testing utilities for React |

---

Refer to frontend/readme for further details.
[Frontend Setup Instructions](/frontend/)