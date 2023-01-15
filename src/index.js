import './styles/style.css';
import {clearData, displayData} from "./UI";

const API_KEY = "3b7d733248089858d62f9152e8b73e5a";
const search = document.querySelector("#search");
const form = document.querySelector("form");
const mode = document.querySelector('.mode');

mode.onclick = ()=>{
  mode.classList.toggle('clicked');
  document.body.classList.toggle('light');
}

form.onsubmit = (e) => {
  e.preventDefault();
  const term = search.value;
  getWeather(term);
};

async function getWeather(term) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${term}&APPID=${API_KEY}`,
      { mode: "cors" }
    );
    const w = await response.json();
    const usefulData ={description: w.weather[0].description, name: w.name, 
    temp: w.main.temp, feels_like: w.main.feels_like, wind_speed: w.wind.speed,
    humidity: w.main.humidity, timezone: w.timezone};
    clearData();
    displayData(usefulData);
    console.log(usefulData); 
  } catch (err) {
    console.log("city not found");
  }
}
getWeather("London");
