document.addEventListener("DOMContentLoaded", () => {
    const lastModified = new Date(document.lastModified);
    const currentYear = new Date().getFullYear();

    document.getElementById("lastModified").textContent = lastModified.toDateString();
    document.getElementById("currentyear").textContent = currentYear;

    // Example static data for temperature and wind speed
    const temperature = 25; // Example temperature in °C
    const windSpeed = 10; // Example wind speed in km/h

    // Function to calculate wind chill
    const calculateWindChill = (temp, wind) => {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    };

    // Update weather section with static data (replace with actual data if available)
    document.getElementById("temperature").textContent = temperature + "°C";
    document.getElementById("windspeed").textContent = windSpeed + " km/h";

    // Calculate and display wind chill if conditions are met
    let windChill = "N/A";
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed).toFixed(2) + "°C";
    }
    document.getElementById("windchill").textContent = windChill;

    // Example condition (replace with actual weather condition data if available)
    const condition = "Sunny";
    document.getElementById("condition").textContent = condition;
});
