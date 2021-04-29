import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
import {store} from "./store";
import { Provider } from 'react-redux';

describe("App component", () => {

  test("App success render", async () => {

    render(
      <Provider store={store} >
        <App />
      </Provider>
    );


  })

});
