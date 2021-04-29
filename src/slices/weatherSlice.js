import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentCity, getCurrentWeather, getCurrentForecast } from "../api/weatherApi";
import { buildCurrentData, buildForecastData } from "../utils/data";

const initialState = {
  dayInformation: {},
  forecastInformation: [],
  city: "",
  status: "loading",
  forecastStatus: "loading",
  weatherStatus: "loading"
}

export const getCity = createAsyncThunk(
  "weather/getCity",
  async () => {
    const response = await getCurrentCity();
    if (response.status === 200 && response.data.city) return response.data.city;
    throw new Error();
  }
)

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async (city) => {
    const response = await getCurrentWeather(city);
    if (response.status === 200) return response.data;
    throw new Error();
  }
)

export const getForecast = createAsyncThunk(
  "weather/getForecast",
  async (city) => {
    const response = await getCurrentForecast(city);
    if (response.status === 200) return response.data;
    throw new Error();
  }
)

export const mainSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCity: (state, action) => state = { ...state, city: action.payload }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCity.pending, (state) => state = { ...state, status: "loading" })

      .addCase(getCity.rejected, (state) => state = { ...state, status: "error" })

      .addCase(getCity.fulfilled, (state, action) => state = { ...state, status: "idle", city: action.payload })

      .addCase(getWeather.pending, (state) => state = { ...state, weatherStatus: "loading" })

      .addCase(getWeather.rejected, (state) => state = { ...state, weatherStatus: "error" })

      .addCase(getWeather.fulfilled, (state, action) => state = { ...state, weatherStatus: "idle", dayInformation: buildCurrentData(action.payload) })

      .addCase(getForecast.pending, (state) => state = { ...state, forecastStatus: "loading" })

      .addCase(getForecast.rejected, (state) => state = { ...state, forecastStatus: "error" })

      .addCase(getForecast.fulfilled, (state, action) => state = { ...state, forecastStatus: "idle", forecastInformation: buildForecastData(action.payload) })
  }
})

export const { setCity } = mainSlice.actions;

export const selectCity = (state) => state.weather.city;

export const selectStatus = (state) => state.weather.status;

export const selectWeatherStatus = (state) => state.weather.weatherStatus;

export const selectForecastStatus = (state) => state.weather.forecastStatus;

export const selectDayInformation = (state) => state.weather.dayInformation;

export const selectforecastInformation = (state) => state.weather.forecastInformation;

export default mainSlice.reducer;