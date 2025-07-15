This is a full stack web application to simulate a product order management system.
-> TECH STACK :
Frontend: Next.js (App Router v14), Tailwind CSS, Redux Toolkit
Backend: Node.js, Express.js, MongoDB, Multer (for image upload)
Authentication: JWT (JSON Web Token)

-> SETUP INSTRUCTIONS :
* Node.js (v18+)
* MongoDB installed and running
* Git

-> SETUP BACKEND:
cd backend
npm install

🔐 Create .env file in /backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

Start Backend Server
npm start
Your backend should now be running at: http://localhost:5000


-> SETUP FRONTEND

cd ../frontend
npm install

🚀 Start Frontend Development Server
npm run dev

Frontend will run on: http://localhost:3000


> ADMIN CREDENTIALS (FOR TESTING) :
   You can hardcode admin credentials or store them in a mongodb collection.
{
  "username": "admin",
   "password":"admin123"
}

