document.addEventListener("DOMContentLoaded", function () {
    const locationElement = document.getElementById("location");
    const tempElement = document.getElementById("temperature");
    const descElement = document.getElementById("weather-description");

    function estimateWeather() {
        const date = new Date();
        const timezoneOffset = date.getTimezoneOffset();
        
        // Rough estimation of region based on timezone
        if (timezoneOffset < -600) {
            locationElement.textContent = "Pacific Region";
            tempElement.textContent = "25°C";
            descElement.textContent = "Sunny";
        } else if (timezoneOffset < -300) {
            locationElement.textContent = "Americas";
            tempElement.textContent = "15°C";
            descElement.textContent = "Cloudy";
        } else if (timezoneOffset < 0) {
            locationElement.textContent = "Europe";
            tempElement.textContent = "10°C";
            descElement.textContent = "Rainy";
        } else {
            locationElement.textContent = "Asia";
            tempElement.textContent = "30°C";
            descElement.textContent = "Humid";
        }
    }

    estimateWeather();
});
