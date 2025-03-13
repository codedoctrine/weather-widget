const temperatureElement = document.getElementById("temperature");
const locationElement = document.getElementById("location");
const weatherIcon = document.getElementById("weather-icon");

function getRandomWeather() {
    const weatherData = [
        { condition: "Sunny", icon: "☀️" },
        { condition: "Cloudy", icon: "☁️" },
        { condition: "Rainy", icon: "🌧️" },
        { condition: "Windy", icon: "💨" },
        { condition: "Stormy", icon: "⛈️" }
    ];
    return weatherData[Math.floor(Math.random() * weatherData.length)];
}

const weather = getRandomWeather();
locationElement.textContent = "Your Location";
temperatureElement.textContent = (Math.random() * (35 - 5) + 5).toFixed(1) + "°C";
weatherIcon.textContent = weather.icon;
