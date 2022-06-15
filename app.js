const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=7278e33fe63687abb0d22689e4db8540&query=37.8267,-122.4233&units=f";

request({ url: url, json: true }, (error, response) => {
  console.log(
    response.body.current.weather_descriptions[0] +
      ". It is currently " +
      response.body.current.temperature +
      " degrees out. It feels like " +
      response.body.current.feelslike +
      " degrees out."
  );
});

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGFydGhyYXN0b2dpMTUiLCJhIjoiY2w0ZjNuaHhrMDI3MTNkbGpmb2t0NGVzciJ9.3NLEdAGTuIrcK1DKAgyfPw&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[0];
  const longitude = response.body.features[0].center[1];
  console.log(latitude, longitude);
});
