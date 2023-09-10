# Panchami Associates Express.js Application

This repository contains an Express.js application for managing various features related to Panchami Associates. It includes functionalities such as user management, image uploading to Firebase Cloud Storage, handling queries, and managing testimonials. This README file provides an overview of the application's structure and how to get it up and running.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Application Structure](#application-structure)
- [Routes and Functionality](#routes-and-functionality)
- [Firebase Setup](#firebase-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before running the application, you need to have the following software and services installed/configured:

- [Node.js](https://nodejs.org/): Make sure you have Node.js installed on your system.
- [MongoDB](https://www.mongodb.com/): Install and configure a MongoDB server or use a cloud-based MongoDB service.
- [Firebase](https://firebase.google.com/): Set up a Firebase project for image storage.

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Panchamiassociates/panchami_Associates.git
   ```

2. Navigate to the project directory:

   ```bash
   cd panchami_Associates
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Configure the application by creating a `.env` file in the root directory and adding the necessary environment variables. You can use the `.env.example` file as a template.

5. Start the Express.js server:

   ```bash
   npm start
   ```

   The server will be running at `http://localhost:3001`.

## Application Structure

The application has the following structure:

- `app.js`: The main entry point of the Express.js application.
- `Router/`: Contains route handlers for various functionalities.
- `models/`: Defines the Mongoose models for MongoDB.
- `firebase-adminsdk-8ej16-9e0e358bb3.json`: Your Firebase service account key (for image uploads).
- `public/`: Static assets (e.g., images) can be stored here.
- `uploads/`: Temporary storage for uploaded images before they are saved to Firebase Cloud Storage.
- `.env.example`: Example environment variables file.

## Routes and Functionality

The application includes the following routes and functionality:

- User Management (`/api/v1/user`): Allows you to create, read, update, and delete user records.
- User Login (`/api/v1/login`): Authenticates users.
- Image Upload (`/upload-image`): Uploads images to Firebase Cloud Storage.
- Projects (`/projects`): Fetches project data from MongoDB.
- Queries (`/api/v1/queries`): Handles queries with CRUD operations.
- Testimonials (`/api/v1/testimonial`): Manages testimonials with CRUD operations.

## Firebase Setup

For image uploads, the application uses Firebase Cloud Storage. To set up Firebase:

1. Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
2. Generate a service account key JSON file.
3. Replace `firebase-adminsdk-8ej16-9e0e358bb3.json` in the project with your service account key file.
4. Configure Firebase using the credentials in `app.js`.

## Usage

Once the application is up and running, you can access the various routes to manage users, upload images, handle queries, and manage testimonials. Be sure to review the route handlers in the `Router/` directory for more details on each route's functionality.

## Contributing

Contributions to this project are welcome. Please follow the standard GitHub fork and pull request workflow.

## License

This project is licensed under the [MIT License](LICENSE).