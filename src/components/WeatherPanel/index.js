import React from "react";
import { useSelector } from "react-redux";
import { WeatherPanel } from "./WeatherPanel";
import { EmptyWatherPanel } from "./EmptyWatherPanel";
import { Spinner } from "../Spinner";
import { Error } from "../Error";
import { selectDayInformation, selectWeatherStatus } from "../../slices/weatherSlice";
import { isEmpty } from "../../utils/data";

export const Weather = () => {

  const dayInformation = useSelector(selectDayInformation);
  const status = useSelector(selectWeatherStatus);

  const spinnerComponent = () => <Spinner />

  const watherPanelComponent = () => <WeatherPanel data={dayInformation} />

  const emptyWatherPanelComponent = () => <EmptyWatherPanel />

  const errorComponent = () => <Error />

  const handleView = () => {
    let view = "";

    switch (status) {
      case "loading":
        view = spinnerComponent();
        break;

      case "idle":
        view = isEmpty(dayInformation) ? emptyWatherPanelComponent() : watherPanelComponent();
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