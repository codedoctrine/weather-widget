function updateWeather() {
    const temperature = Math.round(Math.random() * 10 + 25); // Fake temp between 25-35°C
    const conditions = ["Clear", "Cloudy", "Rain", "Snow", "Storm"];
    const condition = conditions[Math.floor(Math.random() * conditions.length)];

    const weatherIcons = {
        "Clear": "☀️",
        "Cloudy": "☁️",
        "Rain": "🌧️",
        "Snow": "❄️",
        "Storm": "⛈️"
    };

    document.getElementById("temperature").innerText = `${temperature}°C`;
    document.getElementById("weather-icon").innerText = weatherIcons[condition];
}

updateWeather();
