import React from 'react';
import { render } from '@testing-library/react';
import { buildCurrentData } from "../../utils/data";
import { weatherData } from "../../utils/mocks";
import { WeatherPanel } from './WeatherPanel';
import { EmptyWatherPanel } from './EmptyWatherPanel';

describe("WeatherPanel component", () => {

  test("WeatherPanel success render", async () => {

    const data = buildCurrentData(weatherData);

    const { getByText, } = render(
      <WeatherPanel data={data} />
    );

    expect(getByText("Nublado")).toBeInTheDocument();

    expect(getByText("nubes")).toBeInTheDocument();

    expect(getByText("Este")).toBeInTheDocument();

    expect(getByText("Sensación")).toBeInTheDocument();

    expect(getByText("14 km/h")).toBeInTheDocument();

  })

  test("WeatherPanel wrong render", async () => {

    const { getByText, } = render(
      <EmptyWatherPanel />
    );

    expect(getByText("No hay información del clima actual")).toBeInTheDocument();


  })
});
