let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentMinute = now.getMinutes();
if (currentMinute < 10) {
  currentMinute = `0${currentMinute}`;
}
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let day = `${days[now.getDay()]} ${hour} : ${currentMinute}`;

let currentTime = document.querySelector("#current-date");
currentTime.innerHTML = day;

function displayWeather(response) {
  console.log(response.data);
}

function search(event) {
  event.preventDefault();

  let apiKey = "197ef3a642b76eef90e131866f74a0a0";
  let city = document.querySelector("#city-input").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  console.log(axios);
  axios.get(url).then(displayWeather);

  //let cityElement = document.querySelector("#city");
  // let cityInput = document.querySelector("#city-input");
  // cityElement.innerHTML = cityInput.value;
}

function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("New York");

//function displayWeather(response) {
// console.log(response);
// let city = response.data.name;
// let citySearch = document.querySelector("#city-input");
// citySearch.innerHTML = city;
// let temperature = `${Math.round(response.data.main.temp)}°C`;
// let currentTemperature = document.querySelector("#temperature");
// currentTemperature.innerHTML = temperature;
//}

//axios.get(url).then(displayWeather);
//let searchForm = document.querySelector("#search-form");
//searchForm.addEventListener("submit", search);
