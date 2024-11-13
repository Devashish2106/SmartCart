# Smart Cart Backend App

**Deployed Link**: [Smart Cart Backend](https://smart-cart-tc2d.onrender.com)

This is the backend service for the Smart Cart application, which enables secure user registration, authentication, and product and cart management functionalities. The app is built using Node.js and Firebase Authentication for user management and Firestore for data persistence.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [File Structure](#file-structure)
- [API Endpoints](#api-endpoints)
- [Setup Instructions](#setup-instructions)

## Features
- **User Authentication**: Register, login, logout, and reset passwords with Firebase Authentication.
- **Product Management**: Fetch all products and retrieve details of specific products.
- **Cart Management**: Add and remove items from the cart, both online and offline modes.

## Technologies
- **Node.js**: Server-side JavaScript runtime
- **Express**: Web framework for Node.js
- **Firebase Authentication**: User authentication
- **Firestore**: Cloud database for storing product and user cart data

## File Structure

```
src/
├── config/
│   └── firebase.js               # Firebase configuration
├── controller/
│   ├── cart-controller.js        # Cart-related controllers
│   ├── firebase-auth-controller.js # User authentication controllers
│   ├── populateStock.js          # Stock initialization script
│   ├── product-controller.js     # Product-related controllers
│   └── products.json             # Initial list of products
├── middleware/
│   └── index.js                  # Middleware setup
├── routes/
│   └── index.js                  # API routes
├── firebaseServices.json         # Firebase service account details
└── app.js                        # Main app configuration
```

## API Endpoints

### User Authentication
- `POST /api/register`: Registers a new user.
- `POST /api/login`: Logs in a user.
- `POST /api/logout`: Logs out a user.
- `POST /api/reset-password`: Sends a password reset email.
- `POST /api/fetchUser`: Retrieves the current user's information.

### Cart Management
- `POST /api/cart/add`: Adds an item to the cart.
- `POST /api/cart/add-online`: Adds an item to the cart for online users.
- `POST /api/cart/remove`: Removes an item from the cart.

### Product Management
- `GET /products`: Retrieves a list of all products.
- `POST /api/get-product`: Fetches details of a specific product by ID.

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Devashish2106/SmartCart
   cd SmartCart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Set up a Firebase project in your Firebase Console.
   - Add Firebase credentials in `src/config/firebase.js`.

4. **Create `firebaseServices.json` file**
   - Create a file named `firebaseServices.json` inside the `src` folder and add your Firebase service account credentials.

5. **Create `.env` file**
   - In the root directory, create a `.env` file with the following content:
     ```plaintext
     PORT=3000

     FIREBASE_API_KEY=<your_firebase_api_key>
     FIREBASE_AUTH_DOMAIN=<your_firebase_auth_domain>
     FIREBASE_PROJECT_ID=<your_firebase_project_id>
     FIREBASE_STORAGE_BUCKET=<your_firebase_storage_bucket>
     FIREBASE_MESSAGING_SENDER_ID=<your_firebase_messaging_sender_id>
     FIREBASE_APP_ID=<your_firebase_app_id>
     ```

6. **Run the app**
   ```bash
   npm start
   ```
   The app should now be running on `http://localhost:3000`.

7. **Access the Deployed Version**
   - Visit the [deployed link](https://smart-cart-tc2d.onrender.com) to test out the backend functionalities.
