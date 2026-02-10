🟩 To-Do API

A simple RESTful To-Do API built with Node.js, Express, and Supabase for authentication and data storage.

This API allows users to create, read, update, and delete to-do items — ideal as a backend for to-do apps, learning projects, or quick prototypes.

🚀 Features

User authentication (Supabase)

CORS enabled

JSON API for todos

Environment configuration with .env

Clean Express routing

🛠️ Tech Stack
Component	Technology
Server	Node.js (v25.6.0)
Framework	Express
Auth / DB	Supabase (@supabase/supabase-js)
Environment	dotenv
📦 Installation

Clone the repo

git clone https://github.com/ghost2468developer/to-do-api.git

cd to-do-api

Install dependencies

npm install

Create .env file

PORT=4000
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_or_service_key

Start server

nodemon src/index.js

📡 API Endpoints
🔑 Authentication
Method	URL	Description
POST	/api/auth/signup	Create a new user
POST	/api/auth/login	Authenticate user
📝 To-Do Routes
Method	URL	Description
GET	/api/todos	Fetch all todos
GET	/api/todos/:id	Fetch a single todo
POST	/api/todos	Create a new todo
PATCH	/api/todos/:id	Update an existing todo
DELETE	/api/todos/:id	Delete a todo
📦 Example Request

Create a To-Do

Request:

curl -X POST http://localhost:4000/api/todos \
-H "Content-Type: application/json" \
-d '{
  "title": "Finish docs",
  "completed": false
}'


Response:

{
  "id": "123",
  "title": "Finish docs",
  "completed": false
}

🧪 Testing

Test scripts included for API routes and authentication. Use a test runner like Jest or Mocha.

📌 Environment Variables

Your .env should contain:

PORT=4000  
SUPABASE_URL=...  
SUPABASE_ANON_KEY=...  

🧭 Project Structure
/src
  /routes
    auth-routes.js
    todo-routes.js
  index.js
.gitignore
package.json
.env
test-api.js
test-api-auth.js

📜 License

This project is open source and free to use 🎉