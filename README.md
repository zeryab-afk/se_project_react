WTWR – What to Wear React App
A weather-based clothing recommendation app that helps users decide what to wear based on the current weather. Built with React and Vite, WTWR provides a dynamic, responsive interface to browse, manage, and like clothing items, with user authentication and profile management.
🌤 Project Description
WTWR fetches real-time weather data for a given location and displays the current temperature and conditions. Users can sign up, log in, and manage their profiles, including adding, deleting, and liking clothing items suitable for hot, warm, or cold weather. The app features modals for user interactions, a protected profile route, and temperature unit toggling between Celsius and Fahrenheit.
🛠 Tech Stack

Frontend: React 18, Vite
State Management: React Context API (CurrentUserContext, CurrentTemperatureUnitContext)
Routing: React Router DOM
Styling: CSS (BEM methodology)
API:
OpenWeather API for weather data
Custom Express.js backend API for user and clothing item management


Other: Custom hooks for form handling, reusable components (cards, modals), JWT for authentication

✨ Features

Display current temperature and weather condition
Toggle temperature units between Celsius and Fahrenheit
User authentication (signup, signin, signout)
Protected profile route showing only the user's clothing items
Browse clothing items filtered by weather type
View detailed item information in a modal
Add, delete, and like/unlike clothing items (protected actions)
Edit user profile (name and avatar)
Responsive UI with clean design and smooth animations

📸 Screenshots / Demo

Main page with weather-based clothing recommendations
📥 Installation

Clone the repository:
git clone https://github.com/zaryab-afk/se_project_react.git
cd se_project_react


Install dependencies:
npm install


Start the development server (runs on port 3000):
npm run dev


Ensure the backend server is running on port 3001 (see backend repository for setup):


Backend Repository: https://github.com/zaryab-afk/se_project_express (Public repository)


Ensure MongoDB is running locally (mongod) for backend database connectivity.


🛠 Project Structure
se_project_react/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── App/
│   │   ├── Header/
│   │   ├── Main/
│   │   ├── Footer/
│   │   ├── ItemCard/
│   │   ├── WeatherCard/
│   │   ├── ClothesSection/
│   │   ├── Profile/
│   │   ├── Sidebar/
│   │   ├── ModalWithForm/
│   │   ├── ItemModal/
│   │   ├── AddItemModal/
│   │   ├── RegisterModal/
│   │   ├── LoginModal/
│   │   ├── EditProfileModal/
│   │   └── ProtectedRoute/
│   ├── contexts/
│   │   └── CurrentUserContext.js
│   ├── utils/
│   │   ├── api.js
│   │   ├── auth.js
│   │   ├── weatherApi.js
│   │   └── constants.js
│   ├── images/
│   │   ├── heart-icon.svg
│   │   └── heart-icon-filled.svg
│   ├── index.js
│   └── index.css
├── package.json
├── package-lock.json
├── .gitignore
├── .editorconfig
└── README.md


🔧 Key Updates in Sprint 14

Added Authentication: Implemented signup, signin, and signout with JWT-based authentication.
Protected Routes: Added ProtectedRoute to restrict /profile to authenticated users.
User Context: Created CurrentUserContext to manage user data across components.
Profile Management: Added EditProfileModal for updating user name and avatar.
Like Functionality: Enabled liking/unliking clothing items with UI updates.
Conditional UI: Updated Header, SideBar, ItemModal, and ItemCard to reflect user authentication status.

🚀 Running the App

Start the backend server (port 3001):
cd ../se_project_express
npm start


Start the frontend server (port 3000):
cd ../se_project_react
npm run dev


Open http://localhost:3000 in your browser.


📝 Notes

Ensure MongoDB is running (mongod) to connect to the backend database.
Delete any "test" clothing items in MongoDB Compass if present.
API requests to protected routes (/items, /users/me) require a valid JWT token.

Ensure the backend API is accessible at http://localhost:3001 for frontend requests.
