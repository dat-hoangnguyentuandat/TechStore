# Authentication Workflow

## 1. Backend Implementation
- **Model**: Ensure `src/models/User.js` has `name`, `email`, `password` (hashed), `isAdmin`.
- **Controller**:
    - `registerUser`: Validate input -> Check exists -> Hash password -> Create User -> Generate JWT.
    - `loginUser`: Validate input -> Check user -> Compare password -> Return JWT.
- **Routes**: `POST /api/auth/register`, `POST /api/auth/login`.
- **Middleware**: `authMiddleware.js` to verify JWT and attach `req.user`.

## 2. Frontend Implementation
- **Context**: Create `AuthProvider` in `src/context/authContext.jsx` to manage `user` state and `token`.
- **Service**: Implement `login` and `register` in `src/services/authService.js` using `axios`.
- **Pages**:
    - `Login.jsx`: Form with Email/Password. Call `login` service. On success, store token and redirect to Home/Dashboard.
    - `Register.jsx`: Form with Name/Email/Password/Confirm. Call `register` service.
- **Integration**:
    - Use designs from `Stitch/user_login_and_registration_1`.
    - Map HTML form inputs to React controlled components.

## 3. Validation
- **Backend**: Use `express-validator` or manual checks.
- **Frontend**: Show error messages (e.g., "Invalid email", "Password mismatch") below inputs.
