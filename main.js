import config from './config.js';
const APIKEY = config.APIKEY;
const form = document.querySelector('form');
const inputCity = document.getElementById('input-city');

let apiCall = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&lang=zh_cn&units=metric`;
  axios
    .get(url)
    .then((res) => {
      document.getElementById('city').innerHTML =
        res.data.name + ', ' + res.data.sys.country;
      document.getElementById('temp').innerHTML =
        Math.round(res.data.main.temp) + ' °C';
      document.getElementById('humidity').innerHTML =
        res.data.main.humidity + ' %';
      document.getElementById('wind').innerHTML = res.data.wind.speed + ' km/h';
      document.getElementById('feels').innerHTML =
        'Ressenti : ' + Math.round(res.data.main.feels_like) + ' °C';

      const weather = res.data.weather[0].main;


      if (weather === 'Clear') {
        document.getElementById('weather-icon').src = '/img/clear.png';
        document.querySelector('body').style.background =
          'linear-gradient(135deg, #df893f, #fff174)';
      }
      if (weather === 'Clouds') {
        document.getElementById('weather-icon').src = '/img/cloudy.png';
        document.querySelector('body').style.background =
          'linear-gradient(135deg, #ABC6CA, #83C9D1)';
      }
      if (weather === 'Thunderstorm') {
        document.getElementById('weather-icon').src =
          '/img/thunderstorm.png';
        document.querySelector('body').style.background =
          'linear-gradient(135deg, #373636, #8795a4)';
      }
      if (weather === 'Rain') {
        document.getElementById('weather-icon').src = '/img/rain.png';
        document.querySelector('body').style.background =
          'linear-gradient(135deg, #454c54, #628ab9)';
      }
      if (weather === 'Snow') {
        document.getElementById('weather-icon').src = '/img/snow.png';
        document.querySelector('body').style.background =
          'linear-gradient(135deg, #c9cacc, #ffffff)';
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let ville = document.getElementById('input-city').value;
  inputCity.value = '';
  apiCall(ville);
});

apiCall('Paris');
