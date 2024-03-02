# Weather App


## Overview

This is a responsive weather application that allows users to search for a city and view its current weather conditions. The app provides features such as unit conversion (Celsius/Fahrenheit) and displays recent searches for user convenience.

## Live Demo

Check out the live demo: [Weather App](https://weather-665b2.web.app/)

## Features

1. **User Interface:**

- Responsive UI suitable for desktop and mobile devices.
- Search bar for users to input city names.
- Display of current temperature, weather conditions, and wind speed for the searched city.
- Toggle for users to switch between Celsius and Fahrenheit units.

2. **Weather Data:**

- Integration with OpenWeatherMap API to fetch current weather data.
- Graceful handling of API errors with appropriate error messages.


3. **Recent Searches:**

- Display of the last five cities searched by the user.
- Clickable entries for users to quickly revisit past searches.

4. **Error Handling and Validation:**

- Robust error handling for API failures or invalid user input.
- User-friendly experience with clear error messages.

## Setup

1. Clone the repository:

   ```bash
    git clone https://github.com/your-username/weather-app.git


2. Install dependencies:

      ```bash
     cd weather-app
     npm install


3. Configure Firebase:

Create a Firebase project and obtain the configuration details.
Update firebase.js with your Firebase configuration.

4. Obtain OpenWeatherMap API Key:

Sign up for an API key on the OpenWeatherMap website.
Update api.js with your API key.

5. Run the application:

     ```bash
    npm start


## Technologies Used
- React for the frontend.
- Firebase Realtime Database for storing recent searches.
- Axios for making API requests.
- Tailwind CSS for styling.


## Contributing
If you'd like to contribute to this project, please follow the contribution guidelines.

## License
This project is licensed under the MIT License - see the LICENSE file for details.