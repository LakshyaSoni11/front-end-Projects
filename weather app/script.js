const apiKey = "08ac68d2448c4b19922213848240707";
const apiUrl = "https://api.weatherapi.com/v1/current.json?key=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${apiKey}&q=${city}`);
        const data = await response.json();
        if(data.error ){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else{
           document.querySelector(".error").style.display = "none";
        console.log(data);
        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";
        document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
        document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
        
        const condition = data.current.condition.text.toLowerCase();

        if (condition.includes("partly cloudy")) {
            weatherIcon.src = "clouds.png";
        } else if (condition.includes("mist")) {
            weatherIcon.src = "mist.png";
        } else if (condition.includes("cloudy")) {
            weatherIcon.src = "clouds.png";
        } else if (condition.includes("rain")) {
            weatherIcon.src = "rain.png";
        } else {
            weatherIcon.src = "clear.png";
        }
        document.querySelector(".weather").style.display = "block";
       }
    } catch (error) {
        console.error("Error fetching weather data:", error);

    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
