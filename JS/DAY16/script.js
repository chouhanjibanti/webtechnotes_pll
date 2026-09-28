const apiKey = "c39c20c27b76ee527325ce5e5d41a893"
const cityInput = document.getElementById("city-input")
const getWeatherBtn =document.getElementById("get-weather-btn")
const weatherInfo = document.getElementById("weather-info")
const cityName =document.getElementById("city-name")
const temperature = document.getElementById("temperature")
const humidity =document.getElementById("humidity")
const description = document.getElementById("description")
const forecastInfo =document.getElementById("forecast-info")
const forecastList = document.getElementById("forecast-list")


getWeatherBtn.addEventListener("click",getWeather)

function getWeather(){ //
  const city =  cityInput.value.trim();

  if(city === ""){
     alert("Please enter a city name")
     return;
  }
  fetchWeatherData(city)
}

function fetchWeatherData(city){
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    // fetch the current weather data 

fetch(currentWeatherUrl)
.then((response)=> response.json())
.then((data)=>{
        cityName.textContent = `Weather in ${data.name}`
        temperature.textContent = `Temperature : ${data.main.temp}°C`
        humidity.textContent = `Humidity : ${data.main.humidity}%`;
        description.textContent = `Description ${data.weather[0].description}`

fetch(forecastUrl)
.then((response)=> response.json())
.then((forecastData)=>{
    displayForeCast(forecastData);
})
}).catch((error)=>{
      alert("Error fetching weather data",error)
})
}

function displayForeCast(forecastData){
   
    forecastList.innerHTML = "";

    for(let i=0;i<forecastData.list.length;i+=8){
     // data is in 3 hours interval , so 8 times gives a full day
     // 2 ----- 5 ---- 8----- 11 ----- 2 ----5 ---8 ----11 ----2
       const dayForeCast = forecastData.list[i];
      const listItem = document.createElement("li")
      listItem.textContent = `${new Date(dayForeCast.dt*1000).toLocaleString()}- ${dayForeCast.main.temp}°C-${dayForeCast.weather[0].description}`

      forecastList.appendChild(listItem);
    }
    // i = i+8
}
