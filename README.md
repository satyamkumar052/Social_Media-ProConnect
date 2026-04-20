# ProConnect – Professional Social Networking Platform

A full-stack social media application built from scratch, enabling users to create profiles, connect with other professionals, share posts with images, and engage through comments. ProConnect demonstrates modern web development practices with a secure backend and responsive frontend.

## 📋 Quick Links

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation--setup)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)

---

## ✨ Features

### User Management

- **Custom Authentication System** - Built from scratch without third-party auth libraries
- **User Registration & Login** - Secure signup/login functionality
- **Profile Management** - Create and update user profiles
- **Password Security** - Bcrypt hashing for secure password storage

### Social Connectivity

- **Connection System** - Send, accept, and reject connection requests
- **User Discovery** - Browse and discover other professionals
- **Profile Viewing** - View detailed profiles of other users

### Content & Interaction

- **Post Creation** - Create posts with image uploads
- **Image Management** - Upload and manage images using Multer
- **Comments System** - Comment on posts and engage with content
- **Interactive Dashboard** - View feed and connections in real-time

### Additional Features

- **Responsive UI** - Mobile-friendly dashboard layout
- **Protected Routes** - Secure API endpoints and frontend routes
- **File Uploads** - Multer integration for image handling
- **PDF Generation** - Export user-related data as PDF
- **CORS Support** - Cross-origin resource sharing enabled

---

## 🛠 Tech Stack

### Frontend

| Technology            | Purpose                          |
| --------------------- | -------------------------------- |
| **Next.js**           | React framework with SSR support |
| **React**             | UI component library             |
| **Redux Toolkit**     | State management                 |
| **Bootstrap**         | Responsive UI styling            |
| **Axios**             | HTTP client for API calls        |
| **JavaScript (ES6+)** | Programming language             |

### Backend

| Technology           | Purpose            |
| -------------------- | ------------------ |
| **Node.js**          | JavaScript runtime |
| **Express.js**       | Web framework      |
| **MongoDB**          | NoSQL database     |
| **Mongoose**         | MongoDB ODM        |
| **MVC Architecture** | Design pattern     |

### Security & Utilities

| Tool                  | Purpose                             |
| --------------------- | ----------------------------------- |
| **bcrypt**            | Password hashing                    |
| **dotenv**            | Environment variables               |
| **CORS**              | Cross-origin requests               |
| **Multer**            | File upload handling                |
| **PDFKit**            | PDF generation                      |
| **Custom Middleware** | Request validation & authentication |

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/satyamkumar052/Social_Media.git
cd linkedin
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```bash
touch .env
```

Add the following environment variables:

```env
# MongoDB Connection
MONGOURL=mongodb+srv://username:password@cluster.mongodb.net/linkedin_db?retryWrites=true&w=majority

# Server Configuration
PORT=5000
NODE_ENV=development
```

Start the development server:

```bash
npm run dev
```

The backend server will run on `http://localhost:5000`

### 3. Frontend Setup

In a new terminal, navigate to the frontend directory:

```bash
cd frontend
npm install
```

Create a `.env.local` file in the frontend directory:

```bash
touch .env.local
```

Add backend API URL:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Start the development server:

```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

---

## 💻 Usage

### Starting Both Servers

**Terminal 1 (Backend):**

```bash
cd backend
npm run dev
```

**Terminal 2 (Frontend):**

```bash
cd frontend
npm run dev
```

### Accessing the Application

1. Open your browser and navigate to `http://localhost:3000`
2. Sign up with your credentials
3. Create your profile
4. Start connecting with other users
5. Create posts with images
6. Engage with others through comments

---

## 📡 API Endpoints

### User Routes

| Method | Endpoint              | Description         |
| ------ | --------------------- | ------------------- |
| POST   | `/api/users/register` | User registration   |
| POST   | `/api/users/login`    | User login          |
| GET    | `/api/users/:id`      | Get user profile    |
| PUT    | `/api/users/:id`      | Update user profile |
| GET    | `/api/users`          | Get all users       |

### Post Routes

| Method | Endpoint                  | Description         |
| ------ | ------------------------- | ------------------- |
| POST   | `/api/posts`              | Create a new post   |
| GET    | `/api/posts`              | Get all posts       |
| GET    | `/api/posts/:id`          | Get a specific post |
| PUT    | `/api/posts/:id`          | Update a post       |
| DELETE | `/api/posts/:id`          | Delete a post       |
| POST   | `/api/posts/:id/comments` | Add comment to post |
| GET    | `/api/posts/:id/comments` | Get post comments   |

### Connection Routes

| Method | Endpoint                      | Description             |
| ------ | ----------------------------- | ----------------------- |
| POST   | `/api/connections/request`    | Send connection request |
| GET    | `/api/connections/requests`   | Get connection requests |
| PUT    | `/api/connections/accept/:id` | Accept connection       |
| PUT    | `/api/connections/reject/:id` | Reject connection       |
| GET    | `/api/connections`            | Get user connections    |

---

## 🌐 Live Demo

**Check out the deployed application:** [ProConnect - Live Demo](https://proconnect-topaz.vercel.app/)
