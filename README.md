CodeReviewApp

This project is a full stack application for AI-powered code review using Google Gemini models. It includes a backend API built with Node.js and Express, and a frontend built with React and Vite.

Backend

- Accepts code snippets via REST API
- Uses Google Gemini (via @google/genai) for code review
- Returns actionable, senior-level feedback
- Built with Node.js and Express

Backend Folder Structure

Backend/
  .env
  .gitignore
  package.json
  server.js
  src/
    app.js
    controllers/
      ai.controller.js
    routes/
      ai.routes.js
    services/
      ai.service.js

Backend How It Works

API Endpoint: POST /ai/get-response  
Accepts a JSON body with a code field (the code snippet to review)

Flow:  
1. Request hits ai.routes.js, routed to the controller  
2. ai.controller.js validates input and calls the service  
3. ai.service.js sends the code to Google Gemini and returns the review  
4. The review is sent back as JSON

Backend Example Request

POST /ai/get-response  
Content-Type: application/json

{
  "code": "function add(a, b) { return a + b; }"
}

Response

{
  "result": "AI-generated code review here..."
}

Backend Setup and Run

1. Install dependencies  
   cd Backend  
   npm install

2. Configure environment variables  
   Create a .env file in Backend/ with  
   GOOGLE_GEMINI_KEY=your_google_gemini_api_key

3. Start the server  
   npm start  
   The server runs on http://localhost:3000

Frontend

- Built with React and Vite
- Uses axios for API requests
- Uses react-simple-code-editor for code editing
- Uses react-markdown and rehype-highlight for displaying AI feedback
- Uses Tailwind CSS for styling

Frontend Folder Structure

frontend/
  .gitignore
  eslint.config.js
  index.html
  package.json
  postcss.config.js
  README.md
  tailwind.config.js
  vite.config.js
  public/
    vite.svg
  src/
    App.css
    App.jsx
    index.css
    main.jsx
    assets/
      react.svg

Frontend How It Works

- The main page has a code editor on the left and the AI review output on the right
- User writes or pastes code in the editor and clicks Review
- The frontend sends the code to the backend API and displays the review result

Frontend Setup and Run

1. Install dependencies  
   cd frontend  
   npm install

2. Start the development server  
   npm run dev  
   The app runs on http://localhost:5173 by default

Notes

- The backend must be running for the frontend to work
- The backend requires a valid Google Gemini API key
- The frontend expects the backend at http://localhost:3000

© CodeReviewApp