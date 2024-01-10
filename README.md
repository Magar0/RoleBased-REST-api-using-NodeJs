# REST API
a RESTful API with user authentication, role-based access control, and secure API endpoints.
### vercel deployed link :
https://role-based-rest-api-using-node-js.vercel.app/

## Geting started 
#### npm install
to install all dependencies

#### add .env file and add this:
  MONGODB_URI="your mongo db URI/(database name)" <br/> 
  SECRET_KEY= "your secret key for password encryption"

#### node server.js 
To start your server

# API Endpoints

| Endpoint | Method | URL Path | Request Body | Response Format |
|---|---|---|---|---|
| Signup | POST | /api/signup | { "name": "string", "phone": "string", "email": "string" // Optional, either phone or email is required, "password": "string", "role": "string", // Optional, defaults to "user" "profileImage": "string" // Optional } | JSON (user details and authentication token) |
| Login | POST | /api/login | { "phone": "string", "email": "string", // Optional, either phone or email is required "password": "string" } | JSON (user details and authentication token) |
| Get User Own Details | GET | /api/user | none | JSON ( user details) |
| Modify User Details | PATCH | /api/user | { "name": "string", // Optional "profileImage": "string" // Optional } | JSON (updated user details) |
| Delete User | DELETE | /api/user | None | JSON (deleted user details) |
| Get All Users (Admin) | GET | /api/admin | None | JSON (list of all users) |
| Get Specific User (Admin) | GET | /api/admin/:id | None | JSON (specified user details) |
| Modify User Details (Admin) | PUT | /api/admin/:id | { "name": "string", "email": "string", "phone": "string", "password": "string", "role": "string", "profileImage": "string" } | JSON (updated user details) |
| Delete User (Admin) | DELETE | /api/admin/:id | None | JSON (deleted user details) |
