# 🔐 Google Login Authentication - Node.js

A complete Node.js authentication system using Google OAuth 2.0 with Passport.js.

## 🚀 Features

- **Google OAuth 2.0 Integration** - Secure authentication with Google
- **Session Management** - Persistent user sessions
- **Profile Access** - Retrieve user information from Google
- **Protected Routes** - Middleware for authentication checks
- **Responsive UI** - Clean login interface

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/AmirouzZ/Google-Login-Authentication.git
cd Google-Login-Authentication
```

2. **Install dependencies**
```bash
npm install
```

3. **Google Cloud Setup**
   - Create a project at [Google Cloud Console](https://console.cloud.google.com/)
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add `http://localhost:3000/auth/google/callback` as authorized redirect URI

4. **Environment Configuration**
```bash
cp .env.example .env
# Add your Google Client ID and Secret to .env
```

5. **Start the application**
```bash
npm start
```
Visit: `http://localhost:3000`

## 🔧 Environment Variables

Create a `.env` file with:

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
SESSION_SECRET=your_session_secret
PORT=3000
```

## 🎯 How It Works

1. User clicks "Login with Google"
2. Redirected to Google authentication page
3. User grants permission
4. Redirected back to app with user profile data
5. Session created and user logged in

## 📁 Project Structure

```
/
├── config/            # Passport configuration
├── routes/           # Authentication routes
├── public/           # Static assets
├── views/            # EJS templates
├── .env              # Environment variables (you create this)
└── app.js            # Main application file
```

## 🛠️ Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Passport.js** - Authentication middleware
- **passport-google-oauth20** - Google OAuth strategy
- **express-session** - Session management
- **EJS** - Template engine

## 🔒 API Routes

- `GET /` - Home page
- `GET /auth/google` - Initiate Google authentication
- `GET /auth/google/callback` - Google authentication callback
- `GET /dashboard` - Protected user dashboard
- `GET /logout` - Logout user

## ⚠️ Security Notes

- Uses secure session cookies
- OAuth 2.0 protocol for secure authentication
- Environment variables for sensitive data
- Session secret should be strong and unique

## 📄 License

MIT License

## 👤 Developer

**AmirouzZ** - [GitHub Profile](https://github.com/AmirouzZ)

---

**⭐ Star this repo if you find it useful for your projects!**
