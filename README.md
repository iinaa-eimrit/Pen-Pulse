# **Blog API with Cloudflare Workers, Prisma, and Zod Validation**

This project is a serverless Blog API built using **Cloudflare Workers**, **Prisma** with **Accelerate Extension**, and **Zod** for schema validation. It features secure user authentication using JWT, API routes for blog CRUD operations, and a **monorepo structure** for shared types using `@amrit_16/social-common`.

## **Table of Contents**
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [Routes](#routes)
- [Usage](#usage)
- [Deployment](#deployment)
- [Monorepo with Shared Types](#monorepo-with-shared-types)

---

## **Features**
- **Cloudflare Workers** for serverless, scalable hosting.
- **Prisma** ORM with **Accelerate** extension for optimized database queries.
- **JWT Authentication** for secure access to API routes.
- **Zod** for request validation, ensuring consistent data structures.
- **Monorepo** setup with a shared `@amrit_16/social-common` package for data types.

---

## **Project Structure**
The project is organized as follows:
```plaintext
.
├── backend/          # Backend routes and server setup
├── common/           # Shared Zod validation schemas and data types
└── README.md         # Project documentation
```
----------

## **Setup and Installation**

### **Prerequisites**

-   **Node.js** installed
-   **NPM**
-   **Cloudflare CLI** (`npx wrangler login`)
-   **Prisma** and **Prisma Client** for database interaction

### **Steps**

1.  Clone the repository:
    
    bash
    
    Copy code
    
    `git clone <repository-url>
    cd blog-api` 
    
2.  Install dependencies for both backend and common:
    
    bash
    
    Copy code
    
    `cd common
    npm install
    npm run build
    npm publish --access public  # optional, for publishing to npm
    
    cd ../backend
    npm install` 
    
3.  Initialize **Prisma** and configure your **database**:
    
    bash
    
    Copy code
    
    `npx prisma init` 
    
4.  **Generate Prisma Client**:
    
    bash
    
    Copy code
    
    `npx prisma generate` 
    
5.  Install Cloudflare Wrangler CLI:
    
    bash
    
    Copy code
    
    `npm install -g wrangler` 
    
6.  Login to Cloudflare:
    
    bash
    
    Copy code
    
    `npx wrangler login` 
    
7.  Add **Environment Variables** (explained below).
    

----------

## **Environment Variables**

Configure the following environment variables in your Cloudflare dashboard or a `.env` file (for local testing):

-   `JWT_SECRET` - Secret key for JWT signing and verification.
-   `DATABASE_URL` - Database connection URL for Prisma.

----------

## **Routes**

### **1. User Authentication**

-   **Sign Up** - `POST /api/v1/signup`
    -   **Request Body**: `{ "email": "user@example.com", "password": "securepass", "name": "User" }`
    -   **Response**: `{ "jwt": "user-token" }`
-   **Sign In** - `POST /api/v1/signin`
    -   **Request Body**: `{ "email": "user@example.com", "password": "securepass" }`
    -   **Response**: `{ "jwt": "user-token" }`

### **2. Blog Management**

-   **Create Blog Post** - `POST /api/v1/blog`
    
    -   **Headers**: `Authorization: Bearer <token>`
    -   **Request Body**: `{ "title": "Blog Title", "content": "Blog Content" }`
    -   **Response**: `{ "id": "post-id" }`
-   **Update Blog Post** - `PUT /api/v1/blog`
    
    -   **Headers**: `Authorization: Bearer <token>`
    -   **Request Body**: `{ "id": "post-id", "title": "Updated Title", "content": "Updated Content" }`
    -   **Response**: `updated post`
-   **Get Blog Post by ID** - `GET /api/v1/blog/:id`
    
    -   **Response**: `{ "title": "Blog Title", "content": "Blog Content", "authorId": "user-id" }`

----------

## **Usage**

To test API endpoints, use **Postman** or any API client.

1.  **Sign Up** to create a new user and obtain a JWT token.
2.  **Sign In** with the registered user credentials to obtain a JWT token.
3.  Use the JWT token in the `Authorization` header (e.g., `Authorization: Bearer <token>`) to access the blog routes.

### Example:

bash

Copy code

`curl --request POST \
  --url http://localhost:8787/api/v1/signup \
  --header 'Content-Type: application/json' \
  --data '{
    "email": "user@example.com",
    "password": "password123"
  }'` 

----------

## **Deployment**

1.  Build and deploy your app using **Wrangler**.
    
    bash
    
    Copy code
    
    `npm run deploy` 
    
2.  Update environment variables on **Cloudflare Dashboard** under **Workers > Settings**.
    
3.  Test production API URL in Postman.
    

----------

## **Monorepo with Shared Types**

### **Creating the `Common` Package**

1.  Create a folder named `common` with Zod types for data validation.
2.  Publish to npm if needed for use in multiple projects.

### **Types Defined in Common**

-   **signupInput**: Input validation for sign-up.
-   **signinInput**: Input validation for sign-in.
-   **createPostInput**: Input validation for creating a post.
-   **updatePostInput**: Input validation for updating a post.
