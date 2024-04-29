const apiKey="7f5d31790901aea4699c284a812fb0a9";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const weather = document.querySelector(".weather");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeatherDetails(city){
    const weatherData = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await weatherData.json();

    if(weatherData.status == 404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".error1").style.display = "none";
        document.querySelector(".weather").style.display = "none";
    }
    else if(weatherData.status == 200)
    {
        if(searchBox.value)
        {
            
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            // alert(data.weather[0].main);
            if(data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear.png";
            }
            else if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "images/clouds.png";
            }
            
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/drizzle.png";
            }
            
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/mist.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "images/rain.png";
            }
            else if(data.weather[0].main == "Snow"){
                weatherIcon.src = "images/snow.png";
            }
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
            document.querySelector(".error1").style.display = "none";
        }
    }
}
searchBtn.addEventListener("click", ()=>{
    if(searchBox.value)
    {
        getWeatherDetails(searchBox.value).then(result=>{
            weather.style.display = "block";
            document.querySelector(".error1").style.display = "none";
        });
    }
    else{
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "none";
        document.querySelector(".error1").style.display = "block";
        weather.style.display = "none";
    }
});