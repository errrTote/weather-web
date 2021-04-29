module.exports = {
  api: process.env.REACT_APP_API || "http://localhost:5000",
  weatherApi: process.env.REACT_APP_WEATHER_API || "https://api.openweathermap.org/data/2.5",
  weatherApiKey: process.env.REACT_APP_WEATHER_API_KEY || "4c126a7dd19bcd5759d69fbd8d122d0e",
  iconApi: process.env.REACT_APP_WEATHER_ICON_API || "http://openweathermap.org/img/wn"
}
