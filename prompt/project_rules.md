# TechStore Project Rules

## Tech Stack
- **Frontend**: React (Vite) + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: MongoDB + Mongoose

## Coding Standards

### Frontend (Client)
- Use Functional Components with Hooks.
- Use `axios` for API calls (configured in `src/services`).
- Use Tailwind CSS for styling. Do not use external CSS files unless necessary.
- Components must be modular (atoms, molecules, organisms).
- **Stitch Integration**: Always check `client/Stitch` for design assets before creating new UI from scratch.

### Backend (Server)
- Follow MVC Pattern: Models, Views (JSON responses), Controllers.
- Use `async/await` for database operations.
- Centralized Error Handling in `src/middlewares/errorMiddleware.js`.
- Secure routes with `authMiddleware.js`.

### General
- Write clear comments for complex logic.
- Use meaningful variable and function names.
- **Git**: Commit messages should be descriptive (e.g., "feat: add login logic").
