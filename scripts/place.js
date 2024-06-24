document.addEventListener("DOMContentLoaded", () => {
    const lastModified = new Date(document.lastModified);
    const currentYear = new Date().getFullYear();

    document.getElementById("lastModified").textContent = lastModified.toDateString();
    document.getElementById("currentYear").textContent = currentYear;

    const temperature = 25; // Example temperature in °C
    const windSpeed = 10; // Example wind speed in km/h

    const calculateWindChill = (temp, wind) => {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    };

    let windChill = "N/A";
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed).toFixed(2) + "°C";
    }

    document.getElementById("windchill").textContent = windChill;
});
