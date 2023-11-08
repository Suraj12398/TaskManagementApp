# Task Management Application

## Overview
The Task Management Application is designed to help users manage their tasks efficiently. It provides functionality to log in, sign up, view tasks, add tasks, and logout. This documentation outlines the app's structure, components, services, and features.

## Features
- **Login and Signup:** Users can register for a new account or log in using their credentials.
- **Dashboard:** Provides a user-specific task dashboard.
- **Task Management:** Add, view, update, and delete tasks.
- **User Authentication:** Secure login and logout functionality.

## Technologies Used
- **Frontend**: Angular
- **Backend**: Spring Boot
- **Database**: (Specify the Database used)

## Application Structure
The application is divided into different sections:
- **Components**: Angular components for different views.
- **Services**: Angular services to manage API calls and data handling.

## Components
1. **Login Component**
   - Handles user authentication.
2. **Signup Component**
   - Allows users to register for a new account.
3. **View Task Component**
   - Displays the list of tasks and allows users to manage tasks.
4. **Add Task Component**
   - Provides the functionality to add new tasks.
5. **Navbar Component**
   - Navigation bar and logout functionality.

## Services
1. **User Service**
   - Manages user-related functionality such as login, signup, and authentication.
2. **Task Service**
   - Handles tasks related functionalities like adding, deleting, updating, and retrieving tasks.

## Backend Integration
The application interacts with the Spring Boot backend to perform user authentication and manage tasks. The backend offers RESTful APIs for various CRUD operations.

## Local Storage Usage
User data is stored in the browser's local storage for session management and persistence.

## Future Improvements
- Implement user role-based authentication.
- Enhance UI/UX for better user interaction.
- Include search and filter functionalities in the task management section.
- Use a secure token-based authentication system.

## Conclusion
The Task Management Application provides a user-friendly interface to manage tasks efficiently. It integrates Angular on the front end and Spring Boot on the backend. It offers essential functionalities to handle user authentication and task management effectively.
