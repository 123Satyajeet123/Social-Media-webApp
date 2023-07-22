# Social Media WebApp - React, Node.js, MongoDB

<p align="center">
  <img src="https://github.com/123Satyajeet123/Social-Media-webApp/assets/103361055/e048a171-c45a-4785-8b91-ad0e74248e67" alt="mern stack banner" width=800vw>
</p>


This repository contains a fully functional social media web application built using React for the frontend, Node.js for the backend, and MongoDB as the database. The app includes features like user authentication using JWT, creating and liking posts, adding and removing friends, and more.

## Features

- User Authentication: JWT authentication is implemented to ensure secure user registration and login.
- Create and Like Posts: Users can create new posts and like posts from other users.
- Add and Remove Friends: The app supports adding and removing friends for social connections.
- Fully Functional Backend: The backend code includes controllers, models, routes, and middleware to handle various operations.

## Prerequisites

Before running the Social Media WebApp, ensure you have the following dependencies installed:

- Node.js and npm
- MongoDB

## How to Use

Follow these steps to set up and run the Social Media WebApp:

### 1. Clone the Repository

```
git clone https://github.com/123Satyajeet123/Social-Media-webApp.git
cd social-media-webapp
```


### 2. Install Dependencies

Navigate to the "server" folder and install the required packages.
```
cd server
npm install
```


### 3. Configure MongoDB

Make sure you have MongoDB installed and running on your machine. Update the MongoDB connection settings in `database/db.js` if necessary.


### 4. Start the Backend Server

Run the following command to start the Node.js backend server:
```
node index.js
```
The backend server will be running on http://localhost:5000.



### 5. Work on Frontend

While the backend is running, you can now work on the frontend. Switch to the "client" folder and set up the frontend environment.
```
cd ../client
npm install
```



### 6. Start the Frontend Development Server

Run the following command to start the React frontend development server:
```
npm start
```

The frontend development server will be running on http://localhost:3000.

### 7. Explore the WebApp

Open your browser and navigate to http://localhost:3000. You should see the Social Media WebApp in action. Create an account, log in, and start using the app to create posts, like posts, and connect with friends.

## Backend Structure

The "server" folder contains the following subfolders and files:

- `controllers`: Contains functions to handle various operations (e.g., post creation, user authentication).
- `models`: Contains MongoDB schemas for user and post data.
- `database`: Contains the database connection setup.
- `middleware`: Contains middleware functions to handle authentication and authorization.
- `routes`: Contains Express routes for different API endpoints.
- `index.js`: The main entry point for the backend server.

## Future Enhancements

The Social Media WebApp is just the beginning! You can further enhance the app by adding more features like direct messaging, comment functionality, user profile customization, and more.

## License

This project is licensed under the 'I don't know what I'm doing' License
