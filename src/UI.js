import { getLocalTime, kToC, cToF, fToC, cap } from "./auxfunctions";

function clearData() {
  const weatherInfo = document.querySelector(".weatherInfo");
  weatherInfo.innerHTML = "";
}
function displayData(data) {
  const weatherInfo = document.querySelector(".weatherInfo");
  const description = document.createElement("div");
  description.classList.add("description", "medium");
  weatherInfo.appendChild(description);
  const name = document.createElement("div");
  name.classList.add("name", "big");
  weatherInfo.appendChild(name);
  const date = document.createElement("div");
  date.classList.add("date", "small");
  weatherInfo.appendChild(date);
  const bottom = document.createElement("div");
  bottom.classList.add("bottom");
  weatherInfo.appendChild(bottom);
  const left = document.createElement("div");
  left.classList.add("left");
  bottom.appendChild(left);
  const temp = document.createElement("div");
  temp.classList.add("temp");
  left.appendChild(temp);
  const unit = document.createElement("div");
  unit.classList.add("unit");
  unit.innerText = "°C";
  left.appendChild(unit);
  const toggleBtn = document.createElement("button");
  toggleBtn.classList.add("toggle");
  toggleBtn.innerText = "Toggle Temp";
  left.appendChild(toggleBtn);
  const right = document.createElement("div");
  right.classList.add("right");
  bottom.appendChild(right);
  const humidity = document.createElement("div");
  humidity.classList.add("humidity", "card");
  humidity.innerText = "Humidity: ";
  right.appendChild(humidity);
  const feelsLike = document.createElement("div");
  feelsLike.classList.add("feels_like", "card");
  feelsLike.innerText = "Feels like: ";
  right.appendChild(feelsLike);
  const windSpeed = document.createElement("div");
  windSpeed.classList.add("wind_speed", "card");
  windSpeed.innerText = "Wind speed: ";
  right.appendChild(windSpeed);

  date.textContent = getLocalTime(data.timezone);
  description.textContent = cap(data.description);
  name.textContent = data.name;
  temp.textContent += Math.round(kToC(data.temp));
  feelsLike.textContent += `${Math.round(kToC(data.feels_like))} °C`;
  windSpeed.textContent += `${data.wind_speed} m/s`;
  humidity.textContent += `${data.humidity} %`;

  toggleBtn.onclick = () => {
    const num = parseInt(temp.textContent, 10);
    if (unit.textContent.includes("C")) {
      temp.textContent = Math.round(cToF(num));
      unit.textContent = "°F";
    } else {
      temp.textContent = Math.round(fToC(num));
      unit.textContent = "°C";
    }
  };
}

export { clearData, displayData };
