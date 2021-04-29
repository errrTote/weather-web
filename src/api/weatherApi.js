import { request } from "./api";
import { api } from "../config";

export const getCurrentCity = async () => {
  const endpoint = `${api}/city`;
  const response = await request(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  return response;
};

export const getCurrentWeather = async (city = "") => {

  const endpoint = `${api}/weather/?city=${city}`;
  const response = await request(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  return response;
};

export const getCurrentForecast = async (city) => {

  const endpoint = `${api}/forecast?city=${city}`;
  const response = await request(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  return response;
};

// http://api.ipapi.com/181.28.131.5?access_key=4468a9c73f522ddc3f89351934f2a277
