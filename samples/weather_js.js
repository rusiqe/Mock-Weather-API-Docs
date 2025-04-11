const fetch = require("node-fetch");

const API_KEY = "YOUR_API_KEY";
const city = "London";

fetch(`https://api.mockweather.dev/v1/current?city=${city}&apikey=${API_KEY}`)
  .then(res => res.json())
  .then(data => console.log(data));
