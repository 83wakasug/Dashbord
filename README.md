# Dashboard Project

This Dashboard application integrates several features:

- **Weather Information**: Displays weather forecast based on the user's location.
- **News**: Shows the latest news articles using the News API.
- **Quick Links**: Users can add, display, and delete quick links with titles and URLs.
- **Customizable Background**: Click the button to change the background image randomly.
- **Editable Title**: Users can edit the title, and the change will be saved to `localStorage`.
- **Text Area Backup**: The user's input in the text area is saved to `localStorage` and persists across page reloads.

---

## Features:

- **Weather Information**:
    - Displays weather forecast using the user's location (latitude and longitude).
    - Fetches weather data from OpenWeatherMap API and displays it on the dashboard.
    
- **News**:
    - Fetches the latest news using News API and displays articles with title, description, and images.
  
- **Quick Links**:
    - Users can add and delete quick links. Each link includes a title and a URL, and the favicon is generated based on the URL.
    - Links are stored in `localStorage` to persist across sessions.

- **Customizable Background**:
    - A button allows the user to change the background to a random image from a predefined list.

- **Editable Title**:
    - The title is editable. Changes made to the title are saved to `localStorage` and will persist on page reloads.

- **Text Area Backup**:
    - Any text entered in the text area is saved to `localStorage`, so the content remains after reloading the page.

---

## Requirements:

- **Node.js** and **npm** are required to run the backend server.
- **API Keys** for OpenWeatherMap and News API are required. These should be stored in an `.env` file in the root directory.

### Example `.env` File:

```plaintext
WEATHER_API_KEY=your_weather_api_key_here
NEWS_API_KEY=your_news_api_key_here
 ```

# Getting Started

## Backend Setup:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/83wakasug/Dashbord
    cd dashboard
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create an `.env` file in the root directory and add your API keys.**

4. **Start the backend server:**

    ```bash
    node backend/server.js
    ```

    The server will start on `http://localhost:3000`.

---

## Frontend Setup:

1. Open the `dashbord.html` file in your browser.

2. Ensure your browser allows geolocation for weather data.

---
## Code Explanation:

### Backend (Node.js with Express):
- The server provides an endpoint (`/getWeatherAndNews`) which fetches weather and news data based on the latitude and longitude sent by the frontend.
  
  - **Weather Data**: The backend fetches data from the OpenWeatherMap API.
  - **News Data**: It also fetches the latest news articles from the News API.

### Frontend:

- **Weather Display**:
    - Uses the browser's geolocation API to get the user's location.
    - Fetches weather data from the backend and displays the weather for the next few days.

- **Quick Links**:
    - Users can add, view, and delete links.
    - Links are saved to `localStorage` to persist even after page reload.

- **Random Background**:
    - Click the "Change Background" button to set a random background image from a predefined list.

- **Editable Title**:
    - The title is editable, and the new title is saved to `localStorage` so it persists.

- **Text Area Backup**:
    - The contents of the text area are saved to `localStorage` to persist the text after page reload.

---

## Troubleshooting:

- If you encounter issues with **CORS** (Cross-Origin Resource Sharing), make sure the backend server allows requests from your frontend domain by configuring CORS properly in `server.js`.

- If the weather data does not display, ensure your **geolocation permission** is enabled in the browser.

- Make sure the **API keys** are correctly placed in the `.env` file and that they are valid.

