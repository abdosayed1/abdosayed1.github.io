const appContainer = document.querySelector(".app-container");
const navbar = document.querySelector(".navbar");
appContainer.style.height = (window.innerHeight - navbar.scrollHeight) + "px";


let weather = {
    apiKey: "3ecedc8e26f3035485802b316f05f8f7",
    fetchWeather: function(city) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
        )
        .then(response => response.json())
        .then(data => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { country } = data.sys;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        
        document.querySelector(".city").innerText = `weather in ${name}, ${country}`;
        document.querySelector(".temp").innerText = `${temp}°c`;
        document.querySelector(".icon").src = `http://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = `humidity: ${humidity}`;
        document.querySelector(".wind").innerText = `wind speed: ${speed} km/h`;
        
        document.querySelector(".app-container").style.backgroundImage = "url('https://source.unsplash.com/random/?" + name + "')";
    }
}

const searchBar = document.querySelector(".search-bar");
const button = document.getElementById("search-button");

button.addEventListener("click", function() {
    let searchText = searchBar.value.trim();
    weather.fetchWeather(searchText);
});

searchBar.addEventListener("keyup", function(e) {
    if(e.key == "Enter"){
        let searchText = searchBar.value.trim();
        weather.fetchWeather(searchText);
    }
});

weather.fetchWeather("cairo");