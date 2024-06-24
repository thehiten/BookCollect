# BookCollect Website

BookCollect is a web application built with the MERN stack that allows users to manage their book collections. Users can register, login, add books to their collection, and contact the admin for support.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Pages and Functionality](#pages-and-functionality)
7. [API Endpoints](#api-endpoints)

## Introduction

BookCollect is a user-friendly platform for book enthusiasts to catalog and manage their personal libraries. Users can create an account, log in, add books to their collection, view book details, and contact support.

## Features

- User Registration
- User Login and Logout
- Add, Edit, Delete Books
- View Book Collection
- Contact Form

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- JWT for Authentication
- Bootstrap for Styling



## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/thehiten/BookCollect.git


2. cd BookCollect
3. npm install
cd client
npm install
cd ..

4. MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

5. npm run dev

Usage
Register an account.
Log in to your account.
Add new books to your collection.
View, edit, or delete books.
Use the contact form to get in touch with support.
Pages and Functionality
1. Home Page
Welcome message and brief introduction to the site.
2. Registration Page
Form to create a new user account.
3. Login Page
Form to log in to an existing account.
4. Dashboard
User's main page after login, showing an overview of their book collection.
5. Add Book Page
Form to add a new book to the collection.
6. Edit Book Page
Form to edit the details of an existing book.
7. Book Details Page
Detailed view of a single book.
8. Contact Page
Form to send a message to the support team.
9. Profile Page
User profile information and option to update details.
10. Logout
Functionality to log the user out of the application.
API Endpoints
Authentication
POST /api/auth/register - Register a new user
POST /api/auth/login - Login a user
Books
GET /api/books - Get all books
POST /api/books - Add a new book
GET /api/books/:id - Get a book by ID
PUT /api/books/:id - Update a book by ID
DELETE /api/books/:id - Delete a book by ID

1. Project Title and Description
Explanation:
This section introduces the project with its name and a brief overview. It includes the main purpose and key functionalities of the application. This is essential to give the reader an immediate understanding of what the project is about.

2. Table of Contents
Explanation:
The table of contents provides a structured overview of the sections included in the README file. This helps users quickly navigate to the parts of the document they are interested in, especially as the README grows longer.

3. Introduction
Explanation:
The introduction expands on the project description by providing more context about the application. It explains what the application does, who it is for, and why it was created. This section sets the stage for the rest of the document and gives the reader a reason to be interested in the project.

4. Features
Explanation:
This section lists the main features of the application. It gives potential users and contributors a clear idea of what functionalities are available and what they can expect from the application. Highlighting features helps to showcase the capabilities of the project.

5. Technologies Used
Explanation:
Listing the technologies used in the project helps others understand the technical stack and the tools that were utilized. This is especially useful for developers who are considering contributing to the project, as it gives them an idea of the skills they will need.

6. Installation
Explanation:
The installation section provides step-by-step instructions on how to set up the project locally. It typically includes commands to clone the repository, install dependencies, set up environment variables, and run the project. This is crucial for making the project accessible to new developers who want to run or contribute to the application.

7. Usage
Explanation:
This section explains how to use the application once it is set up. It might include instructions on how to register, log in, add books, and use other features. Providing usage instructions ensures that users can effectively interact with the application without needing to figure out everything on their own.

8. Pages and Functionality
Explanation:
Here, each page of the application is described along with its functionality. This helps users and contributors understand the structure of the application and what each part does. It also serves as a guide for navigating through the different features.

9. API Endpoints
Explanation:
For projects that involve back-end APIs, listing the available endpoints is crucial. This section includes details about each endpoint, such as the HTTP method, URL, and purpose. It helps developers understand how to interact with the backend services, whether they are using the API directly or integrating it into other applications.

10. Screenshots
Explanation:
Including screenshots provides a visual representation of the application. It can help users and contributors quickly grasp what the application looks like and how it operates. This can be particularly helpful in conveying the user interface and user experience aspects of the project.

11. Contributing
Explanation:
The contributing section provides guidelines for those who want to contribute to the project. It might include instructions on how to fork the repository, create a new branch, commit changes, and open a pull request. Clear contribution guidelines are essential for encouraging collaboration and ensuring a smooth workflow for contributors.

12. Contact
Explanation:
This section provides contact information for the project maintainers. It usually includes an email address or a link to a contact form. Providing contact details ensures that users and contributors can reach out for support, feedback, or collaboration opportunities.
