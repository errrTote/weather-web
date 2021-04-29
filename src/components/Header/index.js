import React from "react";
import { HeaderComponent } from "./Header";
import { useSelector } from "react-redux";
import { selectCity } from "../../slices/weatherSlice";

export const Header = () => {
  
  const city = useSelector(selectCity);
  
  return (
    <>
      <HeaderComponent
        city={city}
      />
    </>
  )
}