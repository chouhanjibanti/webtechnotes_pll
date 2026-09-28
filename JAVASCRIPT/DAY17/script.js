const apiKey = "77746a45e1ae73cbc6cb7f5de50d5279"

const cityInput = document.getElementById("city-input")
const getWeatherBtn = document.getElementById("get-weather-btn")
const weatherInfo = document.getElementById("weather-info")
const cityName = document.getElementById("city-name")
const temperature = document.getElementById("temperature")
const humidity = document.getElementById("humidity")
const description = document.getElementById("description")
const forecastInfo = document.getElementById("forecast-info")
const forecaseList = document.getElementById("forecast-list")


getWeatherBtn.addEventListener("click",getWeather);

function getWeather(){
   const city = cityInput.value.trim();   
   
   if(city === ""){
      alert("Please enter a city name")
      return
   }

   fetchWeatherData(city)
}


function fetchWeatherData(city){
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`


    fetch(currentWeatherUrl)
    .then((response)=> response.json())
    .then((data)=>{
        cityName.textContent = `Weather in ${data.name}`;
        temperature.textContent = `Temperature : ${data.main.temp}°C`;
        humidity.textContent = `humidity : ${data.main.humidity}%`
        description.textContent = `Description : ${data.weather[0].description}`
    })

    fetch(forecastUrl)
    .then((res)=> res.json())
    .then((forecastdata)=>{
         displayForeCast(forecastdata)
    }).catch((error)=>{
        alert("Error fetching data",error)
    })
}

function displayForeCast(forecastdata){
 
    forecaseList.innerHTML = "";

    for(i=0;i<forecastdata.list.length;i+=8){
        // data is in 3 hours interval , so 8 times gives a full day
        // 2---5--8--11---2--5--8---11----2

      const dayforeCast =  forecastdata.list[i];
    const listItem = document.createElement("li")
    listItem.textContent = `${new Date(dayforeCast.dt*1000).toLocaleString()} - ${dayforeCast.main.temp}°C- ${dayforeCast.weather[0].description}`

    forecaseList.appendChild(listItem)
    }

}



// https://www.youtube.com/results?search_query=codewithharry
