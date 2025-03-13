const temperatureElement = document.getElementById("temperature");
const conditionElement = document.getElementById("condition");
const locationElement = document.getElementById("location");

function getRandomTemperature() {
    return (Math.random() * (35 - 5) + 5).toFixed(1);
}

function getRandomCondition() {
    const conditions = ["Sunny", "Cloudy", "Rainy", "Windy", "Stormy"];
    return conditions[Math.floor(Math.random() * conditions.length)];
}

locationElement.textContent = "Your Location";
temperatureElement.textContent = getRandomTemperature() + "°C";
conditionElement.textContent = getRandomCondition();
