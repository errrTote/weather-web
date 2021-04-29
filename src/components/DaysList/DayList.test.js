import React from 'react';
import { render } from '@testing-library/react';
import { buildForecastData } from "../../utils/data";
import { forecastData, wrongForecastData } from "../../utils/mocks";
import { DaysListComponent } from './DaysList';

describe("WeatherPanel component", () => {

  test("WeatherPanel success render", async () => {

    const data = buildForecastData(forecastData);

    const { getByText } = render(
      <DaysListComponent days={data} />
    );

    expect(getByText("Viernes")).toBeInTheDocument();

    expect(getByText("Sábado")).toBeInTheDocument();

    expect(getByText("Domingo")).toBeInTheDocument();

    expect(getByText("Lunes")).toBeInTheDocument();

    expect(getByText("Martes")).toBeInTheDocument();

  })

  test("WeatherPanel wrong render", async () => {
    const wrongData = buildForecastData(wrongForecastData);
    const { getByText } = render(
      <DaysListComponent days={wrongData} />
    );

    // expect(getByText("No hay información del clima actual")).toBeInTheDocument();


  })
});
