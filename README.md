# Gem-n-Side

A basic Express application initialized for the Gem-n-Side project.

## Prerequisites

- Node.js (v18+)
- npm

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/irecov3r3d/Gem-n-Side.git
   cd Gem-n-Side
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the server:**
   ```bash
   node index.js
   ```
   The server will start on port 3000 (or the port specified in `process.env.PORT`).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in production mode.

### `npm run dev`

Runs the app in development mode with nodemon, which restarts the server on file changes.

### `npm test`

Launches the test runner using Jest.

### `npm run lint`

Runs ESLint to check the codebase for style and quality issues.

## API Documentation

- **Main route:** `http://localhost:3000/` - Returns a welcome message.
- **Health check:** `http://localhost:3000/health` - Returns the server status and timestamp.
