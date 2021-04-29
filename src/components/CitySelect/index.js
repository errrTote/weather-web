import React from "react";
import { SelectComponent } from "./CitySelect";
import { useDispatch } from "react-redux";
import { setCity } from "../../slices/weatherSlice";

const cities = [
  { id: "Buenos Aires", description: "Buenos Aires" },
  { id: "Londres", description: "Londres" },
  { id: "Montreal", description: "Montreal" },
  { id: "Carupano", description: "Carupano" },
  { id: "Hong Kong", description: "Hong Kong" },
]


export const CitySelect = () => {
  const dispatch = useDispatch();

  const handleSetCity = (e) => {
    const city = e.target.value;
    dispatch(setCity(city))
  }

  return (
    <SelectComponent
      role="CitySelect"
      cities={cities}
      onSetCity={handleSetCity}
    />
  )
}