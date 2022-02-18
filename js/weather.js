const API_KEY = "da30d390bf5104df91472584823a683e";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  console.log(lat, log);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&limit=5&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `날씨: ${data.weather[0].main} / 현재온도: ${data.main.temp}°C`;
    });
}

function onGeoError() {
  alert("날씨정보 확인을 위한 위치정보를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
