# REST API
a RESTful API with user authentication, role-based access control, and secure API endpoints.
### vercel deployed link :
https://role-based-rest-api-using-node-js.vercel.app/

## Geting started 
### npm install
to install all dependencies

### add .env file and add this:
  MONGODB_URI="your mongo db URI/(database name)" <br/> 
  SECRET_KEY= "your secret key for password encryption"

### node server.js 
To start your server

# Authentication

This API uses JSON Web Tokens (JWTs) for authentication. To access protected endpoints, you must include a valid JWT in the `Authorization` header of your requests.
To obtain a JWT, make a POST request to the '/api/login' or '/api/signup' endpoint with your credentials. Upon successful authentication, you'll receive a JWT in the response.


# API Endpoints

| Endpoint | Method | URL Path | Request Body | Response Format | Authentication |
|---|---|---|---|---|---|
| Signup | POST | /api/signup | { "name": "string", "phone": "string", "email": "string" // Optional, either phone or email is required, "password": "string", "role": "string", // Optional, defaults to "user" "profileImage": "string" // Optional } | JSON (user details and authentication token) | No |
| Login | POST | /api/login | { "phone": "string", "email": "string", // Optional, either phone or email is required "password": "string" } | JSON (user details and authentication token) | No |
| Get User Own Details | GET | /api/user | none | JSON ( user details) | Yes |
| Modify User Details | PATCH | /api/user | { "name": "string", // Optional "profileImage": "string" // Optional } | JSON (updated user details) | Yes |
| Delete User | DELETE | /api/user | None | JSON (deleted user details) | Yes |
| Get All Users (Admin) | GET | /api/admin | None | JSON (list of all users) | Yes |
| Get Specific User (Admin) | GET | /api/admin/:id | None | JSON (specified user details) | Yes |
| Modify User Details (Admin) | PUT | /api/admin/:id | { "name": "string", "email": "string", "phone": "string", "password": "string", "role": "string", "profileImage": "string" } | JSON (updated user details) | Yes |
| Delete User (Admin) | DELETE | /api/admin/:id | None | JSON (deleted user details) | Yes |
