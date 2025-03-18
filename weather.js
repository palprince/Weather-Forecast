const URL = "fd6632dfa61bcf858a7a6d1041b1f3fe";

const btn = document.querySelector('button');
const input = document.querySelector('input');
const temp = document.querySelector('.temp');
const wind = document.querySelector('.wind');
const weather = document.querySelector('.weather');
const humidity = document.querySelector('.humidity');

function getWeather() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${URL}&units=metric`)
    .then(response => response.json())
    .then(data => {
      temp.innerHTML = `Temperature: ${data.main.temp}°C`;
      wind.innerHTML = `Wind: ${data.wind.speed} m/s`;
      weather.innerHTML = `Weather: ${data.weather[0].description}`;
      humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    })
    .catch(() => alert('City not found!'));
}
input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    getWeather();
  }
});
btn.addEventListener('click', getWeather);