import React from 'react';
import { render } from '@testing-library/react';
import { HeaderComponent } from './Header';

describe("Header component", () => {


  test("Header success render", async () => {

    const city = "Buenos Aires"

    const { getByText } = render(
      <HeaderComponent city={city} />
    );

    expect(getByText("Buenos Aires")).toBeInTheDocument();
  })

  test("Header wrong render", async () => {

    const city = undefined;


    const { getByTestId } = render(
      <HeaderComponent city={city} />
    );

    expect(getByTestId("headerCity")).toBeEmpty("");


  })
});
