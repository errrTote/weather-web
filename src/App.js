import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectStatus } from "./slices/weatherSlice";
import { getCity, getWeather, selectCity } from "./slices/weatherSlice";

// Components
import { Header } from "./components/Header";
import { Weather } from "./components/WeatherPanel";
import { CitySelect } from "./components/CitySelect";
import { DaysList } from "./components/DaysList";
import { Spinner } from "./components/Spinner";
import { Error } from "./components/Error";
import { Container, ErrorContainer } from "./styles/appStyles";

export const App = () => {
  const city = useSelector(selectCity);

  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  useEffect(() => {
    if (city) {
      dispatch(getWeather(city));
    } else {
      dispatch(getCity());
    }
  }, [dispatch, city]);

  return (
    <>
      {status === "loading" && <Spinner main={true} />}
      {status === "error" &&
        <ErrorContainer>
          <Error />
        </ ErrorContainer>
      }
      {status === "idle" &&
        <Container>
          <Header />
          <CitySelect />
          <Weather />
          <DaysList />
        </ Container>
      }

    </>
  );
}

