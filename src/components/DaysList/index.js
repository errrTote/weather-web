import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DaysListComponent } from "./DaysList";
import { Error } from "../Error";
import { getForecast, selectCity, selectforecastInformation, selectForecastStatus } from "../../slices/weatherSlice";
import { Spinner } from "../Spinner";

export const DaysList = () => {

  const dispatch = useDispatch();
  const city = useSelector(selectCity);

  const status = useSelector(selectForecastStatus);

  const forecast = useSelector(selectforecastInformation);
  useEffect(() => {
    if (city) dispatch(getForecast(city));
  }, [dispatch, city]);

  const spinnerComponent = () => <Spinner />

  const daysListComponent = () => <DaysListComponent days={forecast} />

  const errorComponent = () => <Error />


  const handleView = () => {
    let view = "";

    switch (status) {
      case "loading":
        view = spinnerComponent();
        break;

      case "idle":
        view = daysListComponent();
        break;

      case "error":
        view = errorComponent();
        break;
        
      default:
        break;
    }
    return view;
  }

  return (
    <>
      {handleView(status)}
    </>
  )
}