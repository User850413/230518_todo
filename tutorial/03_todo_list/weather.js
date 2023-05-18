//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const weather = document.querySelector(".weather");

const API = "a5819ac017fa9d0149bef8ca63834cef";
function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric&lang=kr`
  )
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      const city = data.name;
      const temp = data.main.temp;

      weather.innerText = `${temp}°C,${city}`;
    });
}

function saveCoords(coords) {
  localStorage.setItem("coords", JSON.stringify(coords));
}

function geoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coords = {
    latitude,
    longitude,
  };

  getWeather(latitude, longitude);
  saveCoords(coords);
}
function geoError() {
  console.log("위치 정보를 허용하지 않았습니다.");
}

function askCoords() {
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}
function loadCoords() {
  const loadedCoords = localStorage.getItem("coords");
  if (loadedCoords === null) {
    askCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}
function init() {
  loadCoords();
}

init();
