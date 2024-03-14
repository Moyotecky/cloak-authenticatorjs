### Project Structure:

```
cloak-authenticatorjs/
│
├── config/
│   ├── db.js
│   └── mail.js
│
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
├── controllers/
│   ├── authController.js
│   └── userController.js
│
├── models/
│   ├── User.js
│   └── Token.js
│
├── utils/
│   ├── generateToken.js
│   └── sendEmail.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

### Installation:

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd cloak-authenticatorjs`
3. Install dependencies: `npm install`

### Environment Variables (.env):

```
PORT=3000
DB_URI=<your_database_connection_uri>
JWT_SECRET=<your_jwt_secret_key>
MAIL_USERNAME=<your_email_username>
MAIL_PASSWORD=<your_email_password>
```

### API Endpoints:

#### Authentication:

- **Signup**: `POST /api/signup`
  - Required Fields: `name`, `username`, `email`, `password`, `gender`
- **Login**: `POST /api/login`
  - Required Fields: `username`, `password`
- **Forgot Password**: `POST /api/forgot-password`
  - Required Field: `email`
- **Reset Password**: `POST /api/reset-password/:resetToken`
  - Required Field: `password`, `confirmPassword`
- **Logout**: `GET /api/logout`

#### User Management:

- **Update Details**: `PUT /api/user`
  - Required Field: `name`, `gender`
- **Find Users**: `GET /api/users`
- **Find User by ID**: `GET /api/user/:id`
- **Find User by Username**: `GET /api/user/username/:username`

### Implementation Details:

- **Middleware**: `authMiddleware.js` for JWT authentication, `errorMiddleware.js` for handling errors.
- **Controller Functions**: `authController.js` and `userController.js` for handling business logic.
- **Models**: `User.js` and `Token.js` for defining MongoDB schemas.
- **Utilities**: `generateToken.js` for generating JWT tokens, `sendEmail.js` for sending emails.
- **Routes**: `authRoutes.js` and `userRoutes.js` for defining API endpoints.

### Running the Server:

```bash
node server.js
```

### Additional Notes:

- Ensure MongoDB is running and accessible with the provided connection URI.
- Make sure to set up a valid email account for sending verification emails.

### Contributing:

https://github.com/Moyotecky/cloak-authenticatorjs.git

Feel free to fork the repository, make changes, and submit pull requests.

### License:

This project is licensed under the MIT License - see the LICENSE file for details.

Now, you can follow these steps to implement the backend API with authentication and authorization features. Make sure to fill in the placeholders with appropriate code and configurations. Let me know if you need further assistance!

Please also dont hesitate to create issues on the repo has I am trying my best to create the best of backend apis
You can visit my website to see a list of the things I do
https://moyotecky.vercel.app
Thanks for your support.
You can also support my work 🙂 contact me via my mail:moyotecky@gmail.com
