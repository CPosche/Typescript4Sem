const { Navigator } = require("node-navigator");
const navigator = new Navigator();

function getLocation() {
  return new Promise(function (resolve, reject) {
    try {
      navigator.geolocation.getCurrentPosition(function (position) {
        resolve(position.coords);
      });
    } catch (e) {
      reject(new Error(e));
    }
  });
}

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getWeather(coords, callback) {
  const apiKey = "6d547f0587a1568b9bfccf4d20998e83";
  const url =
    "http://api.openweathermap.org/data/2.5/weather?lat=" +
    coords.latitude +
    "&lon=" +
    coords.longitude +
    "&apiKey=" +
    apiKey;
  const req = new XMLHttpRequest();
  req.open("GET", url);
  req.onload = function () {
    if (req.status === 200) {
      callback(JSON.parse(req.responseText));
    } else {
      callback(new Error(req.statusText));
    }
  };
  req.send();
}

getLocation(function (coords) {
  getWeather(coords, function (weather) {
    console.log(weather);
  });
});

async function getWeather() {
  try {
    getLocation(function (coords) {
      getWeather(coords, function (weather) {
        console.log(weather);
      });
    });
  } catch (e) {
    return new Error(e);
  }
}
