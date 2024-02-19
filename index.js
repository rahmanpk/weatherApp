var api_key = "939f86abc5bc5e648ad5fa30e4d913c6";
var api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search_box = document.querySelector(".search input");
const search_btn = document.querySelector(".search button");

async function check_weather(city){
    const response = await fetch(api_url +city+ `&appid=${api_key}`);
    var data = await response.json();
    var weather_icon = document.querySelector(".weather-icon");
    var city = document.querySelector(".city").innerHTML;

    if(data.cod == "404"){
        document.querySelector(".error").style.display = "block";
        weather_icon.src = "";
        document.querySelector(".temp").innerHTML = "";
        city = "";
        document.querySelector(".humidity").innerHTML = "";
        document.querySelector(".wind").innerHTML = "";
    }
    else{
        document.querySelector(".error").style.display = "none";
        city = data.name;
        document.querySelector(".temp").innerHTML = Math.ceil(data.main.temp)+`°C`;
        document.querySelector(".humidity").innerHTML = data.main.humidity+`%`;
        document.querySelector(".wind").innerHTML = data.wind.speed+` km/h`;
    }
    if(data.weather[0].main == "Clouds"){
        weather_icon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weather_icon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weather_icon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weather_icon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist" || data.weather[0].main == "Haze"){
        weather_icon.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weather_icon.src = "images/snow.png";
    }
   
}
search_btn.addEventListener("click", ()=>{
    check_weather(search_box.value);
})