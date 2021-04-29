
import { getUrlIcon } from "./icons";
import { getWeek } from "./dates";

const skyConvertionObject = {
  "Clear": { description: "Despejado", color: "#2D5DBF" },
  "Clouds": { description: "Nublado", color: "#1A3141" },
  "Fog": { description: "Neblina", color: "#586670" },
  "Rain": { description: "LLuvias", color: "#586670" },
}

const windConvertionArray = [
  { description: "Norte", min: 0, max: 45 },
  { description: "Noreste", min: 46, max: 90 },
  { description: "Este", min: 91, max: 135 },
  { description: "Sureste", min: 136, max: 180 },
  { description: "Sur", min: 181, max: 225 },
  { description: "Suroeste", min: 226, max: 270 },
  { description: "Oeste", min: 271, max: 315 },
  { description: "Noroeste", min: 316, max: 360 }
]

export const getSkyDescription = (main) => {
  if (!main) return "";
  return skyConvertionObject[main].description;
}

export const getWindSpeed = (speed) => {
  if (!speed) return 0;
  return Math.round(speed * 3.6);
}

export const getWindDirection = (degrees) => {
  if (!degrees) return windConvertionArray[0].description;
  const filterResult = windConvertionArray.filter(direction => degrees >= direction.min && degrees <= direction.max)
  return filterResult[0].description;
}


export const buildForecastData = (forecast) => {
  if (!forecast || !forecast.list || !forecast.list.length) return [];
  const weekArray = getWeek();
  const forecastData = weekArray.map((day) => {
    let minTemp = 100, maxTemp = 0, minWind = 100, maxWind = 0, urlIcon = "", main, degrees, color;
    const data = forecast.list.filter(cast => {
      if (!cast.dt_txt || !cast.weather || !cast.weather.length) return false;
      const groupIt = Number(cast.dt_txt.slice(8, 10)) === day.date
      if (groupIt) {
        urlIcon = getUrlIcon(cast);
        main = cast.weather[0].main;
        color = skyConvertionObject[main].color
        degrees = cast.wind.deg;
        minTemp = minTemp < cast.main.temp_min ? minTemp : Math.round(cast.main.temp_min);
        maxTemp = maxTemp > cast.main.temp_max ? maxTemp : Math.round(cast.main.temp_min);

        minWind = minWind < cast.wind.speed ? minWind : Math.round(cast.wind.speed);
        maxWind = maxWind > cast.wind.speed ? maxWind : Math.round(cast.wind.speed);
      }
      return groupIt;
    })

    return { ...day, data, minTemp, maxTemp, minWind, maxWind, urlIcon, main, degrees, color }
  })
  return forecastData;
}

export const buildCurrentData = (data) => {
  if (!data || !data.weather || !data.weather.length || !data.main || !data.wind) return {}
  const { main, wind, weather } = data;
  
  const sky = weather[0];
  const urlIcon = getUrlIcon(data);
  const color = skyConvertionObject[sky.main].color
  
  const currentData = {
    skyCondition: sky.main,
    skyDescription: sky.description,
    temp: main.temp,
    feels_like: main.feels_like,
    temp_min: main.temp_min,
    temp_max: main.temp_max,
    speed: wind.speed,
    deg: wind.deg,
    urlIcon,
    color
  };


  return currentData;
}

export const isEmpty = (obj) => { 
  return !Object.keys(obj).length;
}